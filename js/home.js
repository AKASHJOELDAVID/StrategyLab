function goHome(){
  window.scrollTo({top:0,left:0,behavior:'smooth'});
}

function scrollHomeTo(anchorId){
  const el=document.getElementById(anchorId);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}

function openReadingResearch(){
  window.location.href='./reading-cinemas/';
}

function setHomepageNumber(id,value){
  const el=document.getElementById(id);
  if(el)el.textContent=Math.max(0,Number(value)||0).toLocaleString();
}

async function syncHomepageEngagement(){
  try{
    const response = await fetch('/api/engagement', { cache: 'no-store' });
    if (!response.ok) throw new Error('Engagement request failed: ' + response.status);
    const { stats, commentCount } = await response.json();

    setHomepageNumber('hero-views',stats.views);
    setHomepageNumber('hero-likes',stats.likes);
    setHomepageNumber('hero-comments',commentCount);
    setHomepageNumber('kpi-views',stats.views);
    setHomepageNumber('kpi-likes',stats.likes);
    setHomepageNumber('kpi-shares',stats.shares);
  }catch(error){
    console.warn('Strategy Lab engagement could not be loaded.',error);
  }
}

function handleHomepageHash(){
  const anchor=(window.location.hash||'').replace(/^#/,'');
  if(anchor==='home-reports'||anchor==='home-about'){
    requestAnimationFrame(()=>{
      const el=document.getElementById(anchor);
      if(el)el.scrollIntoView({behavior:'auto',block:'start'});
    });
  }
}

syncHomepageEngagement();
window.setInterval(syncHomepageEngagement,20000);
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible')syncHomepageEngagement();
});
handleHomepageHash();
