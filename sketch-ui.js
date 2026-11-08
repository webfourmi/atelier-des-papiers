/* L'Atelier des Papiers • V0.5 • sketches originaux et kits coordonnés */
window.ATELIER_SKETCH_UI = (() => {
  'use strict';
  const DATA = window.ATELIER_SKETCHES || { sketches: [], palettes: [], challenge: {} };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const palette = id => DATA.palettes.find(p => p.id === id) || DATA.palettes[0] || {id:'vintage', name:'Vintage', paper:'#f2e7d5',motif:'#cbb69a',motif2:'#ab9279',photo:'#e2d4bf',accent:'#818974',ink:'#51463b'};
  const dimensions = block => `${format(block.w)} × ${format(block.h)} cm`;
  const format = value => (value/10).toLocaleString('fr-FR',{maximumFractionDigits:1});
  function shape(b,p,fontSize) {
    if(b.kind==='hole'){
      return `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" fill="#fffdf7" stroke="${p.ink}" stroke-width="1.2"/><circle cx="${b.x}" cy="${b.y}" r="${b.r+2.2}" fill="none" stroke="${p.accent}" stroke-width="1"/>`;
    }
    const fill={paper:p.motif,paper2:p.motif2,photo:p.photo,title:p.accent,text:'#fff9ef',accent:p.accent}[b.kind]||p.motif;
    const dash=b.kind==='photo'?'stroke-dasharray="3 2"':'';
    let svg;
    if(b.kind==='accent'){
      svg=`<ellipse cx="${b.x+b.w/2}" cy="${b.y+b.h/2}" rx="${b.w/2}" ry="${b.h/2}" fill="${fill}" stroke="${p.ink}" stroke-width=".55"/>`;
    }else{
      svg=`<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="${b.kind==='title'?2:1.5}" fill="${fill}" stroke="${p.ink}" stroke-opacity=".42" stroke-width=".65" ${dash}/>`;
    }
    if(b.kind==='photo')svg+=`<path d="M${b.x+4} ${b.y+4}L${b.x+b.w-4} ${b.y+b.h-4}M${b.x+b.w-4} ${b.y+4}L${b.x+4} ${b.y+b.h-4}" stroke="${p.ink}" stroke-width=".65" stroke-opacity=".32"/>`;
    const label=String(b.label||'');
    if(label){
      const parts=label.split('\n');
      const f=Math.min(fontSize,b.w/(Math.max(...parts.map(s=>s.length),1)*.58));
      const y=b.y+b.h/2-(parts.length-1)*f*.55;
      svg+=`<text x="${b.x+b.w/2}" y="${y}" font-family="Arial,sans-serif" font-size="${f}" font-weight="600" text-anchor="middle" dominant-baseline="central" fill="${b.kind==='title'? '#fffaf4':p.ink}">${parts.map((s,i)=>`<tspan x="${b.x+b.w/2}" dy="${i?f*1.15:0}">${escape(s)}</tspan>`).join('')}</text>`;
    }
    return svg;
  }
  function svg(sk,palId,small=false){
    const p=palette(palId);
    const w=sk.width,h=sk.height,padding=Math.max(3,Math.min(w,h)*.045),fontSize=Math.max(3.4,Math.min(w,h)/18);
    const title=escape(sk.title);
    return `<svg class="sketch-svg ${small?'sketch-svg-small':''}" role="img" aria-label="Sketch original : ${title}, format ${escape(sk.format)}" xmlns="http://www.w3.org/2000/svg" viewBox="${-padding} ${-padding} ${w+2*padding} ${h+2*padding}" preserveAspectRatio="xMidYMid meet" data-sketch="${escape(sk.id)}"><rect width="${w}" height="${h}" fill="${p.paper}" stroke="${p.ink}" stroke-width=".65"/><path d="M${w/2} 0V${h}M0 ${h/2}H${w}" stroke="${p.ink}" stroke-width=".22" stroke-dasharray="3 5" opacity=".15"/>${sk.blocks.map(b=>shape(b,p,fontSize)).join('')}</svg>`;
  }
  function paletteSelect(selected){
    return `<label class="sketch-palette-label" for="sketch-palette">Palette de prévisualisation</label><select id="sketch-palette" class="filterselect" aria-label="Palette de couleurs pour les sketches">${DATA.palettes.map(p=>`<option value="${p.id}" ${p.id===selected?'selected':''}>${escape(p.name)}</option>`).join('')}</select>`;
  }
  function card(sk,selected,isFav){
    const saved=isFav('sketches',sk.id);
    return `<article class="sketch-card"><div class="sketch-card-image">${svg(sk,selected,true)}<button type="button" class="sketch-heart ${saved?'active':''}" data-action="favorite" data-kind="sketches" data-id="${escape(sk.id)}" title="${saved?'Retirer des favoris':'Ajouter aux favoris'}" aria-label="${saved?'Retirer':'Ajouter'} ${escape(sk.title)} ${saved?'des':'aux'} favoris">${saved?'♥':'♡'}</button></div><div class="sketch-card-content"><span class="tinytag">${escape(sk.type)} · ${escape(sk.format)}</span><h3>${escape(sk.title)}</h3><p>${escape(sk.intro)}</p><div class="sketch-card-footer"><span class="small muted">${escape(sk.level)} · ${escape(sk.duration)}</span><button type="button" class="tile-open" data-action="navigate" data-page="projets" data-id="sketch-${escape(sk.id)}">Voir le sketch →</button></div></div></article>`;
  }
  function gallery(selected,kind,isFav){
    const kinds=['tous',...new Set(DATA.sketches.map(s=>s.type))];
    const visible=DATA.sketches.filter(s=>kind==='tous'||s.type===kind);
    const select=`<label class="sketch-palette-label" for="sketch-filter">Type de création</label><select class="filterselect" id="sketch-filter" aria-label="Filtrer les sketches par type">${kinds.map(k=>`<option value="${escape(k)}" ${k===kind?'selected':''}>${k==='tous'?'Tous les modèles':escape(k)}</option>`).join('')}</select>`;
    return `<section class="sketch-library"><div class="sketch-head"><div><span class="eyebrow">BIBLIOTHÈQUE DE COMPOSITIONS</span><h2>Sept sketches pour commencer</h2><p>Des plans originaux à interpréter avec tes papiers, tes photos et tes embellissements. Les dimensions indiquées dans les fiches sont réelles ; les dessins restent des schémas, pas des patrons à taille réelle.</p></div><div class="sketch-controls">${select}${paletteSelect(selected)}</div></div><div class="sketch-gallery-grid">${visible.map(sk=>card(sk,selected,isFav)).join('')}</div><section class="sketch-kit"><span class="eyebrow">COMPOSER SON KIT DE PAPIERS</span><h2>La recette d’une collection coordonnée</h2><p>Dans l’esprit des collections thématiques, choisis un papier uni, deux motifs qui dialoguent et une petite sélection d’éléments décoratifs. Répéter quelques couleurs crée une unité sans utiliser tous les embellissements d’un coup.</p><div class="sketch-kit-steps"><div><strong>01. Le fond</strong><span>Une feuille unie assez calme pour faire respirer les photos.</span></div><div><strong>02. Deux motifs</strong><span>Un motif principal, un petit motif discret (pois, rayures, quadrillage).</span></div><div><strong>03. Le contraste</strong><span>Une couleur accent pour le titre ou les petites étiquettes.</span></div><div><strong>04. Les détails</strong><span>Quelques autocollants, un titre et une date, sans multiplier les familles de couleurs.</span></div></div></section><section class="sketch-challenge"><span class="eyebrow">UN PETIT DÉFI CRÉATIF</span><h2>${escape(DATA.challenge.title||'Le défi des trois papiers')}</h2><p>${escape(DATA.challenge.description||'Choisis un sketch et réalise ta version.')}</p><button type="button" class="btn" data-action="navigate" data-page="projets" data-id="sketch-${escape(DATA.challenge.featured||DATA.sketches[0].id)}">Je relève le défi →</button></section></section>`;
  }
  function detail(sk,selected,isFav){
    const p=palette(selected),saved=isFav('sketches',sk.id);
    return `<div class="breadcrumbs"><button type="button" data-action="navigate" data-page="projets">Tous les projets</button> › <button type="button" data-action="projects-tab" data-tab="inspirations">Bibliothèque de sketches</button> › <span>${escape(sk.title)}</span></div><article class="sketch-detail"><div class="sketch-detail-header"><div><span class="eyebrow">SKETCH ORIGINAL · ${escape(sk.type)}</span><h1>${escape(sk.title)}</h1><p>${escape(sk.intro)}</p><div class="chips"><span class="chip">${escape(sk.format)}</span><span class="chip">${escape(sk.level)}</span><span class="chip">${escape(sk.duration)}</span></div><div class="sketch-detail-actions"><button type="button" class="btn" data-action="sketch-to-journal" data-sketch="${escape(sk.id)}">Créer ma version</button><button type="button" class="btn btn-outline" data-action="favorite" data-kind="sketches" data-id="${escape(sk.id)}">${saved?'♥ Dans mes favoris':'♡ Ajouter aux favoris'}</button></div></div><div class="sketch-display">${svg(sk,selected)}<span class="small muted">Schéma de composition (non à l’échelle lors de l’impression)</span></div></div><div class="sketch-detail-grid"><div><section class="panel"><h2>Réaliser cette composition</h2><p class="muted small">Les mesures correspondent au projet fini. Pour les pages 30 × 30 cm, le dessin se réduit pour tenir sur une feuille A4 : mesure les éléments sur ton papier avec une règle.</p><ol class="sketch-instructions">${sk.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol></section><section class="panel"><h2>Trois interprétations possibles</h2><ul class="sketch-list">${sk.variants.map(s=>`<li>${escape(s)}</li>`).join('')}</ul></section></div><aside><section class="panel sketch-side-panel"><h3>Adapter les couleurs</h3>${paletteSelect(selected)}<div class="sketch-color-strip">${[p.paper,p.motif,p.motif2,p.accent].map(c=>`<span style="background:${c}"></span>`).join('')}</div><p class="small muted">${escape(sk.paletteHint)}</p></section><section class="panel sketch-side-panel"><h3>Matériel & dimensions</h3><ul class="sketch-list">${sk.supplies.map(s=>`<li>${escape(s)}</li>`).join('')}</ul></section><section class="panel sketch-side-panel"><h3>Conserver le modèle</h3><p class="small muted">Télécharge ce sketch vectoriel pour le consulter en grand. Le dessin est un guide de composition, pas un patron de découpe à taille réelle.</p><button type="button" class="btn" data-action="download-sketch" data-sketch="${escape(sk.id)}">Télécharger le sketch SVG</button><button type="button" class="btn btn-outline" data-action="print-sketch" style="margin-top:8px">Imprimer la fiche</button></section></aside></div></article>`;
  }
  return {data:DATA,svg,gallery,detail};
})();