// Safe loader for the original Reading Cinemas application.
// Kept separate so the live page runs the known-good application code.
document.write('<script src="js/app-base.js"><\/script>');

// Always start a newly selected Reading Cinemas report page at the top.
(function(){
  function forceReportPageTop(){
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  document.addEventListener('click',function(event){
    const reportLink=event.target.closest('.ans-link, .deliverable-card');
    if(!reportLink)return;
    requestAnimationFrame(function(){requestAnimationFrame(forceReportPageTop);});
    setTimeout(forceReportPageTop,80);
  });
})();

// Viewer toolbar behaviour.
// Desktop keeps the existing toolbar treatment.
// Mobile + split-screen use two rows: controls first, page indicator second.
(function(){
  const toolbarSelector=[
    '.strategy-pdf-toolbar','.presentation-toolbar','.evidence-toolbar',
    '.demographic-toolbar','.movie-toolbar','.future-toolbar',
    '.reelio-toolbar','.reading-preview-toolbar'
  ].join(',');
  const countSelector=[
    '.strategy-pdf-page-count','.presentation-slide-count','.evidence-page-count',
    '.demographic-page-count','.movie-page-count','.future-page-count',
    '.reelio-page-count','.reading-preview-page-count'
  ].join(',');
  const spacerSelector=[
    '.strategy-pdf-spacer','.presentation-spacer','.evidence-spacer',
    '.demographic-spacer','.movie-spacer','.future-spacer',
    '.reelio-spacer','.reading-preview-spacer'
  ].join(',');
  const fullSelector=[
    '.strategy-pdf-full','.presentation-full','.evidence-full','.demographic-full',
    '.movie-full','.future-full','.reelio-full','.reading-preview-full'
  ].join(',');
  const closeSelector=[
    '.strategy-pdf-close','.presentation-close','.evidence-close','.demographic-close',
    '.movie-close','.future-close','.reelio-close','.reading-preview-close'
  ].join(',');

  // Keep desktop labels intact. Mobile converts FULL SCREEN to an icon with CSS.
  document.querySelectorAll(fullSelector).forEach(function(button){
    button.textContent='FULL SCREEN';
    button.setAttribute('aria-label','Open full screen');
    button.setAttribute('title','Open full screen');
  });
  document.querySelectorAll(closeSelector).forEach(function(button){
    button.textContent='CLOSE X';
    button.setAttribute('aria-label','Exit full screen');
    button.setAttribute('title','Exit full screen');
  });

  // Keep the requested down arrow on all applicable View buttons.
  document.querySelectorAll('.engage-action').forEach(function(button){
    const text=button.textContent.replace(/\s+/g,' ').trim();
    if(/^view\s/i.test(text)&&!/[↓↧⇩]$/.test(text))button.textContent=text+' ↓';
  });

  const style=document.createElement('style');
  style.id='viewer-toolbar-responsive-layout';
  style.textContent=`
    /* Close is only available while a viewer is actually fullscreen. */
    ${closeSelector} {
      display:none!important;
    }
    .is-fullscreen :is(${closeSelector}),
    :fullscreen :is(${closeSelector}) {
      display:inline-flex!important;
      align-items:center!important;
      justify-content:center!important;
      white-space:nowrap!important;
      text-align:center!important;
    }

    @media (max-width:1040px) {
      ${toolbarSelector} {
        display:flex!important;
        flex-direction:row!important;
        flex-wrap:wrap!important;
        align-items:center!important;
        justify-content:flex-start!important;
        gap:6px!important;
      }

      ${toolbarSelector} > button {
        width:auto!important;
        flex:0 0 auto!important;
      }

      ${spacerSelector} {
        display:none!important;
      }

      /* Page/slide indicator is the only item on row two. */
      ${countSelector} {
        order:20!important;
        flex:0 0 100%!important;
        width:100%!important;
        max-width:100%!important;
        margin:6px 0 0!important;
        text-align:left!important;
        grid-column:auto!important;
      }

      /* Normal mobile/split view: icon-only fullscreen control beside Fit Width. */
      ${fullSelector} {
        order:10!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:40px!important;
        min-width:40px!important;
        height:40px!important;
        padding:0!important;
        font-size:0!important;
        line-height:1!important;
      }
      ${fullSelector}::before {
        content:'⛶'!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:100%!important;
        height:100%!important;
        font-size:18px!important;
        line-height:1!important;
      }

      /* Normal mobile/split view has no Close control. */
      ${closeSelector} {
        order:10!important;
        display:none!important;
      }

      /* Once fullscreen is active, remove the fullscreen icon and place CLOSE X
         in the same first-row position after Fit Width. */
      .is-fullscreen :is(${fullSelector}),
      :fullscreen :is(${fullSelector}) {
        display:none!important;
      }
      .is-fullscreen :is(${closeSelector}),
      :fullscreen :is(${closeSelector}) {
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:auto!important;
        min-width:0!important;
        height:40px!important;
        padding:0 12px!important;
        font-size:inherit!important;
        line-height:1!important;
        white-space:nowrap!important;
        text-align:center!important;
      }
    }

    @media (max-width:520px) {
      ${toolbarSelector} {
        gap:5px!important;
      }
      ${fullSelector} {
        width:36px!important;
        min-width:36px!important;
        height:36px!important;
      }
      .is-fullscreen :is(${closeSelector}),
      :fullscreen :is(${closeSelector}) {
        height:36px!important;
        padding:0 9px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();

// The Reading Preview stays as two-page spreads on desktop and switches to
// one centred page at a time on mobile.
(function(){
  if(typeof readingPreviewSpreads==='undefined'||typeof readingPreviewState==='undefined')return;

  const desktopMagazineSpreads=readingPreviewSpreads.map(function(spread){
    return {label:spread.label,pages:spread.pages.slice()};
  });
  let mobileMode=null;

  readingPreviewIndicatorLabel=function(){
    const data=readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0];
    if(!data||!data.pages.length)return '';
    if(data.pages.length===1){
      const page=data.pages[0];
      if(page===1)return 'COVER · 1 OF 16';
      if(page===16)return 'BACK COVER · 16 OF 16';
      return 'PAGE '+page+' OF 16';
    }
    return 'PAGES '+data.pages[0]+'–'+data.pages[1]+' OF 16';
  };

  function setMagazineMode(){
    const mobile=window.matchMedia('(max-width: 768px)').matches;
    if(mobileMode===mobile)return;

    const current=(readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0]||{pages:[1]}).pages[0]||1;
    const nextSpreads=mobile
      ? Array.from({length:READING_PREVIEW_TOTAL_PAGES},function(_,i){return {label:'Page '+(i+1),pages:[i+1]};})
      : desktopMagazineSpreads.map(function(spread){return {label:spread.label,pages:spread.pages.slice()};});

    readingPreviewSpreads.splice.apply(readingPreviewSpreads,[0,readingPreviewSpreads.length].concat(nextSpreads));
    readingPreviewState.index=readingPreviewSpreadForPage(current);
    mobileMode=mobile;
    readingPreviewRender();
    requestAnimationFrame(function(){readingPreviewApplyZoom();});
  }

  setMagazineMode();
  let timer=null;
  window.addEventListener('resize',function(){
    clearTimeout(timer);
    timer=setTimeout(setMagazineMode,100);
  });
})();
