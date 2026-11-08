(()=>{
'use strict';
const CURRENT=String(window.ATELIER_DATA?.version||'0.3.0');
const SEEN_KEY='atelier-des-papiers-changelog-seen';
let installEvent=null,registration=null,pendingVersion=null,waiting=false,applyRequested=false,reloaded=false,lastChecked=0,checking=false,history=null;
const $=s=>document.querySelector(s);
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isInstalled=()=>!!(window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true);
function newer(a,b){
 const x=String(a).split('.').map(Number),y=String(b).split('.').map(Number);
 for(let i=0;i<3;i++){if((x[i]||0)>(y[i]||0))return true;if((x[i]||0)<(y[i]||0))return false}
 return false;
}
function notify(message){
 const el=$('#toast');if(!el)return;
 el.textContent=message;el.classList.add('show');
 window.setTimeout(()=>{if(el.textContent===message)el.classList.remove('show')},4500);
}
function seen(){try{return localStorage.getItem(SEEN_KEY)}catch{return null}}
function markSeen(){try{localStorage.setItem(SEEN_KEY,CURRENT)}catch{}}
function ensureDialog(){
 let d=$('#pwa-dialog');
 if(d)return d;
 d=document.createElement('dialog');d.id='pwa-dialog';d.className='pwa-modal';d.setAttribute('aria-label','Installation et nouveautés de l’application');
 document.body.appendChild(d);
 d.addEventListener('close',()=>{if(d.dataset.mode==='notes')markSeen();d.dataset.mode=''});
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
 return d;
}
function modal(title,html,mode='guide'){
 const d=ensureDialog();
 d.dataset.mode=mode;
 d.innerHTML='<div class="pwa-modal-inner"><div class="pwa-modal-top"><div><span class="pwa-version-chip">L’Atelier des Papiers</span><h2>'+escapeHTML(title)+'</h2></div><button type="button" data-pwa-action="close-dialog" aria-label="Fermer">×</button></div>'+html+'<div class="pwa-modal-footer"><button class="btn" data-pwa-action="close-dialog">Fermer</button></div></div>';
 if(!d.open)d.showModal();
}
async function changelog(){
 if(history)return history;
 try{
  const response=await fetch('./changelog.json',{cache:'default'});
  if(!response.ok)throw Error('Changelog indisponible');
  const json=await response.json();
  if(!Array.isArray(json.releases))throw Error('Format invalide');
  history=json.releases;
  return history;
 }catch{
  history=[{version:CURRENT,date:'',title:'Installation et nouveautés',intro:'L’Atelier des Papiers peut désormais être installé et propose un suivi détaillé des mises à jour.',sections:[{title:'Nouveautés',items:['Icône et installation depuis le navigateur.','Mise à jour contrôlée, sans interrompre un projet.','Liste des nouveautés affichée une seule fois par version.','Historique des versions disponible dans l’application.']}]}];
  return history;
 }
}
function releaseHTML(release){
 const sections=(release.sections||[]).map(s=>'<section class="pwa-release-section"><h3>'+escapeHTML(s.title)+'</h3><ul>'+(s.items||[]).map(i=>'<li>'+escapeHTML(i)+'</li>').join('')+'</ul></section>').join('');
 return '<p class="pwa-modal-intro">'+escapeHTML(release.intro||'')+'</p>'+sections;
}
async function openChangelog(auto=false){
 if(auto&&seen()===CURRENT)return;
 const d=ensureDialog();
 if(auto&&($('#modal')?.open||$('#lightbox')?.open||d.open)){window.setTimeout(()=>openChangelog(true),1200);return}
 const releases=await changelog();
 const current=releases.find(x=>x.version===CURRENT)||releases[0];
 const older=releases.filter(x=>x!==current);
 const previous=older.length?'<div class="pwa-release-history"><details><summary>Consulter les versions précédentes</summary>'+older.map(x=>'<div class="pwa-release-section"><h3>Version '+escapeHTML(x.version)+' · '+escapeHTML(x.title)+'</h3>'+releaseHTML(x)+'</div>').join('')+'</details></div>':'';
 modal('Nouveautés · Version '+CURRENT,releaseHTML(current)+previous,'notes');
}
function openInstallGuide(){
 if(isInstalled()){notify('L’application est déjà ouverte en mode installé.');return}
 const ua=navigator.userAgent||'';
 let instructions;
 if(/iPad|iPhone|iPod/i.test(ua)||(/Macintosh/i.test(ua)&&navigator.maxTouchPoints>1)){
  instructions='<ol><li>Ouvre ce site dans <strong>Safari</strong>.</li><li>Touche le bouton de partage (ou le menu de page puis Partager).</li><li>Sélectionne <strong>Sur l’écran d’accueil</strong>.</li><li>Choisis « Ouvrir comme app web » si cette option apparaît, puis <strong>Ajouter</strong>.</li></ol>';
 }else if(/Android/i.test(ua)){
  instructions='<ol><li>Ouvre ce site dans <strong>Chrome</strong> (pas dans un navigateur intégré à une autre application).</li><li>Ouvre le menu <strong>⋮</strong> du navigateur.</li><li>Choisis <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>, selon le navigateur.</li><li>Confirme l’installation pour retrouver l’icône sur ton téléphone.</li></ol>';
 }else{
  instructions='<ol><li>Ouvre le site dans <strong>Chrome ou Edge</strong>.</li><li>Utilise l’icône d’installation dans la barre d’adresse, si elle est proposée.</li><li>Sinon, ouvre le menu du navigateur et cherche l’option d’installation de l’application.</li></ol>';
 }
 modal('Installer l’application','<div class="pwa-install-guide"><img src="./icons/icon-192.png" alt="Icône de L’Atelier des Papiers"><p>L’Atelier des Papiers apparaîtra sur ton écran d’accueil avec son icône, comme une application indépendante.</p></div>'+instructions+'<p class="small muted">Une connexion est nécessaire pour la première ouverture. Les créations personnelles restent stockées dans ce navigateur : pense à exporter régulièrement une sauvegarde.</p>');
}
async function install(){
 if(isInstalled()){notify('L’Atelier des Papiers est déjà installé.');return}
 const event=installEvent;
 if(!event){openInstallGuide();return}
 installEvent=null;
 try{
  await event.prompt();
  const result=await event.userChoice;
  if(result?.outcome==='accepted')notify('Installation demandée. Retrouve l’icône sur ton appareil.');
  else notify('Installation annulée. Tu peux la relancer depuis l’atelier.');
 }catch(err){console.warn('Installation PWA',err);openInstallGuide()}
 refreshUI();
}
function updateBanner(){
 const content=$('#page-content');if(!content)return;
 const old=$('#pwa-update-banner');
 const shouldShow=waiting||(pendingVersion&&newer(pendingVersion,CURRENT));
 if(!shouldShow){old?.remove();return}
 const ready=waiting&&!!registration?.waiting;
 const key=(ready?'ready':'preparing')+'-'+(pendingVersion||'future');
 if(old?.dataset.key===key)return;
 const ver=pendingVersion?' V'+escapeHTML(pendingVersion):'';
 const html='<section class="pwa-update-banner" id="pwa-update-banner" data-key="'+key+'" aria-live="polite"><div><strong>Une mise à jour est disponible'+ver+'</strong><p>'+(ready?'Elle est prête à être installée. Tes notes et tes créations restent conservées.':'Préparation de la nouvelle version. La mise à jour sera proposée dès qu’elle sera prête.')+'</p></div><button class="btn" data-pwa-action="'+(ready?'apply-update':'check-updates')+'">'+(ready?'Installer la mise à jour':'Vérifier la préparation')+'</button></section>';
 if(old)old.outerHTML=html;else content.insertAdjacentHTML('beforebegin',html);
}
function refreshUI(){
 const top=$('.topbar-right');
 if(top){
  const prev=top.querySelector('[data-pwa-action="install"]');
  if(isInstalled())prev?.remove();
  else if(!prev)top.insertAdjacentHTML('beforeend','<button class="pwa-trigger" type="button" data-pwa-action="install" aria-label="Installer l’application" title="Installer L’Atelier des Papiers"><img src="./icons/icon.svg" alt=""><span class="pwa-install-text">Installer</span></button>');
 }
 const page=$('#page-content');
 if(page&&location.hash.replace(/^#\/?/,'').startsWith('atelier')){
  if(!page.querySelector('.pwa-panel')){
   const tabs=page.querySelector('.section-tabs');
   const html='<section class="pwa-panel" aria-label="Application et mises à jour"><h2>Application et mises à jour</h2><div class="pwa-version" id="pwa-version-status"></div><p>Installe l’atelier sur ton téléphone et retrouve ici les changements apportés à chaque version.</p><div class="pwa-actions"><button class="btn" data-pwa-action="install" id="pwa-panel-install">Installer l’application</button><button class="btn btn-outline" data-pwa-action="check-updates">Vérifier les nouveautés</button><button class="btn btn-outline" data-pwa-action="notes">Voir les modifications</button></div></section>';
   if(tabs)tabs.insertAdjacentHTML('afterend',html);else page.insertAdjacentHTML('afterbegin',html);
  }
  const status=$('#pwa-version-status');
  if(status){const msg='Version '+CURRENT+' · '+(isInstalled()?'Installée sur cet appareil':'Accessible depuis le navigateur');if(status.textContent!==msg)status.textContent=msg}
  const button=$('#pwa-panel-install');
  if(button)button.hidden=isInstalled();
 }
 updateBanner();
}
let refreshQueued=false;
function scheduleRefresh(){
 if(refreshQueued)return;
 refreshQueued=true;
 queueMicrotask(()=>{refreshQueued=false;refreshUI()});
}
function watch(worker){
 if(!worker)return;
 const update=()=>{
  if(worker.state==='installed'&&navigator.serviceWorker.controller){
   waiting=true;refreshUI();
  }
 };
 worker.addEventListener('statechange',update);
 update();
}
async function setupWorker(){
 if(!('serviceWorker'in navigator)||location.protocol==='file:')return;
 try{
  registration=await navigator.serviceWorker.getRegistration()||await navigator.serviceWorker.register('./sw.js');
  if(registration.waiting&&navigator.serviceWorker.controller){waiting=true;refreshUI()}
  watch(registration.installing);
  registration.addEventListener('updatefound',()=>watch(registration.installing));
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
   if(applyRequested&&!reloaded){reloaded=true;window.location.reload()}
  });
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-lastChecked>300000)registration?.update().catch(console.warn)});
  window.addEventListener('online',()=>{registration?.update().catch(console.warn)});
  window.setInterval(()=>{if(!document.hidden)registration?.update().catch(console.warn)},3600000);
  registration.update().catch(console.warn);
 }catch(err){console.warn('Service worker',err)}
}
async function checkUpdates(){
 if(checking){notify('Vérification déjà en cours.');return}
 checking=true;lastChecked=Date.now();
 try{
  const response=await fetch('./changelog.json?verify='+Date.now(),{cache:'no-store'});
  if(!response.ok)throw Error('Réponse HTTP '+response.status);
  const json=await response.json();
  const latest=String(json.version||CURRENT);
  if(newer(latest,CURRENT))pendingVersion=latest;
  if(registration)await registration.update();
  if(registration?.waiting&&navigator.serviceWorker.controller)waiting=true;
  refreshUI();
  if(waiting)notify('Nouvelle version prête : utilise le bouton de mise à jour.');
  else if(newer(latest,CURRENT))notify('Une version plus récente existe. Sa préparation est en cours.');
  else notify('L’Atelier des Papiers est à jour (version '+CURRENT+').');
 }catch(err){console.warn('Vérification de mise à jour',err);notify('Vérification impossible : contrôle ta connexion Internet.')}
 finally{checking=false}
}
async function applyUpdate(){
 if(!registration?.waiting){await checkUpdates();return}
 applyRequested=true;
 try{registration.waiting.postMessage({type:'SKIP_WAITING'});notify('Installation de la mise à jour…')}catch(err){applyRequested=false;notify('Mise à jour impossible pour le moment.');console.error(err)}
}
document.addEventListener('click',e=>{
 const release=e.target.closest('[data-action="release"]');
 if(release){e.preventDefault();e.stopImmediatePropagation();openChangelog();return}
 const t=e.target.closest('[data-pwa-action]');
 if(!t)return;
 e.preventDefault();e.stopImmediatePropagation();
 const a=t.dataset.pwaAction;
 if(a==='install')install();
 if(a==='check-updates')checkUpdates();
 if(a==='notes')openChangelog();
 if(a==='apply-update')applyUpdate();
 if(a==='close-dialog')ensureDialog().close();
},true);
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEvent=e;scheduleRefresh()});
window.addEventListener('appinstalled',()=>{installEvent=null;refreshUI();notify('L’Atelier des Papiers est installé !')});
const root=$('#app');
if(root)new MutationObserver(scheduleRefresh).observe(root,{childList:true,subtree:true});
scheduleRefresh();
setupWorker();
window.addEventListener('load',()=>window.setTimeout(()=>openChangelog(true),950),{once:true});
window.ATELIER_PWA={install,checkUpdates,openChangelog};
})();