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
