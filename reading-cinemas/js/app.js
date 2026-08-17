const REPORT_PAGES=[
  {id:'rc-main',key:'rcmain',nav:'Overview',title:'Reading Cinemas Australia',deck:'An independent commercial strategy review covering nine strategic initiatives, original research and eight innovation concepts, with selected ideas developed further into product experiences and a digital magazine, alongside original marketing creative. All work was developed from publicly available information.',action:'Explore deliverables &darr;',target:'overview-deliverables'},
  {id:'strategy-report',key:'sr',nav:'01 Strategy Report',title:'Strategy Report: From Idle Capacity to Revenue Growth',deck:'A commercial strategy for Reading Cinemas Australia focused on improving utilisation, growing revenue from existing assets, strengthening customer habits and building a more effective digital and local cinema experience.',action:'View report &darr;',target:'strategy-full-report'},
  {id:'presentation',key:'pres',nav:'02 Presentation',title:'Presentation: From Idle Capacity to Revenue Growth',deck:'An executive presentation summarising the Reading Cinemas commercial case, nine strategic initiatives, implementation roadmap, key risks and directional commercial impact.',action:'View presentation &darr;',target:'presentation-full-deck'},
  {id:'evidence-review',key:'ev',nav:'03 Evidence Review',title:'Evidence Review: Cinema Revenue Growth, Utilisation and Customer Behaviour',deck:'A review of industry evidence, academic research and customer behaviour studies behind the commercial opportunities explored in the Reading Cinemas strategy.',action:'View review &darr;',target:'evidence-full-review'},
  {id:'demographic',key:'dem',nav:'04 Demographic Research',title:'Demographic Research: Audience &amp; Programming Insights Across Nine Victorian Locations',deck:'A demographic and cultural catchment analysis of Reading Cinemas&rsquo; nine Victorian locations, examining how population, age, household, cultural and language patterns could inform more location-aware film programming.',action:'View report &darr;',target:'demographic-full-report'},
  {id:'movie-research',key:'mr',nav:'05 Movie Research',title:'Movie Research: July to December 2026 Programming Recommendations',deck:'A six-month programming shortlist for Reading Cinemas Victoria, identifying films worth testing based on release timing, country, language, audience fit, local demographic opportunity and likely demand.',action:'View report &darr;',target:'movie-full-report'},
  {id:'future-concepts',key:'fc',nav:'06 Future Concepts',title:'Future Concepts: Innovation Concepts for Reading Cinemas Australia',deck:'Eight concepts exploring how Reading Cinemas could approach customer experience, digital engagement, accessibility, movie discovery, programming intelligence and new in-cinema experiences.',action:'View report &darr;',target:'future-full-report'},
  {id:'reelio',key:'rl',nav:'07 Reelio Product Proposal',title:'Reelio: AI Cinema Concierge for Reading Cinemas',deck:'Reelio is a product proposal for an AI-powered cinema concierge that helps customers discover movies, find suitable sessions, locate cinemas and access cinema-related information through a conversational experience.',action:'VIEW REPORT',target:'reelio-product-proposal'},
  {id:'audience-pulse',key:'ap',nav:'08 Audience Pulse',title:'Audience Pulse: Audience Signals for Smarter Film Programming',deck:'Audience Pulse is a lightweight voting concept that lets Reading Cinemas customers quickly signal which upcoming films they would be interested in watching. Customers browse selected titles, choose the films that interest them and submit their pulse in under a minute.',action:'VIEW PRODUCT'},
  {id:'digital-magazine',key:'dm',nav:'09 The Reading Preview',title:'The Reading Preview: A Monthly Digital Cinema Magazine',deck:'The Reading Preview is a monthly digital magazine concept for Reading Cinemas, bringing upcoming films, cinema experiences, events, rewards and other moviegoing content into one curated issue. It gives customers another way to discover what is happening across Reading Cinemas beyond session listings.',action:'VIEW MAGAZINE',target:'reading-preview-magazine'},
  {id:'reading-pulse',key:'rp',nav:'10 Reading Pulse',title:'Reading Pulse: Film Intelligence for Smarter Programming Decisions',deck:'Reading Pulse is an internal film-intelligence platform that helps Reading Cinemas track theatrical releases, identify promising films and understand where those films may have stronger audience fit across its Victorian cinema network.',action:''},
  {id:'posterscan',key:'ps',nav:'11 PosterScan',title:'PosterScan: Turning Movie Posters Into Booking Journeys',deck:'PosterScan turns a physical movie poster into an interactive mobile journey where customers can watch the trailer, explore movie information, view sessions and continue into booking.',action:''},
  {id:'marketing-ads',key:'ma',nav:'12 Marketing Ads',title:'Marketing Ads: Creative Campaign Visuals for Reading Cinemas',deck:'Five example campaign concepts showing how ideas from this project could translate into marketing for Reading Cinemas customers. I developed the concepts, messaging and creative direction, using generative design tools to support the visual mockups.',action:''}
];
const ALL=[...REPORT_PAGES.map(p=>p.id)];
const PAGE_ROUTES={
  'reading-cinemas':'rc-main',
  'report-001-overview':'rc-main',
  'strategy-report':'strategy-report',
  presentation:'presentation',
  'evidence-review':'evidence-review',
  'demographic-research':'demographic',
  'movie-research':'movie-research',
  'future-concepts':'future-concepts',
  'reelio-product-proposal':'reelio',
  'audience-pulse':'audience-pulse',
  'digital-magazine':'digital-magazine',
  'reading-pulse':'reading-pulse',
  posterscan:'posterscan',
  'marketing-ads':'marketing-ads'
};
const PAGE_ROUTE_BY_ID={
  'rc-main':'reading-cinemas',
  'strategy-report':'strategy-report',
  presentation:'presentation',
  'evidence-review':'evidence-review',
  demographic:'demographic-research',
  'movie-research':'movie-research',
  'future-concepts':'future-concepts',
  reelio:'reelio-product-proposal',
  'audience-pulse':'audience-pulse',
  'digital-magazine':'digital-magazine',
  'reading-pulse':'reading-pulse',
  posterscan:'posterscan',
  'marketing-ads':'marketing-ads'
};
const PAGE_DOCUMENT_TITLES={
  home:'Strategy Lab | Akash Joel David',
  'rc-main':'Reading Cinemas Australia | Strategy Lab',
  'strategy-report':'Strategy Report | Reading Cinemas | Strategy Lab',
  presentation:'Presentation | Reading Cinemas | Strategy Lab',
  'evidence-review':'Evidence Review | Reading Cinemas | Strategy Lab',
  demographic:'Demographic Research | Reading Cinemas | Strategy Lab',
  'movie-research':'Movie Research | Reading Cinemas | Strategy Lab',
  'future-concepts':'Future Concepts | Reading Cinemas | Strategy Lab',
  reelio:'Reelio Product Proposal | Reading Cinemas | Strategy Lab',
  'audience-pulse':'Audience Pulse | Reading Cinemas | Strategy Lab',
  'digital-magazine':'The Reading Preview | Reading Cinemas | Strategy Lab',
  'reading-pulse':'Reading Pulse | Reading Cinemas | Strategy Lab',
  posterscan:'PosterScan | Reading Cinemas | Strategy Lab',
  'marketing-ads':'Marketing Ads | Reading Cinemas | Strategy Lab'
};
let activeRouteId=null;

const READING_CINEMAS_REPORT_ID='reading-cinemas';
const STRATEGY_REPORTS=[READING_CINEMAS_REPORT_ID];
const REPORT_001_KEY=READING_CINEMAS_REPORT_ID;
const REPORT_001_VIEWS_KEY='strategy-lab-report-reading-cinemas-views';
const REPORT_001_LIKES_KEY='strategy-lab-report-reading-cinemas-likes';
const REPORT_001_LIKED_KEY='strategy-lab-report-reading-cinemas-liked';
const REPORT_001_COMMENTS_KEY='strategy-lab-report-reading-cinemas-comments';
const REPORT_001_COMMENTS_CLEAR_KEY='strategy-lab-report-reading-cinemas-comments-cleared-20260815';
const REPORT_001_SHARES_KEY='strategy-lab-report-reading-cinemas-shares';
const SITE_BASE_URL='';
const REPORT_001_SHARE_TITLE='Reading Cinemas Australia | Strategy Lab';
const REPORT_001_SHARE_TEXT='An independent commercial strategy review of Reading Cinemas Australia by Akash Joel David.';
const REPORT_001_CANONICAL_HASH='reading-cinemas';
const STRATEGY_LAB_SUPABASE_URL='https://vymskmbhgajwigrzwlag.supabase.co';
const STRATEGY_LAB_SUPABASE_KEY='sb_publishable_JkUqreLkHMOItFWswp6wmg_fjtnP_R8';
const STRATEGY_LAB_SUPABASE_PROJECT_KEY='reading-cinemas';
const STRATEGY_LAB_VISITOR_ID_KEY='strategy-lab-supabase-visitor-id';
const STRATEGY_LAB_LIKED_STATE_KEY='strategy-lab-supabase-reading-cinemas-liked';
const STRATEGY_LAB_VIEW_SESSION_ID_KEY='strategy-lab-supabase-reading-cinemas-view-session-id';
const STRATEGY_LAB_VIEW_RECORDED_KEY='strategy-lab-supabase-reading-cinemas-view-recorded';
function isReport001Key(key){
  return REPORT_PAGES.some(p=>p.key===key);
}
function report001Keys(){
  return REPORT_PAGES.map(p=>p.key);
}


function routeFromHash(){
  return decodeURIComponent((window.location.hash||'').replace(/^#/, '')).trim();
}

function pageIdFromRoute(route){
  return PAGE_ROUTES[route]||null;
}

function routeForPage(id){
  return PAGE_ROUTE_BY_ID[id]||'reading-cinemas';
}

function updateDocumentTitle(id){
  document.title=PAGE_DOCUMENT_TITLES[id]||PAGE_DOCUMENT_TITLES.home;
}

function activatePage(id,options={}){
  if(document.body.classList.contains('report-nav-open'))closeReportNavDrawer(false);
  const pageId=ALL.includes(id)?id:'rc-main';
  ALL.forEach(p=>{const el=document.getElementById('page-'+p);if(el)el.classList.remove('active');});
  const t=document.getElementById('page-'+pageId);
  if(t)t.classList.add('active');
  updateDocumentTitle(pageId);
  activeRouteId=pageId;
  if(options.scrollTop!==false)window.scrollTo(0,0);
  if(pageId==='presentation'){
    requestAnimationFrame(()=>{presentationFitWidth(true);updatePresentationActive(presentationState.slide||1);});
  }
  if(pageId==='evidence-review'){
    requestAnimationFrame(()=>{evidenceFitWidth(true);updateEvidenceActive(evidenceState.page||1);});
  }
  if(pageId==='demographic'){
    requestAnimationFrame(()=>{demographicFitWidth(true);updateDemographicActive(demographicState.page||1);});
  }
  if(pageId==='movie-research'){
    requestAnimationFrame(()=>{movieFitWidth(true);updateMovieActive(movieState.page||1);});
  }
  if(pageId==='reelio'){
    requestAnimationFrame(()=>{reelioFitWidth(true);updateReelioActive(reelioState.page||1);});
  }
  if(pageId==='digital-magazine'){
    requestAnimationFrame(()=>readingPreviewRender());
  }
  if(pageId==='future-concepts'){
    requestAnimationFrame(()=>requestAnimationFrame(alignFutureConceptHeroImages));
  }
  if(options.track!==false)trackPageView(pageId==='home'?'home':getPageKey(pageId));
}

function navigateToRoute(id,options={}){
  const pageId=ALL.includes(id)?id:'rc-main';
  const route=routeForPage(pageId);
  const targetHash='#'+route;
  const currentHash=window.location.hash||'';
  if(currentHash!==targetHash){
    if(options.replace){
      history.replaceState({page:pageId},'',targetHash);
    }else{
      history.pushState({page:pageId},'',targetHash);
    }
  }
  activatePage(pageId,{scrollTop:options.scrollTop!==false,track:options.track!==false});
}

function showPage(id,options={}){
  navigateToRoute(id,options);
}

function handleRouteChange(options={}){
  const route=routeFromHash();
  const pageId=pageIdFromRoute(route);
  if(!pageId){
    navigateToRoute('rc-main',{replace:true,scrollTop:true,track:options.track!==false});
    return;
  }
  const canonicalRoute=routeForPage(pageId);
  if(route!==canonicalRoute){
    history.replaceState({page:pageId},'','#'+canonicalRoute);
  }
  if(activeRouteId===pageId){
    updateDocumentTitle(pageId);
    return;
  }
  activatePage(pageId,{scrollTop:options.scrollTop!==false,track:options.track!==false});
}

function initRouter(){
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  if(!routeFromHash()){
    navigateToRoute('rc-main',{replace:true,scrollTop:true,track:false});
  }else{
    handleRouteChange({scrollTop:true,track:false});
  }
  trackPageView(getPageKey(activeRouteId||'rc-main'));
}

function goHome(){
  window.location.href='../index.html';
}

function scrollHomeTo(anchorId){
  window.location.href='../index.html#'+anchorId;
}

function navTo(anchorId){
  window.location.href='../index.html#'+anchorId;
}

function reportInfo(id){
  return REPORT_PAGES.find(p=>p.id===id)||REPORT_PAGES[0];
}

function getPageKey(id){
  return reportInfo(id).key;
}

function allReportsLink(){
  return '<button onclick="navTo(\'home-reports\')">&larr; All Reports</button><span class="crumb-divider">/</span><span>Report 001</span>';
}

function reportPills(info){
  const pageTypeLabels={
    'rc-main':'OVERVIEW',
    'strategy-report':'REPORT',
    'presentation':'PRESENTATION',
    'evidence-review':'EVIDENCE REVIEW',
    'demographic':'RESEARCH 01',
    'movie-research':'RESEARCH 02',
    'future-concepts':'CONCEPTS',
    'reelio':'PRODUCT 01',
    'audience-pulse':'PRODUCT 02',
    'digital-magazine':'MAGAZINE',
    'reading-pulse':'PRODUCT 03',
    'posterscan':'PRODUCT 04',
    'marketing-ads':'CAMPAIGN'
  };
  const pageType=pageTypeLabels[info&&info.id]||'OVERVIEW';
  return '<span class="badge">'+pageType+'</span><span class="badge">CINEMA &middot; ENTERTAINMENT</span><span class="badge">AUSTRALIA</span><span class="badge">16 August 2026</span>';
}

function reportByline(key){
  return '<span>By <strong>Akash Joel David</strong></span><span class="sep">&middot;</span><span class="view-meta">&#128065; <span id="views-'+key+'">0</span> views</span><span class="sep">&middot;</span><span>16 August 2026</span>';
}

function reportAtGlance(info){
  const items=info.id==='rc-main'
    ? [
      ['12','Project Sections'],
      ['09','Strategic Initiatives'],
      ['04','Product Concepts'],
      ['09','Victorian Locations Analysed']
    ]
    : info.id==='strategy-report'
      ? [
        ['09','Strategic Initiatives'],
        ['03','Strategic Clusters'],
        ['36 Months','Roadmap'],
        ['06','Success Metric Areas']
      ]
      : info.id==='presentation'
        ? [
          ['09','Strategic Initiatives'],
          ['03','Strategic Clusters'],
          ['04','Roadmap Phases'],
          ['06','Key Risks']
        ]
        : info.id==='evidence-review'
          ? [
            ['05','Evidence Areas'],
            ['14','Referenced Sources'],
            ['04','Evidence Source Types'],
            ['07','Evidence Principles']
          ]
          : info.id==='demographic'
            ? [
              ['09','Victorian Locations'],
              ['2021 Census','Primary Data Source'],
              ['Catchment-Based','Audience Analysis'],
              ['Location-Aware','Programming Direction']
            ]
            : info.id==='movie-research'
              ? [
                ['66','Films Considered'],
                ['06 Months','Programming Window'],
                ['09','Victorian Locations'],
                ['Test & Learn','Programming Approach']
              ]
              : info.id==='future-concepts'
                ? [
                  ['08','Innovation Concepts'],
                  ['07','Customer-Facing Concepts'],
                  ['04','In-Cinema Concepts'],
                  ['01','Internal Intelligence Tool']
                ]
                  : info.id==='reelio'
                    ? [
                      ['AI Cinema Concierge','Natural-language movie discovery'],
                      ['Website-First MVP','Controlled website pilot'],
                      ['Discovery to Booking','Movies, sessions and booking guidance'],
                      ['Customer + Business Value','Less friction, stronger customer insight']
                    ]
                    : info.id==='reading-pulse'
                      ? [
                        ['Theatrical Intelligence','Current + upcoming film tracking'],
                        ['Global Film Radar','Discover theatrical releases worldwide'],
                        ['Location Intelligence','Match films to Victorian audiences'],
                        ['Decision Support','Pursue, test, monitor or pass']
                      ]
                      : info.id==='audience-pulse'
                        ? [
                          ['Audience Signals','Quick movie-interest voting'],
                          ['Pre-Show Engagement','Designed for in-cinema participation'],
                          ['Title Feedback','See what audiences want next'],
                          ['Fast Interaction','Under-one-minute experience']
                        ]
                        : info.id==='posterscan'
                          ? [
                            ['QR to Mobile','Poster becomes an interactive journey'],
                            ['Trailer + Movie Info','Instant discovery before booking'],
                            ['Session Redirection','Move quickly into showtimes'],
                            ['Premium Experience','Promote Gold Lounge and featurettes']
                          ]
                          : info.id==='digital-magazine'
                            ? [
                              ['Monthly Digital Issue','A curated Reading Cinemas guide'],
                              ['16-Page Edition','August 2026 magazine'],
                              ['Films + Experiences','Releases, events and cinema formats'],
                              ['Rewards + More','Food, offers and member content']
                            ]
                            : info.id==='marketing-ads'
                              ? [
                                ['05 Campaign Concepts','Built around different audience needs'],
                                ['Original Copy','Written for each concept'],
                                ['Multiple Customer Moments','From discovery to loyalty'],
                                ['Multi-Channel Potential','Across key cinema channels']
                              ]
                  : [
        ['09','Strategic Initiatives'],
        ['12','Project Sections'],
        ['36 Months','Roadmap'],
        ['09','Victorian Locations Analysed']
      ];
  const title=info.id==='presentation'?'Presentation At A Glance':info.id==='evidence-review'?'Review At A Glance':info.id==='digital-magazine'?'Magazine At A Glance':info.id==='marketing-ads'?'Campaign At A Glance':(info.id==='reelio'||info.id==='reading-pulse'||info.id==='audience-pulse'||info.id==='posterscan')?'Product At A Glance':'Report At A Glance';
  return '<aside class="report-glance"><div class="report-glance-title">'+title+'</div><div class="report-glance-grid">'+items.map(item=>'<div class="report-glance-item"><div class="report-glance-number">'+item[0]+'</div><div class="report-glance-label">'+item[1]+'</div></div>').join('')+'</div></aside>';
}

function siteFooter(){
  return '<footer class="footer"><span>&copy; 2026 Akash Joel David &middot; Melbourne, Australia</span><span>All analyses use publicly available information &middot; No insider data &middot; Anonymous engagement metrics</span><span class="mono">Strategy Lab</span></footer>';
}

function reportEngagement(info){
  const key=info.key;
  if(info&&info.id==='reelio'){
    return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div><button class="engage-action" onclick="scrollToReportTarget(\'reelio-product-proposal\')">VIEW REPORT</button>';
  }
  if(info&&info.id==='reading-pulse'){
    return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div>';
  }
  if(info&&info.id==='audience-pulse'){
    return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div><button class="engage-action" onclick="scrollToReportTarget(\'try-audience-pulse\')">VIEW PRODUCT</button>';
  }
  if(info&&info.id==='posterscan'){
    return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div>';
  }
  if(info&&info.id==='marketing-ads'){
    return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div>';
  }
  const target=info.target||'content-'+info.id;
  return '<div class="engage-left"><button class="engage-btn" id="like-'+key+'" onclick="toggleLike(\''+key+'\')">&hearts; Like <span class="engage-count" id="like-count-'+key+'">0</span></button><button class="engage-btn" onclick="document.getElementById(\'disc-'+key+'\').scrollIntoView({behavior:\'smooth\'})">&#128172; Comment <span class="engage-count" id="comment-count-'+key+'">0</span></button><button class="engage-btn" onclick="shareReportForKey(\''+key+'\')">&nearr; Share <span class="engage-count" id="share-count-'+key+'">0</span></button></div><button class="engage-action" onclick="scrollToReportTarget(\''+target+'\')">'+info.action+'</button>';
}

function scrollToReportTarget(target){
  const el=document.getElementById(target);
  if(!el)return;
  const nav=document.querySelector('.page.active .nav')||document.querySelector('.nav');
  const offset=(nav?nav.getBoundingClientRect().height:72)+28;
  const top=el.getBoundingClientRect().top+window.pageYOffset-offset;
  window.scrollTo({top:Math.max(0,top),left:0,behavior:'smooth'});
}

function reportNavButtons(activeId,mode='sidebar'){
  const handler=mode==='drawer'?'navigateFromReportDrawer':'showPage';
  return REPORT_PAGES.map(p=>'<button class="ans-link '+(p.id===activeId?'active':'')+'" onclick="'+handler+'(\''+p.id+'\')">'+p.nav+'</button>').join('');
}

function reportSidebar(activeId){
  return '<div class="article-nav-sidebar"><div class="ans-header">In This Report</div>'+reportNavButtons(activeId,'sidebar')+'</div>';
}

let reportNavReturnFocus=null;
let reportNavScrollY=0;
let reportNavBodyStyles=null;

function ensureReportNavDrawer(){
  let drawer=document.getElementById('report-nav-drawer');
  if(drawer)return drawer;

  const backdrop=document.createElement('div');
  backdrop.id='report-nav-backdrop';
  backdrop.className='report-nav-backdrop';
  backdrop.setAttribute('aria-hidden','true');
  backdrop.addEventListener('click',()=>closeReportNavDrawer());
  document.body.appendChild(backdrop);

  drawer=document.createElement('aside');
  drawer.id='report-nav-drawer';
  drawer.className='report-nav-drawer';
  drawer.setAttribute('role','dialog');
  drawer.setAttribute('aria-modal','true');
  drawer.setAttribute('aria-labelledby','report-nav-drawer-title');
  drawer.setAttribute('aria-hidden','true');
  drawer.innerHTML='<div class="report-nav-drawer-head"><span id="report-nav-drawer-title">In This Report</span><button class="report-nav-drawer-close" type="button" aria-label="Close In This Report navigation" onclick="closeReportNavDrawer()">&times;</button></div><div class="report-nav-drawer-list" id="report-nav-drawer-list"></div>';
  document.body.appendChild(drawer);
  return drawer;
}

function setReportNavMenuExpanded(expanded){
  document.querySelectorAll('.report-nav-menu-btn').forEach(btn=>{
    const active=btn.closest('.page')?.classList.contains('active');
    btn.setAttribute('aria-expanded',expanded&&active?'true':'false');
  });
}

function openReportNavDrawer(){
  if(window.innerWidth>1040)return;
  const activeId=REPORT_PAGES.some(p=>p.id===activeRouteId)?activeRouteId:'rc-main';
  const drawer=ensureReportNavDrawer();
  const backdrop=document.getElementById('report-nav-backdrop');
  const list=document.getElementById('report-nav-drawer-list');
  if(!drawer||!backdrop||!list)return;

  list.innerHTML=reportNavButtons(activeId,'drawer');
  reportNavReturnFocus=document.activeElement;
  reportNavScrollY=window.scrollY||window.pageYOffset||0;
  reportNavBodyStyles={
    position:document.body.style.position,
    top:document.body.style.top,
    left:document.body.style.left,
    right:document.body.style.right,
    width:document.body.style.width,
    overflow:document.body.style.overflow
  };
  document.body.classList.add('report-nav-open');
  document.body.style.position='fixed';
  document.body.style.top=(-reportNavScrollY)+'px';
  document.body.style.left='0';
  document.body.style.right='0';
  document.body.style.width='100%';
  document.body.style.overflow='hidden';
  backdrop.classList.add('is-open');
  drawer.classList.add('is-open');
  backdrop.setAttribute('aria-hidden','false');
  drawer.setAttribute('aria-hidden','false');
  setReportNavMenuExpanded(true);
  requestAnimationFrame(()=>drawer.querySelector('.report-nav-drawer-close')?.focus({preventScroll:true}));
}

function closeReportNavDrawer(restoreFocus=true){
  const drawer=document.getElementById('report-nav-drawer');
  const backdrop=document.getElementById('report-nav-backdrop');
  if(!drawer&&!backdrop)return;

  document.body.classList.remove('report-nav-open');
  const savedScrollY=reportNavScrollY;
  if(reportNavBodyStyles){
    document.body.style.position=reportNavBodyStyles.position;
    document.body.style.top=reportNavBodyStyles.top;
    document.body.style.left=reportNavBodyStyles.left;
    document.body.style.right=reportNavBodyStyles.right;
    document.body.style.width=reportNavBodyStyles.width;
    document.body.style.overflow=reportNavBodyStyles.overflow;
    reportNavBodyStyles=null;
    window.scrollTo({top:savedScrollY,left:0,behavior:'auto'});
  }
  if(backdrop){backdrop.classList.remove('is-open');backdrop.setAttribute('aria-hidden','true');}
  if(drawer){drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');}
  setReportNavMenuExpanded(false);
  if(restoreFocus&&reportNavReturnFocus&&reportNavReturnFocus.isConnected){
    try{reportNavReturnFocus.focus({preventScroll:true});}catch(e){reportNavReturnFocus.focus();}
  }
  reportNavReturnFocus=null;
}

function navigateFromReportDrawer(id){
  closeReportNavDrawer(false);
  showPage(id);
}

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&document.body.classList.contains('report-nav-open'))closeReportNavDrawer();
});
window.addEventListener('resize',()=>{
  if(window.innerWidth>1040&&document.body.classList.contains('report-nav-open'))closeReportNavDrawer(false);
});

