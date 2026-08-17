const STRATEGY_LAB_SUPABASE_URL='https://vymskmbhgajwigrzwlag.supabase.co';
const STRATEGY_LAB_SUPABASE_KEY='sb_publishable_JkUqreLkHMOItFWswp6wmg_fjtnP_R8';
const STRATEGY_LAB_PROJECT_KEY='reading-cinemas';

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

function strategyLabApiHeaders(extra={}){
  return {
    apikey:STRATEGY_LAB_SUPABASE_KEY,
    Authorization:'Bearer '+STRATEGY_LAB_SUPABASE_KEY,
    ...extra
  };
}

async function strategyLabApiGet(path){
  const response=await fetch(STRATEGY_LAB_SUPABASE_URL+'/rest/v1/'+path,{
    method:'GET',
    headers:strategyLabApiHeaders({Accept:'application/json'}),
    cache:'no-store'
  });
  if(!response.ok)throw new Error('Supabase request failed: '+response.status);
  return response.json();
}

function setHomepageNumber(id,value){
  const el=document.getElementById(id);
  if(el)el.textContent=Math.max(0,Number(value)||0).toLocaleString();
}

async function syncHomepageEngagement(){
  try{
    const project=encodeURIComponent(STRATEGY_LAB_PROJECT_KEY);
    const [statsRows,comments]=await Promise.all([
      strategyLabApiGet('engagement_stats?select=views,likes,shares&project_key=eq.'+project+'&limit=1'),
      strategyLabApiGet('comments?select=id&project_key=eq.'+project+'&is_hidden=eq.false')
    ]);
    const stats=Array.isArray(statsRows)&&statsRows[0]?statsRows[0]:{views:0,likes:0,shares:0};
    const commentCount=Array.isArray(comments)?comments.length:0;

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
