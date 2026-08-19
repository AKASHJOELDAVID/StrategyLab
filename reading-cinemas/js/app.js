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
// Desktop and split-screen keep the existing toolbar treatment.
// Mobile only uses two rows: controls first, page indicator second.
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

  function isTrueMobileViewer(){
    return window.matchMedia('(max-width:768px)').matches && window.screen.width<=768;
  }

  function syncViewerDeviceMode(){
    document.documentElement.classList.toggle('viewer-true-mobile',isTrueMobileViewer());
  }

  function syncFullscreenLabels(){
    syncViewerDeviceMode();
    const mobile=isTrueMobileViewer();
    document.querySelectorAll(fullSelector).forEach(function(button){
      button.textContent=mobile?'⛶':'FULL SCREEN';
      button.setAttribute('aria-label','Open full screen');
      button.setAttribute('title','Open full screen');
    });
  }

  syncFullscreenLabels();
  window.addEventListener('resize',syncFullscreenLabels);
  window.addEventListener('orientationchange',syncFullscreenLabels);

  document.querySelectorAll(closeSelector).forEach(function(button){
    button.textContent='CLOSE X';
    button.setAttribute('aria-label','Exit full screen');
    button.setAttribute('title','Exit full screen');
  });

  // Keep the mobile fullscreen Close control typographically identical to
  // the Fit Width button in the same viewer toolbar.
  function syncCloseButtonTypography(){
    document.querySelectorAll(closeSelector).forEach(function(closeButton){
      const toolbar=closeButton.closest(toolbarSelector);
      if(!toolbar)return;
      const fitButton=Array.from(toolbar.querySelectorAll('button')).find(function(button){
        return /^fit width$/i.test(button.textContent.trim());
      });
      if(!fitButton)return;
      const fitStyle=window.getComputedStyle(fitButton);
      [
        'font-family','font-size','font-weight','font-style','line-height',
        'letter-spacing','text-transform'
      ].forEach(function(property){
        closeButton.style.setProperty(property,fitStyle.getPropertyValue(property),'important');
      });
    });
  }

  syncCloseButtonTypography();
  window.addEventListener('resize',syncCloseButtonTypography);
  window.addEventListener('load',syncCloseButtonTypography,{once:true});

  // Keep a down arrow on every VIEW action button across all report pages.
  // Run after the page is parsed and also handle any buttons rendered later.
  function syncViewActionArrows(root){
    const scope=root&&root.querySelectorAll?root:document;
    const buttons=[];
    if(scope.matches&&scope.matches('.engage-action'))buttons.push(scope);
    scope.querySelectorAll('.engage-action').forEach(function(button){buttons.push(button);});

    buttons.forEach(function(button){
      const text=button.textContent.replace(/\s+/g,' ').trim();
      if(/^view\b/i.test(text)&&!/[↓↧⇩]\s*$/.test(text)){
        button.appendChild(document.createTextNode(' ↓'));
      }
    });
  }

  syncViewActionArrows(document);
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){syncViewActionArrows(document);},{once:true});
  }else{
    syncViewActionArrows(document);
  }
  window.addEventListener('load',function(){syncViewActionArrows(document);},{once:true});

  const viewActionObserver=new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      mutation.addedNodes.forEach(function(node){
        if(node.nodeType===Node.ELEMENT_NODE)syncViewActionArrows(node);
      });
    });
  });
  viewActionObserver.observe(document.documentElement,{childList:true,subtree:true});

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

    /* The icon-only fullscreen trigger is mobile-only. Never show it on
       desktop or desktop fullscreen; desktop keeps the FULL SCREEN button. */
    .mobile-fullscreen-trigger {
      display:none!important;
    }

    @media (max-width:768px) {
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

      /* Hide the original fullscreen control on true mobile only. A dedicated
         mobile trigger is inserted directly after Fit Width below. */
      html.viewer-true-mobile :is(${fullSelector}) {
        display:none!important;
      }

      html.viewer-true-mobile .mobile-fullscreen-trigger {
        order:10!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:40px!important;
        min-width:40px!important;
        height:40px!important;
        padding:0!important;
        font-size:18px!important;
        line-height:1!important;
        overflow:hidden!important;
        white-space:nowrap!important;
        text-align:center!important;
      }

      /* Split-screen on desktop keeps the same FULL SCREEN control as the
         normal desktop viewer, with no icon-only button. */
      html:not(.viewer-true-mobile) :is(${fullSelector}) {
        display:inline-flex!important;
      }
      html:not(.viewer-true-mobile) .mobile-fullscreen-trigger {
        display:none!important;
      }

      /* Normal mobile view has no Close control. */
      ${closeSelector} {
        order:10!important;
        display:none!important;
      }

      /* In true mobile fullscreen, replace the fullscreen icon with CLOSE X. */
      html.viewer-true-mobile .is-fullscreen .mobile-fullscreen-trigger,
      html.viewer-true-mobile :fullscreen .mobile-fullscreen-trigger {
        display:none!important;
      }
      html.viewer-true-mobile .is-fullscreen :is(${closeSelector}),
      html.viewer-true-mobile :fullscreen :is(${closeSelector}) {
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
        order:10!important;
      }
    }

    @media (max-width:520px) {
      ${toolbarSelector} {
        gap:5px!important;
      }
      html.viewer-true-mobile .mobile-fullscreen-trigger {
        width:36px!important;
        min-width:36px!important;
        height:36px!important;
      }
      html.viewer-true-mobile .is-fullscreen :is(${closeSelector}),
      html.viewer-true-mobile :fullscreen :is(${closeSelector}) {
        height:36px!important;
        padding:0 9px!important;
      }
    }
  `;
  document.head.appendChild(style);

  function installMobileFullscreenTriggers(){
    document.querySelectorAll(fullSelector).forEach(function(original){
      const toolbar=original.closest(toolbarSelector);
      if(!toolbar||toolbar.querySelector('.mobile-fullscreen-trigger'))return;

      const spacer=original.previousElementSibling;
      const fitButton=spacer&&spacer.matches(spacerSelector)
        ? spacer.previousElementSibling
        : original.previousElementSibling;
      if(!fitButton)return;

      const mobileButton=document.createElement('button');
      mobileButton.type='button';
      mobileButton.className=(original.className||'')+' mobile-fullscreen-trigger';
      mobileButton.classList.remove(...Array.from(original.classList).filter(function(name){return /-full$/.test(name);}));
      mobileButton.textContent='⛶';
      mobileButton.setAttribute('aria-label','Open full screen');
      mobileButton.setAttribute('title','Open full screen');
      const onclick=original.getAttribute('onclick');
      if(onclick)mobileButton.setAttribute('onclick',onclick);
      fitButton.insertAdjacentElement('afterend',mobileButton);
    });
  }

  installMobileFullscreenTriggers();
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',installMobileFullscreenTriggers,{once:true});
  }
  window.addEventListener('load',installMobileFullscreenTriggers,{once:true});
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