function discussionBlock(key){
  return '<div class="comments-section" id="disc-'+key+'"><div class="comments-header"><div class="comments-title">Discussion <span id="disc-count-'+key+'">(0 comments)</span></div><div class="comments-anon">ANONYMOUS &middot; NO ACCOUNT NEEDED</div></div><div class="comment-form"><textarea id="disc-text-'+key+'" class="comment-textarea" placeholder="Share your thoughts on this report..."></textarea><div class="comment-form-row"><input id="disc-name-'+key+'" class="comment-name-input" placeholder="Name or initials (optional)"><button class="comment-submit" onclick="postComment(\''+key+'\')">Post comment &rarr;</button></div></div><div id="disc-list-'+key+'" class="comments-list"></div></div>';
}

function readingPulseProductContent(){
  const dashboard='AJD_StrategyLab_assets/reading-pulse/dashboard.png';
  const globalRadar='AJD_StrategyLab_assets/reading-pulse/global-radar.png';
  const locationIntel='AJD_StrategyLab_assets/reading-pulse/location-intelligence.png';
  const movieLocation='AJD_StrategyLab_assets/reading-pulse/movie-to-location.png';
  return `<div class="reading-pulse-product-page">
    <section class="demographic-summary demographic-section">
      <div class="section-label">About Reading Pulse</div>
      <p class="body-para">Reading Pulse brings theatrical film discovery, audience signals and location intelligence into one internal decision-support platform. It is designed to help programming teams move from simply finding films to deciding which titles may be worth pursuing, testing or monitoring.</p>
      <p class="body-para">Rather than treating every cinema as the same audience, the concept combines film characteristics with local catchment information to help identify where particular titles may have stronger relevance.</p>
    </section>

    <section class="reading-pulse-visual-section">
      <div class="reading-pulse-visual-head">
        <div class="section-label">See What Is Moving Globally</div>
        <p class="body-para">Reading Pulse gives the team a broader view of current and upcoming theatrical releases, including international and language-specific titles that may otherwise be easy to miss. It is designed around theatrical film intelligence, helping surface what is gaining attention and where programming opportunities may be emerging.</p>
      </div>
      <img class="reading-pulse-visual" src="${globalRadar}" alt="Reading Pulse Global Film Radar showing top theatrical films">
    </section>

    <section class="reading-pulse-visual-section">
      <div class="reading-pulse-visual-head">
        <div class="section-label">A Daily Programming Pulse</div>
        <p class="body-para">The dashboard gives programming teams a quick view of tracked theatrical films, priority opportunities and the recommended next action across the current film pool.</p>
      </div>
      <img class="reading-pulse-visual" src="${dashboard}" alt="Reading Pulse dashboard showing film metrics, decision breakdown and priority opportunities">
    </section>

    <section class="reading-pulse-visual-section">
      <div class="reading-pulse-visual-head">
        <div class="section-label">Different Cinemas. Different Audiences.</div>
        <p class="body-para">Reading Cinemas&rsquo; Victorian locations serve different audience catchments. Reading Pulse combines audience profiles with film characteristics to help identify where a title may have stronger local relevance. One film does not necessarily have the same opportunity at every cinema.</p>
      </div>
      <img class="reading-pulse-visual" src="${locationIntel}" alt="Reading Pulse Victoria Location Intelligence view showing Reading Cinemas catchment profiles">
    </section>

    <section class="reading-pulse-visual-section">
      <div class="reading-pulse-visual-head">
        <div class="section-label">Match the Film to the Right Cinema</div>
        <p class="body-para">Once a film is identified, Reading Pulse can compare it with individual Reading Cinemas locations and show where the strongest audience fit may exist, alongside the reason, suggested sessions and recommended next action.</p>
      </div>
      <img class="reading-pulse-visual" src="${movieLocation}" alt="Reading Pulse Movie-to-Location view showing film cards and location-fit detail">
    </section>

    <section class="reading-pulse-section">
      <div class="section-label">CineMatch</div>
      <p class="reading-pulse-cinematch">CineMatch is Reading Pulse&rsquo;s way of comparing films and highlighting which titles may be worth a closer look. It brings together signals such as audience reviews, current trends and box office performance to give each film a relative score.</p>
    </section>

    <section class="reading-pulse-section">
      <div class="section-label">From Signal to Action</div>
      <div class="reading-pulse-steps">
        <div class="reading-pulse-step"><div class="reading-pulse-step-num">01</div><h3 class="reading-pulse-card-title">Discover</h3><p>Track current and upcoming theatrical releases.</p></div>
        <div class="reading-pulse-step"><div class="reading-pulse-step-num">02</div><h3 class="reading-pulse-card-title">Assess</h3><p>Review film momentum, ratings, buzz and available signals.</p></div>
        <div class="reading-pulse-step"><div class="reading-pulse-step-num">03</div><h3 class="reading-pulse-card-title">Match</h3><p>Compare the film with Reading Cinemas audience catchments.</p></div>
        <div class="reading-pulse-step"><div class="reading-pulse-step-num">04</div><h3 class="reading-pulse-card-title">Act</h3><p>Pursue, test, monitor, shortlist or deprioritise.</p></div>
      </div>
    </section>

    <section class="reading-pulse-section">
      <div class="section-label">Other Product Capabilities</div>
      <div class="reading-pulse-capabilities">
        <div class="reading-pulse-capability"><h3 class="reading-pulse-card-title">Distributor Planner</h3><p>Move selected films into pursue, test, monitor or pass decisions.</p></div>
        <div class="reading-pulse-capability"><h3 class="reading-pulse-card-title">Watchlist</h3><p>Track films over time and surface changes in key signals.</p></div>
        <div class="reading-pulse-capability"><h3 class="reading-pulse-card-title">Shortlist</h3><p>Keep films Reading is seriously considering in one place.</p></div>
        <div class="reading-pulse-capability"><h3 class="reading-pulse-card-title">Film Detail</h3><p>View supporting evidence and film-specific intelligence.</p></div>
      </div>
    </section>

    <section class="demographic-summary demographic-section">
      <div class="section-label">Why Reading Pulse Matters</div>
      <p class="body-para">Reading Pulse gives programming teams a more structured way to discover theatrical opportunities, compare films against local audience fit and move from research toward a clear programming action.</p>
      <p class="body-para">Rather than treating every film or cinema the same, it brings global film discovery and local audience context into one workflow, helping the team decide what may be worth pursuing, testing, monitoring or passing on.</p>
    </section>
  </div>`;
}

function audiencePulseProductContent(){
  const preview='AJD_StrategyLab_assets/audience-pulse/product-preview.png';
  const qr='AJD_StrategyLab_assets/audience-pulse/qr.png';
  const productUrl='https://akashjoeldavid.github.io/AudiencePulse/';
  return `<div class="audience-pulse-product-page">
    <section class="demographic-summary demographic-section">
      <div class="section-label">About Audience Pulse</div>
      <p class="body-para">Audience Pulse is designed as a quick pre-show interaction that asks customers which upcoming films they would be interested in watching at Reading Cinemas. Rather than asking for feedback after a film, it captures audience interest before future programming decisions are made.</p>
      <p class="body-para">The aim is not to predict demand on its own, but to give Reading Cinemas another lightweight signal that can sit alongside programming judgement, local audience knowledge and actual cinema performance.</p>
    </section>

    <section class="audience-pulse-section">
      <div class="section-label">How It Works</div>
      <div class="audience-pulse-steps">
        <div class="audience-pulse-step"><div class="audience-pulse-step-num">01</div><h3 class="audience-pulse-card-title">Browse</h3><p>Customers see a curated selection of upcoming films.</p></div>
        <div class="audience-pulse-step"><div class="audience-pulse-step-num">02</div><h3 class="audience-pulse-card-title">Explore</h3><p>They can view additional movie information before deciding.</p></div>
        <div class="audience-pulse-step"><div class="audience-pulse-step-num">03</div><h3 class="audience-pulse-card-title">Select</h3><p>Customers tap the titles they would be interested in watching.</p></div>
        <div class="audience-pulse-step"><div class="audience-pulse-step-num">04</div><h3 class="audience-pulse-card-title">Submit</h3><p>Their selections are submitted as an audience-interest signal.</p></div>
      </div>
    </section>

    <section class="audience-pulse-section">
      <div class="section-label">Why It Matters</div>
      <div class="audience-pulse-benefits">
        <div class="audience-pulse-benefit"><h3 class="audience-pulse-card-title">Direct Audience Signal</h3><p>Capture movie interest directly from cinema customers.</p></div>
        <div class="audience-pulse-benefit"><h3 class="audience-pulse-card-title">Low-Friction Feedback</h3><p>Participation takes less than a minute.</p></div>
        <div class="audience-pulse-benefit"><h3 class="audience-pulse-card-title">Programming Signal</h3><p>Provide another lightweight signal when considering future titles.</p></div>
      </div>
    </section>

    <section class="audience-pulse-section">
      <div class="section-label">Product Preview</div>
      <p class="body-para audience-pulse-copy">Audience Pulse uses a simple Reading Cinemas-branded interface where customers can explore upcoming films, expand movie details, select the titles they would watch and submit their choices.</p>
      <div class="audience-pulse-preview">
        <img src="${preview}" alt="Audience Pulse product interface showing upcoming film voting cards and submit button">
      </div>
    </section>

    <section class="audience-pulse-section" id="try-audience-pulse">
      <div class="section-label">Try Audience Pulse</div>
      <div class="audience-pulse-try">
        <img class="audience-pulse-qr" src="${qr}" alt="QR code linking to the Audience Pulse live product">
        <div>
          <p class="body-para">Scan the QR code or click the button below to open Audience Pulse and try the live product.</p>
          <a class="audience-pulse-link" href="${productUrl}" target="_blank" rel="noopener">Open Audience Pulse</a>
        </div>
      </div>
    </section>
  </div>`;
}

function posterScanProductContent(){
  const preview='AJD_StrategyLab_assets/posterscan/product-preview.png';
  return `<div class="posterscan-product-page">
    <section class="demographic-summary demographic-section">
      <div class="section-label">About PosterScan</div>
      <p class="body-para">PosterScan sits between poster discovery and ticket booking. When a customer scans a QR code on or near a movie poster, they are taken to a mobile-first experience that gives them more context before choosing whether to watch the film and which session to book.</p>
      <p class="body-para">Beyond helping customers decide on a film, PosterScan gives Reading Cinemas a new way to make physical marketing more interactive and measurable. It creates a direct link between poster engagement, movie discovery and session interest, while keeping the final booking experience within Reading Cinemas&rsquo; existing system.</p>
    </section>

    <section class="posterscan-section">
      <div class="section-label">How It Works</div>
      <div class="posterscan-steps">
        <div class="posterscan-step"><div class="posterscan-step-num">01</div><h3 class="posterscan-card-title">Scan</h3><p>A customer scans a QR code placed on or near a movie poster.</p></div>
        <div class="posterscan-step"><div class="posterscan-step-num">02</div><h3 class="posterscan-card-title">Explore</h3><p>They land on a mobile-friendly page with trailer, information and movie highlights.</p></div>
        <div class="posterscan-step"><div class="posterscan-step-num">03</div><h3 class="posterscan-card-title">Decide</h3><p>They review sessions, reasons to watch and any relevant premium-experience prompts.</p></div>
        <div class="posterscan-step"><div class="posterscan-step-num">04</div><h3 class="posterscan-card-title">Book</h3><p>They choose a session and continue into the existing booking flow.</p></div>
      </div>
    </section>

    <section class="posterscan-section">
      <div class="section-label">Why It Matters</div>
      <div class="posterscan-benefits">
        <div class="posterscan-benefit"><h3 class="posterscan-card-title">Richer Poster Experience</h3><p>Turns static poster viewing into an interactive discovery layer.</p></div>
        <div class="posterscan-benefit"><h3 class="posterscan-card-title">Faster Decision-Making</h3><p>Helps customers move from curiosity to session selection more quickly.</p></div>
        <div class="posterscan-benefit"><h3 class="posterscan-card-title">Better Session Conversion</h3><p>Creates a clearer path from movie interest into booking intent.</p></div>
      </div>
    </section>

    <section class="posterscan-section">
      <div class="section-label">Product Preview</div>
      <p class="body-para posterscan-copy">The preview below shows what the PosterScan experience could look like after a customer scans a movie poster, bringing film details, trailers, session times and booking options into one mobile interface.</p>
      <div class="posterscan-preview">
        <img src="${preview}" alt="PosterScan mobile product preview showing The Odyssey trailer, movie information, sessions and booking path">
      </div>
    </section>

    <section class="posterscan-section posterscan-copy">
      <div class="section-label">From Poster To Booking</div>
      <p class="body-para">PosterScan creates a middle layer between physical cinema promotion and the existing Reading Cinemas booking flow. Instead of asking customers to remember a film and search for it later, the poster can take them directly into a richer movie-discovery experience.</p>
      <p class="body-para">Customers get more context before choosing a session, while Reading Cinemas gains a clearer path from in-cinema interest to booking.</p>
    </section>
  </div>`;
}

