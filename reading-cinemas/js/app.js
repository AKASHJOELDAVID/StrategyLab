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

// Keep the original viewer toolbar layout. Full Screen is shown as an icon.
(function(){
  const fullSelector=[
    '.strategy-pdf-full','.presentation-full','.evidence-full','.demographic-full',
    '.movie-full','.future-full','.reelio-full','.reading-preview-full'
  ].join(',');
  const closeSelector=[
    '.strategy-pdf-close','.presentation-close','.evidence-close','.demographic-close',
    '.movie-close','.future-close','.reelio-close','.reading-preview-close'
  ].join(',');

  document.querySelectorAll(fullSelector).forEach(function(button){
    button.textContent='⛶';
    button.setAttribute('aria-label','Open full screen');
    button.setAttribute('title','Open full screen');
  });

  // Desktop close wording uses a normal capital X so it aligns visually
  // with the rest of the toolbar text.
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
  style.id='viewer-close-alignment';
  style.textContent=`
    ${closeSelector} {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      line-height: 1 !important;
      white-space: nowrap !important;
      text-align: center !important;
    }
    @media (max-width: 768px) {
      ${closeSelector} {
        padding: 0 !important;
        width: 40px !important;
        min-width: 40px !important;
        height: 40px !important;
        font-size: 0 !important;
      }
      ${closeSelector}::before {
        content: 'X' !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        height: 100% !important;
        font-size: 18px !important;
        line-height: 1 !important;
        text-align: center !important;
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
