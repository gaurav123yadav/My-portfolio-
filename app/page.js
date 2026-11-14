"use client";
import { useEffect } from "react";

const skills=["Meta Ads Manager","Lead Generation","Audience Targeting","Retargeting","A/B Testing","Campaign Optimization","CTR / CPL Analysis","Performance Reporting"];
const stages=[["01","AUDIENCE","Research"],["02","AD","Creative + Offer"],["03","CLICK","Landing / CTA"],["04","LEAD","Conversion"],["05","OPTIMIZE","Data feedback"]];

function Reveal({children,className=""}){return <div className={"reveal "+className}>{children}</div>}

export default function Home(){
  useEffect(()=>{
    const onScroll=()=>document.documentElement.style.setProperty("--scroll",String(window.scrollY));
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  return <main id="top">
    <div className="noise"/><div className="ambient ambient-a"/><div className="ambient ambient-b"/>
    <nav className="nav">
      <a className="brand" href="#top">GY<span>.</span></a>
      <div className="links"><a href="#work">Work</a><a href="#expertise">Expertise</a><a href="#process">Process</a><a href="#about">About</a></div>
      <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
    </nav>

    <section className="hero">
      <div className="hero-copy">
        <Reveal><div className="eyebrow"><i/> META ADS / PERFORMANCE MARKETING</div></Reveal>
        <Reveal className="delay-1"><h1>Turn attention<br/><em>into action.</em></h1></Reveal>
        <Reveal className="delay-2"><p className="lead">Meta Ads focused digital marketing professional building targeted campaigns, generating leads and optimizing performance through data.</p></Reveal>
        <Reveal className="delay-3"><div className="actions"><a className="btn primary" href="#work">Explore my work <b>↗</b></a><a className="btn ghost" href="#contact">Let&apos;s connect</a></div></Reveal>
        <div className="hero-note"><span className="pulse"/> OPEN TO META ADS / PERFORMANCE MARKETING OPPORTUNITIES</div>
      </div>

      <div className="dashboard-wrap">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="dashboard float">
          <div className="dash-head"><span>CAMPAIGN OVERVIEW</span><i><b/> LIVE</i></div>
          <div className="dash-title"><div><small>CLIENT CAMPAIGN</small><h3>Visa Now Immigration</h3></div><span className="spark">✦</span></div>
          <div className="dash-stats">{[["Leads","—"],["CPL","—"],["CTR","—"],["ROAS","—"]].map(([a,b],i)=><div className="stat" key={a}><span>{a}</span><strong>{b}</strong><i>{i%2===0?"↗":"—"}</i></div>)}</div>
          <div className="chart">
            <div className="chart-top"><span>PERFORMANCE TREND</span><span>VERIFIED DATA</span></div>
            <div className="bars">{[35,48,42,68,55,82,72,92].map((h,i)=><b key={i} style={{height:h+"%"}}/>)}</div>
            <div className="chart-line"/>
          </div>
          <div className="dash-foot"><span>●</span> Metrics will be added from verified campaign data.</div>
        </div>
      </div>
    </section>

    <section className="ticker"><div className="ticker-track">{[...Array(2)].flatMap((_,k)=>["META ADS","LEAD GENERATION","AUDIENCE TARGETING","RETARGETING","A/B TESTING","OPTIMIZATION"].map((x,i)=><span key={k+"-"+i}>{x}<b>✦</b></span>))}</div></section>

    <section id="expertise" className="section expertise">
      <div className="section-head"><Reveal><div className="eyebrow">01 / WHAT I DO</div><h2>Performance marketing<br/><em>with a clear objective.</em></h2></Reveal></div>
      <div className="expertise-grid">{[["01","Campaign setup","Objectives, structure, placements and tracking."],["02","Audience","Targeting, segmentation and retargeting."],["03","Creative testing","Hooks, formats, messaging and iterations."],["04","Optimization","Monitor CTR, CPL and campaign signals."]].map(([n,t,d])=><Reveal key={n}><article className="service-card"><span>{n}</span><div className="card-icon">↗</div><h3>{t}</h3><p>{d}</p><div className="card-line"/></article></Reveal>)}</div>
    </section>

    <section id="process" className="section engine">
      <div className="section-head"><Reveal><div className="eyebrow">02 / CAMPAIGN ENGINE</div><h2>From audience<br/><em>to lead.</em></h2></Reveal></div>
      <div className="funnel">{stages.map(([n,t,d],i)=><div className={"stage "+(i===4?"active":"")} key={n}><span>{n}</span><strong>{t}</strong><small>{d}</small>{i<4&&<b className="arrow">→</b>}<div className="stage-glow"/></div>)}</div>
    </section>

    <section id="work" className="section case-section">
      <Reveal><div className="eyebrow">03 / SELECTED WORK</div><h2>Campaign experience</h2><p className="case-sub">Meta Ads / Lead Generation / Facebook + Instagram</p></Reveal>
      <div className="case-layout">
        <Reveal><div className="case-visual"><div className="visual-label">CAMPAIGN VISUAL <span>01</span></div><div className="mock-chart"><div className="grid-lines"/><div className="mock-line"/><div className="mock-bars">{[32,45,28,58,52,76,62].map((h,i)=><span key={i} style={{height:h+"%"}}/>)}</div><div className="floating-kpi"><small>CAMPAIGN SIGNAL</small><strong>DATA → ACTION</strong></div></div><div className="mock-pills"><span>Audience</span><span>Creative</span><span>Optimization</span></div></div></Reveal>
        <Reveal className="delay-1"><div className="case-info">{[["OBJECTIVE","Lead Generation"],["CHANNEL","Facebook + Instagram"],["ROLE","Meta Ads / Campaign Work"],["CLIENT","Name withheld"]].map(([a,b])=><div className="info-row" key={a}><small>{a}</small><strong>{b}</strong><span>↗</span></div>)}<p>Client-identifying details are intentionally withheld. The performance snapshots below are shown separately and are not attributed to this campaign.</p></div></Reveal>
      </div>
    </section>


    <section className="section metrics-section">
      <Reveal><div className="eyebrow">04 / ANONYMIZED PERFORMANCE SNAPSHOTS</div><h2>Numbers from<br/><em>campaign dashboards.</em></h2><p className="case-sub">Figures reproduced from supplied screenshots. Client names are withheld; snapshots are not assumed to belong to one account.</p></Reveal>
      <div className="metrics-grid">
        <article className="metric-panel"><span className="metric-label">META ADS / SNAPSHOT A · MAR 1–6, 2025</span><div className="metric-big">7.00x <small>Average purchase ROAS</small></div><div className="metric-pairs"><div><b>₹28,452</b><small>Amount spent</small></div><div><b>6.67%</b><small>CTR (all)</small></div><div><b>₹6.44</b><small>CPC (all)</small></div><div><b>66,188</b><small>Impressions</small></div></div></article>
        <article className="metric-panel"><span className="metric-label">META ADS / SNAPSHOT B</span><div className="metric-big">1,120 <small>Purchases reported</small></div><div className="metric-pairs"><div><b>₹14.66L</b><small>Amount spent</small></div><div><b>45.74L</b><small>Impressions</small></div><div><b>18.73L</b><small>Reach</small></div><div><b>5,811</b><small>Add to carts</small></div></div></article>
        <article className="metric-panel"><span className="metric-label">SHOPIFY / STORE SNAPSHOT · MAR 2025</span><div className="metric-big">₹10.01L <small>Total sales</small></div><div className="metric-pairs"><div><b>507</b><small>Orders</small></div><div><b>47,349</b><small>Sessions</small></div><div><b>0.61%</b><small>Conversion rate</small></div><div><b>+38%</b><small>Sales change shown</small></div></div></article>
        <article className="metric-panel"><span className="metric-label">SHOPIFY / STORE SNAPSHOT · APR 2025</span><div className="metric-big">₹18.36L <small>Total sales</small></div><div className="metric-pairs"><div><b>942</b><small>Orders</small></div><div><b>81,678</b><small>Sessions</small></div><div><b>0.06%</b><small>Conversion rate</small></div><div><b>+83%</b><small>Sales change shown</small></div></div></article>
      </div>
      <p className="metrics-note">Source: dashboard screenshots supplied for this portfolio. Client and account identities are withheld. Meta Ads and Shopify figures are separate snapshots; no combined ROAS or shared-client attribution is claimed.</p>
    </section>
\n    <section id="about" className="section about">
      <Reveal><div><div className="eyebrow">04 / ABOUT</div><h2>IT background.<br/><em>Paid social focus.</em></h2></div></Reveal>
      <Reveal className="delay-1"><div className="about-copy"><p>I&apos;m Gaurav Yadav — a digital marketing professional with a Master&apos;s in IT and PGDCA, with hands-on focus on Meta advertising.</p><p>My approach is practical: understand the audience, build the campaign, test creatives and targeting, monitor the right metrics and optimize based on data.</p><div className="facts">{[["Master’s","Information Technology"],["PGDCA","Computer Applications"],["3.5 yrs","Digital Marketing"]].map(([a,b])=><div key={a}><strong dangerouslySetInnerHTML={{__html:a}}/><span>{b}</span></div>)}</div></div></Reveal>
    </section>

    <section className="section skills">
      <Reveal><div className="eyebrow">05 / EXPERTISE STACK</div><h2>Meta Ads toolkit.</h2></Reveal>
      <div className="skill-grid">{skills.map((s,i)=><div className="skill" key={s}><span>0{i+1}</span><strong>{s}</strong><i>↗</i></div>)}</div>
    </section>

    <section id="contact" className="contact">
      <div className="contact-grid"><Reveal><div><div className="eyebrow">06 / LET&apos;S CONNECT</div><h2>Have a role or<br/><em>project in mind?</em></h2><p>Let&apos;s connect and discuss how I can contribute to your marketing team.</p></div></Reveal>
      <Reveal className="delay-1"><div className="contact-card"><span>AVAILABLE FOR</span><strong>Meta Ads / Performance Marketing</strong><a href="mailto:gaurav204yadav@gmail.com">gaurav204yadav@gmail.com <b>↗</b></a><a href="tel:+918360992034">+91 83609 92034</a></div></Reveal></div>
      <footer><span>GY. / META ADS</span><span>© 2026 GAURAV YADAV</span></footer>
    </section>
  </main>
}