function digitalMagazineProductContent(){
  return `<div class="digital-magazine-product-page">
    <section class="digital-magazine-section digital-magazine-copy">
      <div class="section-label">A Monthly Cinema Guide</div>
      <p class="body-para">The Reading Preview gives Reading Cinemas a dedicated editorial space to bring together what is happening across the month. Instead of customers discovering films, experiences, rewards and events across separate parts of the website, the magazine packages them into one browseable monthly edition.</p>
      <p class="body-para">It also gives Reading Cinemas a recurring way to spotlight upcoming releases, promote its different cinema experiences and keep customers engaged beyond individual movie bookings. Each new issue gives audiences something fresh to discover while creating another reason to return to Reading each month.</p>
    </section>

    <section class="digital-magazine-section">
      <div class="section-label">Inside The August Issue</div>
      <p class="body-para digital-magazine-copy">The August 2026 edition brings together the main areas customers may want to browse before choosing what to watch.</p>
      <div class="digital-issue-list">
        <div class="digital-issue-item">Major August releases</div>
        <div class="digital-issue-item">International and cultural films</div>
        <div class="digital-issue-item">Special events</div>
        <div class="digital-issue-item">Reading Rewind classics</div>
        <div class="digital-issue-item">August release calendar</div>
        <div class="digital-issue-item">Cinema experiences</div>
        <div class="digital-issue-item">Food and drinks</div>
        <div class="digital-issue-item">Reading Rewards</div>
        <div class="digital-issue-item">Currently showing films</div>
        <div class="digital-issue-item">Films coming later in 2026</div>
      </div>
    </section>

    <section class="digital-magazine-section">
      <div class="section-label">What The Magazine Adds</div>
      <div class="digital-magazine-benefits">
        <div class="digital-magazine-benefit"><h3 class="digital-magazine-card-title">Earlier Discovery</h3><p>Customers can find upcoming films and events before they begin actively checking session times.</p></div>
        <div class="digital-magazine-benefit"><h3 class="digital-magazine-card-title">More Exposure For Smaller Titles</h3><p>International, cultural, event and catalogue films can receive dedicated space instead of relying only on session listings.</p></div>
        <div class="digital-magazine-benefit"><h3 class="digital-magazine-card-title">A Recurring Marketing Asset</h3><p>One monthly issue can be reused across the website, email, social media and in-cinema QR promotion.</p></div>
        <div class="digital-magazine-benefit"><h3 class="digital-magazine-card-title">More Reasons To Engage</h3><p>The magazine can highlight rewards, food, premium experiences and special events alongside films.</p></div>
      </div>
    </section>

    <section class="digital-magazine-section viewer-final-section" id="reading-preview-magazine">
      <div class="section-label">Read The August Issue</div>
      <p class="body-para digital-magazine-copy">Explore the August 2026 issue below and move through the magazine at your own pace using the navigation controls.</p>
      <div class="reading-preview-reader" id="reading-preview-reader" tabindex="0" aria-label="The Reading Preview August 2026 magazine viewer">
        <div class="reading-preview-toolbar">
          <button class="reading-preview-tool" id="reading-preview-pages" onclick="readingPreviewTogglePages()" title="Show page previews" aria-label="Show page previews">Pages</button>
          <span class="reading-preview-page-count" id="reading-preview-indicator">Cover &middot; 1 of 16</span>
          <button class="reading-preview-tool" onclick="readingPreviewZoom(-0.1)" title="Zoom out" aria-label="Zoom out">&minus;</button>
          <span class="reading-preview-zoom-value" id="reading-preview-zoom-value">100%</span>
          <button class="reading-preview-tool" onclick="readingPreviewZoom(0.1)" title="Zoom in" aria-label="Zoom in">+</button>
          <button class="reading-preview-tool" id="reading-preview-fit" onclick="readingPreviewFitWidth()" title="Fit current spread to width" aria-label="Fit current spread to width">Fit Width</button>
          <span class="reading-preview-spacer"></span>
          <button class="reading-preview-tool reading-preview-full" id="reading-preview-full" onclick="readingPreviewFullscreen()" title="Open full screen" aria-label="Open full screen">Full Screen</button>
          <button class="reading-preview-tool reading-preview-close" onclick="readingPreviewCloseFullscreen()" title="Exit full screen" aria-label="Exit full screen">Close &times;</button>
        </div>
        <div class="reading-preview-shell" id="reading-preview-shell">
          <aside class="reading-preview-rail" id="reading-preview-rail" aria-label="Magazine page previews">
            <div class="reading-preview-rail-title">Pages</div>
            <div class="reading-preview-thumbs" id="reading-preview-thumbs"></div>
          </aside>
          <div class="reading-preview-main">
            <div class="reading-preview-stage" id="reading-preview-stage">
              <button class="reading-preview-side-nav reading-preview-side-prev" id="reading-preview-prev" onclick="readingPreviewMove(-1)" title="Previous spread" aria-label="Previous spread">&lsaquo;</button>
              <div class="reading-preview-canvas" id="reading-preview-canvas">
                <div class="reading-preview-spread single" id="reading-preview-spread"></div>
              </div>
              <button class="reading-preview-side-nav reading-preview-side-next" id="reading-preview-next" onclick="readingPreviewMove(1)" title="Next spread" aria-label="Next spread">&rsaquo;</button>
            </div>
          </div>
        </div>
        <div class="reading-preview-drawer" id="reading-preview-drawer" aria-label="Magazine page preview drawer">
          <div class="reading-preview-drawer-panel">
            <div class="reading-preview-drawer-head"><span>Pages</span><button class="reading-preview-tool" onclick="readingPreviewTogglePages(false)">Close</button></div>
            <div class="reading-preview-thumbs" id="reading-preview-mobile-thumbs"></div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}

function defaultComments(){
  return [{name:'Alex',text:'Pretty good report',time:'11 Aug 2026, 11:48 pm'}];
}

function readComments(key){
  try{
    const raw=localStorage.getItem('ajd_comments_'+key);
    if(raw)return JSON.parse(raw);
  }catch(e){}
  return defaultComments();
}

function deliverableCards(){
  const desc={
    'strategy-report':'The main written strategy behind the project, bringing together the commercial analysis, nine strategic initiatives, three strategic clusters, measurement approach, risks and a phased 36-month roadmap.',
    'presentation':'A leadership-level summary of the strategy, bringing together the key findings, initiatives, commercial thinking and roadmap in a shorter visual format.',
    'evidence-review':'A review of academic and industry evidence behind the commercial opportunities explored in the strategy, covering cinema utilisation, weekday demand, food and beverage, online booking friction and local audience development.',
    'demographic':'A location-by-location analysis of the audiences surrounding Reading Cinemas&rsquo; nine Victorian locations, using Census data to identify differences in population, cultural background, language and potential programming relevance.',
    'movie-research':'A six-month programming shortlist covering selected films from July to December 2026, considering release timing, language, audience fit, local demographics and where titles may be worth testing.',
    'future-concepts':'Eight innovation concepts exploring movie discovery, customer engagement, accessibility, audience intelligence, programming and the wider cinema experience.',
    'reelio':'An AI cinema concierge concept designed to help customers decide what to watch, find relevant sessions and continue into the existing Reading Cinemas booking journey.',
    'audience-pulse':'An in-cinema QR voting concept that lets customers show interest in upcoming films before their current movie starts. It gives Reading Cinemas another lightweight audience-interest signal that could support future programming decisions.',
    'digital-magazine':'A monthly digital cinema magazine bringing together upcoming releases, international and cultural films, cinema experiences, rewards, food and other Reading Cinemas content in one curated issue.',
    'reading-pulse':'An internal film-intelligence platform that brings together theatrical film discovery, audience signals and location intelligence to help programming teams identify titles worth pursuing, testing or monitoring.',
    'posterscan':'A QR-based movie discovery concept that turns physical cinema posters into interactive mobile journeys where customers can watch trailers, explore film information, view sessions and continue into booking.',
    'marketing-ads':'Five campaign concepts showing how selected ideas from the strategy could translate into audience-facing advertising, including weekday value, online booking and broader Reading Cinemas brand messaging.'
  };
  const categories={
    'strategy-report':'REPORT',
    'presentation':'PRESENTATION',
    'evidence-review':'REPORT',
    'demographic':'RESEARCH',
    'movie-research':'RESEARCH',
    'future-concepts':'INNOVATION',
    'reelio':'PRODUCT',
    'audience-pulse':'PRODUCT',
    'digital-magazine':'CONTENT',
    'reading-pulse':'PRODUCT',
    'posterscan':'PRODUCT',
    'marketing-ads':'CREATIVE'
  };
  return REPORT_PAGES.filter(p=>p.id!=='rc-main').map((p,i)=>{
    const category=categories[p.id]||'PRODUCT';
    const title=p.id==='reelio'?'Reelio Product Proposal':p.id==='digital-magazine'?'The Reading Preview':p.id==='presentation'?'Presentation':p.title.split(':')[0];
    return '<div class="deliverable-card" onclick="showPage(\''+p.id+'\')"><div class="deliverable-eyebrow">'+String(i+1).padStart(2,'0')+' &middot; '+category+'</div><div class="deliverable-title">'+title+'</div><div class="deliverable-desc">'+desc[p.id]+'</div></div>';
  }).join('');
}

function overviewContent(){
  return '<div class="overview-editorial"><div class="overview-section overview-first"><h2>About This Project</h2><p>Being a cinephile, I&rsquo;ve always felt there is so much more that cinema businesses in Australia could be doing. That curiosity led me to Reading Cinemas. The more I looked into the business, the more potential I saw in the brand and in how it could compete more strongly with larger players such as Hoyts and Village Cinemas.</p><p>I began by looking at the commercial side of the cinema experience, including quieter sessions, weekday demand, food and beverage, booking, programming and the audiences around each location. From there, the project expanded into research, innovation concepts, product ideas, audience tools, content and marketing.</p><p>What started as a strategy exercise became a broader exploration of how Reading Cinemas could make better use of its existing assets, improve the customer experience and test new ways to build demand, engagement and revenue.</p></div><div class="overview-section"><h2>The Research Behind It</h2><p>I wanted the recommendations to be grounded in more than ideas, so I also looked at the evidence behind the areas I was focusing on.</p><p><strong>The Evidence Review</strong> looks at cinema utilisation, weekday attendance, food and beverage, booking friction and local audience development.</p><p><strong>The Demographic Research</strong> then goes deeper into Reading Cinemas&rsquo; nine Victorian locations using Census data to understand how the audience around each cinema differs. That highlighted different opportunities for multicultural, language-based, family, mainstream and local programming depending on the location.</p><p><strong>The Movie Research</strong> takes that one step further and looks at films that could be worth testing between July and December 2026, including where they may fit, the audience they could appeal to and how they could be programmed or promoted.</p></div><div class="overview-section"><h2>From Research Into Ideas</h2><p>Once I had worked through the research, I wanted to see what some of the opportunities could actually become. That led to a broader set of innovation concepts around movie discovery, audience intelligence, programming, accessibility, customer engagement and the cinema experience.</p><p>Some of those ideas stayed as concepts, while others were developed further into more detailed product ideas and working prototypes.</p></div><div class="overview-section"><h2>Products and Experiences</h2><p>Four of the ideas are explored in more detail as individual products.</p><p><strong>Reelio</strong> is an AI cinema concierge for helping customers decide what to watch, find suitable sessions and move into the existing Reading Cinemas booking journey.</p><p><strong>Audience Pulse</strong> is a quick in-cinema voting experience that gives Reading Cinemas another signal of customer interest in upcoming films.</p><p><strong>Reading Pulse</strong> is an internal film-intelligence platform for discovering theatrical releases, assessing audience fit and supporting programming decisions.</p><p><strong>PosterScan</strong> is a QR-based experience that turns physical movie posters into interactive paths to trailers, film information, sessions and booking.</p></div><div class="overview-section"><h2>Content and Marketing</h2><p>The project also explores different ways Reading Cinemas could stay visible and communicate with audiences beyond the booking journey.</p><p><strong>The Reading Preview</strong> is a monthly digital cinema magazine built around upcoming releases, international and cultural films, cinema experiences, rewards and other content that could give customers another reason to stay connected with the brand between visits.</p><p><strong>Marketing Ads</strong> takes selected recommendations from the strategy and turns them into campaign ideas, including weekday pricing, online booking and broader Reading Cinemas brand messaging.</p></div><div class="overview-section" id="overview-deliverables"><h2>Explore All Deliverables</h2><p>The project is split into twelve sections. Each one looks at a different part of the work, from the original strategy through to research, products and creative concepts.</p><div class="deliverable-grid">'+deliverableCards()+'</div></div></div>';
}

function strategyReportContent(){
  return `<div class="strategy-summary">
    <div class="section-label strategy-major-section">The Strategy In Short</div>
    <p class="body-para">Reading Cinemas operates in a high fixed-cost business where a meaningful amount of existing capacity remains underused during weekdays, off-peak sessions and screenings of lower-profile films.</p>
    <p class="body-para">The strategy looks at how more value could be created from the existing cinema network before relying on major physical expansion. The recommendations focus on pricing, customer experience and audience growth, with each initiative designed to be piloted, measured and scaled only where commercial impact is demonstrated.</p>
    <p class="body-para">Together, the initiatives aim to improve utilisation, increase revenue per visit, reduce friction in the booking journey and give customers stronger reasons to choose Reading Cinemas more often.</p>

    <div class="section-label strategy-major-section">The Commercial Challenge</div>
    <div class="strategy-grid">
      <div class="strategy-card"><div class="card-title">Off-Peak Underutilisation</div><p class="card-copy">Weekday and off-peak sessions carry the same major fixed operating costs as busier periods, but often have unused seat capacity that could be activated through clearer value-led pricing.</p></div>
      <div class="strategy-card"><div class="card-title">Lower-Profile Film Occupancy</div><p class="card-copy">Lower-profile films can struggle to fill sessions without blockbuster-level demand. Targeted value pricing can lower the barrier to trial, improve occupancy and create stronger word of mouth around lesser-known titles.</p></div>
      <div class="strategy-card"><div class="card-title">Digital Friction and Booking Fees</div><p class="card-copy">A cumbersome booking journey and online booking fees can suppress digital conversion, delay customer commitment and reduce the amount of useful customer data captured through online channels.</p></div>
      <div class="strategy-card"><div class="card-title">Regional Market Opportunity</div><p class="card-copy">High-population regional centres may offer a medium-term growth path where competitive intensity is lower. Any expansion should follow careful feasibility assessment, local demand analysis and staged entry.</p></div>
    </div>

    <div class="section-label strategy-major-section">Five Commercial Opportunities</div>
    <div class="opportunity-grid">
      <div class="opportunity-card"><div class="card-kicker">01</div><div class="card-title">Monetise Underutilised Capacity</div><p class="card-copy">Use targeted pricing on low-fill seats and sessions to turn otherwise idle capacity into incremental revenue without weakening peak-session yield.</p></div>
      <div class="opportunity-card"><div class="card-kicker">02</div><div class="card-title">Build Habitual Weekday Attendance</div><p class="card-copy">Give customers a clearer reason to choose a regular weekday cinema visit through a simple and repeatable value proposition.</p></div>
      <div class="opportunity-card"><div class="card-kicker">03</div><div class="card-title">Lift Food and Beverage Spend</div><p class="card-copy">Lift spend per visit through low-cost product upgrades, greater variety and locally relevant snack options.</p></div>
      <div class="opportunity-card"><div class="card-kicker">04</div><div class="card-title">Remove Digital Friction</div><p class="card-copy">Make discovery, booking and conversion easier across the online journey while reducing barriers that can delay or prevent purchase.</p></div>
      <div class="opportunity-card"><div class="card-kicker">05</div><div class="card-title">Expand Into High-Potential Regional Markets</div><p class="card-copy">Assess regional growth through evidence-led feasibility, local demand analysis and staged market entry.</p></div>
    </div>

    <div class="section-label strategy-major-section">The Nine Initiatives</div>
    <p class="body-para">The nine initiatives are organised into three strategic clusters that connect pricing, customer experience and audience growth.</p>
    <div class="cluster-card"><div class="cluster-head"><div class="cluster-label">Cluster A</div><div class="cluster-title">Pricing Optimisation</div><p class="cluster-copy">Activate idle inventory and smooth demand across the week through targeted, disciplined pricing.</p></div><div class="initiative-stack">
      <div class="initiative-card"><div class="card-kicker">3.1</div><div class="card-title">Differentiated Seat Pricing</div><p class="card-copy">Use seat location and session demand to introduce lower pricing only where capacity historically underperforms, while protecting peak-session and preferred-seat yield.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.2</div><div class="card-title">Value Pricing for Lower-Profile Titles</div><p class="card-copy">Use targeted value pricing across selected lower-profile screenings to encourage trial, improve occupancy and support positive word of mouth.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.3</div><div class="card-title">Weekday Value Pricing</div><p class="card-copy">Create a simple, repeatable weekday value offer that gives customers a stronger reason to attend during quieter Monday to Thursday periods.</p></div>
    </div></div>
    <div class="cluster-card"><div class="cluster-head"><div class="cluster-label">Cluster B</div><div class="cluster-title">Customer Experience</div><p class="cluster-copy">Improve the in-venue and digital experience to increase per-visit value and online conversion.</p></div><div class="initiative-stack">
      <div class="initiative-card"><div class="card-kicker">3.4</div><div class="card-title">Food and Beverage Differentiation</div><p class="card-copy">Introduce low-cost product upgrades and more distinctive snack options to increase perceived value and average spend per visit.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.5</div><div class="card-title">Digital Experience Redesign</div><p class="card-copy">Simplify discovery, session selection and booking so customers can move faster from intent to confirmed purchase.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.6</div><div class="card-title">Remove Online Booking Fees</div><p class="card-copy">Reduce a visible source of friction, encourage digital booking and strengthen customer data capture through online channels.</p></div>
    </div></div>
    <div class="cluster-card"><div class="cluster-head"><div class="cluster-label">Cluster C</div><div class="cluster-title">Audience Growth</div><p class="cluster-copy">Extend reach through regional expansion, localised programming and curated cinema experiences.</p></div><div class="initiative-stack">
      <div class="initiative-card"><div class="card-kicker">3.7</div><div class="card-title">Regional Expansion</div><p class="card-copy">Prioritise high-population regional markets through feasibility assessment, demand analysis and staged site development.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.8</div><div class="card-title">Localised Programming</div><p class="card-copy">Use local demographic and audience evidence to introduce a small number of culturally or locally relevant titles within each cinema&rsquo;s programming cycle.</p></div>
      <div class="initiative-card"><div class="card-kicker">3.9</div><div class="card-title">Curated Re-Screenings</div><p class="card-copy">Schedule selected classic and cult films in limited off-peak sessions to create nostalgia-led, event-style cinema experiences.</p></div>
    </div></div>

    <div class="section-label strategy-major-section">What Could Move</div>
    <p class="assumption-note">These figures are directional assumptions intended to illustrate the scale of the opportunity rather than serve as financial forecasts.</p>
    <div class="metric-strip">
      <div class="metric-card"><div class="metric-number">+10%</div><div class="metric-label">Off-Peak Utilisation</div><p class="card-copy">Potential uplift from targeted activation of low-fill seats and sessions.</p></div>
      <div class="metric-card"><div class="metric-number">+15 to 20%</div><div class="metric-label">Weekday Attendance</div><p class="card-copy">Potential attendance increase across Monday to Thursday from a consistent weekday value proposition.</p></div>
      <div class="metric-card"><div class="metric-number">+$1.50 to $2.00</div><div class="metric-label">F&amp;B Spend Per Visit</div><p class="card-copy">Potential increase in customer spend through low-cost product improvements and greater variety.</p></div>
      <div class="metric-card"><div class="metric-number">+3 to 5%</div><div class="metric-label">Online Conversion</div><p class="card-copy">Potential improvement from reducing booking friction and simplifying the digital purchase journey.</p></div>
    </div>
    <div class="regional-focus"><div><div class="regional-focus-label">Regional Focus</div><div class="regional-focus-markets">Bendigo &middot; Ballarat &middot; Geelong</div></div><p class="card-copy">Priority markets identified for further feasibility assessment and staged regional expansion.</p></div>

    <div class="section-label strategy-major-section">How Success Would Be Measured</div>
    <div class="measure-grid">
      <div class="measure-card"><div class="card-title">Attendance and Utilisation</div><p class="card-copy">Track overall attendance, off-peak fill rates and seat utilisation by category to determine whether idle capacity is being converted into incremental attendance.</p></div>
      <div class="measure-card"><div class="card-title">Revenue and Yield</div><p class="card-copy">Track total session revenue, average ticket yield by session type and revenue per available seat to determine whether growth is incremental rather than driven by discounting peak demand.</p></div>
      <div class="measure-card"><div class="card-title">Food and Beverage</div><p class="card-copy">Track average spend per customer, attachment rates for new products and total food and beverage revenue growth.</p></div>
      <div class="measure-card"><div class="card-title">Digital Adoption</div><p class="card-copy">Track online purchase rates, app usage, booking funnel drop-off and the shift from in-venue to online transactions.</p></div>
      <div class="measure-card"><div class="card-title">Customer Behaviour</div><p class="card-copy">Track repeat visitation, weekday versus weekend attendance shifts and response to re-screenings and localised programming by customer segment.</p></div>
      <div class="measure-card"><div class="card-title">Regional Performance</div><p class="card-copy">Track opening-month attendance, revenue ramp-up and market penetration relative to the local population to assess regional viability and rollout priorities.</p></div>
    </div>

    <div class="section-label strategy-major-section">36-Month Roadmap</div>
    <div class="roadmap">
      <div class="phase-card"><div class="phase-window">0 to 3 Months</div><div class="card-title">Quick Wins</div><ul><li>Pilot differentiated seat pricing.</li><li>Test value pricing for lower-profile films.</li><li>Launch weekday value pricing pilots.</li><li>Trial low-cost food and beverage upgrades.</li></ul><div class="phase-note">Focus on low-capital initiatives that can be tested quickly across representative Melbourne venues.</div></div>
      <div class="phase-card"><div class="phase-window">3 to 9 Months</div><div class="card-title">Digital Experience</div><ul><li>Redesign the app and booking journey.</li><li>Reduce friction across online checkout.</li><li>Pilot removal or reduction of booking fees.</li></ul><div class="phase-note">Use results from the first pilots to guide the scope of digital investment.</div></div>
      <div class="phase-card"><div class="phase-window">6 to 12 Months</div><div class="card-title">Programming</div><ul><li>Introduce localised programming trials.</li><li>Run curated classic and cult re-screenings.</li><li>Refine pricing and yield rules using pilot results.</li></ul><div class="phase-note">Use audience, demographic and performance evidence to guide programming decisions.</div></div>
      <div class="phase-card"><div class="phase-window">12 to 36 Months</div><div class="card-title">Regional Growth</div><ul><li>Conduct feasibility studies in priority regional markets.</li><li>Progress selective pilot site rollout where benchmarks are met.</li><li>Prioritise Bendigo, Ballarat and Geelong.</li><li>Consider acquisition opportunities where commercially justified.</li></ul><div class="phase-note">Regional expansion begins only once metropolitan performance has been validated.</div></div>
    </div>

    <div class="section-label strategy-major-section">What Needs To Be Managed</div>
    <div class="risk-grid">
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Revenue Dilution</div><div class="risk-meta"><span class="risk-pill">Likelihood Medium</span><span class="risk-pill">Impact High</span></div></div><p class="card-copy">Value pricing needs clear guardrails so it creates incremental demand rather than discounting customers who would have paid full price.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Restrict discounts to low-fill sessions and monitor revenue per available seat weekly.</p></div>
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Brand Perception</div><div class="risk-meta"><span class="risk-pill">Likelihood Low</span><span class="risk-pill">Impact High</span></div></div><p class="card-copy">Pricing offers need to feel like smart value rather than a weakening of the Reading Cinemas brand or overall experience.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Position pricing as value-led access while protecting premium pricing and experience.</p></div>
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Operational Complexity</div><div class="risk-meta"><span class="risk-pill">Likelihood Medium</span><span class="risk-pill">Impact Medium</span></div></div><p class="card-copy">New pricing and programming approaches can increase operational burden if pilots become unnecessarily complicated.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Use simple pilot rules and phased rollout before introducing broader complexity.</p></div>
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Technology Delivery</div><div class="risk-meta"><span class="risk-pill">Likelihood Medium</span><span class="risk-pill">Impact High</span></div></div><p class="card-copy">Digital experience changes introduce execution risk if investment moves faster than demonstrated customer or conversion improvement.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Use MVP releases with defined success criteria before committing further investment.</p></div>
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Regional Expansion</div><div class="risk-meta"><span class="risk-pill">Likelihood Low</span><span class="risk-pill">Impact High</span></div></div><p class="card-copy">New markets carry capital risk and demand uncertainty, making disciplined site selection essential.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Require feasibility studies and metropolitan performance benchmarks before capital deployment.</p></div>
      <div class="risk-card"><div class="risk-card-head"><div class="card-title">Change Management</div><div class="risk-meta"><span class="risk-pill">Likelihood Medium</span><span class="risk-pill">Impact Medium</span></div></div><p class="card-copy">Frontline teams need clear guidance and support as new workflows, pricing models and pilots are introduced.</p><div class="mitigation-label">Mitigation</div><p class="mitigation-copy">Provide clear operating guidelines, targeted training and venue involvement in pilot delivery.</p></div>
    </div>

    <div class="section-label strategy-major-section">The Strategic Takeaway</div>
    <div class="takeaway-box">
      <p class="body-para">The strongest opportunity is not any single initiative, but the way pricing, customer experience and audience growth work together. Reading Cinemas can create more value from its existing footprint by activating quieter capacity, improving the booking journey, increasing value per visit and giving customers stronger reasons to return.</p>
      <p class="body-para">The recommendation is to pilot the lowest-risk initiatives first, measure their commercial impact and scale only where the evidence supports it. Over time, the broader opportunity is to make cinema attendance more accessible, habitual and locally relevant, strengthening Reading Cinemas&rsquo; position as a progressive and customer-focused cinema brand.</p>
    </div>

    <div class="viewer-section-divider" aria-hidden="true"></div>
    <div class="section-label" id="strategy-full-report">View The Full Report</div>
    <p class="body-para">Explore the full strategy report below for the complete analysis, recommendations and 36-month roadmap.</p>
    <div class="strategy-pdf-viewer" id="strategy-pdf-viewer">
      <div class="strategy-pdf-toolbar">
        <button class="strategy-pdf-tool" onclick="strategyPdfToggleSidebar()">Pages</button>
        <span class="strategy-pdf-page-count" id="strategy-pdf-page-count">Page 1 of 15</span>
        <button class="strategy-pdf-tool" onclick="strategyPdfZoom(-.1)">&minus;</button>
        <span class="strategy-pdf-zoom-value" id="strategy-pdf-zoom-value">100%</span>
        <button class="strategy-pdf-tool" onclick="strategyPdfZoom(.1)">+</button>
        <button class="strategy-pdf-tool" onclick="strategyPdfFitWidth()">Fit width</button>
        <span class="strategy-pdf-spacer"></span>
        <button class="strategy-pdf-tool strategy-pdf-full" onclick="strategyPdfFullscreen()">Full screen</button>
        <button class="strategy-pdf-tool strategy-pdf-close" onclick="strategyPdfCloseFullscreen()">Close &times;</button>
      </div>
      <div class="strategy-pdf-layout" id="strategy-pdf-layout">
        <aside class="strategy-pdf-sidebar" id="strategy-pdf-sidebar">
          <div class="strategy-pdf-sidebar-list" id="strategy-pdf-sidebar-list"></div>
        </aside>
        <div class="strategy-pdf-stage" id="strategy-pdf-stage">
          <div class="strategy-pdf-pages" id="strategy-pdf-pages"></div>
        </div>
      </div>
    </div>
  </div>`;
}


function futureScrollToConcept(id){
  const el=document.getElementById(id);
  if(!el)return;
  const nav=document.querySelector('.page.active .nav')||document.querySelector('.nav');
  const offset=(nav?nav.getBoundingClientRect().height:72)+8;
  const top=el.getBoundingClientRect().top+window.pageYOffset-offset;
  window.scrollTo({top:Math.max(0,top),left:0,behavior:'smooth'});
}

function alignFutureConceptHeroImages(){
  const ids=['03','05','08'];
  ids.forEach(num=>{
    const section=document.getElementById('future-concept-'+num);
    if(!section)return;
    const visual=section.querySelector('.future-concept-visual');
    const summary=section.querySelector('.future-concept-summary');
    const balance=section.querySelector('.future-concept-balance');
    if(!visual||!summary)return;

    visual.style.transform='';
    if(balance)balance.style.marginTop='';

    if(window.innerWidth<=1040)return;

    const apply=()=>{
      visual.style.transform='';
      if(balance)balance.style.marginTop='';
      const summaryBottom=summary.getBoundingClientRect().bottom;
      const visualBottom=visual.getBoundingClientRect().bottom;
      const delta=Math.round(summaryBottom-visualBottom);
      if(Math.abs(delta)<2)return;
      visual.style.transform='translateY('+delta+'px)';
      if(delta<0&&balance)balance.style.marginTop=delta+'px';
    };

    const img=visual.querySelector('img');
    if(img&&!img.complete){
      img.addEventListener('load',apply,{once:true});
    }else{
      apply();
    }
  });
}


function reelioProductContent(){
  const robot='AJD_StrategyLab_assets/reelio/reelio-robot.png';
  const welcome='AJD_StrategyLab_assets/reelio/reelio-welcome.png';
  const conversation='AJD_StrategyLab_assets/reelio/reelio-conversation.png';
  return `<div class="reelio-product-page">
    <section class="reelio-hero reelio-section" id="reelio-overview">
      <div class="reelio-robot-panel">
        <img class="reelio-robot" src="${robot}" alt="Reelio robot mascot">
      </div>
      <div class="reelio-proposal-intro">
        <div class="reelio-kicker">Product Proposal</div>
        <p class="reelio-lede">Reelio is a conversational discovery layer designed to help Reading Cinemas customers find movies, sessions, locations and cinema information using everyday language.</p>
        <p class="reelio-important"><strong>Reelio does not replace the existing Reading Cinemas booking system.</strong> It supports discovery and decision-making before directing customers into the existing booking flow.</p>
      </div>
      <div class="section-label">Meet Reelio</div>
      <p class="body-para">Customers often know they want to go to the movies before they know the movie, cinema, session or experience that fits. Reelio turns that uncertainty into a guided conversation before booking.</p>

      <div class="section-label">From Browsing to a Conversation</div>
      <div class="reelio-two-col">
        <div class="reelio-copy-card">
          <h3 class="reelio-card-title">WITHOUT REELIO</h3>
          <ul class="reelio-scope-list">
            <li>Browse movie listings</li>
            <li>Switch between cinema locations</li>
            <li>Compare sessions manually</li>
            <li>Search for service information</li>
            <li>Continue into booking</li>
          </ul>
        </div>
        <div class="reelio-copy-card">
          <h3 class="reelio-card-title">WITH REELIO</h3>
          <div class="reelio-example-list">
            <div class="reelio-example">&ldquo;Something scary tonight near Epping after 8pm&rdquo;</div>
            <div class="reelio-example">&ldquo;Something for date night near Geelong&rdquo;</div>
            <div class="reelio-example">&ldquo;A family movie this weekend&rdquo;</div>
            <div class="reelio-example">&ldquo;What is Gold Lounge?&rdquo;</div>
            <div class="reelio-example">&ldquo;Can I book a cinema for a birthday?&rdquo;</div>
          </div>
        </div>
      </div>
    </section>

    <section class="reelio-section">
      <div class="section-label">Meet Your Cinema Concierge</div>
      <p class="body-para">Reelio can help with movie recommendations, session times, Gold Lounge, rewards, gift cards, accessibility, group bookings and other cinema questions.</p>
      <div class="reelio-showcase"><img class="reelio-showcase-image" src="${welcome}" alt="Reelio welcome screen product snapshot"></div>
    </section>

    <section class="reelio-section">
      <div class="section-label">Ask Naturally. Get Something Useful.</div>
      <p class="body-para">Customers can describe what they want naturally. Reelio interprets factors such as location, timing, genre, mood or occasion and uses them to surface relevant options.</p>
      <div class="reelio-showcase"><img class="reelio-showcase-image" src="${conversation}" alt="Reelio conversation and recommendation product snapshot"></div>
    </section>

    <section class="reelio-section" id="reelio-how">
      <div class="section-label">How Reelio Works</div>
      <div class="reelio-step-grid">
        <div class="reelio-step-card"><div class="reelio-step-num">01</div><h3 class="reelio-step-title">Ask</h3><p>Customers describe what they want using normal everyday language.</p></div>
        <div class="reelio-step-card"><div class="reelio-step-num">02</div><h3 class="reelio-step-title">Understand</h3><p>Reelio interprets intent such as location, timing, genre, mood or occasion and can ask follow-up questions when needed.</p></div>
        <div class="reelio-step-card"><div class="reelio-step-num">03</div><h3 class="reelio-step-title">Recommend</h3><p>Reelio presents relevant movies, cinema locations and available sessions.</p></div>
        <div class="reelio-step-card"><div class="reelio-step-num">04</div><h3 class="reelio-step-title">Book</h3><p>Once the customer chooses an option, Reelio directs them into the existing Reading Cinemas booking flow.</p></div>
      </div>
    </section>

    <section class="reelio-section" id="reelio-capabilities">
      <div class="section-label">More Than Movie Recommendations</div>
      <div class="reelio-capability-grid">
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Natural-Language Discovery</h3><p>Search using mood, genre, location, timing, occasion or general preference.</p></div>
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Session + Location Discovery</h3><p>Help customers identify where a movie is showing and suitable available sessions.</p></div>
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Cinema Concierge</h3><p>Answer common questions about Gold Lounge, rewards, gift cards, accessibility, baby-friendly sessions, events, group bookings and other cinema services.</p></div>
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Booking Guidance</h3><p>Guide customers toward the appropriate Reading Cinemas booking pathway once they make a decision.</p></div>
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Relevant Service Promotion</h3><p>Surface experiences such as Gold Lounge, rewards, gift cards, events and group bookings when they are relevant to the conversation.</p></div>
        <div class="reelio-capability-card"><h3 class="reelio-card-title">Customer Intent Insights</h3><p>Use anonymised interaction trends to help Reading Cinemas understand customer intent, popular locations, genres, session times, common questions and booking friction.</p></div>
      </div>
    </section>

    <section class="reelio-section" id="reelio-why">
      <div class="section-label">Why Reelio Matters</div>
      <div class="reelio-value-grid">
        <div class="reelio-value-card">
          <div class="reelio-mini-title">For Customers</div>
          <div class="reelio-value-group"><h4>Easier Discovery</h4><p>Find suitable movies and sessions through natural conversation.</p></div>
          <div class="reelio-value-group"><h4>Faster Decisions</h4><p>Move from uncertainty to a relevant option with less browsing.</p></div>
          <div class="reelio-value-group"><h4>Simpler Cinema Support</h4><p>Ask about sessions, locations and Reading Cinemas services in one place.</p></div>
        </div>
        <div class="reelio-value-card">
          <div class="reelio-mini-title">For Reading Cinemas</div>
          <div class="reelio-value-group"><h4>Booking Redirection</h4><p>Help move undecided customers toward the existing booking flow.</p></div>
          <div class="reelio-value-group"><h4>Better Visibility</h4><p>Surface relevant movies, sessions and premium experiences.</p></div>
          <div class="reelio-value-group"><h4>Customer Insight</h4><p>Use anonymised interaction trends to better understand customer intent.</p></div>
        </div>
      </div>
    </section>

    <section class="reelio-section" id="reelio-mvp">
      <div class="section-label">Start Focused. Grow Over Time.</div>
      <div class="reelio-scope-grid">
        <div class="reelio-scope-card">
          <h3 class="reelio-card-title">MVP</h3>
          <ul class="reelio-scope-list">
            <li>website-first integration</li>
            <li>natural-language movie discovery</li>
            <li>session guidance</li>
            <li>location guidance</li>
            <li>booking redirection</li>
            <li>common cinema service questions</li>
            <li>quick prompt suggestions</li>
            <li>basic conversation insights</li>
            <li>mobile-ready design</li>
          </ul>
        </div>
        <div class="reelio-scope-card">
          <h3 class="reelio-card-title">What It Can Become</h3>
          <p class="body-para" style="margin:0 0 10px">Once the MVP is validated, Reelio could expand into:</p>
          <ul class="reelio-scope-list">
            <li>mobile app integration</li>
            <li>loyalty integration</li>
            <li>personalised recommendations</li>
            <li>saved preferences and favourite cinemas</li>
            <li>voice search and multilingual support</li>
            <li>group planning</li>
            <li>push notifications and campaign promotion</li>
          </ul>
        </div>
      </div>
    </section>


    <section class="reelio-section viewer-final-section" id="reelio-product-proposal">
      <div class="section-label">Explore the Full Product Proposal</div>
      <p class="body-para">Explore the full proposal for a deeper look at Reelio&rsquo;s product vision, customer experience, core features, business value and implementation approach.</p>
      <div class="reelio-reader" id="reelio-viewer">
        <div class="reelio-toolbar">
          <button class="reelio-tool" onclick="reelioToggleSidebar()">Pages</button>
          <span class="reelio-page-count" id="reelio-page-count">Page 1 of 25</span>
          <button class="reelio-tool" onclick="reelioZoom(-.1)">&minus;</button>
          <span class="reelio-zoom-value" id="reelio-zoom-value">100%</span>
          <button class="reelio-tool" onclick="reelioZoom(.1)">+</button>
          <button class="reelio-tool" onclick="reelioFitWidth()">Fit width</button>
          <span class="reelio-spacer"></span>
          <button class="reelio-tool reelio-full" onclick="reelioFullscreen()">Full screen</button>
          <button class="reelio-tool reelio-close" onclick="reelioCloseFullscreen()">Close &times;</button>
        </div>
        <div class="reelio-layout" id="reelio-layout">
          <aside class="reelio-sidebar" id="reelio-sidebar">
            <div class="reelio-sidebar-list" id="reelio-sidebar-list"></div>
          </aside>
          <div class="reelio-stage" id="reelio-stage">
            <div class="reelio-pages" id="reelio-pages"></div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}

