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

function readStoredNumber(key){
  try{
    const raw=localStorage.getItem(key);
    if(raw===null)return null;
    const value=parseInt(raw,10);
    return Number.isFinite(value)?Math.max(0,value):null;
  }catch(error){
    return null;
  }
}

function readStoredComments(){
  try{
    const raw=localStorage.getItem('strategy-lab-report-reading-cinemas-comments');
    if(!raw)return null;
    const comments=JSON.parse(raw);
    return Array.isArray(comments)?comments.length:null;
  }catch(error){
    return null;
  }
}

function syncHomepageEngagement(){
  const views=readStoredNumber('strategy-lab-report-reading-cinemas-views');
  const likes=readStoredNumber('strategy-lab-report-reading-cinemas-likes');
  const shares=readStoredNumber('strategy-lab-report-reading-cinemas-shares');
  const comments=readStoredComments();

  if(views!==null){
    const hero=document.getElementById('hero-views');
    const kpi=document.getElementById('kpi-views');
    if(hero)hero.textContent=views.toLocaleString();
    if(kpi)kpi.textContent=views.toLocaleString();
  }
  if(likes!==null){
    const hero=document.getElementById('hero-likes');
    const kpi=document.getElementById('kpi-likes');
    if(hero)hero.textContent=likes.toLocaleString();
    if(kpi)kpi.textContent=likes.toLocaleString();
  }
  if(shares!==null){
    const kpi=document.getElementById('kpi-shares');
    if(kpi)kpi.textContent=shares.toLocaleString();
  }
  if(comments!==null){
    const hero=document.getElementById('hero-comments');
    if(hero)hero.textContent=comments.toLocaleString();
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
handleHomepageHash();
