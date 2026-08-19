// Mobile-only editorial trimming for the 12 Reading Cinemas detail pages.
// IMPORTANT: true phones only. Desktop and desktop split-screen keep the full content.
(function(){
  'use strict';

  const htmlOriginal=new Map();
  const displayOriginal=new Map();
  const styleOriginal=new Map();
  const generated=[];
  let applying=false;
  let timer=null;

  function isTrueMobile(){
    return window.matchMedia('(max-width:768px)').matches && window.screen.width<=768;
  }

  function norm(value){
    return String(value||'').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function rememberHTML(el){
    if(el&&!htmlOriginal.has(el))htmlOriginal.set(el,el.innerHTML);
  }

  function setText(el,text){
    if(!el)return;
    rememberHTML(el);
    el.textContent=text;
  }

  function setHTML(el,html){
    if(!el)return;
    rememberHTML(el);
    el.innerHTML=html;
  }

  function hide(el){
    if(!el)return;
    if(!displayOriginal.has(el))displayOriginal.set(el,el.style.getPropertyValue('display'));
    el.style.setProperty('display','none','important');
  }

  function setStyle(el,property,value){
    if(!el)return;
    if(!styleOriginal.has(el))styleOriginal.set(el,new Map());
    const map=styleOriginal.get(el);
    if(!map.has(property))map.set(property,el.style.getPropertyValue(property));
    el.style.setProperty(property,value,'important');
  }

  function addGenerated(el){
    if(el)generated.push(el);
  }

  function restoreAll(){
    generated.splice(0).forEach(function(el){if(el&&el.parentNode)el.parentNode.removeChild(el);});
    htmlOriginal.forEach(function(html,el){if(el&&el.isConnected)el.innerHTML=html;});
    displayOriginal.forEach(function(value,el){
      if(!el||!el.isConnected)return;
      if(value)el.style.setProperty('display',value);else el.style.removeProperty('display');
    });
    styleOriginal.forEach(function(props,el){
      if(!el||!el.isConnected)return;
      props.forEach(function(value,property){
        if(value)el.style.setProperty(property,value);else el.style.removeProperty(property);
      });
    });
    htmlOriginal.clear();
    displayOriginal.clear();
    styleOriginal.clear();
  }

  function findLabel(page,labelText){
    if(!page)return null;
    const target=norm(labelText);
    return Array.from(page.querySelectorAll('.section-label')).find(function(el){return norm(el.textContent)===target;})||null;
  }

  function sectionForLabel(page,labelText){
    const label=findLabel(page,labelText);
    if(!label)return null;
    const section=label.closest('section');
    if(section&&page.contains(section))return section;
    return null;
  }

  function directBlockNodes(label){
    if(!label||!label.parentElement)return [];
    const out=[label];
    let node=label.nextElementSibling;
    while(node){
      if(node.matches&&node.matches('.section-label'))break;
      out.push(node);
      node=node.nextElementSibling;
    }
    return out;
  }

  function blockForLabel(page,labelText){
    const label=findLabel(page,labelText);
    if(!label)return {label:null,nodes:[],root:null};
    const section=label.closest('section');
    if(section&&page.contains(section))return {label:label,nodes:[section],root:section};
    const nodes=directBlockNodes(label);
    return {label:label,nodes:nodes,root:label.parentElement};
  }

  function hideSection(page,labelText){
    const block=blockForLabel(page,labelText);
    block.nodes.forEach(hide);
  }

  function blockElements(page,labelText,selector){
    const block=blockForLabel(page,labelText);
    if(!block.label)return [];
    if(block.nodes.length===1&&block.nodes[0].matches&&block.nodes[0].matches('section')){
      return Array.from(block.nodes[0].querySelectorAll(selector));
    }
    const found=[];
    block.nodes.forEach(function(node){
      if(node.matches&&node.matches(selector))found.push(node);
      if(node.querySelectorAll)node.querySelectorAll(selector).forEach(function(el){found.push(el);});
    });
    return found;
  }

  function oneParagraph(page,labelText,text){
    const paras=blockElements(page,labelText,'p.body-para, p.presentation-editorial, p.reelio-lede');
    if(!paras.length)return;
    setText(paras[0],text);
    paras.slice(1).forEach(hide);
  }

  function firstSentence(text,max){
    const clean=String(text||'').replace(/\s+/g,' ').trim();
    if(clean.length<=max)return clean;
    const sentence=clean.match(/^.*?[.!?](?:\s|$)/);
    if(sentence&&sentence[0].length<=max+30)return sentence[0].trim();
    const cut=clean.slice(0,max);
    const pos=cut.lastIndexOf(' ');
    return (pos>80?cut.slice(0,pos):cut).replace(/[,:;\-\s]+$/,'')+'.';
  }

  function shortenElements(elements,max){
    elements.forEach(function(el){setText(el,firstSentence(el.textContent,max));});
  }

  function applyStrategy(){
    const page=document.getElementById('page-strategy-report');
    if(!page)return;

    oneParagraph(page,'The Strategy In Short','Reading Cinemas can create more value from its existing network by activating quieter capacity, improving the booking experience and building stronger audience habits before pursuing major expansion.');

    const challenge=blockElements(page,'The Commercial Challenge','.strategy-card .card-copy');
    [
      'Use clearer value pricing to activate unused weekday and off-peak seats.',
      'Targeted value pricing can encourage trial and improve occupancy for smaller titles.',
      'A simpler booking journey and fewer fee barriers can improve online conversion.',
      'Test regional growth only where local demand and feasibility support it.'
    ].forEach(function(text,i){if(challenge[i])setText(challenge[i],text);});

    hideSection(page,'Five Commercial Opportunities');

    const nineParas=blockElements(page,'The Nine Initiatives','p.body-para');
    if(nineParas[0])setText(nineParas[0],'Nine initiatives across pricing, customer experience and audience growth.');
    blockElements(page,'The Nine Initiatives','.cluster-copy').forEach(hide);
    const initiativeCopy=blockElements(page,'The Nine Initiatives','.initiative-card .card-copy');
    [
      'Price selected seats lower only where capacity consistently underperforms.',
      'Use targeted value pricing to encourage trial of lower-profile films.',
      'Create a simple weekday offer for quieter Monday-to-Thursday sessions.',
      'Test low-cost food and beverage upgrades that can lift spend per visit.',
      'Simplify the digital journey so customers can discover and book faster.',
      'Reduce booking-fee friction where testing shows a conversion benefit.',
      'Assess regional markets through feasibility and staged expansion.',
      'Use local audience evidence to test more relevant programming.',
      'Use selected classic and cult films to create event-style off-peak sessions.'
    ].forEach(function(text,i){if(initiativeCopy[i])setText(initiativeCopy[i],text);});

    const metricCopy=blockElements(page,'What Could Move','.metric-card .card-copy');
    [
      'Potential uplift from activating low-fill seats.',
      'Potential weekday attendance lift from a consistent value offer.',
      'Potential spend lift from simple food and beverage improvements.',
      'Potential conversion lift from a simpler booking journey.'
    ].forEach(function(text,i){if(metricCopy[i])setText(metricCopy[i],text);});
    const regional=blockElements(page,'What Could Move','.regional-focus .card-copy')[0];
    if(regional)setText(regional,'Priority markets for further feasibility testing.');

    hideSection(page,'How Success Would Be Measured');

    const phases=blockElements(page,'36-Month Roadmap','.phase-card');
    const phaseBullets=[
      ['Pilot pricing and food-and-beverage changes.','Measure attendance, yield and spend.'],
      ['Simplify the app and booking flow.','Test booking-fee changes.'],
      ['Test localised titles and curated re-screenings.','Use audience evidence to refine programming.'],
      ['Run feasibility studies in priority regional markets.','Progress only where commercial benchmarks are met.']
    ];
    phases.forEach(function(card,i){
      const list=card.querySelector('ul');
      if(list&&phaseBullets[i])setHTML(list,phaseBullets[i].map(function(item){return '<li>'+item+'</li>';}).join(''));
      const note=card.querySelector('.phase-note');
      if(note)hide(note);
    });

    hideSection(page,'What Needs To Be Managed');

    const takeaway=blockElements(page,'The Strategic Takeaway','.takeaway-box .body-para');
    if(takeaway[0])setText(takeaway[0],'The opportunity is to combine smarter pricing, a simpler customer experience and stronger audience growth. Reading can test the lowest-risk ideas first, measure the commercial impact and scale only where the evidence supports it.');
    takeaway.slice(1).forEach(hide);
  }

  function applyPresentation(){
    const page=document.getElementById('page-presentation');
    if(!page)return;
    oneParagraph(page,'About The Presentation','The presentation condenses the Reading Cinemas strategy into an executive narrative covering the commercial case, nine initiatives, implementation roadmap, risks and directional impact.');
    const principle=page.querySelector('.presentation-principle');
    if(principle)hide(principle);
    oneParagraph(page,'The Executive Message','Reading does not need to rely on one large growth bet. The near-term opportunity is to create more value from existing capacity through targeted pricing, a stronger customer experience and better audience activation, then scale larger investments only where the evidence supports them.');
  }

  function applyEvidence(){
    const page=document.getElementById('page-evidence-review');
    if(!page)return;
    oneParagraph(page,'About The Evidence Review','The Evidence Review examines research behind five commercial opportunities: off-peak utilisation, weekday attendance, food and beverage, digital booking friction and local audience development.');

    const areas=blockElements(page,'What The Review Looks At','.evidence-area');
    const copy=[
      'Empty off-peak seats still carry fixed operating costs, making selective capacity activation commercially relevant.',
      'Weekday demand is generally softer, creating room for targeted offers that can add attendance.',
      'Small increases in concession spend can have a meaningful profit impact across a large attendance base.',
      'Extra fees and a complicated checkout can weaken online conversion and delay customer commitment.',
      'Local programming and audience development can strengthen relevance where cinema catchments differ.'
    ];
    areas.forEach(function(area,i){
      const paras=Array.from(area.querySelectorAll('.evidence-area-copy'));
      if(paras[0]&&copy[i])setText(paras[0],copy[i]);
      paras.slice(1).forEach(hide);
    });

    hideSection(page,'What The Evidence Supports');
    oneParagraph(page,'How It Supports The Strategy','The evidence supports a practical approach: make better use of existing capacity, strengthen quieter-period demand, improve value per visit and reduce booking friction, then pilot and scale changes only where results demonstrate value.');
    const support=sectionForLabel(page,'How It Supports The Strategy');
    if(support){
      setStyle(support,'border-left','3px solid #1f5eff');
      setStyle(support,'padding-left','14px');
    }
  }

  function applyDemographic(){
    const page=document.getElementById('page-demographic');
    if(!page)return;
    oneParagraph(page,'About The Research','The research compares the audience catchments around Reading Cinemas\' nine Victorian locations to identify where different demographic and cultural patterns may support more location-aware programming.');
    hideSection(page,'How The Analysis Works');
    hideSection(page,'Locations And Catchments');
    const insights=sectionForLabel(page,'Location-By-Location Insights');
    if(insights)shortenElements(Array.from(insights.querySelectorAll('.demographic-insight-copy')),155);
    hideSection(page,'How To Use The Research');
  }

  function applyMovieResearch(){
    const page=document.getElementById('page-movie-research');
    if(!page)return;
    oneParagraph(page,'About The Research','The research reviews selected July-to-December 2026 releases and identifies films worth testing across Reading Cinemas Victoria based on timing, language, audience fit and local catchment relevance.');
    hideSection(page,'How The Recommendations Work');
    const outlook=sectionForLabel(page,'Six-Month Programming Outlook');
    if(outlook){
      const label=findLabel(page,'Six-Month Programming Outlook');
      if(label)setText(label,'July–December Programming Outlook');
      const table=outlook.querySelector('.movie-overview-table');
      if(table)hide(table);
      shortenElements(Array.from(outlook.querySelectorAll('.movie-card-list .movie-card-copy')),150);
    }
    const patterns=sectionForLabel(page,'Recurring Location Patterns');
    if(patterns)shortenElements(Array.from(patterns.querySelectorAll('.movie-card-copy')),145);
    hideSection(page,'How To Use The Recommendations');
  }

  function applyFutureConcepts(){
    const page=document.getElementById('page-future-concepts');
    if(!page)return;
    oneParagraph(page,'About The Concepts','The Future Concepts report develops the wider Reading Cinemas research into eight early-stage ideas spanning movie discovery, customer engagement, accessibility, programming intelligence and the cinema experience.');

    page.querySelectorAll('.future-concept-section[id^="future-concept-"]').forEach(function(section){
      const summary=section.querySelector('.future-concept-summary');
      const details=section.querySelector('.future-concept-details');
      if(!summary||!details)return;
      const originalSummary=summary.textContent.replace(/\s+/g,' ').trim();
      const steps=Array.from(details.querySelectorAll('.future-concept-step')).map(function(step){
        const clone=step.cloneNode(true);
        const num=clone.querySelector('.future-step-num');
        if(num)num.remove();
        return clone.textContent.replace(/\s+/g,' ').trim();
      }).filter(Boolean);
      const matters=(details.querySelector('.future-concept-matter')||{}).textContent||'';
      let combined=originalSummary;
      if(steps.length)combined+=' It works by '+steps.slice(0,2).join(', then ').replace(/\.$/,'')+'.';
      if(matters)combined+=' '+matters.replace(/\s+/g,' ').trim();
      setText(summary,firstSentence(combined,390));
      hide(details);
    });
  }

  function applyReelio(){
    const page=document.getElementById('page-reelio');
    if(!page)return;
    const lede=page.querySelector('.reelio-proposal-intro .reelio-lede');
    if(lede)setText(lede,'Reelio is a conversational discovery layer that helps customers find movies, sessions, locations and cinema information using everyday language. It supports discovery and decision-making before directing customers into the existing Reading Cinemas booking flow.');
    const disclaimer=page.querySelector('.reelio-important');
    if(disclaimer)hide(disclaimer);

    const browsing=sectionForLabel(page,'From Browsing to a Conversation');
    if(browsing){
      browsing.querySelectorAll('.reelio-copy-card').forEach(function(card){
        const items=Array.from(card.querySelectorAll('li'));
        items.slice(3).forEach(hide);
        shortenElements(Array.from(card.querySelectorAll('p')),135);
      });
    }

    hideSection(page,'How Reelio Works');
    const capabilities=sectionForLabel(page,'More Than Movie Recommendations');
    if(capabilities){
      const cards=Array.from(capabilities.querySelectorAll('.reelio-capability-card'));
      cards.slice(4).forEach(hide);
    }
    hideSection(page,'Why Reelio Matters');
    hideSection(page,'Start Focused. Grow Over Time.');
  }

  function applyAudiencePulse(){
    const page=document.getElementById('page-audience-pulse');
    if(!page)return;
    oneParagraph(page,'About Audience Pulse','Audience Pulse is a quick pre-show interaction that lets customers signal which upcoming films they would be interested in watching, giving Reading Cinemas another lightweight input for future programming decisions.');
    hideSection(page,'How It Works');
    hideSection(page,'Why It Matters');
    const preview=sectionForLabel(page,'Product Preview');
    if(preview){
      const para=preview.querySelector('p.body-para');
      if(para)setText(para,'A simple interface lets customers explore upcoming films, select the titles they would watch and submit their choices.');
    }
  }

  function applyDigitalMagazine(){
    const page=document.getElementById('page-digital-magazine');
    if(!page)return;
    oneParagraph(page,'A Monthly Cinema Guide','The Reading Preview gives Reading Cinemas one monthly editorial space for upcoming films, cinema experiences, rewards and events, creating another reason for customers to discover what is coming and return to the brand.');
    hideSection(page,'Inside The August Issue');
    const benefits=sectionForLabel(page,'What The Magazine Adds');
    if(benefits){
      const cards=Array.from(benefits.querySelectorAll('.digital-magazine-benefit'));
      cards.slice(3).forEach(hide);
    }
  }

  function applyReadingPulse(){
    const page=document.getElementById('page-reading-pulse');
    if(!page)return;
    oneParagraph(page,'About Reading Pulse','Reading Pulse brings theatrical film discovery, audience signals and location intelligence into one internal platform to help programming teams identify which titles may be worth pursuing, testing or monitoring.');

    const cine=sectionForLabel(page,'CineMatch');
    if(cine){
      const movieSection=sectionForLabel(page,'Match the Film to the Right Cinema');
      if(movieSection&&!movieSection.querySelector('.mobile-reading-pulse-cinematch-note')){
        const note=document.createElement('p');
        note.className='reading-pulse-cinematch-inline mobile-reading-pulse-cinematch-note';
        note.textContent='CineMatch compares film signals and highlights which titles may be worth a closer look before they are matched against individual cinema locations.';
        const head=movieSection.querySelector('.reading-pulse-visual-head');
        if(head)head.insertAdjacentElement('afterend',note);else movieSection.appendChild(note);
        addGenerated(note);
      }
      hide(cine);
    }
    hideSection(page,'From Signal to Action');
    hideSection(page,'Other Product Capabilities');
    oneParagraph(page,'Why Reading Pulse Matters','Reading Pulse gives programming teams a more structured way to discover theatrical opportunities, compare films with local audience fit and move from research toward a clear programming action.');
    const why=sectionForLabel(page,'Why Reading Pulse Matters');
    if(why){
      setStyle(why,'border-left','3px solid #1f5eff');
      setStyle(why,'padding-left','14px');
    }
  }

  function applyPosterScan(){
    const page=document.getElementById('page-posterscan');
    if(!page)return;
    oneParagraph(page,'About PosterScan','PosterScan turns a QR code on or near a movie poster into a mobile discovery experience with more context, sessions and a direct path into Reading Cinemas\' existing booking flow.');
    hideSection(page,'Why It Matters');
    hideSection(page,'From Poster To Booking');
  }

  function applyMarketingAds(){
    const page=document.getElementById('page-marketing-ads');
    if(!page)return;
    oneParagraph(page,'About The Visuals','These are example marketing concepts showing how ideas from this project could translate into audience-facing Reading Cinemas campaigns, with each visual exploring a different way to attract attention, build interest or encourage a cinema visit.');
    hideSection(page,'From Ideas To Campaigns');
  }

  function applyMobileContent(){
    if(applying)return;
    applying=true;
    try{
      restoreAll();
      document.documentElement.classList.toggle('content-true-mobile',isTrueMobile());
      if(!isTrueMobile())return;
      applyStrategy();
      applyPresentation();
      applyEvidence();
      applyDemographic();
      applyMovieResearch();
      applyFutureConcepts();
      applyReelio();
      applyAudiencePulse();
      applyDigitalMagazine();
      applyReadingPulse();
      applyPosterScan();
      applyMarketingAds();
    }finally{
      applying=false;
    }
  }

  function scheduleApply(){
    clearTimeout(timer);
    timer=setTimeout(applyMobileContent,80);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scheduleApply,{once:true});
  }else{
    scheduleApply();
  }
  window.addEventListener('load',scheduleApply,{once:true});
  window.addEventListener('resize',scheduleApply);
  window.addEventListener('orientationchange',scheduleApply);

  const observer=new MutationObserver(function(mutations){
    if(applying)return;
    const relevant=mutations.some(function(m){return m.addedNodes&&m.addedNodes.length;});
    if(relevant)scheduleApply();
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