function futureConceptsContent(){
  const conceptVisualBase='AJD_StrategyLab_assets/future-concepts/';
  const concepts=[
    {
      num:'01',
      category:'Social Planning',
      title:'MovieScene',
      image:'moviescene.png',
      alt:'MovieScene group planning concept visual',
      summary:'MovieScene adds a social planning layer to the Reading Cinemas website. Logged-in customers could create or join groups around a movie, then coordinate the cinema, date and session together.',
      steps:['Select a movie','Create or join a group','Discuss the plan with members','Decide on the cinema and session'],
      matters:'MovieScene gives customers a reason to use the Reading Cinemas website beyond checking sessions or making an individual booking. It could make group cinema visits easier to organise while supporting stronger social engagement and group attendance.'
    },
    {
      num:'02',
      category:'In-Cinema AI',
      title:'Reelio Kiosk',
      image:'reelio-kiosk.png',
      alt:'Reelio Kiosk in-cinema assistant concept visual',
      summary:'Reelio Kiosk brings the Reelio assistant into the physical cinema. Customers could use a self-service kiosk to ask questions, compare sessions, discover suitable movies and receive support before booking.',
      steps:['Ask by touch, text or voice','Explain what you want to watch','Receive movie and session suggestions','Continue toward booking or cinema support'],
      matters:'The kiosk could give customers a faster, more guided way to make decisions while reducing pressure on staff during busy periods. Multilingual support could also make in-cinema assistance easier for customers who prefer another language.'
    },
    {
      num:'03',
      category:'Accessibility',
      title:'Tactile Cinema Device',
      image:'tactile-cinema-device.png',
      alt:'Tactile Cinema Device haptic accessibility concept visual',
      summary:'The Tactile Cinema Device is a lap-based haptic device that translates parts of a film into touch patterns. Movement, action, environmental effects and changes in intensity could be experienced through an additional sensory channel.',
      steps:['Customer requests the device','Device synchronises with the film','Hands rest on the haptic surface','Touch patterns change with the scene'],
      matters:'The concept is intended to complement existing accessibility tools for blind, visually impaired, deaf, hard-of-hearing and deaf-blind customers. It could add another sensory layer to the cinema experience while supporting Reading Cinemas&rsquo; wider accessibility offering.'
    },
    {
      num:'04',
      category:'Physical to Digital',
      title:'Reading PosterScan',
      image:'reading-posterscan.png',
      alt:'Reading PosterScan poster QR discovery concept visual',
      summary:'Reading PosterScan adds a QR-based digital layer to physical movie posters. Customers can scan a poster and move directly into movie information, trailers, sessions and booking.',
      steps:['See a movie poster','Scan the poster QR code','View trailer, film details and sessions','Continue directly into booking'],
      matters:'PosterScan turns existing poster space into an interactive discovery and booking point. It removes the need to remember a movie and search for it later, connecting in-cinema interest directly to trailers, sessions and booking.'
    },
    {
      num:'05',
      category:'Post-Booking Experience',
      title:'Reading StoryCard',
      image:'reading-storycard.png',
      alt:'Reading StoryCard digital post-booking keepsake concept visual',
      summary:'Reading StoryCard turns the booking confirmation into a personalised digital keepsake. After booking, customers could receive a movie-themed card containing their cinema details and a short message such as &ldquo;Your movie night is set&rdquo; or &ldquo;See you at the movies.&rdquo;',
      steps:['Customer completes a booking','A movie-themed StoryCard is generated','The card is delivered through email','Save or share the card'],
      matters:'StoryCard makes a standard booking confirmation feel more personal and memorable. It also creates a lightweight branded asset that customers may choose to save or share before their cinema visit.'
    },
    {
      num:'06',
      category:'Audience Intelligence',
      title:'Audience Pulse',
      image:'audience-pulse.png',
      alt:'Audience Pulse QR voting concept visual',
      summary:'Audience Pulse is a short in-cinema QR voting experience that asks customers which upcoming movies they would be interested in seeing at Reading Cinemas.',
      steps:['Show a QR prompt before the film','Customer scans using their phone','Select upcoming films of interest','Aggregate demand by location'],
      matters:'Audience Pulse gives Reading Cinemas a direct signal of customer interest before programming decisions are made. It could be particularly useful for smaller, international, cultural, re-screening and event titles where demand may differ significantly between locations.'
    },
    {
      num:'07',
      category:'Digital Publication',
      title:'The Reading Preview',
      image:'reading-preview.png',
      alt:'The Reading Preview monthly digital cinema guide concept visual',
      summary:'The Reading Preview is a monthly digital cinema guide designed to help customers discover what is coming up before they begin the booking journey.',
      steps:['Publish a new issue each month','Feature releases, events and cinema experiences','Link content directly to relevant booking journeys','Reuse the issue across website, email, social and in-cinema QR'],
      matters:'The Reading Preview gives Reading Cinemas a recurring discovery and marketing asset that can help customers find movies, events and cinema experiences earlier. The same issue could be reused across the website, email, social media and in-cinema QR promotion.'
    },
    {
      num:'08',
      category:'Film Intelligence',
      title:'Reading Pulse',
      image:'reading-pulse.png',
      alt:'Reading Pulse film intelligence dashboard concept visual',
      summary:'Reading Pulse is an internal film-intelligence dashboard for identifying titles worth tracking, testing or programming across Reading Cinemas locations.',
      steps:['Track current and upcoming theatrical films','Analyse ratings, demand and audience signals','Compare films with local audience fit','Pursue, test, monitor or shortlist titles'],
      matters:'Reading Pulse brings release information, audience signals and local cinema fit into one workflow. It could help programming teams identify promising films earlier and make more location-aware programming decisions.'
    }
  ];
  const index=concepts.map(concept=>'<button class="future-index-item" onclick="futureScrollToConcept(\'future-concept-'+concept.num+'\')"><div class="future-index-num">'+concept.num+'</div><div class="future-index-title">'+concept.title+'</div><div class="future-index-cat">'+concept.category+'</div></button>').join('');
  const sections=concepts.map(concept=>{
    const steps=concept.steps.map((step,idx)=>'<div class="future-concept-step"><span class="future-step-num">'+String(idx+1).padStart(2,'0')+'</span><span>'+step+'</span></div>').join('');
    const isFlowPortrait=concept.num==='02'||concept.num==='07';
    const detailContent=isFlowPortrait
      ? '<div class="future-mini-heading">How It Works</div><div class="future-concept-steps">'+steps+'</div><div class="future-mini-heading">Why It Matters</div><p class="future-concept-matter">'+concept.matters+'</p>'
      : '<div class="future-concept-balance"><div><div class="future-mini-heading">How It Works</div><div class="future-concept-steps">'+steps+'</div></div><div><div class="future-mini-heading">Why It Matters</div><p class="future-concept-matter">'+concept.matters+'</p></div></div>';
    const sectionClass=concept.num==='01'?'future-concept-section future-concept-moviescene':'future-concept-section';
    return '<section class="'+sectionClass+'" id="future-concept-'+concept.num+'"><div class="future-concept-visual future-visual-'+concept.num+'"><img src="'+conceptVisualBase+concept.image+'" alt="'+concept.alt+'"></div><div class="future-concept-copy future-concept-intro"><div class="future-concept-kicker">Concept '+concept.num+'</div><div class="future-concept-category">'+concept.category+'</div><h2 class="future-concept-title">'+concept.title+'</h2><p class="future-concept-summary">'+concept.summary+'</p></div><div class="future-concept-details">'+detailContent+'</div></section>';
  }).join('');
  return `<div class="future-concepts-page">
    <div class="demographic-summary">
      <section class="demographic-section">
        <div class="section-label">About The Concepts</div>
        <p class="body-para">The Future Concepts report develops the wider Reading Cinemas research into eight ideas spanning social planning, in-cinema support, accessibility, programming intelligence, customer engagement and movie discovery.</p>
        <p class="body-para">These are early-stage concepts rather than finished products. Each is intended to show what the opportunity could look like, how it might work and where a smaller pilot could test whether it creates enough value to take further.</p>
      </section>
    </div>
    <section class="future-concepts-section">
      <div class="section-label">The Eight Concepts</div>
      <p class="body-para">Eight concepts spanning the customer journey, cinema experience and programming process.</p>
      <div class="future-index-grid">${index}</div>
    </section>
    ${sections}
    <section class="future-concepts-section viewer-final-section">
      <div class="section-label" id="future-full-report">View The Full Report</div>
      <p class="body-para">Explore the full Future Concepts proposal below for the complete ideas, implementation approach and potential business value across all eight concepts.</p>
      <div class="future-reader" id="future-concepts-viewer">
        <div class="future-toolbar">
          <button class="future-tool" onclick="futureToggleSidebar()">Pages</button>
          <span class="future-page-count" id="future-page-count">Page 1 of 11</span>
          <button class="future-tool" onclick="futureZoom(-.1)">&minus;</button>
          <span class="future-zoom-value" id="future-zoom-value">100%</span>
          <button class="future-tool" onclick="futureZoom(.1)">+</button>
          <button class="future-tool" onclick="futureFitWidth()">Fit width</button>
          <span class="future-spacer"></span>
          <button class="future-tool future-full" onclick="futureFullscreen()">Full screen</button>
          <button class="future-tool future-close" onclick="futureCloseFullscreen()">Close &times;</button>
        </div>
        <div class="future-layout" id="future-layout">
          <aside class="future-sidebar" id="future-sidebar"><div class="future-sidebar-list" id="future-sidebar-list"></div></aside>
          <div class="future-stage" id="future-stage"><div class="future-pages" id="future-pages"></div></div>
        </div>
      </div>
    </section>
  </div>`;
}

function movieResearchContent(){
  const months=[
    ['JUL','July: Language Cinema, International Titles and Event Programming','16 Films','July has the broadest shortlist, with strong opportunities across language cinema, international drama, anime and event programming. Dandenong, Epping and Millers Junction appear frequently for South Asian and language-film tests, while Burwood, Waurn Ponds and Chirnside Park feature more often for adult international and premium programming.',['Language Films','South Asian','Anime','Event Cinema']],
    ['AUG','August: Horror, Hindi Drama and Adult Thrillers','07 Films','August is a smaller, genre-led month centred on horror, adult thrillers, Hindi drama and date-night cinema. Dandenong, Epping and Melton feature more strongly for South Asian titles, while Burwood, Millers Junction and Waurn Ponds appear more often for thrillers and adult evening programming.',['Horror','Hindi Cinema','Thriller','Date Night']],
    ['SEP','September: Genre Cinema, Australian Titles and South Asian Releases','13 Films','September has one of the most varied programming mixes, combining Australian and international genre cinema with Korean, Hindi, Telugu and Tamil releases. The month supports both mainstream-adjacent programming and targeted community or genre tests.',['Genre','Australian','Korean Cinema','South Asian','Family']],
    ['OCT','October: Horror, Premium Drama, Gaming and Family Cinema','11 Films','October combines Halloween-season genre films with premium adult drama, family animation, gaming-led releases and Tamil cinema. Programming opportunities range from mature and literary audiences to younger commercial and South Indian audiences depending on location.',['Horror','Premium Drama','Gaming','Family','Tamil']],
    ['NOV','November: Event Cinema, Franchise Films and Seasonal Programming','10 Films','November mixes seasonal cinema, adult drama, event programming and major franchise releases. It creates room for both targeted audience tests and broader commercial programming, including Japanese and South Asian cinema.',['Event Cinema','Franchise','Australian','Japanese','South Asian']],
    ['DEC','December: Holiday Blockbusters, Family Films and Event Releases','09 Films','December shifts toward holiday and group-viewing behaviour, with family films, major franchises, premium cinema and Hindi programming becoming more prominent. The month combines high-demand releases with smaller targeted opportunities for selected local audiences.',['Holiday','Blockbuster','Family','Hindi Cinema','Premium']]
  ];
  const patterns=[
    ['Dandenong &middot; Epping &middot; Millers Junction','Language, Genre & Commercial Evening','South Asian cinema, regional Indian titles, horror, action and younger adult genre programming.',['South Asian','Language Films','Horror','Action']],
    ['Burwood &middot; Waurn Ponds &middot; Chirnside Park','Mature, International & Premium','International drama, historical films, documentaries and mature or premium adult cinema.',['Mature','International','Premium','Drama']],
    ['Epping &middot; Melton &middot; Waurn Ponds','Family, Youth & Holiday','Family animation, youth releases, school-holiday programming and group viewing.',['Family','Youth','Holiday','Group Viewing']],
    ['Burwood &middot; Millers Junction &middot; Waurn Ponds','Thriller, Event & Premium Genre','Adult thrillers, anime, Japanese cinema, science fiction and specialised event programming.',['Thriller','Event Cinema','Anime','Sci-Fi']]
  ];
  const monthTable=[
    ['July','16','Language films, international drama, anime and event cinema'],
    ['August','07','Horror, Hindi drama, thrillers and date-night cinema'],
    ['September','13','Genre, Australian films, Korean cinema and South Asian programming'],
    ['October','11','Horror, premium drama, gaming, family and Tamil cinema'],
    ['November','10','Event cinema, franchises, seasonal and South Asian programming'],
    ['December','09','Holiday blockbusters, family films, premium and Hindi cinema']
  ];
  const monthRows=months.map(card=>'<div class="movie-month-card"><div class="movie-code">'+card[0]+'</div><div><div class="movie-card-title">'+card[1]+'</div><div class="movie-card-stat">'+card[2]+'</div><p class="movie-card-copy">'+card[3]+'</p><div class="movie-tag-row">'+card[4].map(tag=>'<span class="movie-tag">'+tag+'</span>').join('')+'</div></div></div>').join('');
  const patternRows=patterns.map(card=>'<div class="movie-pattern-card"><div class="movie-pattern-locations">'+card[0]+'</div><div class="movie-card-title">'+card[1]+'</div><p class="movie-card-copy">'+card[2]+'</p><div class="movie-tag-row">'+card[3].map(tag=>'<span class="movie-tag">'+tag+'</span>').join('')+'</div></div>').join('');
  const overviewRows=monthTable.map(row=>'<tr><td>'+row[0]+'</td><td>'+row[1]+'</td><td>'+row[2]+'</td></tr>').join('');
  return `<div class="movie-research-summary">
    <div class="demographic-summary">
      <section class="demographic-section">
        <div class="section-label">About The Research</div>
        <p class="body-para">The research reviews selected film releases from July to December 2026 and identifies titles that may be worth testing across Reading Cinemas&rsquo; nine Victorian locations. Rather than assuming every film suits every cinema, the analysis considers release timing, country, language, audience fit and the demographic profile of each local catchment.</p>
        <p class="body-para">The recommendations are a planning guide rather than a fixed programming schedule. They identify where selected sessions, targeted promotion and local audience testing may be worthwhile before broader programming decisions are made. This research focuses on additional programming opportunities beyond major releases already scheduled by Reading Cinemas.</p>
      </section>
    </div>

    <section class="movie-research-section">
      <div class="section-label">How The Recommendations Work</div>
      <div class="movie-info-grid">
        <div class="movie-info-panel"><div class="movie-info-title">Movie Profile</div><ul><li>Release window</li><li>Country</li><li>Language</li><li>Expected audience fit</li></ul><p class="movie-info-copy">This helps establish what type of audience the film may appeal to and where there may be a relevant local programming opportunity.</p></div>
        <div class="movie-info-panel"><div class="movie-info-title">Programming Recommendation</div><ul><li>Recommended Reading Cinemas locations</li><li>Reason for the recommendation</li><li>Practical test strategy</li></ul><p class="movie-info-copy">The locations listed represent the strongest potential fits rather than every cinema where the title could potentially screen.</p></div>
      </div>
    </section>

    <section class="movie-research-section">
      <div class="section-label">Six-Month Programming Outlook</div>
      <p class="body-para">The 66-film shortlist changes considerably across the six-month window, with each month bringing a different mix of genres, languages and audience opportunities.</p>
      <table class="movie-overview-table"><thead><tr><th>Month</th><th>Films</th><th>Programming Emphasis</th></tr></thead><tbody>${overviewRows}</tbody></table>
      <div class="movie-card-list">${monthRows}</div>
    </section>

    <section class="movie-research-section">
      <div class="section-label">Recurring Location Patterns</div>
      <div class="movie-pattern-grid">${patternRows}</div>
    </section>

    <section class="movie-research-section">
      <div class="section-label">How To Use The Recommendations</div>
      <p class="body-para">The report is a programming shortlist rather than a fixed release schedule. Release windows are based on publicly available cinema information and should be checked again closer to programming, alongside distributor availability, confirmed Australian dates and screen capacity.</p>
      <p class="body-para">The practical approach is to begin with selected sessions at the locations where audience fit appears strongest, support them with appropriate local promotion and monitor occupancy and ticket sales. Programming should expand only where actual customer response supports it.</p>
    </section>

    <section class="movie-research-section viewer-final-section">
      <div class="section-label" id="movie-full-report">View The Full Report</div>
      <p class="body-para">Explore the full research below for a detailed look at movie opportunities, audience fit and programming potential from July to December 2026.</p>
      <div class="movie-research-viewer" id="movie-research-viewer">
        <div class="movie-toolbar">
          <button class="movie-tool" onclick="movieToggleSidebar()">Pages</button>
          <span class="movie-page-count" id="movie-page-count">Page 1 of 43</span>
          <button class="movie-tool" onclick="movieZoom(-.1)">&minus;</button>
          <span class="movie-zoom-value" id="movie-zoom-value">100%</span>
          <button class="movie-tool" onclick="movieZoom(.1)">+</button>
          <button class="movie-tool" onclick="movieFitWidth()">Fit width</button>
          <span class="movie-spacer"></span>
          <button class="movie-tool movie-full" onclick="movieFullscreen()">Full screen</button>
          <button class="movie-tool movie-close" onclick="movieCloseFullscreen()">Close &times;</button>
        </div>
        <div class="movie-layout" id="movie-layout">
          <aside class="movie-sidebar" id="movie-sidebar"><div class="movie-sidebar-list" id="movie-sidebar-list"></div></aside>
          <div class="movie-stage" id="movie-stage"><div class="movie-pages" id="movie-pages"></div></div>
        </div>
      </div>
    </section>
  </div>`;
}

