// Safe loader for the original Reading Cinemas application.
// Kept separate so the live page runs the known-good application code.
document.write('<script src="js/app-base.js"><\/script>');

// Always start a newly selected Reading Cinemas report page at the top.
// The mobile "In This Report" drawer restores its previous scroll position
// while closing, so run the reset again after that navigation has completed.
(function(){
  function forceReportPageTop(){
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  document.addEventListener('click',function(event){
    const reportLink=event.target.closest('.ans-link, .deliverable-card');
    if(!reportLink)return;

    requestAnimationFrame(function(){
      requestAnimationFrame(forceReportPageTop);
    });
    setTimeout(forceReportPageTop,80);
  });
})();

// Mobile viewer polish. This sits on top of the original, working viewer code
// so the viewer behaviour is preserved while the controls/layout are simplified.
(function(){
  const toolbarSelector=[
    '.strategy-pdf-toolbar','.presentation-toolbar','.evidence-toolbar',
    '.demographic-toolbar','.movie-toolbar','.future-toolbar',
    '.reelio-toolbar','.reading-preview-toolbar'
  ].join(',');

  const pageCountSelector=[
    '.strategy-pdf-page-count','.presentation-slide-count','.evidence-page-count',
    '.demographic-page-count','.movie-page-count','.future-page-count',
    '.reelio-page-count','.reading-preview-page-count'
  ].join(',');

  const fullSelector=[
    '.strategy-pdf-full','.presentation-full','.evidence-full','.demographic-full',
    '.movie-full','.future-full','.reelio-full','.reading-preview-full'
  ].join(',');

  const closeSelector=[
    '.strategy-pdf-close','.presentation-close','.evidence-close','.demographic-close',
    '.movie-close','.future-close','.reelio-close','.reading-preview-close'
  ].join(',');

  function shortCount(text){
    const clean=String(text||'').replace(/\s+/g,' ').trim();
    let match=clean.match(/(?:page|slide)\s*(\d+)\s*of\s*(\d+)/i);
    if(!match)match=clean.match(/(\d+)\s*of\s*(\d+)/i);
    return match?match[1]+'/'+match[2]:clean;
  }

  function polishViewerControls(root){
    const scope=root&&root.querySelectorAll?root:document;

    scope.querySelectorAll(toolbarSelector).forEach(function(toolbar){
      toolbar.classList.add('viewer-polished-toolbar');
      toolbar.querySelectorAll('button').forEach(function(button){
        const label=button.textContent.replace(/\s+/g,' ').trim().toLowerCase();
        if(label==='pages'||label==='slides')button.classList.add('viewer-list-tool');
        if(label==='fit width'||label==='fit')button.classList.add('viewer-fit-tool');
        if(label==='+'||label==='−'||label==='-'||label==='–')button.classList.add('viewer-zoom-tool');
      });
    });

    scope.querySelectorAll(pageCountSelector).forEach(function(count){
      count.classList.add('viewer-page-count');
      count.setAttribute('data-short',shortCount(count.textContent));
    });

    scope.querySelectorAll(fullSelector).forEach(function(button){
      button.classList.add('viewer-full-tool');
      if(button.textContent!=='⛶')button.textContent='⛶';
      button.setAttribute('aria-label','Open full screen');
      button.setAttribute('title','Open full screen');
    });

    scope.querySelectorAll(closeSelector).forEach(function(button){
      button.classList.add('viewer-close-tool');
      if(button.textContent!=='×')button.textContent='×';
      button.setAttribute('aria-label','Exit full screen');
      button.setAttribute('title','Exit full screen');
    });

    scope.querySelectorAll('.engage-action').forEach(function(button){
      const text=button.textContent.replace(/\s+/g,' ').trim();
      if(/^view\s/i.test(text)&&!/[↓↧⇩]$/.test(text))button.textContent=text+' ↓';
    });
  }

  const style=document.createElement('style');
  style.id='viewer-mobile-polish';
  style.textContent=`
    @media (max-width: 768px) {
      .viewer-polished-toolbar {
        display:flex!important;
        flex-direction:row!important;
        flex-wrap:nowrap!important;
        align-items:center!important;
        justify-content:flex-start!important;
        gap:2px!important;
        width:100%!important;
        max-width:100%!important;
        padding:6px!important;
        overflow:hidden!important;
        white-space:nowrap!important;
        grid-template-columns:none!important;
      }
      .viewer-polished-toolbar > * {
        flex:0 0 auto!important;
        margin:0!important;
      }
      .viewer-polished-toolbar :is(.strategy-pdf-spacer,.presentation-spacer,.evidence-spacer,.demographic-spacer,.movie-spacer,.future-spacer,.reelio-spacer,.reading-preview-spacer) {
        display:none!important;
      }
      .viewer-polished-toolbar button {
        min-height:32px!important;
        height:32px!important;
        padding:4px 6px!important;
        font-size:9px!important;
        line-height:1!important;
        letter-spacing:.02em!important;
      }
      .viewer-polished-toolbar .viewer-list-tool {
        width:45px!important;
        min-width:45px!important;
        padding:4px!important;
      }
      .viewer-polished-toolbar .viewer-page-count {
        position:relative!important;
        width:42px!important;
        min-width:42px!important;
        max-width:42px!important;
        height:32px!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        overflow:hidden!important;
        font-size:0!important;
        order:initial!important;
        grid-column:auto!important;
      }
      .viewer-polished-toolbar .viewer-page-count::after {
        content:attr(data-short);
        font-family:inherit;
        font-size:9px!important;
        line-height:1!important;
        letter-spacing:.02em!important;
        white-space:nowrap!important;
      }
      .viewer-polished-toolbar .viewer-zoom-tool {
        width:29px!important;
        min-width:29px!important;
        padding:0!important;
        font-size:13px!important;
      }
      .viewer-polished-toolbar :is(.strategy-pdf-zoom-value,.presentation-zoom-value,.evidence-zoom-value,.demographic-zoom-value,.movie-zoom-value,.future-zoom-value,.reelio-zoom-value,.reading-preview-zoom-value) {
        width:34px!important;
        min-width:34px!important;
        max-width:34px!important;
        text-align:center!important;
        font-size:9px!important;
        overflow:hidden!important;
      }
      .viewer-polished-toolbar .viewer-fit-tool {
        width:34px!important;
        min-width:34px!important;
        max-width:34px!important;
        padding:0!important;
        font-size:0!important;
      }
      .viewer-polished-toolbar .viewer-fit-tool::after {
        content:'FIT';
        font-size:8px!important;
        line-height:1!important;
        letter-spacing:.04em!important;
      }
      .viewer-polished-toolbar .viewer-full-tool,
      .viewer-polished-toolbar .viewer-close-tool {
        width:31px!important;
        min-width:31px!important;
        max-width:31px!important;
        flex-basis:31px!important;
        padding:0!important;
        font-size:17px!important;
        display:inline-flex;
        align-items:center!important;
        justify-content:center!important;
        text-align:center!important;
      }
      .viewer-polished-toolbar .viewer-full-tool::before,
      .viewer-polished-toolbar .viewer-close-tool::before {
        content:none!important;
      }

      /* The Reading Preview: one large centred page at a time on mobile. */
      #page-digital-magazine .reading-preview-reader {
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        overflow:hidden!important;
      }
      #page-digital-magazine .reading-preview-shell,
      #page-digital-magazine .reading-preview-main {
        width:100%!important;
        min-width:0!important;
      }
      #page-digital-magazine .reading-preview-rail {
        display:none!important;
      }
      #page-digital-magazine .reading-preview-stage {
        position:relative!important;
        display:block!important;
        width:100%!important;
        height:min(72vh,680px)!important;
        min-height:470px!important;
        padding:10px 8px!important;
        overflow:hidden!important;
      }
      #page-digital-magazine .reading-preview-canvas {
        display:flex!important;
        align-items:flex-start!important;
        justify-content:center!important;
        width:100%!important;
        height:100%!important;
        min-width:0!important;
        margin:0 auto!important;
        padding:0!important;
        overflow:auto!important;
        -webkit-overflow-scrolling:touch;
      }
      #page-digital-magazine .reading-preview-spread {
        margin:0 auto!important;
        justify-content:center!important;
      }
      #page-digital-magazine .reading-preview-side-nav {
        position:absolute!important;
        top:50%!important;
        transform:translateY(-50%)!important;
        z-index:5!important;
        width:34px!important;
        min-width:34px!important;
        height:44px!important;
        margin:0!important;
      }
      #page-digital-magazine .reading-preview-side-prev { left:8px!important; }
      #page-digital-magazine .reading-preview-side-next { right:8px!important; }
    }

    @media (max-width: 390px) {
      .viewer-polished-toolbar { gap:1px!important; padding:5px 4px!important; }
      .viewer-polished-toolbar button { padding:3px 4px!important; }
      .viewer-polished-toolbar .viewer-list-tool { width:42px!important; min-width:42px!important; }
      .viewer-polished-toolbar .viewer-page-count { width:39px!important; min-width:39px!important; max-width:39px!important; }
      .viewer-polished-toolbar .viewer-zoom-tool { width:27px!important; min-width:27px!important; }
      .viewer-polished-toolbar :is(.strategy-pdf-zoom-value,.presentation-zoom-value,.evidence-zoom-value,.demographic-zoom-value,.movie-zoom-value,.future-zoom-value,.reelio-zoom-value,.reading-preview-zoom-value) { width:31px!important; min-width:31px!important; max-width:31px!important; }
      .viewer-polished-toolbar .viewer-fit-tool { width:31px!important; min-width:31px!important; max-width:31px!important; }
      .viewer-polished-toolbar .viewer-full-tool,
      .viewer-polished-toolbar .viewer-close-tool { width:29px!important; min-width:29px!important; max-width:29px!important; flex-basis:29px!important; }
      #page-digital-magazine .reading-preview-stage { min-height:450px!important; padding-left:5px!important; padding-right:5px!important; }
    }
  `;
  document.head.appendChild(style);

  // Keep Reading Preview as two-page spreads on desktop, but switch to
  // individual pages on mobile so each page is large enough to read.
  const desktopMagazineSpreads=typeof readingPreviewSpreads!=='undefined'
    ? readingPreviewSpreads.map(function(spread){return {label:spread.label,pages:spread.pages.slice()};})
    : [];
  let magazineMobileMode=null;

  function setMagazineMode(){
    if(typeof readingPreviewSpreads==='undefined'||typeof readingPreviewState==='undefined')return;
    const mobile=window.matchMedia('(max-width: 768px)').matches;
    if(magazineMobileMode===mobile)return;

    const current=(readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0]||{pages:[1]}).pages[0]||1;
    const nextSpreads=mobile
      ? Array.from({length:READING_PREVIEW_TOTAL_PAGES},function(_,i){
          const page=i+1;
          return {label:'Page '+page,pages:[page]};
        })
      : desktopMagazineSpreads.map(function(spread){return {label:spread.label,pages:spread.pages.slice()};});

    readingPreviewSpreads.splice.apply(readingPreviewSpreads,[0,readingPreviewSpreads.length].concat(nextSpreads));
    readingPreviewState.index=readingPreviewSpreadForPage(current);
    magazineMobileMode=mobile;
    readingPreviewRender();
  }

  // The original label assumes inner spreads always have two pages. Make it
  // work cleanly with the mobile one-page mode as well.
  if(typeof readingPreviewIndicatorLabel==='function'){
    readingPreviewIndicatorLabel=function(){
      const data=readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0];
      if(!data||!data.pages.length)return '';
      if(data.pages.length===1){
        const page=data.pages[0];
        if(page===1)return 'COVER · 1 OF 16';
        if(page===16)return 'BACK · 16 OF 16';
        return 'PAGE '+page+' OF 16';
      }
      return 'PAGES '+data.pages[0]+'–'+data.pages[1]+' OF 16';
    };
  }

  function refreshPolish(){
    polishViewerControls(document);
    setMagazineMode();
    requestAnimationFrame(function(){
      polishViewerControls(document);
      if(typeof readingPreviewApplyZoom==='function')readingPreviewApplyZoom();
    });
  }

  refreshPolish();

  const observer=new MutationObserver(function(){
    polishViewerControls(document);
  });
  observer.observe(document.body,{childList:true,subtree:true});

  let resizeTimer=null;
  window.addEventListener('resize',function(){
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function(){
      setMagazineMode();
      polishViewerControls(document);
      if(typeof readingPreviewApplyZoom==='function')readingPreviewApplyZoom();
    },100);
  });
})();
