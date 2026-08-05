const CTA = "Schedule a Complimentary Consultation";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <style>{`
        :root { --ink:#173134; --teal:#0f5d5f; --mint:#dcebe5; --cream:#f6f2e9; --paper:#fffdf8; --coral:#dd765e; --line:rgba(23,49,52,.16); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        img { display:block; max-width:100%; }
        .shell { width:min(1180px, calc(100% - 48px)); margin:0 auto; }
        .eyebrow { margin:0 0 16px; color:var(--teal); font-size:12px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.045em; }
        h1 { max-width:780px; margin-bottom:24px; font-size:clamp(54px, 7.7vw, 110px); line-height:.88; }
        h2 { margin-bottom:22px; font-size:clamp(40px, 5vw, 72px); line-height:.98; }
        h3 { font-size:20px; line-height:1.2; }
        p { color:#466063; line-height:1.7; }
        .cta { display:inline-flex; align-items:center; justify-content:space-between; gap:26px; min-height:54px; padding:0 20px; border:1px solid var(--ink); background:var(--ink); color:white; font-size:12px; font-weight:800; letter-spacing:.09em; text-decoration:none; text-transform:uppercase; transition:.2s ease; }
        .cta:hover { background:var(--coral); border-color:var(--coral); transform:translateY(-2px); }
        .topline { background:var(--ink); color:white; font-size:11px; letter-spacing:.08em; text-transform:uppercase; }
        .topline .shell { display:flex; justify-content:space-between; padding:10px 0; }
        nav { position:relative; z-index:3; border-bottom:1px solid var(--line); background:rgba(255,253,248,.94); }
        nav .shell { display:flex; align-items:center; justify-content:space-between; min-height:90px; gap:28px; }
        .logo { width:210px; height:auto; }
        .navlinks { display:flex; gap:32px; align-items:center; }
        .navlinks a { font-size:13px; font-weight:700; text-decoration:none; }
        .navlinks .cta { color:white; }
        .hero { position:relative; overflow:hidden; padding:80px 0 0; background:linear-gradient(120deg, var(--cream) 0 67%, var(--mint) 67%); }
        .hero:after { content:'RENO · NEVADA'; position:absolute; right:-50px; top:210px; color:rgba(15,93,95,.08); font-size:110px; font-weight:900; letter-spacing:.02em; transform:rotate(90deg); }
        .hero-copy { position:relative; z-index:1; }
        .hero-copy>p:not(.eyebrow) { max-width:620px; margin-bottom:32px; font-size:18px; }
        .hero-media { position:relative; z-index:1; display:grid; grid-template-columns:2.2fr .8fr; gap:18px; margin-top:58px; }
        .hero-media figure { position:relative; margin:0; overflow:hidden; background:#ccc; }
        .hero-media figure:first-child { height:500px; }
        .hero-media figure:last-child { height:500px; }
        .hero-media img { width:100%; height:100%; object-fit:cover; }
        .hero-media figure:first-child:after { content:'▶'; position:absolute; left:50%; top:50%; display:grid; width:76px; height:76px; place-items:center; border-radius:50%; background:white; color:var(--teal); font-size:20px; transform:translate(-50%,-50%); }
        .hero-note { position:absolute; right:20px; bottom:20px; width:210px; padding:22px; background:var(--coral); color:white; }
        .hero-note strong { display:block; margin-bottom:8px; font-family:Georgia,serif; font-size:28px; font-weight:400; }
        .trustbar { border-bottom:1px solid var(--line); background:white; }
        .trustbar .shell { display:grid; grid-template-columns:repeat(4,1fr); }
        .trustbar div { padding:25px 24px; border-left:1px solid var(--line); font-size:12px; font-weight:800; letter-spacing:.08em; text-align:center; text-transform:uppercase; }
        .trustbar div:last-child { border-right:1px solid var(--line); }
        section { padding:120px 0; }
        .intro-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:80px; align-items:center; }
        .doctor-stack { position:relative; min-height:650px; }
        .doctor-stack .main { width:78%; height:570px; object-fit:cover; }
        .doctor-stack .small { position:absolute; right:0; bottom:0; width:42%; height:310px; border:10px solid var(--paper); object-fit:cover; }
        .stat { position:absolute; right:2%; top:6%; width:155px; padding:22px; background:var(--teal); color:white; text-align:center; }
        .stat b { display:block; font-family:Georgia,serif; font-size:48px; font-weight:400; line-height:1; }
        .proof-list { margin:30px 0 34px; padding:0; list-style:none; border-top:1px solid var(--line); }
        .proof-list li { display:grid; grid-template-columns:42px 1fr; gap:12px; padding:18px 0; border-bottom:1px solid var(--line); color:#365256; line-height:1.45; }
        .proof-list b { color:var(--coral); font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .gallery { background:var(--ink); color:white; }
        .gallery .eyebrow, .gallery p { color:#a9c6c2; }
        .gallery-head { display:flex; align-items:end; justify-content:space-between; gap:40px; margin-bottom:50px; }
        .gallery-head h2 { max-width:720px; margin-bottom:0; }
        .cases { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
        .case { position:relative; overflow:hidden; }
        .pair { display:grid; grid-template-columns:1fr 1fr; }
        .pair img { width:100%; height:420px; object-fit:cover; object-position:center top; }
        .tag { position:absolute; top:14px; padding:8px 12px; background:rgba(23,49,52,.85); color:white; font-size:10px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
        .tag.before { left:14px; } .tag.after { left:calc(50% + 14px); background:var(--coral); }
        .case figcaption { padding:22px; background:#234447; color:#d9e5e3; font-size:14px; line-height:1.6; }
        .process { background:var(--cream); }
        .process-grid { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; }
        .process-image { position:relative; }
        .process-image>img { width:100%; height:650px; object-fit:cover; }
        .process-badge { position:absolute; right:-28px; bottom:32px; width:190px; padding:28px; background:white; box-shadow:0 20px 60px rgba(23,49,52,.16); }
        .process-badge b { display:block; color:var(--teal); font-family:Georgia,serif; font-size:54px; font-weight:400; }
        .steps { display:grid; gap:0; margin-top:32px; }
        .step { display:grid; grid-template-columns:54px 1fr; gap:18px; padding:20px 0; border-top:1px solid var(--line); }
        .step span { color:var(--coral); font-family:Georgia,serif; font-size:30px; }
        .step h3 { margin:4px 0 5px; }
        .step p { margin:0; font-size:14px; }
        .voices-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:75px; align-items:start; }
        .voices-image { position:sticky; top:24px; }
        .voices-image img { width:100%; height:620px; object-fit:cover; }
        .quote { padding:34px 0; border-top:1px solid var(--line); }
        .quote:first-of-type { margin-top:20px; }
        .quote blockquote { margin:0 0 20px; color:var(--ink); font-family:Georgia,serif; font-size:27px; line-height:1.35; }
        .quote strong { color:var(--teal); font-size:12px; letter-spacing:.12em; text-transform:uppercase; }
        .technology { padding-bottom:0; background:var(--mint); }
        .tech-head { display:grid; grid-template-columns:1.1fr .9fr; gap:80px; align-items:end; margin-bottom:45px; }
        .tech-grid { display:grid; grid-template-columns:1.3fr .7fr; gap:18px; }
        .tech-grid img { width:100%; height:490px; object-fit:cover; }
        .tech-card { display:flex; flex-direction:column; justify-content:space-between; padding:42px; background:var(--teal); color:white; }
        .tech-card p { color:#c7ddda; }
        .tech-card ul { padding-left:18px; line-height:2; }
        .faq-grid { display:grid; grid-template-columns:1fr .85fr; gap:80px; align-items:start; }
        details { border-top:1px solid var(--line); }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { display:flex; justify-content:space-between; gap:20px; padding:24px 0; cursor:pointer; font-weight:800; list-style:none; }
        summary:after { content:'+'; color:var(--coral); font-size:24px; font-weight:400; }
        details[open] summary:after { content:'−'; }
        details p { padding:0 40px 24px 0; }
        .faq-photo { width:100%; height:610px; object-fit:cover; }
        .final { padding:0; }
        .final-wrap { position:relative; min-height:630px; display:grid; place-items:center; overflow:hidden; text-align:center; }
        .final-wrap>img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .final-wrap:after { content:''; position:absolute; inset:0; background:rgba(14,45,48,.75); }
        .final-content { position:relative; z-index:1; max-width:800px; padding:70px 24px; color:white; }
        .final-content .eyebrow { color:#b7d4ce; }
        .final-content p { max-width:590px; margin:0 auto 30px; color:#d9e7e5; font-size:18px; }
        .final-content .cta { border-color:white; background:white; color:var(--ink); }
        footer { padding:70px 0 25px; background:#10282b; color:white; }
        .footer-grid { display:grid; grid-template-columns:1.2fr .8fr .8fr; gap:80px; padding-bottom:55px; }
        .footer-logo { width:220px; margin-bottom:24px; }
        footer p, footer a { color:#a9c2c0; font-size:14px; }
        footer h3 { margin-bottom:20px; font-family:Georgia,serif; font-weight:400; }
        footer a { display:block; margin:10px 0; text-decoration:none; }
        .copyright { display:flex; justify-content:space-between; padding-top:22px; border-top:1px solid rgba(255,255,255,.12); color:#789492; font-size:11px; letter-spacing:.06em; text-transform:uppercase; }
        @media(max-width:850px) {
          .shell { width:min(100% - 30px, 1180px); }
          .topline span:last-child, .navlinks>a:not(.cta) { display:none; }
          nav .shell { min-height:74px; } .logo { width:160px; }
          .navlinks .cta { min-height:44px; padding:0 12px; font-size:9px; }
          .hero { padding-top:58px; background:var(--cream); }
          .hero-media { grid-template-columns:1fr; }
          .hero-media figure:first-child { height:390px; }
          .hero-media figure:last-child { display:none; }
          .trustbar .shell { grid-template-columns:1fr 1fr; }
          .trustbar div:nth-child(2) { border-right:1px solid var(--line); }
          section { padding:80px 0; }
          .intro-grid,.process-grid,.voices-grid,.tech-head,.faq-grid { grid-template-columns:1fr; gap:45px; }
          .doctor-stack { min-height:520px; } .doctor-stack .main { height:470px; }
          .doctor-stack .small { height:240px; }
          .gallery-head { align-items:start; flex-direction:column; }
          .cases { grid-template-columns:1fr; }
          .pair img { height:280px; }
          .process-image>img { height:470px; }
          .process-badge { right:12px; }
          .voices-image { position:relative; }
          .voices-image img,.faq-photo { height:440px; }
          .tech-grid { grid-template-columns:1fr; }
          .tech-grid img { height:380px; }
          .footer-grid { grid-template-columns:1fr; gap:30px; }
        }
        @media(max-width:560px) {
          h1 { font-size:51px; }
          .topline { font-size:9px; }
          .navlinks .cta { width:44px; overflow:hidden; white-space:nowrap; color:transparent; gap:0; }
          .navlinks .cta span { color:white; font-size:16px; }
          .hero-media figure:first-child { height:300px; }
          .hero-note { width:175px; padding:16px; }
          .trustbar div { padding:18px 8px; font-size:9px; }
          .doctor-stack { min-height:430px; } .doctor-stack .main { height:400px; width:88%; }
          .doctor-stack .small { height:190px; border-width:6px; }
          .stat { right:0; top:3%; width:120px; padding:15px; }
          .stat b { font-size:36px; }
          .pair img { height:210px; }
          .process-badge { width:160px; padding:20px; }
          .quote blockquote { font-size:23px; }
          .final-wrap { min-height:560px; }
          .copyright { gap:12px; flex-direction:column; }
        }
      `}</style>

      <div className="topline">
        <div className="shell">
          <span>Se Habla Español · Same-Day Emergency Care</span>
          <span>748 S Meadows Pkwy A8, Reno, NV · (775) 391-6636</span>
        </div>
      </div>
      <nav aria-label="Main navigation">
        <div className="shell">
          <a href="#top" aria-label="Smile Design Implant Centers home">
            <img className="logo" src="/images/logo-d4211d91ae.png" alt="Smile Design Implant Centers" />
          </a>
          <div className="navlinks">
            <a href="#expertise">Expertise</a>
            <a href="#results">Results</a>
            <a href="#experience">Experience</a>
            <a className="cta" href="#contact">{CTA}<Arrow /></a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="shell">
          <div className="hero-copy">
            <p className="eyebrow">Advanced implant & restorative dentistry · Reno, Nevada</p>
            <h1>Complex care.<br />Made human.</h1>
            <p>Specialist-led dentistry for people ready to eat, speak, and smile with confidence again. Your surgical and restorative care happens together, under one roof.</p>
            <a className="cta" href="#contact">{CTA}<Arrow /></a>
          </div>
          <div className="hero-media">
            <figure>
              <img src="/images/maxresdefault-fc5a58a7e0.jpg" alt="The Smile Design Implant Centers team" />
            </figure>
            <figure>
              <img src="/images/index-callout-1-d1e3dabc19.jpg" alt="Patient smiling in the dental chair" />
              <div className="hero-note"><strong>Pressure-free</strong> One-on-one comprehensive consultation with a specialist.</div>
            </figure>
          </div>
        </div>
      </header>

      <div className="trustbar">
        <div className="shell">
          <div>Only ABOI Diplomate in Northern Nevada</div>
          <div>Board-Certified Prosthodontist</div>
          <div>2,000+ Hours Implant Education</div>
          <div>Complete Care Under One Roof</div>
        </div>
      </div>

      <section id="expertise">
        <div className="shell intro-grid">
          <div className="doctor-stack">
            <img className="main" src="/images/dr-riccardi-fe80dba0e4.jpg" alt="Dr. Ricciardi, implantologist" />
            <img className="small" src="/images/meet-dr-lim-1-71b0107f15.jpg" alt="Dr. Lim, board-certified prosthodontist" />
            <div className="stat"><b>1 of 3</b> ABOI Diplomates in Nevada</div>
          </div>
          <div>
            <p className="eyebrow">Proof 01 · Rare specialist expertise</p>
            <h2>The expertise your smile deserves.</h2>
            <p>Implant dentistry asks for both surgical precision and an eye for natural form. At Smile Design Implant Centers, those disciplines work side by side.</p>
            <ul className="proof-list">
              <li><b>01</b><span><strong>Dr. Ricciardi</strong> is Northern Nevada’s only Diplomate of the American Board of Oral Implantology/Implant Dentistry, a credential earned through extensive experience, case review, and written and oral examination.</span></li>
              <li><b>02</b><span><strong>Dr. Lim</strong> is a Board-Certified Prosthodontist with more than 25 years of experience, from precise restorations to full-mouth rehabilitation.</span></li>
              <li><b>03</b><span>Surgery, digital planning, prosthetic design, and final restoration are coordinated by one team in one practice.</span></li>
            </ul>
            <a className="cta" href="#contact">{CTA}<Arrow /></a>
          </div>
        </div>
      </section>

      <section className="gallery" id="results">
        <div className="shell">
          <div className="gallery-head">
            <div>
              <p className="eyebrow">Proof 02 · Real documented results</p>
              <h2>Not stock smiles.<br />Our patients.</h2>
            </div>
            <p>Real before-and-after photography documents the careful transformation of missing, damaged, and discolored teeth into complete, natural-looking smiles.</p>
          </div>
          <div className="cases">
            <figure className="case">
              <div className="pair">
                <img src="/images/smile-gallery-1b-1ed48f2be3.webp" alt="Patient before smile restoration with missing teeth" />
                <img src="/images/smile-gallery-1a-c90e1c0c00.webp" alt="Same patient after smile restoration with a complete smile" />
              </div>
              <span className="tag before">Before</span><span className="tag after">After</span>
              <figcaption>Full-smile restoration · A complete, balanced result designed around the patient.</figcaption>
            </figure>
            <figure className="case">
              <div className="pair">
                <img src="/images/smile-gallery-2b-81988eda0c.webp" alt="Patient before restoration with long discolored teeth" />
                <img src="/images/smile-gallery-2a-100018b74f.webp" alt="Same patient after restoration with bright natural-looking teeth" />
              </div>
              <span className="tag before">Before</span><span className="tag after">After</span>
              <figcaption>Restorative smile design · Refined proportion, color, and confidence.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="process" id="experience">
        <div className="shell process-grid">
          <div className="process-image">
            <img src="/images/index-lab-110d7676b5.jpg" alt="Dental restoration and in-house lab work" />
            <div className="process-badge"><b>One roof.</b> Fewer handoffs. One accountable team.</div>
          </div>
          <div>
            <p className="eyebrow">Designed, placed & restored here</p>
            <h2>A clearer path to your new smile.</h2>
            <p>Complex treatment feels simpler when every step connects. Our team uses precise digital records to plan your care and create restorations that look and function naturally.</p>
            <div className="steps">
              <div className="step"><span>01</span><div><h3>Listen & evaluate</h3><p>A pressure-free conversation, comprehensive evaluation, scans, and a plan built around your goals.</p></div></div>
              <div className="step"><span>02</span><div><h3>Plan digitally</h3><p>3D cone beam imaging and putty-free impressions give us a detailed blueprint of your anatomy.</p></div></div>
              <div className="step"><span>03</span><div><h3>Place with precision</h3><p>Specialist-led surgery and sedation options prioritize clinical accuracy and your comfort.</p></div></div>
              <div className="step"><span>04</span><div><h3>Restore confidence</h3><p>Your final teeth are carefully designed for a natural appearance, strong function, and lasting support.</p></div></div>
            </div>
            <a className="cta" href="#contact">{CTA}<Arrow /></a>
          </div>
        </div>
      </section>

      <section>
        <div className="shell voices-grid">
          <div className="voices-image">
            <img src="/images/hqdefault-45eb18d6ce.jpg" alt="Cindy sharing her experience with Smile Design Implant Centers" />
          </div>
          <div>
            <p className="eyebrow">Proof 03 · In their own words</p>
            <h2>Care people remember for the right reasons.</h2>
            <div className="quote">
              <blockquote>“Dr. Ricciardi has a calming, safe personality and is very thorough when explaining his approach, which instantly eases my anxiety. The team is incredible and they make you feel like family.”</blockquote>
              <strong>Cindy · Patient</strong>
            </div>
            <div className="quote">
              <blockquote>“Gentle, kind and knows his stuff. Never a moment of pain.”</blockquote>
              <strong>Patti · Patient</strong>
            </div>
            <div className="quote">
              <blockquote>“The staff were not like robots and made me feel very comfortable. This was the best experience I have ever had at a dentist.”</blockquote>
              <strong>Shane · Patient</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="technology">
        <div className="shell">
          <div className="tech-head">
            <div><p className="eyebrow">Technology with a purpose</p><h2>See more. Plan better. Make it personal.</h2></div>
            <p>Technology matters only when it improves your experience. Our digital workflow removes guesswork, avoids messy impressions, and helps our team coordinate sophisticated care efficiently.</p>
          </div>
          <div className="tech-grid">
            <img src="/images/index-tech-bf8a8603e4.jpg" alt="Advanced dental technology and treatment spaces at the Reno practice" />
            <div className="tech-card">
              <h3>Inside our digital workflow</h3>
              <ul><li>3D cone beam CT imaging</li><li>Putty-free digital impressions</li><li>Virtual smile design</li><li>In-house 3D printing</li><li>Custom surgical guides</li></ul>
              <p>Our in-house lab technician prints dental models, nightguards, surgical guides, and wax-ups right here in Reno.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2>Before you take the first step.</h2>
            <details><summary>What happens at my complimentary consultation?</summary><p>You’ll meet one-on-one with a specialist for a pressure-free, comprehensive evaluation. We’ll listen to your goals, review your oral health, and explain the treatment paths that may fit you.</p></details>
            <details><summary>Can the entire implant process happen here?</summary><p>Yes. Implant planning, surgery, restoration, and many lab steps are completed in-house, giving you one coordinated team throughout treatment.</p></details>
            <details><summary>What if I feel anxious about dental treatment?</summary><p>Our team is known for calm, thorough communication. Sedation options are also available and can be discussed based on your health, needs, and treatment.</p></details>
            <details><summary>Do you offer financing?</summary><p>Yes. The practice partners with third-party financing providers including CareCredit, Proceed Finance, and iCreditworks to offer manageable payment options for qualified patients.</p></details>
            <details><summary>What if I need urgent dental help?</summary><p>Same-day emergency appointments are available. Call (775) 391-6636 so the team can understand your symptoms and guide your next step.</p></details>
          </div>
          <img className="faq-photo" src="/images/for-patients-1-ad303148ee.webp" alt="Patient welcomed by his Reno dentist" />
        </div>
      </section>

      <section className="final" id="contact">
        <div className="final-wrap">
          <img src="/images/office-tour-1-8957471577.webp" alt="Entrance to Smile Design Implant Centers in Reno" />
          <div className="final-content">
            <p className="eyebrow">Your first conversation is complimentary</p>
            <h2>Let’s make complex care feel simple.</h2>
            <p>Meet with a specialist, understand your options, and leave with clarity. No pressure. Just a thoughtful plan for moving forward.</p>
            <a className="cta" href="tel:7753916636">{CTA}<Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell">
          <div className="footer-grid">
            <div>
              <img className="footer-logo" src="/images/logo-footer-16279cac2e.png" alt="Smile Design Implant Centers" />
              <p>Creating confidence with every smile through specialist-led implant, restorative, and cosmetic dentistry.</p>
            </div>
            <div><h3>Visit us</h3><p>748 S Meadows Pkwy A8<br />Reno, NV 89521</p><a href="tel:7753916636">(775) 391-6636</a><p>Se Habla Español</p></div>
            <div><h3>Office hours</h3><p>Monday–Thursday<br />7:00 am–4:00 pm</p><p>Friday<br />By appointment</p></div>
          </div>
          <div className="copyright"><span>© 2026 Smile Design Implant Centers</span><span>Advanced dentistry · Human care</span></div>
        </div>
      </footer>
    </main>
  );
}