function demographicContent(){
  const catchments=[
    ['Burwood','Burwood','Burwood East, Box Hill South, Ashwood, Ashburton, Glen Iris, Camberwell, Surrey Hills, Mount Waverley, Chadstone, Blackburn South'],
    ['Chirnside Park','Chirnside Park','Lilydale, Mooroolbark, Croydon, Croydon North, Wonga Park, Kilsyth, Mount Evelyn, Ringwood, Warrandyte, Yarra Glen'],
    ['Dandenong','Dandenong','Dandenong North, Dandenong South, Noble Park, Springvale, Keysborough, Endeavour Hills, Hallam, Hampton Park, Rowville, Mulgrave'],
    ['Epping','Epping','Lalor, Thomastown, Wollert, Mill Park, South Morang, Mernda, Bundoora, Reservoir, Craigieburn, Campbellfield'],
    ['Melton','Melton','Melton South, Melton West, Kurunjang, Harkness, Brookfield, Caroline Springs, Rockbank, Bacchus Marsh, Toolern Vale, Taylors Hill'],
    ['Millers Junction','Altona North','Altona, Newport, Spotswood, Williamstown, Brooklyn, Yarraville, Seddon, Footscray, Laverton, Point Cook'],
    ['Sunbury','Sunbury','Diggers Rest, Bulla, Wildwood, Clarkefield, Gisborne, Macedon, Riddells Creek, Romsey, Craigieburn'],
    ['Traralgon','Traralgon','Morwell, Churchill, Rosedale, Glengarry, Tyers, Moe, Yallourn North, Sale, Yinnar, Heyfield'],
    ['Waurn Ponds','Waurn Ponds','Grovedale, Belmont, Highton, Mount Duneed, Armstrong Creek, Geelong, Newtown, Torquay, Marshall, Ocean Grove']
  ];
  const insights=[
    {
      code:'BUR',
      title:'Burwood: Chinese-Language, Family &amp; Premium',
      metrics:[['~167K','Catchment'],['38.5%','Overseas-Born'],['36.4%','Language Other Than English']],
      profile:'A large inner-eastern catchment spanning families, older residents, young adults and culturally diverse communities. Mandarin is the strongest non-English language signal.',
      direction:'Maintain mainstream, family and premium programming while testing Chinese-language releases more deliberately, particularly Mandarin-led titles.',
      tags:['Mandarin','Mainstream']
    },
    {
      code:'CHI',
      title:'Chirnside Park: Mainstream, Family &amp; Mature Audiences',
      metrics:[['~141.9K','Catchment'],['22.5%','Overseas-Born'],['15.5%','Language Other Than English']],
      profile:'An established outer-eastern catchment with a strong family, Australian-born and English-speaking audience base.',
      direction:'Keep mainstream, family and mature-audience programming central, with international and language films tested selectively.',
      tags:['School Holiday','Selective International']
    },
    {
      code:'DAN',
      title:'Dandenong: Multicultural &amp; Language Priority',
      metrics:[['~252.6K','Catchment'],['52.7%','Overseas-Born'],['56.2%','Language Other Than English']],
      profile:'One of the network&rsquo;s most culturally and linguistically diverse catchments, with a large overseas-born and multilingual population.',
      direction:'Prioritise deliberate testing of Vietnamese, Chinese-language and South Asian cinema alongside strong mainstream and family programming.',
      tags:['Vietnamese','South Asian','Chinese-Language']
    },
    {
      code:'EPP',
      title:'Epping: Family, South Asian &amp; Middle Eastern',
      metrics:[['~327.7K','Catchment'],['41.6%','Overseas-Born'],['50.3%','Language Other Than English']],
      profile:'A large northern growth-corridor catchment with young families, working-age audiences and substantial multicultural communities.',
      direction:'Maintain mainstream and family programming while testing South Asian and Arabic / Middle Eastern releases more deliberately.',
      tags:['Growth Corridor','Mainstream']
    },
    {
      code:'MEL',
      title:'Melton: Young Families &amp; Growing Diversity',
      metrics:[['~113.2K','Catchment'],['31.8%','Overseas-Born'],['33.1%','Language Other Than English']],
      profile:'A young, family-heavy western growth-corridor catchment with an expanding multicultural population.',
      direction:'Keep family and mainstream releases central while testing selected South Asian and other community programming.',
      tags:['South Asian','Growth Corridor','Mainstream']
    },
    {
      code:'MJ',
      title:'Millers Junction: Diverse Western &amp; Inner-West Catchment',
      metrics:[['~166.8K','Catchment'],['39.1%','Overseas-Born'],['36.5%','Language Other Than English']],
      profile:'A diverse inner-west and western catchment combining families, multicultural communities and lifestyle-oriented audiences.',
      direction:'Balance mainstream and premium programming with stronger testing of South Asian, Chinese-language and Vietnamese cinema.',
      tags:['South Asian','Chinese-Language','Vietnamese','Premium']
    },
    {
      code:'SUN',
      title:'Sunbury: Mainstream, Family &amp; Emerging Diversity',
      metrics:[['~133.3K','Catchment'],['31.9%','Overseas-Born'],['33.6%','Language Other Than English']],
      profile:'A family-focused north-western catchment with a strong mainstream base and growing multicultural diversity.',
      direction:'Keep mainstream and family programming central while selectively testing South Asian and other community releases.',
      tags:['South Asian','Selective Multicultural']
    },
    {
      code:'TRA',
      title:'Traralgon: Regional Mainstream &amp; Mature Audiences',
      metrics:[['~78.2K','Catchment'],['13.0%','Overseas-Born'],['7.0%','Language Other Than English']],
      profile:'A regional Latrobe Valley and Gippsland catchment with a stronger Australian-born profile and relatively high older-resident share.',
      direction:'Prioritise mainstream, family, Australian and mature-audience programming, with international releases treated selectively.',
      tags:['Australian','Family','Local Interest']
    },
    {
      code:'WP',
      title:'Waurn Ponds: Regional City, Family &amp; Youth',
      metrics:[['~127.9K','Catchment'],['16.4%','Overseas-Born'],['9.8%','Language Other Than English']],
      profile:'A regional-city catchment serving Geelong and the Surf Coast, with families, young adults and mature audiences.',
      direction:'Keep mainstream and family releases central while using youth, event cinema and selected international programming to broaden the offer.',
      tags:['Event Cinema','Selective International','Mainstream']
    }
  ];

  const catchmentRows=catchments.map(row=>'<tr><td>'+row[0]+'</td><td>'+row[1]+'</td><td>'+row[2]+'</td></tr>').join('');
  const insightRows=insights.map(card=>'<article class="demographic-insight-card"><div class="demographic-code">'+card.code+'</div><div class="demographic-insight-main"><div class="demographic-insight-title">'+card.title+'</div><div class="demographic-metric-grid">'+card.metrics.map(metric=>'<div class="demographic-metric"><div class="demographic-metric-value">'+metric[0]+'</div><div class="demographic-metric-label">'+metric[1]+'</div></div>').join('')+'</div><div class="demographic-card-copy-grid"><div><div class="demographic-card-label">Audience Profile</div><p class="demographic-insight-copy">'+card.profile+'</p></div><div><div class="demographic-card-label">Programming Direction</div><p class="demographic-insight-copy">'+card.direction+'</p></div></div><div class="demographic-tag-row">'+card.tags.map(tag=>'<span class="demographic-tag">'+tag+'</span>').join('')+'</div></div></article>').join('');

  return `<div class="demographic-summary">
    <section class="demographic-section">
      <div class="section-label">About The Research</div>
      <p class="body-para">The research compares the local audience catchments surrounding Reading Cinemas&rsquo; nine Victorian locations to understand how differences in population, age, household structure, cultural background and language may affect programming relevance.</p>
      <p class="body-para">Using 2021 Census data, each cinema is analysed beyond its core suburb to include surrounding areas that could realistically contribute to attendance. The aim is not to predict individual viewing behaviour, but to identify where mainstream, family, language, youth, premium, community and event programming may be more relevant and worth testing.</p>
    </section>

    <section class="demographic-section">
      <div class="section-label">How The Analysis Works</div>
      <div class="demographic-analysis-flow">
        <div class="demographic-flow-step"><div class="demographic-flow-num">01</div><div class="demographic-flow-title">Define Catchment</div><p class="demographic-flow-copy">Cinema suburb + surrounding suburbs that could realistically contribute to attendance.</p></div>
        <div class="demographic-flow-step"><div class="demographic-flow-num">02</div><div class="demographic-flow-title">Analyse Demographics</div><p class="demographic-flow-copy">Population &middot; Age &middot; Household &middot; Country of Birth &middot; Ancestry &middot; Language</p></div>
        <div class="demographic-flow-step"><div class="demographic-flow-num">03</div><div class="demographic-flow-title">Identify Programming Signals</div><p class="demographic-flow-copy">Mainstream &middot; Family &middot; Language &middot; Youth &middot; Premium &middot; Community &middot; Event</p></div>
        <div class="demographic-flow-step"><div class="demographic-flow-num">04</div><div class="demographic-flow-title">Test Against Demand</div><p class="demographic-flow-copy">Ticket sales &middot; Occupancy &middot; Local marketing &middot; Customer response</p></div>
      </div>
    </section>

    <section class="demographic-section">
      <div class="section-label">Locations And Catchments</div>
      <table class="demographic-catchment-table"><thead><tr><th>Location</th><th>Core Suburb</th><th>Key Catchment Suburbs</th></tr></thead><tbody>${catchmentRows}</tbody></table>
    </section>
    <section class="demographic-section">
      <div class="section-label">Location-By-Location Insights</div>
      <div class="demographic-insight-list">${insightRows}</div>
    </section>

    <section class="demographic-section">
      <div class="section-label">What The Research Shows</div>
      <div class="demographic-synthesis-grid">
        <div class="demographic-synthesis-card"><div class="demographic-group-title">Multicultural Priority</div><div class="demographic-group-locations">Dandenong &middot; Epping &middot; Millers Junction</div><p class="demographic-group-copy">Strongest case for more deliberate language-film and community-programming tests.</p></div>
        <div class="demographic-synthesis-card"><div class="demographic-group-title">Chinese-Language Opportunity</div><div class="demographic-group-locations">Burwood</div><p class="demographic-group-copy">Particularly strong opportunity for Chinese-language cinema, especially Mandarin-led releases.</p></div>
        <div class="demographic-synthesis-card"><div class="demographic-group-title">Mainstream + Emerging Diversity</div><div class="demographic-group-locations">Melton &middot; Sunbury</div><p class="demographic-group-copy">Family and mainstream-led locations with growing opportunities for selected multicultural programming.</p></div>
        <div class="demographic-synthesis-card"><div class="demographic-group-title">Mainstream / Regional</div><div class="demographic-group-locations">Chirnside Park &middot; Traralgon &middot; Waurn Ponds</div><p class="demographic-group-copy">Mainstream programming remains strongest, supported by family, mature-audience, Australian, youth or event programming depending on the location.</p></div>
      </div>
      <p class="demographic-conclusion">Mainstream programming remains the foundation across all nine cinemas; the opportunity is to vary what is added around that core schedule based on each local catchment.</p>
    </section>

    <section class="demographic-section">
      <div class="section-label">How To Use The Research</div>
      <p class="body-para">Use demographic signals to identify where a release may have stronger local relevance, test it through selected sessions and targeted promotion, then expand only where ticket sales, occupancy and customer response support it.</p>
      <p class="body-para">Demographic data should be treated as a planning tool rather than a prediction of individual behaviour. The 2021 Census and selected catchments provide a useful baseline, but final decisions should also consider current demand, distributor availability and actual cinema performance.</p>
    </section>

    <section class="demographic-section viewer-final-section">
      <div class="section-label" id="demographic-full-report">View The Full Report</div>
      <p class="body-para">Explore the full report below for a closer look at Reading Cinemas&rsquo; audience demographics, language opportunities and programming implications.</p>
      <div class="demographic-viewer" id="demographic-viewer">
        <div class="demographic-toolbar">
          <button class="demographic-tool" onclick="demographicToggleSidebar()">Pages</button>
          <span class="demographic-page-count" id="demographic-page-count">Page 1 of 41</span>
          <button class="demographic-tool" onclick="demographicZoom(-.1)">&minus;</button>
          <span class="demographic-zoom-value" id="demographic-zoom-value">100%</span>
          <button class="demographic-tool" onclick="demographicZoom(.1)">+</button>
          <button class="demographic-tool" onclick="demographicFitWidth()">Fit width</button>
          <span class="demographic-spacer"></span>
          <button class="demographic-tool demographic-full" onclick="demographicFullscreen()">Full screen</button>
          <button class="demographic-tool demographic-close" onclick="demographicCloseFullscreen()">Close &times;</button>
        </div>
        <div class="demographic-layout" id="demographic-layout">
          <aside class="demographic-sidebar" id="demographic-sidebar"><div class="demographic-sidebar-list" id="demographic-sidebar-list"></div></aside>
          <div class="demographic-stage" id="demographic-stage"><div class="demographic-pages" id="demographic-pages"></div></div>
        </div>
      </div>
    </section>
  </div>`;
}

function evidenceReviewContent(){
  const areas=[
    {
      num:'01',
      title:'Off-Peak Capacity Utilisation',
      paragraphs:[
        'Cinema exhibition has high fixed operating costs, which means an empty seat generates no revenue even though much of the cost of running the session has already been committed.',
        'The evidence supports disciplined pricing and demand management as a way to activate lower-demand inventory while protecting pricing during stronger sessions.'
      ],
      signal:'55.4M admissions &middot; $951M box office',
      support:'Australian cinemas recorded approximately 55.4 million admissions and $951 million in box office revenue in 2024. At the reported average ticket revenue, an additional 10,000 admissions represents approximately $171,700 in ticket revenue before food and beverage.'
    },
    {
      num:'02',
      title:'Weekday Attendance',
      paragraphs:[
        'Cinema demand is not evenly distributed across the week, with Monday to Thursday sessions more likely to experience lower occupancy than weekends and major release periods.',
        'The evidence suggests that targeted weekday value offers can attract additional attendance rather than simply shifting existing customers from one day to another.'
      ],
      signal:'Market Expansion Effect',
      support:'Australian research on discounted Tuesday pricing found evidence of additional cinema demand rather than only redistributing attendance from other days.'
    },
    {
      num:'03',
      title:'Food And Beverage Revenue',
      paragraphs:[
        'Food and beverage is an important commercial lever because concession revenue can contribute disproportionately to cinema profitability.',
        'Relatively small increases in average spend, attachment rates or basket size can create meaningful venue-level revenue when applied across annual attendance.'
      ],
      signal:'~20% of revenue &rarr; ~40% of profit',
      support:'Research cited in the review illustrates why relatively small increases in concession spend can have an outsized commercial effect.'
    },
    {
      num:'04',
      title:'Digital Booking Friction',
      paragraphs:[
        'Additional fees and complicated checkout journeys can increase online abandonment and weaken digital adoption.',
        'A simpler and more transparent booking experience could support higher conversion, earlier customer commitment and stronger first-party customer data.'
      ],
      signal:'39%',
      support:'In general checkout research cited in the review, additional costs such as fees were a major reported reason for abandonment.'
    },
    {
      num:'05',
      title:'Local Audience Development',
      paragraphs:[
        'Audience development depends on understanding the catchment around each cinema rather than treating every location as commercially identical.',
        'Local programming, community partnerships, culturally relevant content and targeted events can strengthen audience relevance and repeat attendance within each catchment.'
      ],
      signal:'Hyper-Local Audience Development',
      support:'Evidence from cinema and arts organisations supports programming and partnerships that reflect the demographics, interests and identity of the local catchment.'
    }
  ];
  const themes=[
    {
      title:'Capacity & Demand',
      principles:[
        ['01','Empty cinema seats represent lost revenue opportunity because the venue capacity already exists.'],
        ['02','Targeted pricing can help activate demand during lower-demand sessions without requiring blanket discounting.'],
        ['03','Weekday value offers can attract additional attendance and support more regular cinema-going habits.']
      ]
    },
    {
      title:'Customer Value & Conversion',
      principles:[
        ['04','Food and beverage is a high-margin lever where relatively small increases in average spend can create meaningful revenue uplift.'],
        ['05','Booking fees and complicated online journeys can reduce conversion and weaken digital adoption.']
      ]
    },
    {
      title:'Local Relevance & Execution',
      principles:[
        ['06','Localised programming and partnerships can strengthen audience engagement and venue relevance.'],
        ['07','Growth initiatives should be piloted, measured against clear performance indicators and scaled only when the results support it.']
      ]
    }
  ];
  const areaRows=areas.map(area=>'<div class="evidence-area"><div class="evidence-num">'+area.num+'</div><div><div class="evidence-area-title">'+area.title+'</div>'+area.paragraphs.map(text=>'<p class="evidence-area-copy">'+text+'</p>').join('')+'<div class="evidence-signal"><div><div class="evidence-signal-label">Evidence Signal</div><div class="evidence-signal-value">'+area.signal+'</div></div><p class="evidence-signal-copy">'+area.support+'</p></div></div></div>').join('');
  const themeBlocks=themes.map(theme=>'<div class="evidence-theme"><div class="evidence-theme-title">'+theme.title+'</div><div class="evidence-theme-principles">'+theme.principles.map(item=>'<div class="evidence-theme-principle"><div class="evidence-theme-num">'+item[0]+'</div><p class="evidence-principle-text">'+item[1]+'</p></div>').join('')+'</div></div>').join('');
  return `<div class="evidence-review-summary">
    <section class="evidence-review-section">
      <div class="section-label">About The Evidence Review</div>
      <p class="body-para">The Evidence Review examines the research behind five commercial opportunities explored in the Reading Cinemas strategy: off-peak capacity utilisation, weekday attendance, food and beverage revenue, digital booking friction and local audience development.</p>
      <p class="body-para">It brings together industry data, academic research, customer behaviour studies and examples from cinema and arts organisations to understand where changes to pricing, customer experience, digital booking and audience development could support stronger utilisation, revenue and customer habits.</p>
    </section>

    <section class="evidence-review-section">
      <div class="section-label">What The Review Looks At</div>
      <div class="evidence-area-list">${areaRows}</div>
    </section>

    <section class="evidence-review-section">
      <div class="section-label">What The Evidence Supports</div>
      <p class="body-para">Across the five areas, the review supports seven broader commercial principles.</p>
      <div class="evidence-theme-grid">${themeBlocks}</div>
    </section>

    <section class="evidence-review-section">
      <div class="section-label">How It Supports The Strategy</div>
      <p class="body-para">The Evidence Review does not suggest that any single initiative guarantees revenue growth. Instead, the research supports a broader commercial approach built around better use of existing capacity, stronger quieter-period demand, higher value per visit, reduced booking friction and deeper relationships with local audiences.</p>
      <p class="body-para">Taken together, the findings support the same pilot, measure and scale principle used throughout the strategy: test changes in controlled settings, track clear performance indicators and expand only where the results demonstrate value.</p>
    </section>

    <section class="evidence-review-section viewer-final-section">
      <div class="section-label" id="evidence-full-review">View The Full Review</div>
      <p class="body-para">Explore the full review below, including the evidence, supporting sources and references behind the analysis.</p>
      <div class="evidence-review-viewer" id="evidence-review-viewer">
        <div class="evidence-toolbar">
          <button class="evidence-tool" onclick="evidenceToggleSidebar()">Pages</button>
          <span class="evidence-page-count" id="evidence-page-count">Page 1 of 6</span>
          <button class="evidence-tool" onclick="evidenceZoom(-.1)">&minus;</button>
          <span class="evidence-zoom-value" id="evidence-zoom-value">100%</span>
          <button class="evidence-tool" onclick="evidenceZoom(.1)">+</button>
          <button class="evidence-tool" onclick="evidenceFitWidth()">Fit width</button>
          <span class="evidence-spacer"></span>
          <button class="evidence-tool evidence-full" onclick="evidenceFullscreen()">Full screen</button>
          <button class="evidence-tool evidence-close" onclick="evidenceCloseFullscreen()">Close &times;</button>
        </div>
        <div class="evidence-layout" id="evidence-layout">
          <aside class="evidence-sidebar" id="evidence-sidebar">
            <div class="evidence-sidebar-list" id="evidence-sidebar-list"></div>
          </aside>
          <div class="evidence-stage" id="evidence-stage">
            <div class="evidence-pages" id="evidence-pages"></div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}

function presentationContent(){
  return `<div class="presentation-summary">
    <div class="section-label">About The Presentation</div>
    <p class="body-para presentation-editorial">The presentation condenses the Reading Cinemas strategy into an executive-level narrative, moving from the commercial challenge and market opportunity into the nine strategic initiatives, implementation roadmap, risk framework and directional commercial impact.</p>
    <p class="body-para presentation-editorial">It follows the same pilot, measure and scale logic as the full report: begin with lower-risk opportunities within the existing business, validate their impact, then progress into digital investment, programming and regional growth as the evidence strengthens.</p>

    <div class="section-label presentation-major-section">How The Deck Is Structured</div>
    <p class="body-para presentation-editorial">The presentation follows a clear executive sequence: establish the commercial case, define the strategy, show how it could be implemented and close with the expected impact and recommendation.</p>
    <div class="presentation-arc">
      <div class="presentation-arc-card"><div class="presentation-arc-num">01</div><div class="presentation-arc-title">The Case</div><p class="presentation-arc-range">Slides 1 to 3</p><p class="presentation-arc-copy">Commercial challenge, strategic case and market opportunity.</p></div>
      <div class="presentation-arc-card"><div class="presentation-arc-num">02</div><div class="presentation-arc-title">The Strategy</div><p class="presentation-arc-range">Slides 4 to 7</p><p class="presentation-arc-copy">Three strategic clusters covering all nine proposed initiatives.</p></div>
      <div class="presentation-arc-card"><div class="presentation-arc-num">03</div><div class="presentation-arc-title">Execution &amp; Risk</div><p class="presentation-arc-range">Slides 8 to 9</p><p class="presentation-arc-copy">36-month implementation roadmap and six-risk mitigation framework.</p></div>
      <div class="presentation-arc-card"><div class="presentation-arc-num">04</div><div class="presentation-arc-title">Impact &amp; Recommendation</div><p class="presentation-arc-range">Slides 10 to 11</p><p class="presentation-arc-copy">Directional commercial impact and the final strategic recommendation.</p></div>
    </div>

    <div class="presentation-principle" aria-label="Pilot measure scale principle">
      <div class="presentation-principle-label">Pilot &rarr; Measure &rarr; Scale</div>
      <p class="presentation-principle-copy">Every initiative begins as a controlled pilot and progresses only where commercial impact is demonstrated.</p>
    </div>

    <div class="section-label presentation-major-section">The Executive Message</div>
    <div class="presentation-executive-message">
      <p class="body-para">The presentation makes a simple case: Reading does not need to rely on one large growth bet. The near-term opportunity is to create more value from existing capacity through targeted pricing, a stronger customer experience and better audience activation, then use evidence from those pilots to guide larger digital and regional investments.</p>
      <p class="body-para">The approach is deliberately phased. Lower-capital initiatives come first, digital and programming improvements follow, and regional expansion is considered only once the metropolitan model has demonstrated sufficient evidence to support further investment.</p>
    </div>

    <div class="section-label presentation-major-section" id="presentation-full-deck">View The Full Presentation</div>
    <p class="body-para presentation-editorial">Explore the presentation below for a visual overview of the strategy, key opportunities and recommendations.</p>
    <div class="presentation-viewer" id="presentation-viewer">
      <div class="presentation-toolbar">
        <button class="presentation-tool" onclick="presentationToggleSidebar()">Slides</button>
        <span class="presentation-slide-count" id="presentation-slide-count">Slide 1 of 11</span>
        <button class="presentation-tool" onclick="presentationZoom(-.1)">&minus;</button>
        <span class="presentation-zoom-value" id="presentation-zoom-value">100%</span>
        <button class="presentation-tool" onclick="presentationZoom(.1)">+</button>
        <button class="presentation-tool" onclick="presentationFitWidth()">Fit width</button>
        <span class="presentation-spacer"></span>
        <button class="presentation-tool presentation-full" onclick="presentationFullscreen()">Full screen</button>
        <button class="presentation-tool presentation-close" onclick="presentationCloseFullscreen()">Close &times;</button>
      </div>
      <div class="presentation-layout" id="presentation-layout">
        <aside class="presentation-sidebar" id="presentation-sidebar">
          <div class="presentation-sidebar-list" id="presentation-sidebar-list"></div>
        </aside>
        <div class="presentation-stage" id="presentation-stage">
          <div class="presentation-slides" id="presentation-slides"></div>
        </div>
      </div>
    </div>
  </div>`;
}

function marketingAdsContent(){
  const assetRoot='AJD_StrategyLab_assets/marketing-ads/';
  const campaigns=[
    {
      image:'weekday-tickets.png',
      title:'Campaign 01: Five Dollar Weekday Movie Tickets',
      text:'Promotes a simple weekday value offer designed to make cinema visits more attractive from Monday to Thursday. The &ldquo;Am I Reading That Right?&rdquo; line uses the Reading Cinemas name as a playful hook around the surprising $5 price point.',
      alt:'Reading Cinemas five dollar weekday movie tickets campaign visual'
    },
    {
      image:'free-online-booking.png',
      title:'Campaign 02: No More Online Booking Fees',
      text:'Focuses on removing a common point of friction when booking online. &ldquo;No More Online Booking Fees&rdquo; is the main message, supported by the phone checkout visual showing a $0 booking fee.',
      alt:'Reading Cinemas no more online booking fees campaign visual'
    },
    {
      image:'brand-value-message.png',
      title:'Campaign 03: If You Love Reading, You&rsquo;re Gonna Want To Read This',
      text:'A brand-led campaign built around another play on the Reading name. It brings together several reasons to return to the cinema, including weekday value, easier booking, improved snacks and more curated movie experiences.',
      alt:'Reading Cinemas brand and value campaign visual'
    },
    {
      image:'more-fun-campaign.png',
      title:'Campaign 04: Reading Just Got More Fun',
      text:'The campaign plays on the Reading name to position the brand as more than simply a place to watch a movie. &ldquo;Reading Just Got More Fun&rdquo; brings together upgraded snacks, special screenings and easier booking to show how the overall cinema experience can feel more enjoyable.',
      alt:'Reading Cinemas more fun campaign visual'
    },
    {
      image:'reading-night-campaign.png',
      title:'Campaign 05: Make Tonight A Reading Night',
      text:'A lifestyle-focused campaign built around turning an ordinary night into a cinema night. Premium comfort, the big-screen experience and time together position Reading Cinemas as an easy choice for a night out.',
      alt:'Reading Cinemas make tonight a Reading night campaign visual'
    }
  ];
  return `<div class="marketing-ads-page">
    <section class="marketing-ads-section marketing-ads-note">
      <div class="section-label">About The Visuals</div>
      <p class="body-para">These are example marketing concepts created to show how ideas from this project could translate into audience-facing campaigns for Reading Cinemas. Each concept explores a different way to attract attention, build interest or encourage cinema visits.</p>
      <p class="body-para">The concepts, messaging and creative direction were developed by me, with generative design tools used to help bring the visual mockups to life.</p>
    </section>

    ${campaigns.map(campaign=>`<section class="marketing-ads-section marketing-ads-campaign">
      <h2 class="marketing-ads-campaign-title">${campaign.title}</h2>
      <p class="marketing-ads-campaign-text">${campaign.text}</p>
      <figure class="marketing-ads-visual"><img src="${assetRoot+campaign.image}" alt="${campaign.alt}"></figure>
    </section>`).join('')}

    <section class="marketing-ads-section marketing-ads-copy">
      <div class="section-label">From Ideas To Campaigns</div>
      <p class="body-para">These campaign concepts show how some of the ideas developed throughout the Reading Cinemas project could be translated into simple audience-facing messages. Each visual takes a different angle, from value and convenience to brand personality and the overall cinema experience.</p>
      <p class="body-para">The aim was not to create finished advertising material, but to demonstrate how the underlying ideas could be communicated in a way that feels clear, memorable and suited to the Reading Cinemas brand.</p>
    </section>
  </div>`;
}

function pageShell(info, body){
  return '<div class="page report-page report-page-'+info.id+'" id="page-'+info.id+'"><nav class="nav"><div class="nav-brand"><div class="nav-mark" onclick="goHome()">AJD</div><div class="nav-name" onclick="goHome()">Strategy Lab</div><div class="nav-sub">Independent Strategy Reviews</div></div><div class="nav-links"><a href="#" onclick="navTo(\'home-reports\');return false;">Reports</a><a href="#" onclick="navTo(\'home-about\');return false;">About</a><button class="report-nav-menu-btn" type="button" aria-label="Open In This Report navigation" aria-controls="report-nav-drawer" aria-expanded="false" onclick="openReportNavDrawer()"><span></span><span></span><span></span></button></div></nav><div class="article-header"><div class="article-breadcrumb report-breadcrumb">'+allReportsLink()+'</div><div class="report-header-grid"><div class="report-header-main"><div class="article-badges report-meta-pills">'+reportPills(info)+'</div><h1 class="article-title">'+info.title+'</h1><p class="article-deck">'+info.deck+'</p><div class="article-byline">'+reportByline(info.key)+'</div></div>'+reportAtGlance(info)+'</div></div><div class="engage-bar report-engage">'+reportEngagement(info)+'</div><div class="article-body"><div class="article-content" id="content-'+info.id+'">'+body+'</div><div class="article-sidebar">'+reportSidebar(info.id)+'</div></div>'+discussionBlock(info.key)+siteFooter()+'</div>';
}

function fallbackBody(info){
  if(info.id==='posterscan'){
    return '<div class="section-label">PosterScan Concept</div><p class="drop-cap-para">PosterScan adds QR codes to the physical movie posters already inside a cinema, turning existing poster space into an interactive discovery and conversion point.</p><p class="body-para">After scanning, customers land on a mobile-friendly movie discovery page where they can learn more about the film, watch the trailer, see relevant movie information, check sessions, see available cinema experiences where relevant and continue into the Reading Cinemas booking flow.</p><div class="callout-box"><strong>Purpose:</strong> PosterScan connects the physical cinema environment with the digital booking journey without requiring a major new in-venue installation.</div>';
  }
  if(info.id==='future-concepts'){
    return '<div class="section-label">Future Concepts</div><p class="drop-cap-para">Future Concepts gathers the broader concept work developed from the research, including ideas around movie discovery, customer engagement, audience intelligence, programming, accessibility and the cinema experience.</p><p class="body-para">Some concepts stay as early opportunity ideas, while others are developed further into product directions or prototypes.</p>';
  }
  if(info.id==='reelio'){
    return '<div class="section-label">Reelio Product Proposal</div><p class="drop-cap-para">Reelio is an AI cinema concierge concept designed to help customers decide what to watch, find relevant sessions and continue into the existing Reading Cinemas booking journey.</p><p class="body-para">The product direction focuses on reducing decision friction, matching movies to customer mood, surfacing nearby session options and making the path from recommendation to booking feel faster.</p>';
  }
  return '<div class="section-label">'+info.nav+'</div><p class="body-para">This section is part of the Reading Cinemas Australia project and follows the same report structure as the other deliverables.</p>';
}

function normalizeReportPages(){
  REPORT_PAGES.forEach(info=>{
    let page=document.getElementById('page-'+info.id);
    if(!page){
      page=document.createElement('div');
      page.className='page';
      page.id='page-'+info.id;
      document.body.insertBefore(page, document.querySelector('script'));
    }
    const existing=page.querySelector('.article-content');
    const body=info.id==='rc-main'
      ? overviewContent()
      : info.id==='strategy-report'
        ? strategyReportContent()
        : info.id==='presentation'
          ? presentationContent()
          : info.id==='evidence-review'
            ? evidenceReviewContent()
            : info.id==='demographic'
              ? demographicContent()
              : info.id==='movie-research'
                ? movieResearchContent()
                : info.id==='future-concepts'
                  ? futureConceptsContent()
                  : info.id==='reelio'
                    ? reelioProductContent()
                    : info.id==='reading-pulse'
                      ? readingPulseProductContent()
                      : info.id==='audience-pulse'
                        ? audiencePulseProductContent()
                        : info.id==='posterscan'
                          ? posterScanProductContent()
                          : info.id==='digital-magazine'
                            ? digitalMagazineProductContent()
                            : info.id==='marketing-ads'
                              ? marketingAdsContent()
                      : existing
            ? existing.innerHTML
            : fallbackBody(info);
    page.outerHTML=pageShell(info, body);
  });
}

function syncHeroCardHeight(){
  const card=document.querySelector('.featured-card');
  if(!card)return;
  card.style.removeProperty('--featured-card-height');
  card.style.removeProperty('margin-top');
}

//  SHARED ENGAGEMENT VIA SUPABASE
const strategyLabEngagementState={
  views:0,
  likes:0,
  shares:0,
  comments:[],
  liked:false,
  loaded:false
};
let strategyLabEngagementPollStarted=false;
let strategyLabLikeInFlight=false;
let strategyLabCommentInFlight=false;

function strategyLabRandomId(){
  if(window.crypto&&typeof window.crypto.randomUUID==='function')return window.crypto.randomUUID();
  return 'sl-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)+'-'+Math.random().toString(36).slice(2);
}

function strategyLabPersistentVisitorId(){
  try{
    let id=localStorage.getItem(STRATEGY_LAB_VISITOR_ID_KEY);
    if(!id){
      id=strategyLabRandomId();
      localStorage.setItem(STRATEGY_LAB_VISITOR_ID_KEY,id);
    }
    return id;
  }catch(error){
    return strategyLabRandomId();
  }
}

function strategyLabSessionViewId(){
  try{
    let id=sessionStorage.getItem(STRATEGY_LAB_VIEW_SESSION_ID_KEY);
    if(!id){
      id=strategyLabRandomId();
      sessionStorage.setItem(STRATEGY_LAB_VIEW_SESSION_ID_KEY,id);
    }
    return id;
  }catch(error){
    return strategyLabRandomId();
  }
}

function strategyLabApiHeaders(extra={}){
  return {
    apikey:STRATEGY_LAB_SUPABASE_KEY,
    Authorization:'Bearer '+STRATEGY_LAB_SUPABASE_KEY,
    ...extra
  };
}

async function strategyLabApiRequest(path,options={}){
  const method=options.method||'GET';
  const request={
    method,
    headers:strategyLabApiHeaders({Accept:'application/json',...(options.headers||{})}),
    cache:'no-store'
  };
  if(Object.prototype.hasOwnProperty.call(options,'body')){
    request.headers['Content-Type']='application/json';
    request.body=JSON.stringify(options.body);
  }
  const response=await fetch(STRATEGY_LAB_SUPABASE_URL+'/rest/v1/'+path,request);
  const text=await response.text();
  if(!response.ok){
    throw new Error('Supabase request failed ('+response.status+'): '+text);
  }
  if(!text)return null;
  try{return JSON.parse(text);}catch(error){return text;}
}

function strategyLabRpc(name,body){
  return strategyLabApiRequest('rpc/'+encodeURIComponent(name),{method:'POST',body});
}

function strategyLabFormatCommentTime(value){
  try{
    return new Intl.DateTimeFormat('en-AU',{
      day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'
    }).format(new Date(value));
  }catch(error){
    return '';
  }
}

function strategyLabCommentFromRow(row){
  return {
    name:row&&row.author_name?row.author_name:'Anonymous',
    text:row&&row.comment_text?row.comment_text:'',
    time:strategyLabFormatCommentTime(row&&row.created_at)
  };
}

function strategyLabStoredLikedState(){
  try{return localStorage.getItem(STRATEGY_LAB_LIKED_STATE_KEY)==='1';}catch(error){return false;}
}

function strategyLabStoreLikedState(liked){
  try{localStorage.setItem(STRATEGY_LAB_LIKED_STATE_KEY,liked?'1':'0');}catch(error){}
}

async function refreshStrategyLabEngagement(){
  try{
    const project=encodeURIComponent(STRATEGY_LAB_SUPABASE_PROJECT_KEY);
    const [statsRows,commentRows]=await Promise.all([
      strategyLabApiRequest('engagement_stats?select=views,likes,shares&project_key=eq.'+project+'&limit=1'),
      strategyLabApiRequest('comments?select=author_name,comment_text,created_at&project_key=eq.'+project+'&is_hidden=eq.false&order=created_at.asc')
    ]);
    const stats=Array.isArray(statsRows)&&statsRows[0]?statsRows[0]:{views:0,likes:0,shares:0};
    strategyLabEngagementState.views=Math.max(0,Number(stats.views)||0);
    strategyLabEngagementState.likes=Math.max(0,Number(stats.likes)||0);
    strategyLabEngagementState.shares=Math.max(0,Number(stats.shares)||0);
    strategyLabEngagementState.comments=Array.isArray(commentRows)?commentRows.map(strategyLabCommentFromRow):[];
    strategyLabEngagementState.liked=strategyLabStoredLikedState();
    strategyLabEngagementState.loaded=true;
    updateStrategyLabEngagementUI();
    return true;
  }catch(error){
    console.warn('Strategy Lab engagement could not be loaded.',error);
    return false;
  }
}

function startStrategyLabEngagementPolling(){
  if(strategyLabEngagementPollStarted)return;
  strategyLabEngagementPollStarted=true;
  window.setInterval(()=>{
    if(document.visibilityState!=='hidden')refreshStrategyLabEngagement();
  },20000);
  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible')refreshStrategyLabEngagement();
  });
}

//  VIEWS
function trackPageView(id){
  if(isReport001Key(id))countReportViewOnce(READING_CINEMAS_REPORT_ID);
  refreshStrategyLabEngagement();
  startStrategyLabEngagementPolling();
}

function reportStorageKey(reportId,metric){
  return 'strategy-lab-report-'+reportId+'-'+metric;
}

function reportMetricKey(reportId,metric){
  return reportStorageKey(reportId,metric);
}

function readReportMetric(reportId,metric){
  if(reportId!==READING_CINEMAS_REPORT_ID)return 0;
  if(metric==='views')return strategyLabEngagementState.views;
  if(metric==='likes')return strategyLabEngagementState.likes;
  if(metric==='shares')return strategyLabEngagementState.shares;
  return 0;
}

function writeReportMetric(reportId,metric,value){
  if(reportId!==READING_CINEMAS_REPORT_ID)return;
  const safe=Math.max(0,Number(value)||0);
  if(metric==='views')strategyLabEngagementState.views=safe;
  if(metric==='likes')strategyLabEngagementState.likes=safe;
  if(metric==='shares')strategyLabEngagementState.shares=safe;
}

function reportCommentsKey(reportId){
  return reportStorageKey(reportId,'comments');
}

function reportLikedKey(reportId){
  return reportStorageKey(reportId,'liked');
}

function readReportCommentsById(reportId){
  return reportId===READING_CINEMAS_REPORT_ID?strategyLabEngagementState.comments:[];
}

async function countReportViewOnce(reportId){
  if(reportId!==READING_CINEMAS_REPORT_ID)return;
  let alreadyRecorded=false;
  try{alreadyRecorded=sessionStorage.getItem(STRATEGY_LAB_VIEW_RECORDED_KEY)==='1';}catch(error){}
  if(alreadyRecorded)return;
  try{
    const result=await strategyLabRpc('record_view',{
      p_project_key:STRATEGY_LAB_SUPABASE_PROJECT_KEY,
      p_session_id:strategyLabSessionViewId()
    });
    const count=Number(result);
    if(Number.isFinite(count))strategyLabEngagementState.views=Math.max(0,count);
    try{sessionStorage.setItem(STRATEGY_LAB_VIEW_RECORDED_KEY,'1');}catch(error){}
    updateStrategyLabEngagementUI();
  }catch(error){
    console.warn('Strategy Lab view could not be recorded.',error);
  }
}

function aggregateReportMetric(metric){
  return readReportMetric(READING_CINEMAS_REPORT_ID,metric);
}

function aggregateReportCommentsCount(){
  return strategyLabEngagementState.comments.length;
}

//  LIKES
async function toggleLike(key){
  if(!isReport001Key(key)||strategyLabLikeInFlight)return;
  strategyLabLikeInFlight=true;
  try{
    const result=await strategyLabRpc('toggle_like',{
      p_project_key:STRATEGY_LAB_SUPABASE_PROJECT_KEY,
      p_visitor_id:strategyLabPersistentVisitorId()
    });
    const row=Array.isArray(result)?result[0]:result;
    if(row&&typeof row==='object'){
      strategyLabEngagementState.liked=!!row.liked;
      strategyLabEngagementState.likes=Math.max(0,Number(row.like_count)||0);
      strategyLabStoreLikedState(strategyLabEngagementState.liked);
      updateStrategyLabEngagementUI();
    }else{
      await refreshStrategyLabEngagement();
    }
  }catch(error){
    console.warn('Strategy Lab like could not be updated.',error);
    showReportToast('Like could not be updated');
  }finally{
    strategyLabLikeInFlight=false;
  }
}

function updateKPIs(){
  updateStrategyLabEngagementUI();
}

//  SHARE
const REPORT_SHARE_CONFIGS={
  [READING_CINEMAS_REPORT_ID]:{
    title:REPORT_001_SHARE_TITLE,
    text:REPORT_001_SHARE_TEXT,
    route:REPORT_001_CANONICAL_HASH,
    heading:'Reading Cinemas Australia'
  }
};
let reportShareInProgress=false;
let lastReportShareAt=0;
let activeShareMenu=null;

async function incrementReportShare(reportId){
  if(reportId!==READING_CINEMAS_REPORT_ID)return;
  try{
    const result=await strategyLabRpc('record_share',{p_project_key:STRATEGY_LAB_SUPABASE_PROJECT_KEY});
    const count=Number(result);
    if(Number.isFinite(count))strategyLabEngagementState.shares=Math.max(0,count);
    updateStrategyLabEngagementUI();
  }catch(error){
    console.warn('Strategy Lab share could not be recorded.',error);
  }
}

function reportShareConfig(reportId){
  return REPORT_SHARE_CONFIGS[reportId]||null;
}

function configuredSiteBaseUrl(){
  const configured=(typeof SITE_BASE_URL==='string'?SITE_BASE_URL:'').trim();
  if(configured)return configured.replace(/\/$/, '');
  return '';
}

function reportShareUrl(reportId){
  const config=reportShareConfig(reportId);
  if(!config)return '';
  const configured=configuredSiteBaseUrl();
  if(configured)return configured+'/#'+config.route;
  if(window.location.protocol==='http:'||window.location.protocol==='https:'){
    return (window.location.origin+window.location.pathname).replace(/\/$/, '')+'#'+config.route;
  }
  return '';
}

function report001ShareUrl(){
  return reportShareUrl(READING_CINEMAS_REPORT_ID);
}

function copyWithTextarea(value){
  return new Promise((resolve,reject)=>{
    try{
      const textarea=document.createElement('textarea');
      textarea.value=value;
      textarea.setAttribute('readonly','');
      textarea.style.position='fixed';
      textarea.style.left='-9999px';
      textarea.style.top='0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok=document.execCommand&&document.execCommand('copy');
      document.body.removeChild(textarea);
      ok?resolve():reject(new Error('copy failed'));
    }catch(error){
      reject(error);
    }
  });
}

async function copyShareUrl(url){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    try{
      await navigator.clipboard.writeText(url);
      return true;
    }catch(error){}
  }
  await copyWithTextarea(url);
  return true;
}

function showShareButtonFeedback(key,message){
  const count=document.getElementById('share-count-'+key);
  const button=count&&count.closest?count.closest('.engage-btn'):null;
  if(!button)return;
  if(!button.dataset.originalShareHtml)button.dataset.originalShareHtml=button.innerHTML;
  button.innerHTML=message;
  clearTimeout(button._shareFeedbackTimer);
  button._shareFeedbackTimer=setTimeout(()=>{
    if(button.dataset.originalShareHtml){
      button.innerHTML=button.dataset.originalShareHtml;
      delete button.dataset.originalShareHtml;
      updateStrategyLabEngagementUI();
    }
  },2000);
}

function setShareMenuStatus(message){
  const status=document.querySelector('.share-popover-status');
  if(status)status.textContent=message||'';
}

function setShareActionFeedback(action,message){
  const button=document.querySelector('[data-share-action="'+action+'"]');
  if(!button)return;
  if(!button.dataset.originalText)button.dataset.originalText=button.textContent;
  button.textContent=message;
  clearTimeout(button._shareActionTimer);
  button._shareActionTimer=setTimeout(()=>{
    if(button.dataset.originalText){
      button.textContent=button.dataset.originalText;
      delete button.dataset.originalText;
    }
  },2000);
}

function showReportShareSuccess(key){
  showReportToast('Link copied');
  showShareButtonFeedback(key,'&#10003; Link copied');
}

function showShareUnavailable(key){
  const message='Sharing available after publishing';
  showReportToast(message);
  showShareButtonFeedback(key,message);
  setShareMenuStatus(message);
}

function canStartReportShare(){
  const now=Date.now();
  if(reportShareInProgress)return false;
  if(now-lastReportShareAt<1800)return false;
  reportShareInProgress=true;
  return true;
}

function finishReportShare(successful){
  reportShareInProgress=false;
  if(successful)lastReportShareAt=Date.now();
}

function isMobileShareDevice(){
  const coarse=window.matchMedia&&window.matchMedia('(pointer: coarse)').matches;
  const narrow=window.matchMedia&&window.matchMedia('(max-width: 900px)').matches;
  return !!(coarse&&narrow);
}

function canUseNativeReportShare(shareData){
  if(window.location.protocol!=='https:')return false;
  if(window.isSecureContext!==true)return false;
  if(typeof navigator.share!=='function')return false;
  if(typeof navigator.canShare==='function'){
    try{
      if(!navigator.canShare(shareData))return false;
    }catch(error){
      return false;
    }
  }
  return true;
}

function shareDataForReport(reportId){
  const config=reportShareConfig(reportId);
  const url=reportShareUrl(reportId);
  if(!config||!url)return null;
  return {title:config.title,text:config.text,url};
}

async function copyReportShareLink(){
  if(!activeShareMenu)return;
  const {reportId,key}=activeShareMenu;
  const data=shareDataForReport(reportId);
  if(!data){
    showShareUnavailable(key);
    return;
  }
  if(!canStartReportShare())return;
  try{
    await copyShareUrl(data.url);
    incrementReportShare(reportId);
    showReportShareSuccess(key);
    setShareMenuStatus('Link copied');
    setShareActionFeedback('copy','Link copied');
    finishReportShare(true);
  }catch(error){
    finishReportShare(false);
    showReportToast('Link could not be copied');
    setShareMenuStatus('Link could not be copied');
  }
}

function shareReportToLinkedIn(){
  if(!activeShareMenu)return;
  const {reportId,key}=activeShareMenu;
  const data=shareDataForReport(reportId);
  if(!data){
    showShareUnavailable(key);
    return;
  }
  if(!canStartReportShare())return;
  const linkedInUrl='https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(data.url);
  window.open(linkedInUrl,'_blank','noopener,noreferrer');
  incrementReportShare(reportId);
  finishReportShare(true);
  closeShareMenu();
}

function shareReportByEmail(){
  if(!activeShareMenu)return;
  const {reportId,key}=activeShareMenu;
  const data=shareDataForReport(reportId);
  if(!data){
    showShareUnavailable(key);
    return;
  }
  if(!canStartReportShare())return;
  const body='I thought you might find this independent Reading Cinemas strategy review interesting:\n\n'+data.url;
  window.location.href='mailto:?subject='+encodeURIComponent(data.title)+'&body='+encodeURIComponent(body);
  incrementReportShare(reportId);
  finishReportShare(true);
  closeShareMenu();
}

function closeShareMenu(){
  const existing=document.querySelector('.share-popover-backdrop');
  if(existing)existing.remove();
  document.removeEventListener('keydown',handleShareMenuKeydown);
  activeShareMenu=null;
}

function handleShareMenuKeydown(event){
  if(event.key==='Escape')closeShareMenu();
}

function openShareMenu(reportId,key){
  const config=reportShareConfig(reportId);
  if(!config)return;
  closeShareMenu();
  activeShareMenu={reportId,key};
  const backdrop=document.createElement('div');
  backdrop.className='share-popover-backdrop';
  backdrop.innerHTML='<div class="share-popover" role="dialog" aria-modal="true" aria-labelledby="share-popover-title"><div class="share-popover-head"><div><div class="share-popover-kicker">Share this report</div><div class="share-popover-title" id="share-popover-title">'+escapeHTML(config.heading)+'</div></div><button class="share-popover-close" type="button" aria-label="Close share menu">&times;</button></div><div class="share-popover-actions"><button class="share-popover-action" type="button" data-share-action="copy">Copy link</button><button class="share-popover-action" type="button" data-share-action="linkedin">LinkedIn</button><button class="share-popover-action" type="button" data-share-action="email">Email</button></div><div class="share-popover-status" aria-live="polite"></div></div>';
  backdrop.addEventListener('click',event=>{if(event.target===backdrop)closeShareMenu();});
  backdrop.querySelector('.share-popover-close').addEventListener('click',closeShareMenu);
  backdrop.querySelector('[data-share-action="copy"]').addEventListener('click',copyReportShareLink);
  backdrop.querySelector('[data-share-action="linkedin"]').addEventListener('click',shareReportToLinkedIn);
  backdrop.querySelector('[data-share-action="email"]').addEventListener('click',shareReportByEmail);
  document.body.appendChild(backdrop);
  document.addEventListener('keydown',handleShareMenuKeydown);
  requestAnimationFrame(()=>{
    const first=backdrop.querySelector('[data-share-action="copy"]');
    if(first)first.focus();
  });
}

async function shareReport(reportId,key){
  const data=shareDataForReport(reportId);
  if(isMobileShareDevice()&&data&&canUseNativeReportShare(data)){
    if(!canStartReportShare())return;
    try{
      await navigator.share(data);
      incrementReportShare(reportId);
      finishReportShare(true);
    }catch(error){
      finishReportShare(false);
      if(error&&(error.name==='AbortError'||error.name==='NotAllowedError'))return;
      openShareMenu(reportId,key);
    }
    return;
  }
  openShareMenu(reportId,key);
}

function shareReportForKey(key){
  if(!isReport001Key(key))return;
  shareReport(READING_CINEMAS_REPORT_ID,key);
}

//  COMMENTS
async function postComment(key){
  if(!isReport001Key(key)||strategyLabCommentInFlight)return;
  const textEl=document.getElementById('disc-text-'+key);
  const nameEl=document.getElementById('disc-name-'+key);
  if(!textEl)return;
  const text=textEl.value.trim();
  const name=(nameEl&&nameEl.value.trim())||'Anonymous';
  if(!text)return;
  if(text.length>1000){
    showReportToast('Comment must be 1000 characters or less');
    return;
  }
  strategyLabCommentInFlight=true;
  try{
    await strategyLabRpc('add_comment',{
      p_project_key:STRATEGY_LAB_SUPABASE_PROJECT_KEY,
      p_author_name:name,
      p_comment_text:text
    });
    textEl.value='';
    if(nameEl)nameEl.value='';
    await refreshStrategyLabEngagement();
    showReportToast('Comment posted');
  }catch(error){
    console.warn('Strategy Lab comment could not be posted.',error);
    showReportToast('Comment could not be posted');
  }finally{
    strategyLabCommentInFlight=false;
  }
}

function renderComments(key,comments){
  const list=document.getElementById('disc-list-'+key);
  const countEl=document.getElementById('disc-count-'+key);
  if(!list)return;
  if(countEl)countEl.textContent='('+comments.length+' comment'+(comments.length!==1?'s':'')+')';
  const btn=document.getElementById('comment-count-'+key);if(btn)btn.textContent=comments.length;
  if(!comments.length){list.innerHTML='<p class="no-comments">No comments yet. Be the first to share your thoughts.</p>';return;}
  list.innerHTML=comments.map(c=>`<div class="comment"><div class="comment-header"><span class="comment-author">${escapeHTML(c.name)}</span><span class="comment-date">${escapeHTML(c.time)}</span></div><div class="comment-body">${escapeHTML(c.text)}</div></div>`).join('');
}

function updateCommentBadges(){
  updateStrategyLabEngagementUI();
}

function readReport001Comments(){
  return strategyLabEngagementState.comments;
}

function clearReport001CommentsOnce(){}
function seedReport001Engagement(){}

function escapeHTML(value){
  return String(value||'').replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function renderReport001Comments(comments){
  report001Keys().forEach(k=>renderComments(k,comments));
}

function updateReport001EngagementUI(){
  const liked=strategyLabEngagementState.liked;
  const views=strategyLabEngagementState.views;
  const likes=strategyLabEngagementState.likes;
  const shares=strategyLabEngagementState.shares;
  const comments=strategyLabEngagementState.comments;
  report001Keys().forEach(k=>{
    const viewCount=document.getElementById('views-'+k);
    if(viewCount)viewCount.textContent=views.toLocaleString();
    const btn=document.getElementById('like-'+k);
    if(btn)btn.classList.toggle('liked',liked);
    const likeCount=document.getElementById('like-count-'+k);
    if(likeCount)likeCount.textContent=likes.toLocaleString();
    const shareCount=document.getElementById('share-count-'+k);
    if(shareCount)shareCount.textContent=shares.toLocaleString();
    const commentCount=document.getElementById('comment-count-'+k);
    if(commentCount)commentCount.textContent=comments.length.toLocaleString();
    const discCount=document.getElementById('disc-count-'+k);
    if(discCount)discCount.textContent='('+comments.length+' comment'+(comments.length!==1?'s':'')+')';
  });
  renderReport001Comments(comments);
}

function updateStrategyLabEngagementUI(){
  updateReport001EngagementUI();
  const totalViews=aggregateReportMetric('views');
  const totalLikes=aggregateReportMetric('likes');
  const totalShares=aggregateReportMetric('shares');
  const totalComments=aggregateReportCommentsCount();
  const kpiViews=document.getElementById('kpi-views');if(kpiViews)kpiViews.textContent=totalViews.toLocaleString();
  const kpiLikes=document.getElementById('kpi-likes');if(kpiLikes)kpiLikes.textContent=totalLikes.toLocaleString();
  const kpiShares=document.getElementById('kpi-shares');if(kpiShares)kpiShares.textContent=totalShares.toLocaleString();
  const heroViews=document.getElementById('hero-views');if(heroViews)heroViews.textContent=totalViews.toLocaleString();
  const heroLikes=document.getElementById('hero-likes');if(heroLikes)heroLikes.textContent=totalLikes.toLocaleString();
  const heroComments=document.getElementById('hero-comments');if(heroComments)heroComments.textContent=totalComments.toLocaleString();
}

function showReportToast(message){
  let toast=document.querySelector('.report-share-toast');
  if(!toast){
    toast=document.createElement('div');
    toast.className='report-share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(showReportToast.timer);
  showReportToast.timer=setTimeout(()=>toast.classList.remove('show'),1600);
}

const STRATEGY_REPORT_TOTAL_PAGES=15;
const STRATEGY_REPORT_PAGE_LABELS=[
  'Cover',
  'Executive Summary',
  'Market Context',
  'Commercial Opportunities',
  'Capacity & Weekday Demand',
  'F&B & Digital Experience',
  'Pricing Optimisation',
  'Customer Experience',
  'Audience Growth',
  'Regional & Programming',
  'Success Metrics',
  'Commercial Impact & Roadmap',
  'Roadmap & Risks',
  'Risk Framework',
  'Strategic Recommendation'
];
const STRATEGY_REPORT_PAGE_IMAGES=Array.from({length:STRATEGY_REPORT_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/report-pages/report-001-page-'+String(i+1).padStart(2,'0')+'.png');
const strategyPdfState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeBound:false};

function initStrategyPdfViewer(){
  buildStrategyPdfViewer();
  strategyPdfFitWidth();
  updateStrategyPdfActive(1);
  bindStrategyPdfWheelZoom();
  if(!strategyPdfState.resizeBound){
    strategyPdfState.resizeBound=true;
    window.addEventListener('resize',()=>{if(strategyPdfState.fit)strategyPdfFitWidth(true);});
  }
  document.addEventListener('fullscreenchange',()=>{
    const viewer=document.getElementById('strategy-pdf-viewer');
    if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
    if(strategyPdfState.fit)requestAnimationFrame(()=>strategyPdfFitWidth(true));
  });
}

function buildStrategyPdfViewer(){
  const pages=document.getElementById('strategy-pdf-pages');
  const sidebar=document.getElementById('strategy-pdf-sidebar-list');
  const stage=document.getElementById('strategy-pdf-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=STRATEGY_REPORT_PAGE_IMAGES.map((src,i)=>'<div class="strategy-pdf-page-wrap" id="strategy-pdf-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="strategy-pdf-page" src="'+src+'" alt="Reading Cinemas strategy report page '+(i+1)+'"></div>').join('');
  sidebar.innerHTML=STRATEGY_REPORT_PAGE_IMAGES.map((src,i)=>'<button class="strategy-pdf-thumb-btn" id="strategy-pdf-thumb-'+(i+1)+'" onclick="strategyPdfJumpToPage('+(i+1)+')"><img class="strategy-pdf-thumb" src="'+src+'" alt=""><span><span class="strategy-pdf-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="strategy-pdf-thumb-label">'+STRATEGY_REPORT_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(strategyPdfState.observer)strategyPdfState.observer.disconnect();
  strategyPdfState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateStrategyPdfActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.strategy-pdf-page-wrap').forEach(page=>strategyPdfState.observer.observe(page));
}

function updateStrategyPdfActive(page){
  strategyPdfState.page=page;
  const label=document.getElementById('strategy-pdf-page-count');
  if(label)label.textContent='Page '+page+' of '+STRATEGY_REPORT_TOTAL_PAGES;
  document.querySelectorAll('.strategy-pdf-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('strategy-pdf-thumb-'+page);
  const sidebar=document.getElementById('strategy-pdf-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function strategyPdfJumpToPage(page){
  const stage=document.getElementById('strategy-pdf-stage');
  const target=document.getElementById('strategy-pdf-page-'+page);
  const layout=document.getElementById('strategy-pdf-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateStrategyPdfActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function strategyPdfToggleSidebar(){
  const layout=document.getElementById('strategy-pdf-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
}

function strategyPdfClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function strategyPdfBaseWidth(){
  const stage=document.getElementById('strategy-pdf-stage');
  if(!stage)return 980;
  return Math.min(980,Math.max(280,stage.clientWidth-44));
}

function strategyPdfUpdateZoomLabel(){
  const label=document.getElementById('strategy-pdf-zoom-value');
  if(label)label.textContent=Math.round(strategyPdfState.zoom*100)+'%';
}

function updateStrategyPdfZoom(){
  const pages=document.querySelectorAll('.strategy-pdf-page-wrap');
  const width=Math.round(strategyPdfBaseWidth()*strategyPdfState.zoom);
  pages.forEach(page=>{
    page.style.width=width+'px';
    page.style.transform='none';
    page.style.marginBottom='0';
  });
  strategyPdfUpdateZoomLabel();
}

function strategyPdfZoom(delta){
  strategyPdfState.fit=false;
  strategyPdfSetZoom(strategyPdfState.zoom+delta);
}

function strategyPdfSetZoom(nextZoom, pointer){
  const stage=document.getElementById('strategy-pdf-stage');
  if(!stage)return;
  const oldZoom=strategyPdfState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  strategyPdfState.zoom=strategyPdfClampZoom(nextZoom);
  updateStrategyPdfZoom();
  const ratio=oldZoom?strategyPdfState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function strategyPdfFitWidth(quiet){
  const stage=document.getElementById('strategy-pdf-stage');
  if(!stage)return;
  const currentPage=strategyPdfState.page;
  const target=document.getElementById('strategy-pdf-page-'+currentPage);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  strategyPdfState.fit=true;
  strategyPdfState.zoom=1;
  updateStrategyPdfZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateStrategyPdfActive(currentPage);
}

function bindStrategyPdfWheelZoom(){
  const stage=document.getElementById('strategy-pdf-stage');
  if(!stage||strategyPdfState.wheelBound)return;
  strategyPdfState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    strategyPdfState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    strategyPdfSetZoom(strategyPdfState.zoom+(direction*step),event);
  },{passive:false});
}

function strategyPdfFullscreen(){
  const viewer=document.getElementById('strategy-pdf-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function strategyPdfCloseFullscreen(){
  const viewer=document.getElementById('strategy-pdf-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}


const FUTURE_TOTAL_PAGES=11;
const FUTURE_PAGE_LABELS=[
  'Cover',
  'MovieScene',
  'MovieScene Continued and Reelio Kiosk',
  'Reelio Kiosk Continued and Tactile Cinema Device',
  'Tactile Cinema Device Continued',
  'Reading Pulse',
  'Reading Pulse Continued and The Reading Preview',
  'The Reading Preview Continued and Reading StoryCard',
  'Reading StoryCard Continued and Reading PosterScan',
  'Reading PosterScan Continued',
  'Audience Pulse'
];
const FUTURE_PAGE_IMAGES=Array.from({length:FUTURE_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/future-concepts-pages/future-page-'+String(i+1).padStart(2,'0')+'.png');
const futureState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null,fullscreenBound:false};

function initFutureConceptsViewer(){
  buildFutureConceptsViewer();
  futureFitWidth(true);
  updateFutureActive(1);
  bindFutureWheelZoom();
  const stage=document.getElementById('future-stage');
  if(stage&&window.ResizeObserver&&!futureState.resizeObserver){
    futureState.resizeObserver=new ResizeObserver(()=>{if(futureState.fit)futureFitWidth(true);});
    futureState.resizeObserver.observe(stage);
  }
  if(!futureState.fullscreenBound){
    futureState.fullscreenBound=true;
    document.addEventListener('fullscreenchange',()=>{
      const viewer=document.getElementById('future-concepts-viewer');
      if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
      if(futureState.fit)requestAnimationFrame(()=>futureFitWidth(true));
    });
  }
}

function buildFutureConceptsViewer(){
  const pages=document.getElementById('future-pages');
  const sidebar=document.getElementById('future-sidebar-list');
  const stage=document.getElementById('future-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=FUTURE_PAGE_IMAGES.map((src,i)=>'<div class="future-page-wrap" id="future-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="future-page-image" src="'+src+'" alt="Future Concepts page '+(i+1)+'" loading="lazy"></div>').join('');
  sidebar.innerHTML=FUTURE_PAGE_IMAGES.map((src,i)=>'<button class="future-thumb-btn" id="future-thumb-'+(i+1)+'" onclick="futureJumpToPage('+(i+1)+')"><img class="future-thumb" src="'+src+'" alt="" loading="lazy"><span><span class="future-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="future-thumb-label">'+FUTURE_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(futureState.observer)futureState.observer.disconnect();
  futureState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateFutureActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.future-page-wrap').forEach(page=>futureState.observer.observe(page));
}

function updateFutureActive(page){
  futureState.page=page;
  const label=document.getElementById('future-page-count');
  if(label)label.textContent='Page '+page+' of '+FUTURE_TOTAL_PAGES;
  document.querySelectorAll('.future-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('future-thumb-'+page);
  const sidebar=document.getElementById('future-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function futureJumpToPage(page){
  const stage=document.getElementById('future-stage');
  const target=document.getElementById('future-page-'+page);
  const layout=document.getElementById('future-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateFutureActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function futureToggleSidebar(){
  const layout=document.getElementById('future-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(futureState.fit)futureFitWidth(true);});
}

function futureClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function futureBaseWidth(){
  const stage=document.getElementById('future-stage');
  if(!stage)return 900;
  return Math.min(900,Math.max(320,stage.clientWidth-44));
}

function futureUpdateZoomLabel(){
  const label=document.getElementById('future-zoom-value');
  if(label)label.textContent=Math.round(futureState.zoom*100)+'%';
}

function updateFutureZoom(){
  const pages=document.querySelectorAll('.future-page-wrap');
  const width=Math.round(futureBaseWidth()*futureState.zoom);
  pages.forEach(page=>{page.style.width=width+'px';});
  futureUpdateZoomLabel();
}

function futureZoom(delta){
  futureState.fit=false;
  futureSetZoom(futureState.zoom+delta);
}

function futureSetZoom(nextZoom,pointer){
  const stage=document.getElementById('future-stage');
  if(!stage)return;
  const oldZoom=futureState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  futureState.zoom=futureClampZoom(nextZoom);
  updateFutureZoom();
  const ratio=oldZoom?futureState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function futureFitWidth(quiet){
  const stage=document.getElementById('future-stage');
  if(!stage)return;
  const current=futureState.page;
  const target=document.getElementById('future-page-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  futureState.fit=true;
  futureState.zoom=1;
  updateFutureZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateFutureActive(current);
}

function bindFutureWheelZoom(){
  const stage=document.getElementById('future-stage');
  if(!stage||futureState.wheelBound)return;
  futureState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    futureState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    futureSetZoom(futureState.zoom+(direction*step),event);
  },{passive:false});
}

function futureFullscreen(){
  const viewer=document.getElementById('future-concepts-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function futureCloseFullscreen(){
  const viewer=document.getElementById('future-concepts-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}


const REELIO_TOTAL_PAGES=25;
const REELIO_PAGE_LABELS=[
  'Cover','Executive Summary','Project Objective','Customer Issues','How Reelio Works','Product Positioning','Target Users','Product Scope','Key Features','Features Continued',
  'Customer Journey','Business Value','Customer Value','Booking Redirection','Implementation Approach','Data Requirements','Privacy and AI','Stakeholders','Risks and Controls','Success Metrics',
  'Roadmap','Future Scope','Launch Path','Final Summary','Appendix'
];
const REELIO_PAGE_IMAGES=Array.from({length:REELIO_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/reelio-pages/reelio-page-'+String(i+1).padStart(2,'0')+'.png');
const reelioState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null,fullscreenBound:false};

function initReelioViewer(){
  buildReelioViewer();
  reelioFitWidth(true);
  updateReelioActive(1);
  bindReelioWheelZoom();
  const stage=document.getElementById('reelio-stage');
  if(stage&&window.ResizeObserver&&!reelioState.resizeObserver){
    reelioState.resizeObserver=new ResizeObserver(()=>{if(reelioState.fit)reelioFitWidth(true);});
    reelioState.resizeObserver.observe(stage);
  }
  if(!reelioState.fullscreenBound){
    reelioState.fullscreenBound=true;
    document.addEventListener('fullscreenchange',()=>{
      const viewer=document.getElementById('reelio-viewer');
      if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
      if(reelioState.fit)requestAnimationFrame(()=>reelioFitWidth(true));
    });
  }
}

function buildReelioViewer(){
  const pages=document.getElementById('reelio-pages');
  const sidebar=document.getElementById('reelio-sidebar-list');
  const stage=document.getElementById('reelio-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=REELIO_PAGE_IMAGES.map((src,i)=>'<div class="reelio-page-wrap" id="reelio-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="reelio-page-image" src="'+src+'" alt="Reelio Product Proposal page '+(i+1)+'" loading="lazy"></div>').join('');
  sidebar.innerHTML=REELIO_PAGE_IMAGES.map((src,i)=>'<button class="reelio-thumb-btn" id="reelio-thumb-'+(i+1)+'" onclick="reelioJumpToPage('+(i+1)+')"><img class="reelio-thumb" src="'+src+'" alt="" loading="lazy"><span><span class="reelio-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="reelio-thumb-label">'+REELIO_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(reelioState.observer)reelioState.observer.disconnect();
  reelioState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateReelioActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.reelio-page-wrap').forEach(page=>reelioState.observer.observe(page));
}

function updateReelioActive(page){
  reelioState.page=page;
  const label=document.getElementById('reelio-page-count');
  if(label)label.textContent='Page '+page+' of '+REELIO_TOTAL_PAGES;
  document.querySelectorAll('.reelio-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('reelio-thumb-'+page);
  const sidebar=document.getElementById('reelio-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function reelioJumpToPage(page){
  const stage=document.getElementById('reelio-stage');
  const target=document.getElementById('reelio-page-'+page);
  const layout=document.getElementById('reelio-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateReelioActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function reelioToggleSidebar(){
  const layout=document.getElementById('reelio-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(reelioState.fit)reelioFitWidth(true);});
}

function reelioClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function reelioBaseWidth(){
  const stage=document.getElementById('reelio-stage');
  if(!stage)return 900;
  return Math.min(900,Math.max(320,stage.clientWidth-44));
}

function reelioUpdateZoomLabel(){
  const label=document.getElementById('reelio-zoom-value');
  if(label)label.textContent=Math.round(reelioState.zoom*100)+'%';
}

function updateReelioZoom(){
  const pages=document.querySelectorAll('.reelio-page-wrap');
  const width=Math.round(reelioBaseWidth()*reelioState.zoom);
  pages.forEach(page=>{page.style.width=width+'px';});
  reelioUpdateZoomLabel();
}

function reelioZoom(delta){
  reelioState.fit=false;
  reelioSetZoom(reelioState.zoom+delta);
}

function reelioSetZoom(nextZoom,pointer){
  const stage=document.getElementById('reelio-stage');
  if(!stage)return;
  const oldZoom=reelioState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  reelioState.zoom=reelioClampZoom(nextZoom);
  updateReelioZoom();
  const ratio=oldZoom?reelioState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function reelioFitWidth(quiet){
  const stage=document.getElementById('reelio-stage');
  if(!stage)return;
  const current=reelioState.page;
  const target=document.getElementById('reelio-page-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  reelioState.fit=true;
  reelioState.zoom=1;
  updateReelioZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateReelioActive(current);
}

function bindReelioWheelZoom(){
  const stage=document.getElementById('reelio-stage');
  if(!stage||reelioState.wheelBound)return;
  reelioState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    reelioState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    reelioSetZoom(reelioState.zoom+(direction*step),event);
  },{passive:false});
}

function reelioFullscreen(){
  const viewer=document.getElementById('reelio-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function reelioCloseFullscreen(){
  const viewer=document.getElementById('reelio-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}

const MOVIE_TOTAL_PAGES=43;
const MOVIE_PAGE_LABELS=[
  'Cover','Purpose','How To Use This Report','July: Movie Details','July: Movie Details 2','July: Recommendations','July Recommendations 2',
  'July Recommendations 3','July Recommendations 4','August: Movie Details','August: Recommendations','August Recommendations 2',
  'September: Movie Details','September: Movie Details 2','September: Recommendations','September Recommendations 2','September Recommendations 3',
  'October: Movie Details','October: Movie Details 2','October: Recommendations','October Recommendations 2','October Recommendations 3',
  'November: Movie Details','November: Movie Details 2','November: Recommendations','November Recommendations 2','November Recommendations 3',
  'December: Movie Details','December: Movie Details 2','December: Recommendations','December Recommendations 2','December Recommendations 3',
  'Location Patterns','Programming Patterns','Language Opportunities','Genre Opportunities','Family & Holiday Programming','Premium & Event Cinema',
  'Testing Approach','Programming Notes','Final Note','Appendix','References'
];
const MOVIE_PAGE_IMAGES=Array.from({length:MOVIE_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/movie-research-pages/movie-page-'+String(i+1).padStart(2,'0')+'.png');
const movieState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null,fullscreenBound:false};

function initMovieResearchViewer(){
  buildMovieResearchViewer();
  movieFitWidth(true);
  updateMovieActive(1);
  bindMovieWheelZoom();
  const stage=document.getElementById('movie-stage');
  if(stage&&window.ResizeObserver&&!movieState.resizeObserver){
    movieState.resizeObserver=new ResizeObserver(()=>{if(movieState.fit)movieFitWidth(true);});
    movieState.resizeObserver.observe(stage);
  }
  if(!movieState.fullscreenBound){
    movieState.fullscreenBound=true;
    document.addEventListener('fullscreenchange',()=>{
      const viewer=document.getElementById('movie-research-viewer');
      if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
      if(movieState.fit)requestAnimationFrame(()=>movieFitWidth(true));
    });
  }
}

function buildMovieResearchViewer(){
  const pages=document.getElementById('movie-pages');
  const sidebar=document.getElementById('movie-sidebar-list');
  const stage=document.getElementById('movie-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=MOVIE_PAGE_IMAGES.map((src,i)=>'<div class="movie-page-wrap" id="movie-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="movie-page-image" src="'+src+'" alt="Movie Research page '+(i+1)+'" loading="lazy"></div>').join('');
  sidebar.innerHTML=MOVIE_PAGE_IMAGES.map((src,i)=>'<button class="movie-thumb-btn" id="movie-thumb-'+(i+1)+'" onclick="movieJumpToPage('+(i+1)+')"><img class="movie-thumb" src="'+src+'" alt="" loading="lazy"><span><span class="movie-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="movie-thumb-label">'+MOVIE_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(movieState.observer)movieState.observer.disconnect();
  movieState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateMovieActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.movie-page-wrap').forEach(page=>movieState.observer.observe(page));
}

function updateMovieActive(page){
  movieState.page=page;
  const label=document.getElementById('movie-page-count');
  if(label)label.textContent='Page '+page+' of '+MOVIE_TOTAL_PAGES;
  document.querySelectorAll('.movie-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('movie-thumb-'+page);
  const sidebar=document.getElementById('movie-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function movieJumpToPage(page){
  const stage=document.getElementById('movie-stage');
  const target=document.getElementById('movie-page-'+page);
  const layout=document.getElementById('movie-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateMovieActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function movieToggleSidebar(){
  const layout=document.getElementById('movie-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(movieState.fit)movieFitWidth(true);});
}

function movieClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function movieBaseWidth(){
  const stage=document.getElementById('movie-stage');
  if(!stage)return 1100;
  return Math.min(1100,Math.max(320,stage.clientWidth-44));
}

function movieUpdateZoomLabel(){
  const label=document.getElementById('movie-zoom-value');
  if(label)label.textContent=Math.round(movieState.zoom*100)+'%';
}

function updateMovieZoom(){
  const pages=document.querySelectorAll('.movie-page-wrap');
  const width=Math.round(movieBaseWidth()*movieState.zoom);
  pages.forEach(page=>{page.style.width=width+'px';});
  movieUpdateZoomLabel();
}

function movieZoom(delta){
  movieState.fit=false;
  movieSetZoom(movieState.zoom+delta);
}

function movieSetZoom(nextZoom,pointer){
  const stage=document.getElementById('movie-stage');
  if(!stage)return;
  const oldZoom=movieState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  movieState.zoom=movieClampZoom(nextZoom);
  updateMovieZoom();
  const ratio=oldZoom?movieState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function movieFitWidth(quiet){
  const stage=document.getElementById('movie-stage');
  if(!stage)return;
  const current=movieState.page;
  const target=document.getElementById('movie-page-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  movieState.fit=true;
  movieState.zoom=1;
  updateMovieZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateMovieActive(current);
}

function bindMovieWheelZoom(){
  const stage=document.getElementById('movie-stage');
  if(!stage||movieState.wheelBound)return;
  movieState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    movieState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    movieSetZoom(movieState.zoom+(direction*step),event);
  },{passive:false});
}

function movieFullscreen(){
  const viewer=document.getElementById('movie-research-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function movieCloseFullscreen(){
  const viewer=document.getElementById('movie-research-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}

const DEMOGRAPHIC_TOTAL_PAGES=41;
const DEMOGRAPHIC_PAGE_LABELS=[
  'Cover','Executive Summary','Purpose & Methodology','Methodology','Locations Covered','Catchment Areas','Demographics & Programming','Programming Relevance',
  'Burwood','Burwood Profile','Chirnside Park','Chirnside Park Profile','Dandenong','Dandenong Profile','Epping','Epping Profile','Melton','Melton Profile',
  'Millers Junction','Millers Junction Profile','Sunbury','Sunbury Profile','Traralgon','Traralgon Profile','Waurn Ponds','Waurn Ponds Profile',
  'Comparative Summary','Location Differences','Language Opportunities','Chinese-Language Opportunity','South Asian Opportunity','Vietnamese Opportunity',
  'Arabic & Middle Eastern Opportunity','European Community Screenings','Filipino / Tagalog Opportunity','Korean / Japanese Event Cinema',
  'Programming Recommendations','Risks & Considerations','How To Use The Data','Conclusion','References'
];
const DEMOGRAPHIC_PAGE_IMAGES=Array.from({length:DEMOGRAPHIC_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/demographic-pages/demographic-page-'+String(i+1).padStart(2,'0')+'.png');
const demographicState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null,fullscreenBound:false};

function initDemographicViewer(){
  buildDemographicViewer();
  demographicFitWidth(true);
  updateDemographicActive(1);
  bindDemographicWheelZoom();
  const stage=document.getElementById('demographic-stage');
  if(stage&&window.ResizeObserver&&!demographicState.resizeObserver){
    demographicState.resizeObserver=new ResizeObserver(()=>{if(demographicState.fit)demographicFitWidth(true);});
    demographicState.resizeObserver.observe(stage);
  }
  if(!demographicState.fullscreenBound){
    demographicState.fullscreenBound=true;
    document.addEventListener('fullscreenchange',()=>{
      const viewer=document.getElementById('demographic-viewer');
      if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
      if(demographicState.fit)requestAnimationFrame(()=>demographicFitWidth(true));
    });
  }
}

function buildDemographicViewer(){
  const pages=document.getElementById('demographic-pages');
  const sidebar=document.getElementById('demographic-sidebar-list');
  const stage=document.getElementById('demographic-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=DEMOGRAPHIC_PAGE_IMAGES.map((src,i)=>'<div class="demographic-page-wrap" id="demographic-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="demographic-page-image" src="'+src+'" alt="Demographic Research page '+(i+1)+'" loading="lazy"></div>').join('');
  sidebar.innerHTML=DEMOGRAPHIC_PAGE_IMAGES.map((src,i)=>'<button class="demographic-thumb-btn" id="demographic-thumb-'+(i+1)+'" onclick="demographicJumpToPage('+(i+1)+')"><img class="demographic-thumb" src="'+src+'" alt="" loading="lazy"><span><span class="demographic-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="demographic-thumb-label">'+DEMOGRAPHIC_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(demographicState.observer)demographicState.observer.disconnect();
  demographicState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateDemographicActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.demographic-page-wrap').forEach(page=>demographicState.observer.observe(page));
}

function updateDemographicActive(page){
  demographicState.page=page;
  const label=document.getElementById('demographic-page-count');
  if(label)label.textContent='Page '+page+' of '+DEMOGRAPHIC_TOTAL_PAGES;
  document.querySelectorAll('.demographic-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('demographic-thumb-'+page);
  const sidebar=document.getElementById('demographic-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function demographicJumpToPage(page){
  const stage=document.getElementById('demographic-stage');
  const target=document.getElementById('demographic-page-'+page);
  const layout=document.getElementById('demographic-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateDemographicActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function demographicToggleSidebar(){
  const layout=document.getElementById('demographic-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(demographicState.fit)demographicFitWidth(true);});
}

function demographicClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function demographicBaseWidth(){
  const stage=document.getElementById('demographic-stage');
  if(!stage)return 900;
  return Math.min(900,Math.max(320,stage.clientWidth-44));
}

function demographicUpdateZoomLabel(){
  const label=document.getElementById('demographic-zoom-value');
  if(label)label.textContent=Math.round(demographicState.zoom*100)+'%';
}

function updateDemographicZoom(){
  const pages=document.querySelectorAll('.demographic-page-wrap');
  const width=Math.round(demographicBaseWidth()*demographicState.zoom);
  pages.forEach(page=>{page.style.width=width+'px';});
  demographicUpdateZoomLabel();
}

function demographicZoom(delta){
  demographicState.fit=false;
  demographicSetZoom(demographicState.zoom+delta);
}

function demographicSetZoom(nextZoom,pointer){
  const stage=document.getElementById('demographic-stage');
  if(!stage)return;
  const oldZoom=demographicState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  demographicState.zoom=demographicClampZoom(nextZoom);
  updateDemographicZoom();
  const ratio=oldZoom?demographicState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function demographicFitWidth(quiet){
  const stage=document.getElementById('demographic-stage');
  if(!stage)return;
  const current=demographicState.page;
  const target=document.getElementById('demographic-page-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  demographicState.fit=true;
  demographicState.zoom=1;
  updateDemographicZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateDemographicActive(current);
}

function bindDemographicWheelZoom(){
  const stage=document.getElementById('demographic-stage');
  if(!stage||demographicState.wheelBound)return;
  demographicState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    demographicState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    demographicSetZoom(demographicState.zoom+(direction*step),event);
  },{passive:false});
}

function demographicFullscreen(){
  const viewer=document.getElementById('demographic-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function demographicCloseFullscreen(){
  const viewer=document.getElementById('demographic-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}

const EVIDENCE_TOTAL_PAGES=6;
const EVIDENCE_PAGE_LABELS=[
  'Purpose & Off-Peak Utilisation',
  'Weekday Attendance',
  'F&B & Digital Booking',
  'Digital Friction & Local Audiences',
  'Overall Evidence Summary',
  'References'
];
const EVIDENCE_PAGE_IMAGES=Array.from({length:EVIDENCE_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/evidence-review-pages/evidence-page-'+String(i+1).padStart(2,'0')+'.png');
const evidenceState={page:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null,fullscreenBound:false};

function initEvidenceReviewViewer(){
  buildEvidenceReviewViewer();
  evidenceFitWidth(true);
  updateEvidenceActive(1);
  bindEvidenceWheelZoom();
  const stage=document.getElementById('evidence-stage');
  if(stage&&window.ResizeObserver&&!evidenceState.resizeObserver){
    evidenceState.resizeObserver=new ResizeObserver(()=>{if(evidenceState.fit)evidenceFitWidth(true);});
    evidenceState.resizeObserver.observe(stage);
  }
  if(!evidenceState.fullscreenBound){
    evidenceState.fullscreenBound=true;
    document.addEventListener('fullscreenchange',()=>{
      const viewer=document.getElementById('evidence-review-viewer');
      if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
      if(evidenceState.fit)requestAnimationFrame(()=>evidenceFitWidth(true));
    });
  }
}

function buildEvidenceReviewViewer(){
  const pages=document.getElementById('evidence-pages');
  const sidebar=document.getElementById('evidence-sidebar-list');
  const stage=document.getElementById('evidence-stage');
  if(!pages||!sidebar||!stage)return;
  pages.innerHTML=EVIDENCE_PAGE_IMAGES.map((src,i)=>'<div class="evidence-page-wrap" id="evidence-page-'+(i+1)+'" data-page="'+(i+1)+'"><img class="evidence-page-image" src="'+src+'" alt="Evidence Review page '+(i+1)+'"></div>').join('');
  sidebar.innerHTML=EVIDENCE_PAGE_IMAGES.map((src,i)=>'<button class="evidence-thumb-btn" id="evidence-thumb-'+(i+1)+'" onclick="evidenceJumpToPage('+(i+1)+')"><img class="evidence-thumb" src="'+src+'" alt=""><span><span class="evidence-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="evidence-thumb-label">'+EVIDENCE_PAGE_LABELS[i]+'</span></span></button>').join('');
  if(evidenceState.observer)evidenceState.observer.disconnect();
  evidenceState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updateEvidenceActive(parseInt(visible.target.dataset.page,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  pages.querySelectorAll('.evidence-page-wrap').forEach(page=>evidenceState.observer.observe(page));
}

function updateEvidenceActive(page){
  evidenceState.page=page;
  const label=document.getElementById('evidence-page-count');
  if(label)label.textContent='Page '+page+' of '+EVIDENCE_TOTAL_PAGES;
  document.querySelectorAll('.evidence-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('evidence-thumb-'+page);
  const sidebar=document.getElementById('evidence-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function evidenceJumpToPage(page){
  const stage=document.getElementById('evidence-stage');
  const target=document.getElementById('evidence-page-'+page);
  const layout=document.getElementById('evidence-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updateEvidenceActive(page);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function evidenceToggleSidebar(){
  const layout=document.getElementById('evidence-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(evidenceState.fit)evidenceFitWidth(true);});
}

function evidenceClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function evidenceBaseWidth(){
  const stage=document.getElementById('evidence-stage');
  if(!stage)return 900;
  return Math.min(900,Math.max(320,stage.clientWidth-44));
}

function evidenceUpdateZoomLabel(){
  const label=document.getElementById('evidence-zoom-value');
  if(label)label.textContent=Math.round(evidenceState.zoom*100)+'%';
}

function updateEvidenceZoom(){
  const pages=document.querySelectorAll('.evidence-page-wrap');
  const width=Math.round(evidenceBaseWidth()*evidenceState.zoom);
  pages.forEach(page=>{page.style.width=width+'px';});
  evidenceUpdateZoomLabel();
}

function evidenceZoom(delta){
  evidenceState.fit=false;
  evidenceSetZoom(evidenceState.zoom+delta);
}

function evidenceSetZoom(nextZoom,pointer){
  const stage=document.getElementById('evidence-stage');
  if(!stage)return;
  const oldZoom=evidenceState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  evidenceState.zoom=evidenceClampZoom(nextZoom);
  updateEvidenceZoom();
  const ratio=oldZoom?evidenceState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function evidenceFitWidth(quiet){
  const stage=document.getElementById('evidence-stage');
  if(!stage)return;
  const current=evidenceState.page;
  const target=document.getElementById('evidence-page-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  evidenceState.fit=true;
  evidenceState.zoom=1;
  updateEvidenceZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updateEvidenceActive(current);
}

function bindEvidenceWheelZoom(){
  const stage=document.getElementById('evidence-stage');
  if(!stage||evidenceState.wheelBound)return;
  evidenceState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    evidenceState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    evidenceSetZoom(evidenceState.zoom+(direction*step),event);
  },{passive:false});
}

function evidenceFullscreen(){
  const viewer=document.getElementById('evidence-review-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function evidenceCloseFullscreen(){
  const viewer=document.getElementById('evidence-review-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}

const PRESENTATION_TOTAL_SLIDES=11;
const PRESENTATION_SLIDE_LABELS=[
  'Cover',
  'Executive Summary',
  'Market Context',
  'Strategic Framework',
  'Pricing Optimisation',
  'Customer Experience',
  'Audience Growth',
  'Implementation Roadmap',
  'Risks & Mitigations',
  'Commercial Impact',
  'Strategic Recommendation'
];
const PRESENTATION_SLIDE_IMAGES=Array.from({length:PRESENTATION_TOTAL_SLIDES},(_,i)=>'AJD_StrategyLab_assets/presentation-slides/presentation-slide-'+String(i+1).padStart(2,'0')+'.png');
const presentationState={slide:1,zoom:1,fit:true,observer:null,wheelBound:false,resizeObserver:null};

function initPresentationViewer(){
  buildPresentationViewer();
  presentationFitWidth(true);
  updatePresentationActive(1);
  bindPresentationWheelZoom();
  const stage=document.getElementById('presentation-stage');
  if(stage&&window.ResizeObserver&&!presentationState.resizeObserver){
    presentationState.resizeObserver=new ResizeObserver(()=>{if(presentationState.fit)presentationFitWidth(true);});
    presentationState.resizeObserver.observe(stage);
  }
  document.addEventListener('fullscreenchange',()=>{
    const viewer=document.getElementById('presentation-viewer');
    if(viewer&&!document.fullscreenElement)viewer.classList.remove('is-fullscreen');
    if(presentationState.fit)requestAnimationFrame(()=>presentationFitWidth(true));
  });
}

function buildPresentationViewer(){
  const slides=document.getElementById('presentation-slides');
  const sidebar=document.getElementById('presentation-sidebar-list');
  const stage=document.getElementById('presentation-stage');
  if(!slides||!sidebar||!stage)return;
  slides.innerHTML=PRESENTATION_SLIDE_IMAGES.map((src,i)=>'<div class="presentation-slide-wrap" id="presentation-slide-'+(i+1)+'" data-slide="'+(i+1)+'"><img class="presentation-slide-image" src="'+src+'" alt="Reading Cinemas presentation slide '+(i+1)+'"></div>').join('');
  sidebar.innerHTML=PRESENTATION_SLIDE_IMAGES.map((src,i)=>'<button class="presentation-thumb-btn" id="presentation-thumb-'+(i+1)+'" onclick="presentationJumpToSlide('+(i+1)+')"><img class="presentation-thumb" src="'+src+'" alt=""><span><span class="presentation-thumb-num">'+String(i+1).padStart(2,'0')+'</span><span class="presentation-thumb-label">'+PRESENTATION_SLIDE_LABELS[i]+'</span></span></button>').join('');
  if(presentationState.observer)presentationState.observer.disconnect();
  presentationState.observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)updatePresentationActive(parseInt(visible.target.dataset.slide,10));
  },{root:stage,threshold:[.35,.5,.65,.8]});
  slides.querySelectorAll('.presentation-slide-wrap').forEach(slide=>presentationState.observer.observe(slide));
}

function updatePresentationActive(slide){
  presentationState.slide=slide;
  const label=document.getElementById('presentation-slide-count');
  if(label)label.textContent='Slide '+slide+' of '+PRESENTATION_TOTAL_SLIDES;
  document.querySelectorAll('.presentation-thumb-btn').forEach(btn=>btn.classList.remove('active'));
  const active=document.getElementById('presentation-thumb-'+slide);
  const sidebar=document.getElementById('presentation-sidebar');
  if(active){
    active.classList.add('active');
    if(sidebar){
      const top=active.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<sidebar.scrollTop)sidebar.scrollTop=top-8;
      if(bottom>sidebar.scrollTop+sidebar.clientHeight)sidebar.scrollTop=bottom-sidebar.clientHeight+8;
    }
  }
}

function presentationJumpToSlide(slide){
  const stage=document.getElementById('presentation-stage');
  const target=document.getElementById('presentation-slide-'+slide);
  const layout=document.getElementById('presentation-layout');
  if(!stage||!target)return;
  stage.scrollTo({top:target.offsetTop-18,left:0,behavior:'smooth'});
  updatePresentationActive(slide);
  if(layout&&window.matchMedia('(max-width: 768px)').matches)layout.classList.remove('sidebar-open');
}

function presentationToggleSidebar(){
  const layout=document.getElementById('presentation-layout');
  if(!layout)return;
  if(window.matchMedia('(max-width: 768px)').matches){
    layout.classList.toggle('sidebar-open');
  }else{
    layout.classList.toggle('sidebar-collapsed');
  }
  requestAnimationFrame(()=>{if(presentationState.fit)presentationFitWidth(true);});
}

function presentationClampZoom(value){
  return Math.min(2.5,Math.max(.5,value));
}

function presentationBaseWidth(){
  const stage=document.getElementById('presentation-stage');
  if(!stage)return 1100;
  return Math.min(1100,Math.max(320,stage.clientWidth-44));
}

function presentationUpdateZoomLabel(){
  const label=document.getElementById('presentation-zoom-value');
  if(label)label.textContent=Math.round(presentationState.zoom*100)+'%';
}

function updatePresentationZoom(){
  const slides=document.querySelectorAll('.presentation-slide-wrap');
  const width=Math.round(presentationBaseWidth()*presentationState.zoom);
  slides.forEach(slide=>{slide.style.width=width+'px';});
  presentationUpdateZoomLabel();
}

function presentationZoom(delta){
  presentationState.fit=false;
  presentationSetZoom(presentationState.zoom+delta);
}

function presentationSetZoom(nextZoom,pointer){
  const stage=document.getElementById('presentation-stage');
  if(!stage)return;
  const oldZoom=presentationState.zoom;
  const rect=stage.getBoundingClientRect();
  const pointX=pointer?pointer.clientX-rect.left:stage.clientWidth/2;
  const pointY=pointer?pointer.clientY-rect.top:stage.clientHeight/2;
  const docX=stage.scrollLeft+pointX;
  const docY=stage.scrollTop+pointY;
  presentationState.zoom=presentationClampZoom(nextZoom);
  updatePresentationZoom();
  const ratio=oldZoom?presentationState.zoom/oldZoom:1;
  stage.scrollLeft=Math.max(0,docX*ratio-pointX);
  stage.scrollTop=Math.max(0,docY*ratio-pointY);
}

function presentationFitWidth(quiet){
  const stage=document.getElementById('presentation-stage');
  if(!stage)return;
  const current=presentationState.slide;
  const target=document.getElementById('presentation-slide-'+current);
  const offset=target?target.offsetTop-stage.scrollTop:0;
  presentationState.fit=true;
  presentationState.zoom=1;
  updatePresentationZoom();
  if(target)stage.scrollTop=Math.max(0,target.offsetTop-offset);
  stage.scrollLeft=0;
  if(!quiet)updatePresentationActive(current);
}

function bindPresentationWheelZoom(){
  const stage=document.getElementById('presentation-stage');
  if(!stage||presentationState.wheelBound)return;
  presentationState.wheelBound=true;
  stage.addEventListener('wheel',event=>{
    const isZoomGesture=event.ctrlKey||event.metaKey;
    if(!isZoomGesture)return;
    event.preventDefault();
    presentationState.fit=false;
    const direction=event.deltaY<0?1:-1;
    const step=Math.min(.1,Math.max(.05,Math.abs(event.deltaY)/900));
    presentationSetZoom(presentationState.zoom+(direction*step),event);
  },{passive:false});
}

function presentationFullscreen(){
  const viewer=document.getElementById('presentation-viewer');
  if(!viewer)return;
  viewer.classList.add('is-fullscreen');
  if(viewer.requestFullscreen)viewer.requestFullscreen().catch(()=>{});
}

function presentationCloseFullscreen(){
  const viewer=document.getElementById('presentation-viewer');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(viewer)viewer.classList.remove('is-fullscreen');
}

const READING_PREVIEW_TOTAL_PAGES=16;
const READING_PREVIEW_IMAGES=Array.from({length:READING_PREVIEW_TOTAL_PAGES},(_,i)=>'AJD_StrategyLab_assets/digital-magazine/page-'+String(i+1).padStart(2,'0')+'.png');
const readingPreviewSpreads=[
  {label:'Cover',pages:[1]},
  {label:'2-3 / 16',pages:[2,3]},
  {label:'4-5 / 16',pages:[4,5]},
  {label:'6-7 / 16',pages:[6,7]},
  {label:'8-9 / 16',pages:[8,9]},
  {label:'10-11 / 16',pages:[10,11]},
  {label:'12-13 / 16',pages:[12,13]},
  {label:'14-15 / 16',pages:[14,15]},
  {label:'Back Cover',pages:[16]}
];
const readingPreviewPageTitles={
  1:'The Reading Preview',
  2:'Big Releases',
  3:'Big Releases',
  4:'International & Cultural Films',
  5:'Special Events & Family Picks',
  6:'Reading Rewind',
  7:'Reading Rewind',
  8:'August Release Calendar',
  9:'August Release Calendar',
  10:'Cinema Experiences',
  11:'Food & Drinks',
  12:'Reading Rewards',
  13:'Rewards',
  14:'Currently Showing',
  15:'Coming Later This Year',
  16:'Back Cover'
};
const readingPreviewState={index:0,bound:false,thumbsRendered:false,pagesOpen:false,fit:true,zoom:1,touchStartX:0,touchStartY:0,dragging:false,dragStartX:0,dragStartY:0,dragScrollLeft:0,dragScrollTop:0};
const READING_PREVIEW_PAGE_RATIO=1491/1055;

function initReadingPreviewMagazine(){
  readingPreviewRenderThumbnails();
  readingPreviewRender();
  readingPreviewBindControls();
}

function readingPreviewRender(){
  const spread=document.getElementById('reading-preview-spread');
  const prev=document.getElementById('reading-preview-prev');
  const next=document.getElementById('reading-preview-next');
  if(!spread)return;
  const data=readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0];
  spread.classList.add('is-changing');
  window.setTimeout(()=>{
    spread.className='reading-preview-spread '+(data.pages.length===1?'single':'double');
    spread.innerHTML=data.pages.map(page=>'<div class="reading-preview-page"><img draggable="false" src="'+READING_PREVIEW_IMAGES[page-1]+'" alt="The Reading Preview August 2026 page '+page+'"></div>').join('');
    if(prev)prev.disabled=readingPreviewState.index===0;
    if(next)next.disabled=readingPreviewState.index===readingPreviewSpreads.length-1;
    readingPreviewApplyZoom();
    readingPreviewResetPan();
    readingPreviewSyncChrome();
  },80);
}

function readingPreviewRenderThumbnails(){
  const desktop=document.getElementById('reading-preview-thumbs');
  const mobile=document.getElementById('reading-preview-mobile-thumbs');
  if(!desktop&&!mobile)return;
  const html=Array.from({length:READING_PREVIEW_TOTAL_PAGES},(_,i)=>{
    const page=i+1;
    const label=String(page).padStart(2,'0');
    const title=readingPreviewPageTitles[page]||'';
    return '<button class="reading-preview-thumb-btn" data-page="'+page+'" onclick="readingPreviewGoToPage('+page+')" title="Open page '+page+'"><img class="reading-preview-thumb-img" src="'+READING_PREVIEW_IMAGES[i]+'" alt="Thumbnail for The Reading Preview page '+page+'"><span><span class="reading-preview-thumb-num">'+label+'</span><span class="reading-preview-thumb-title">'+title+'</span></span></button>';
  }).join('');
  if(desktop)desktop.innerHTML=html;
  if(mobile)mobile.innerHTML=html;
  readingPreviewState.thumbsRendered=true;
}

function readingPreviewSpreadForPage(page){
  const found=readingPreviewSpreads.findIndex(spread=>spread.pages.includes(page));
  return found>=0?found:0;
}

function readingPreviewGoToPage(page){
  readingPreviewGo(readingPreviewSpreadForPage(page));
  if(window.matchMedia&&window.matchMedia('(max-width: 768px)').matches){
    readingPreviewTogglePages(false);
  }
}

function readingPreviewGo(index){
  const nextIndex=Math.max(0,Math.min(readingPreviewSpreads.length-1,index));
  if(nextIndex===readingPreviewState.index)return;
  readingPreviewState.index=nextIndex;
  readingPreviewRender();
}

function readingPreviewMove(delta){
  readingPreviewGo(readingPreviewState.index+delta);
}

function readingPreviewSyncChrome(){
  const reader=document.getElementById('reading-preview-reader');
  if(!reader)return;
  reader.classList.toggle('pages-open',readingPreviewState.pagesOpen);
  reader.classList.toggle('is-fit-width',readingPreviewState.fit);
  const pages=document.getElementById('reading-preview-pages');
  const fit=document.getElementById('reading-preview-fit');
  const indicator=document.getElementById('reading-preview-indicator');
  const zoomValue=document.getElementById('reading-preview-zoom-value');
  if(pages)pages.setAttribute('aria-pressed',readingPreviewState.pagesOpen?'true':'false');
  if(fit)fit.setAttribute('aria-pressed',readingPreviewState.fit?'true':'false');
  if(indicator)indicator.textContent=readingPreviewIndicatorLabel();
  if(zoomValue)zoomValue.textContent=Math.round(readingPreviewState.zoom*100)+'%';
  const activePages=(readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0]).pages;
  document.querySelectorAll('.reading-preview-thumb-btn').forEach(btn=>{
    const page=parseInt(btn.getAttribute('data-page')||'0',10);
    btn.classList.toggle('active',activePages.includes(page));
  });
}

function readingPreviewIndicatorLabel(){
  const data=readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0];
  if(data.pages.length===1&&data.pages[0]===1)return 'COVER \u00B7 1 OF 16';
  if(data.pages.length===1&&data.pages[0]===16)return 'BACK COVER \u00B7 16 OF 16';
  return 'PAGES '+data.pages[0]+'\u2013'+data.pages[1]+' OF 16';
}

function readingPreviewTogglePages(force){
  readingPreviewState.pagesOpen=typeof force==='boolean'?force:!readingPreviewState.pagesOpen;
  if(readingPreviewState.pagesOpen&&!readingPreviewState.thumbsRendered)readingPreviewRenderThumbnails();
  readingPreviewSyncChrome();
  window.setTimeout(readingPreviewApplyZoom,0);
}

function readingPreviewFitWidth(){
  readingPreviewState.fit=true;
  readingPreviewState.zoom=1;
  readingPreviewApplyZoom();
  readingPreviewSyncChrome();
}

function readingPreviewZoom(delta){
  readingPreviewState.fit=false;
  readingPreviewState.zoom=Math.max(.55,Math.min(1.8,Math.round((readingPreviewState.zoom+delta)*10)/10));
  readingPreviewApplyZoom();
  readingPreviewSyncChrome();
}

function readingPreviewApplyZoom(){
  const spread=document.getElementById('reading-preview-spread');
  const canvas=document.getElementById('reading-preview-canvas');
  if(!spread)return;
  const data=readingPreviewSpreads[readingPreviewState.index]||readingPreviewSpreads[0];
  const isDouble=data.pages.length===2;
  const availableWidth=Math.max(260,(canvas?canvas.clientWidth:1120)-2);
  const availableHeight=Math.max(320,(canvas?canvas.clientHeight:720)-2);
  const gutter=isDouble?Math.max(12,Math.min(20,availableWidth*.018)):0;
  const widthFit=isDouble?(availableWidth-gutter)/2:availableWidth;
  const heightFit=availableHeight/READING_PREVIEW_PAGE_RATIO;
  const fitPageWidth=Math.min(widthFit,heightFit);
  const pageWidth=Math.max(180,fitPageWidth*readingPreviewState.zoom);
  const pageHeight=pageWidth*READING_PREVIEW_PAGE_RATIO;
  spread.style.setProperty('--rp-gutter',gutter+'px');
  spread.style.setProperty('--rp-page-width',pageWidth+'px');
  spread.style.setProperty('--rp-page-height',pageHeight+'px');
  window.setTimeout(readingPreviewSyncCanvasState,0);
}

function readingPreviewResetPan(){
  const canvas=document.getElementById('reading-preview-canvas');
  if(!canvas)return;
  canvas.scrollTop=0;
  canvas.scrollLeft=0;
  readingPreviewSyncCanvasState();
}

function readingPreviewSyncCanvasState(){
  const canvas=document.getElementById('reading-preview-canvas');
  if(!canvas)return;
  canvas.classList.toggle('can-pan',readingPreviewCanvasCanScrollX(canvas)||readingPreviewCanvasCanScrollY(canvas));
}

function readingPreviewCanvasCanScrollX(canvas){
  return canvas&&canvas.scrollWidth>canvas.clientWidth+2;
}

function readingPreviewCanvasCanScrollY(canvas){
  return canvas&&canvas.scrollHeight>canvas.clientHeight+2;
}

function readingPreviewFullscreen(){
  const reader=document.getElementById('reading-preview-reader');
  if(!reader)return;
  reader.classList.add('is-fullscreen');
  readingPreviewSyncChrome();
  if(reader.requestFullscreen)reader.requestFullscreen().catch(()=>{});
  window.setTimeout(readingPreviewApplyZoom,160);
}

function readingPreviewCloseFullscreen(){
  const reader=document.getElementById('reading-preview-reader');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
  if(reader)reader.classList.remove('is-fullscreen');
}

function readingPreviewBindControls(){
  const canvas=document.getElementById('reading-preview-canvas');
  if(readingPreviewState.bound||!canvas)return;
  readingPreviewState.bound=true;
  canvas.addEventListener('touchstart',event=>{
    const touch=event.changedTouches&&event.changedTouches[0];
    if(!touch)return;
    readingPreviewState.touchStartX=touch.clientX;
    readingPreviewState.touchStartY=touch.clientY;
  },{passive:true});
  canvas.addEventListener('touchend',event=>{
    const touch=event.changedTouches&&event.changedTouches[0];
    if(!touch)return;
    const dx=touch.clientX-readingPreviewState.touchStartX;
    const dy=touch.clientY-readingPreviewState.touchStartY;
    if(!readingPreviewCanvasCanScrollX(canvas)&&Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.4){
      readingPreviewMove(dx<0?1:-1);
    }
  },{passive:true});
  canvas.addEventListener('wheel',event=>{
    if(event.shiftKey&&Math.abs(event.deltaY)>Math.abs(event.deltaX)&&readingPreviewCanvasCanScrollX(canvas)){
      event.preventDefault();
      canvas.scrollLeft+=event.deltaY;
    }
  },{passive:false});
  canvas.addEventListener('mousedown',event=>{
    if(event.button!==0)return;
    if(event.target&&event.target.closest&&event.target.closest('button'))return;
    if(!readingPreviewCanvasCanScrollX(canvas)&&!readingPreviewCanvasCanScrollY(canvas))return;
    readingPreviewState.dragging=true;
    readingPreviewState.dragStartX=event.clientX;
    readingPreviewState.dragStartY=event.clientY;
    readingPreviewState.dragScrollLeft=canvas.scrollLeft;
    readingPreviewState.dragScrollTop=canvas.scrollTop;
    canvas.classList.add('is-dragging');
    event.preventDefault();
  });
  document.addEventListener('mousemove',event=>{
    if(!readingPreviewState.dragging)return;
    canvas.scrollLeft=readingPreviewState.dragScrollLeft-(event.clientX-readingPreviewState.dragStartX);
    canvas.scrollTop=readingPreviewState.dragScrollTop-(event.clientY-readingPreviewState.dragStartY);
  });
  document.addEventListener('mouseup',()=>{
    if(!readingPreviewState.dragging)return;
    readingPreviewState.dragging=false;
    canvas.classList.remove('is-dragging');
  });
  window.addEventListener('resize',()=>{
    const active=document.getElementById('page-digital-magazine');
    if(active&&active.classList.contains('active'))readingPreviewApplyZoom();
  });
  document.addEventListener('keydown',event=>{
    const active=document.getElementById('page-digital-magazine');
    if(!active||!active.classList.contains('active'))return;
    if(event.target&&/input|textarea|select/i.test(event.target.tagName))return;
    if(event.key==='ArrowLeft')readingPreviewMove(-1);
    if(event.key==='ArrowRight')readingPreviewMove(1);
  });
  document.addEventListener('fullscreenchange',()=>{
    const reader=document.getElementById('reading-preview-reader');
    if(reader&&!document.fullscreenElement)reader.classList.remove('is-fullscreen');
    window.setTimeout(readingPreviewApplyZoom,80);
  });
}

//  RESTORE ON LOAD 
function restoreAll(){
  strategyLabEngagementState.liked=strategyLabStoredLikedState();
  renderReport001Comments([]);
  updateStrategyLabEngagementUI();
  refreshStrategyLabEngagement();
  startStrategyLabEngagementPolling();
}

normalizeReportPages();
restoreAll();
initStrategyPdfViewer();
initPresentationViewer();
initEvidenceReviewViewer();
initDemographicViewer();
initFutureConceptsViewer();
initMovieResearchViewer();
initReelioViewer();
initReadingPreviewMagazine();
initRouter();
window.addEventListener('popstate',()=>handleRouteChange({scrollTop:true}));
window.addEventListener('hashchange',()=>handleRouteChange({scrollTop:true}));
syncHeroCardHeight();
window.addEventListener('resize', syncHeroCardHeight);
window.addEventListener('resize',()=>{
  if(activeRouteId==='future-concepts')requestAnimationFrame(alignFutureConceptHeroImages);
});
if(document.fonts&&document.fonts.ready){
  document.fonts.ready.then(()=>{
    syncHeroCardHeight();
    if(activeRouteId==='future-concepts')requestAnimationFrame(alignFutureConceptHeroImages);
  });
}
