// ============================================================
// COMPONENTS — Editorial Swiss & Brutalist Portfolio System
// ============================================================

const Icons = {
  arrowDiag: `<svg class="icon-arrow-diag" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowRight: `<svg class="icon-arrow-right" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowDown: `<svg class="icon-arrow-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  help: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  login: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
};

const Components = {
  // ============================================================
  // HEADER / MINIMAL NAVIGATION
  // ============================================================
  renderHeader(profile) {
    return `
      <header class="site-header" id="site-header">
        <div class="header-left">
          <a href="#hero" class="brand-link" aria-label="Home">
            <span class="brand-name">${profile.name}</span>
            <span class="brand-meta">PORTFOLIO</span>
          </a>
        </div>

        <nav class="header-nav" aria-label="Primary Navigation">
          <a href="#section-about" class="nav-link">ABOUT</a>
          <a href="#section-projects" class="nav-link">WORK</a>
          <a href="#section-experience" class="nav-link">EXPERIENCE</a>
          <a href="#section-skills" class="nav-link">SKILLS</a>
          <a href="#section-education" class="nav-link">EDUCATION</a>
          <a href="#section-leadership" class="nav-link">LEADERSHIP</a>
          <a href="#section-contact" class="nav-link">CONTACT</a>
        </nav>

        <div class="header-right">
          <a href="#section-contact" class="btn-header-contact">
            <span>GET IN TOUCH</span>
            <span class="btn-arrow">↗</span>
          </a>

          <button id="theme-toggle" class="btn-icon-minimal" aria-label="Toggle theme">
            ${Icons.moon}
          </button>

          <button id="side-panel-toggle" class="btn-icon-minimal" aria-label="Open menu">
            ${Icons.menu}
          </button>
        </div>
      </header>
    `;
  },

  // ============================================================
  // HERO SECTION — Swiss Poster Composition
  // ============================================================
  renderHero(profile) {
    const heroPhoto = profile.photo || 'assets/joyel-hero.jpg';

    return `
      <section class="hero-section" id="hero">
        <!-- Top Editorial Meta -->
        <div class="hero-meta-top">
          <div class="hero-meta-col">
            <span class="meta-label">ROLE</span>
            <span class="meta-value">${profile.title}</span>
          </div>
          <div class="hero-meta-col center">
            <span class="meta-label">LOCATION</span>
            <span class="meta-value">${profile.location}</span>
          </div>
          <div class="hero-meta-col right">
            <span class="meta-status">
              <span class="status-dot"></span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>
        </div>

        <!-- Hero Stage Composition -->
        <div class="hero-stage">
          <!-- Background Geometric Vector Curves -->
          <svg class="hero-vector-bg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <circle cx="500" cy="300" r="160" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4"/>
            <circle cx="500" cy="300" r="260" fill="none" stroke="currentColor" stroke-width="1"/>
            <circle cx="500" cy="300" r="360" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="6 8"/>
            <line x1="0" y1="300" x2="1000" y2="300" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 6"/>
            <line x1="500" y1="0" x2="500" y2="600" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 6"/>
            <circle cx="500" cy="300" r="4" fill="currentColor"/>
          </svg>

          <!-- Giant Condensed Name Typography Behind & Around Portrait -->
          <div class="hero-giant-typography" aria-hidden="true">
            <div class="giant-name-row">
              <span class="giant-part left">JOYEL</span>
              <span class="giant-part right">SHAJI</span>
            </div>
          </div>

          <!-- Foreground Portrait Cutout Overlapping Typography -->
          <div class="hero-portrait-container">
            <div class="hero-portrait-frame">
              <img 
                src="${heroPhoto}" 
                alt="${profile.name}" 
                class="hero-portrait-img" 
                id="hero-photo"
                onerror="this.src='assets/profile.jpg'"
              />
            </div>
            <div class="hero-portrait-caption">
              <span class="caption-index">[00]</span>
              <span class="caption-text">HELLOOOO</span>
            </div>
          </div>
        </div>

        <!-- Hero Bottom Bar -->
        <div class="hero-bottom-bar">
          <div class="hero-social-strip">
            <a href="mailto:${profile.email}" class="hero-social-link" title="Email Joyel">
              ${Icons.email} <span>${profile.email}</span>
            </a>
            <a href="${profile.github}" target="_blank" rel="noopener" class="hero-social-link" title="GitHub Profile">
              ${Icons.github} <span>GITHUB</span> ↗
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener" class="hero-social-link" title="LinkedIn Profile">
              ${Icons.linkedin} <span>LINKEDIN</span> ↗
            </a>
          </div>

          <a href="#section-about" class="hero-scroll-indicator" aria-label="Scroll to next section">
            <span class="scroll-label">SCROLL DOWN</span>
            <span class="scroll-track">
              <span class="scroll-pin"></span>
            </span>
          </a>
        </div>
      </section>
    `;
  },

  // ============================================================
  // EDITORIAL TICKER / SECTION STRIP
  // ============================================================
  renderMenuBar() {
    const items = [
      { id: 'about', label: '01 // ABOUT' },
      { id: 'projects', label: '02 // SELECTED WORK' },
      { id: 'experience', label: '03 // EXPERIENCE' },
      { id: 'skills', label: '04 // TECHNICAL SKILLS' },
      { id: 'education', label: '05 // ACADEMICS' },
      { id: 'certificates', label: '06 // HONORS & AWARDS' },
      { id: 'leadership', label: '07 // LEADERSHIP' },
      { id: 'contact', label: '08 // GET IN TOUCH' }
    ];

    const itemHtml = items.map(item => `
      <span class="ticker-item" data-section="${item.id}" onclick="App.navigateTo('${item.id}')">
        ${item.label}
        <span class="ticker-sep">●</span>
      </span>
    `).join('');

    const repeated = itemHtml.repeat(4);

    return `
      <div class="ticker-wrapper" id="menu-bar">
        <div class="ticker-track">
          ${repeated}
        </div>
      </div>
    `;
  },

  // ============================================================
  // ABOUT SECTION — Editorial Two-Column Layout
  // ============================================================
  renderAbout(profile) {
    const aboutPhoto = profile.aboutPhoto || 'assets/joyel-about.jpg';

    return `
      <section class="editorial-section section-white" id="section-about">
        <!-- Section Header Line -->
        <div class="section-meta-header">
          <span class="sec-index">01</span>
          <span class="sec-label">INTRODUCTION</span>
          <span class="sec-tag">BACKGROUND & PHILOSOPHY</span>
        </div>

        <div class="editorial-grid-2col">
          <!-- Left Column: Bold Statement Anchor & Circular CTA -->
          <div class="about-anchor-col">
            <h2 class="editorial-display-heading">
              ABOUT<br>
              JOYEL.
            </h2>

            <blockquote class="about-statement">
              "${profile.introTagline}"
            </blockquote>

            <div class="about-portrait-card">
              <div class="about-img-wrap">
                <img src="${aboutPhoto}" alt="Joyel Shaji portrait" class="about-feature-img" onerror="this.src='${profile.photo}'">
              </div>
              <div class="about-img-caption">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="about-cta-wrap">
              <a href="#section-contact" class="btn-circular">
                <div class="btn-circular-inner">
                  <span class="btn-circular-text">GET IN<br>TOUCH</span>
                  <span class="btn-circular-arrow">↗</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Column: Full Unmodified Bio & Academic Metadata -->
          <div class="about-body-col">
            <div class="editorial-lead-box">
              <p class="editorial-lead-paragraph">${profile.about}</p>
            </div>

            <div class="editorial-metadata-table">
              <div class="meta-row">
                <div class="meta-key">INSTITUTION</div>
                <div class="meta-val">Amal Jyothi College of Engineering</div>
              </div>
              <div class="meta-row">
                <div class="meta-key">PROGRAM</div>
                <div class="meta-val">B.Tech in Computer Science and Engineering (2024 — 2028)</div>
              </div>
              <div class="meta-row">
                <div class="meta-key">ACADEMIC HONORS</div>
                <div class="meta-val">10.0 SGPA (S3 & S4) · Manager's Honors List (All Semesters)</div>
              </div>
              <div class="meta-row">
                <div class="meta-key">CORE ROLES</div>
                <div class="meta-val">Chairman AI Club · NASA Space Apps Co-Lead · Founder Cadence Music</div>
              </div>
              <div class="meta-row">
                <div class="meta-key">PRIMARY LOCATION</div>
                <div class="meta-val">${profile.location}</div>
              </div>
              <div class="meta-row">
                <div class="meta-key">DIRECT CONTACT</div>
                <div class="meta-val"><a href="mailto:${profile.email}" class="text-link">${profile.email}</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // ============================================================
  // PROJECTS / WORK SECTION — BLACK FEATURE SECTION
  // ============================================================
  renderProjects(projects) {
    const projectRows = projects.map((p, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const cleanTitle = p.title.replace(/\(.*?\)/g, '').split('—')[0].trim();
      const acronym = cleanTitle.split(/\s+/).map(w => w[0]).join('').slice(0, 5) || 'PRJ';

      return `
        <article class="project-row" data-id="${p.id}" onclick="App.openDetail('project', '${p.id}')">
          <div class="project-num-col">
            <span class="project-index">${numStr}</span>
          </div>

          <div class="project-info-col">
            <h3 class="project-heading">${p.title}</h3>
            <p class="project-summary">${p.shortDesc}</p>
            <div class="project-tech-strip">
              ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="project-visual-col">
            <div class="project-badge-preview" style="--accent-tint: ${p.coverColor || '#202020'}">
              <span class="project-acronym">${acronym}</span>
              <span class="preview-overlay-hint">VIEW SPECS</span>
            </div>
          </div>

          <div class="project-action-col">
            <span class="project-arrow-action">→</span>
          </div>
        </article>
      `;
    }).join('');

    return `
      <section class="editorial-section section-black" id="section-projects">
        <div class="section-meta-header light">
          <span class="sec-index">02</span>
          <span class="sec-label">SELECTED WORK</span>
          <span class="sec-tag">${projects.length} SYSTEMS & PLATFORMS</span>
        </div>

        <div class="section-title-wrap light">
          <h2 class="editorial-display-heading light">FEATURED<br>PROJECTS.</h2>
          <p class="section-subtext light">
            Technical systems, distributed architectures, and hardware-software integrations engineered for real-world reliability.
          </p>
        </div>

        <div class="projects-editorial-list">
          ${projectRows}
        </div>
      </section>
    `;
  },

  // ============================================================
  // EXPERIENCE SECTION — LIGHT GRAY SECTION
  // ============================================================
  renderExperience(experience) {
    const outdoorPhoto = 'assets/joyel-outdoor.jpg';

    const expRows = experience.map((exp, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      return `
        <article class="experience-entry" onclick="App.openDetail('experience', '${exp.id}')">
          <div class="exp-period-col">
            <span class="exp-num">${numStr}</span>
            <span class="exp-year">${exp.year}</span>
          </div>

          <div class="exp-content-col">
            <div class="exp-header-line">
              <h3 class="exp-role">${exp.title}</h3>
              <span class="exp-arrow">↗</span>
            </div>
            <h4 class="exp-company">${exp.company}</h4>
            <p class="exp-desc">${exp.description}</p>
            <div class="exp-skills-strip">
              ${exp.skillsAchieved.map(s => `<span class="tech-tag">${s}</span>`).join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    return `
      <section class="editorial-section section-light-gray" id="section-experience">
        <div class="section-meta-header">
          <span class="sec-index">03</span>
          <span class="sec-label">TRACK RECORD</span>
          <span class="sec-tag">PROFESSIONAL ROLES</span>
        </div>

        <div class="editorial-grid-split">
          <div class="split-left">
            <h2 class="editorial-display-heading">EXPERIENCE.</h2>
            <p class="section-subtext">
              Demonstrated leadership and execution in program coordination, brand communications, and digital product design.
            </p>

            <div class="experience-list">
              ${expRows}
            </div>
          </div>

          <div class="split-right">
            <div class="editorial-visual-frame">
              <img src="${outdoorPhoto}" alt="Joyel Shaji in the field" class="editorial-frame-img" onerror="this.style.display='none'">
              <div class="frame-meta">
                <span class="frame-tag">EXECUTION & COMMUNITY</span>
                <p class="frame-quote">"Bridging deep technical analysis with decisive program management."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // ============================================================
  // SKILLS SECTION — WHITE SECTION (Structured Typographic Grid)
  // ============================================================
  renderSkills(skills) {
    // Group by category exactly from data
    const categories = [
      { key: "Languages", title: "LANGUAGES" },
      { key: "Frameworks & Runtime", title: "FRAMEWORKS & RUNTIME" },
      { key: "Databases & Data", title: "DATABASES & DATA" },
      { key: "Tools & Platforms", title: "TOOLS & PLATFORMS" },
      { key: "Core Concepts", title: "CORE CONCEPTS" },
      { key: "Soft Skills", title: "LEADERSHIP & STRATEGY" }
    ];

    const groupBlocks = categories.map((cat, idx) => {
      const items = skills.filter(s => s.category.toLowerCase() === cat.key.toLowerCase());
      if (!items || items.length === 0) return '';
      const numStr = String(idx + 1).padStart(2, '0');

      return `
        <div class="skill-category-block">
          <div class="cat-header">
            <span class="cat-num">${numStr}</span>
            <h3 class="cat-title">${cat.title}</h3>
          </div>
          <div class="skill-type-grid">
            ${items.map(s => `
              <div class="skill-typographic-item">
                <span class="skill-label">${s.name}</span>
                <span class="skill-metric">${s.level}%</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="editorial-section section-white" id="section-skills">
        <div class="section-meta-header">
          <span class="sec-index">04</span>
          <span class="sec-label">EXPERTISE</span>
          <span class="sec-tag">${skills.length} VERIFIED COMPETENCIES</span>
        </div>

        <div class="section-title-wrap">
          <h2 class="editorial-display-heading">TECHNICAL<br>CAPABILITIES.</h2>
          <p class="section-subtext">
            A comprehensive matrix of programming languages, distributed databases, developer tooling, and product methodologies.
          </p>
        </div>

        <div class="skills-editorial-grid">
          ${groupBlocks}
        </div>
      </section>
    `;
  },

  // ============================================================
  // EDUCATION & AWARDS — BLACK FEATURE SECTION
  // ============================================================
  renderEducationAndCertificates(education, certificates) {
    const eduItems = education.map((ed, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      return `
        <div class="edu-card">
          <div class="edu-top">
            <span class="edu-index">${numStr}</span>
            <span class="edu-year">${ed.year}</span>
          </div>
          <h3 class="edu-degree">${ed.degree}</h3>
          <h4 class="edu-institution">${ed.institution}</h4>
          <p class="edu-details">${ed.details}</p>
          ${ed.achievements && ed.achievements.length > 0 ? `
            <div class="edu-honors-list">
              ${ed.achievements.map(a => `<span class="honor-badge">● ${a}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    const certItems = certificates.map((c, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      return `
        <div class="cert-row">
          <div class="cert-left">
            <span class="cert-num">${numStr}</span>
            <div class="cert-titles">
              <h3 class="cert-name">${c.title}</h3>
              <span class="cert-issuer">${c.issuer}</span>
            </div>
          </div>
          <div class="cert-right">
            <span class="cert-period">${c.year}</span>
            <p class="cert-detail-text">${c.description}</p>
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="editorial-section section-black" id="section-education">
        <div class="section-meta-header light">
          <span class="sec-index">05</span>
          <span class="sec-label">ACADEMICS & HONORS</span>
          <span class="sec-tag">SCHOLASTIC EXCELLENCE</span>
        </div>

        <div class="education-achievements-container">
          <!-- Education Column -->
          <div class="edu-col">
            <h2 class="editorial-display-heading light">ACADEMIC<br>FORMATION.</h2>
            <div class="edu-list">
              ${eduItems}
            </div>
          </div>

          <!-- Vertical Divider -->
          <div class="vertical-grid-line"></div>

          <!-- Certificates / Achievements Column -->
          <div class="certs-col" id="section-certificates">
            <h2 class="editorial-display-heading light">HONORS &<br>AWARDS.</h2>
            <div class="certs-editorial-list">
              ${certItems}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // ============================================================
  // LEADERSHIP SECTION — LIGHT GRAY SECTION
  // ============================================================
  renderLeadership(leadership) {
    const benchPhoto = 'assets/joyel-bench.jpg';
    const techPhoto = 'assets/joyel-tech.jpg';

    const leadRows = leadership.map((l, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      return `
        <div class="leadership-entry">
          <div class="lead-head">
            <span class="lead-index">${numStr}</span>
            <span class="lead-year">${l.year}</span>
          </div>
          <h3 class="lead-role">${l.title}</h3>
          <p class="lead-desc">${l.description}</p>
        </div>
      `;
    }).join('');

    return `
      <section class="editorial-section section-light-gray" id="section-leadership">
        <div class="section-meta-header">
          <span class="sec-index">06</span>
          <span class="sec-label">CAMPUS & ECOSYSTEM</span>
          <span class="sec-tag">${leadership.length} INITIATIVES</span>
        </div>

        <div class="section-title-wrap">
          <h2 class="editorial-display-heading">LEADERSHIP &<br>COMMUNITY.</h2>
          <p class="section-subtext">
            From establishing an independent music academy at 17 to chairing institutional tech societies and managing international hackathons.
          </p>
        </div>

        <div class="leadership-editorial-layout">
          <div class="leadership-entries-grid">
            ${leadRows}
          </div>

          <div class="leadership-visual-sidebar">
            <div class="lead-photo-frame">
              <img src="${benchPhoto}" alt="" class="lead-photo" onerror="this.src='${techPhoto}'">
              <div class="lead-photo-caption">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="lead-photo-frame secondary">
              <img src="${techPhoto}" alt="" class="lead-photo" onerror="this.style.display='none'">
              <div class="lead-photo-caption">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // ============================================================
  // CONTACT SECTION — Poster Ending Layout
  // ============================================================
  renderContact(profile) {
    return `
      <section class="editorial-section section-black contact-section" id="section-contact">
        <div class="section-meta-header light">
          <span class="sec-index">07</span>
          <span class="sec-label">START A CONVERSATION</span>
          <span class="sec-tag">OPEN FOR OPPORTUNITIES</span>
        </div>

        <div class="contact-poster-canvas">
          <div class="contact-huge-headline" aria-hidden="true">
            <div>LET'S</div>
            <div>WORK</div>
            <div>TOGETHER.</div>
          </div>

          <div class="contact-arrow-hero">
            <span class="contact-huge-arrow">↗</span>
          </div>
        </div>

        <div class="contact-action-panel">
          <div class="contact-action-left">
            <p class="contact-inquiry-text">
              Interested in collaborating on software engineering, product strategy, technical leadership, or campus initiatives? Reach out directly.
            </p>
            <div class="contact-direct-links">
              <a href="mailto:${profile.email}" class="contact-main-email">${profile.email}</a>
              <span class="contact-locale">${profile.location}</span>
            </div>
          </div>

          <div class="contact-action-right">
            <a href="mailto:${profile.email}" class="btn-circular large">
              <div class="btn-circular-inner">
                <span class="btn-circular-text">SEND AN<br>EMAIL</span>
                <span class="btn-circular-arrow">↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  // ============================================================
  // FOOTER
  // ============================================================
  renderFooter(profile) {
    return `
      <footer class="site-footer">
        <div class="footer-top">
          <div class="footer-col brand">
            <span class="footer-brand-title">${profile.name}</span>
            <p class="footer-tagline-text">${profile.introTagline}</p>
          </div>

          <div class="footer-col nav">
            <span class="footer-header">INDEX</span>
            <div class="footer-links-grid">
              <a href="#hero">00 // TOP</a>
              <a href="#section-about">01 // ABOUT</a>
              <a href="#section-projects">02 // WORK</a>
              <a href="#section-experience">03 // CAREER</a>
              <a href="#section-skills">04 // SKILLS</a>
              <a href="#section-education">05 // ACADEMICS</a>
              <a href="#section-leadership">06 // LEADERSHIP</a>
              <a href="#section-contact">07 // CONTACT</a>
            </div>
          </div>

          <div class="footer-col social">
            <span class="footer-header">CHANNELS</span>
            <div class="footer-social-links">
              <a href="mailto:${profile.email}" class="footer-social-a">
                <span>EMAIL</span> <span>${profile.email}</span>
              </a>
              <a href="${profile.github}" target="_blank" rel="noopener" class="footer-social-a">
                <span>GITHUB</span> <span>github.com/joyelshajii</span> ↗
              </a>
              <a href="${profile.linkedin}" target="_blank" rel="noopener" class="footer-social-a">
                <span>LINKEDIN</span> <span>linkedin.com/in/joyelshaji</span> ↗
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span class="footer-copy">© ${new Date().getFullYear()} ${profile.name}. ALL RIGHTS RESERVED.</span>
          <span class="footer-built"></span>
          <a href="#hero" class="back-to-top">BACK TO TOP ↑</a>
        </div>
      </footer>
    `;
  },

  // ============================================================
  // DETAIL VIEWS (Project & Experience)
  // ============================================================
  renderProjectDetail(project) {
    return `
      <div class="detail-header-editorial">
        <div class="detail-header-top">
          <span class="detail-tag-category">CASE STUDY // SPECIFICATION</span>
          <button class="detail-close-btn" onclick="App.closeDetail()" aria-label="Close modal">${Icons.close}</button>
        </div>
        <h2 class="detail-headline">${project.title}</h2>
        <p class="detail-subtitle">${project.shortDesc}</p>
      </div>

      <div class="detail-body-editorial">
        <div class="detail-section">
          <h4 class="detail-subhead">ARCHITECTURE & OVERVIEW</h4>
          <p class="detail-prose">${project.description}</p>
        </div>

        <div class="detail-section">
          <h4 class="detail-subhead">TECHNOLOGY STACK</h4>
          <div class="detail-chips">
            ${project.technologies.map(t => `<span class="tech-tag large">${t}</span>`).join('')}
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-subhead">KEY COMPETENCIES DEMONSTRATED</h4>
          <div class="detail-chips">
            ${project.skillsAchieved.map(s => `<span class="tech-tag large">${s}</span>`).join('')}
          </div>
        </div>

        ${project.collaborators && project.collaborators.length > 0 ? `
          <div class="detail-section">
            <h4 class="detail-subhead">COLLABORATORS</h4>
            <div class="detail-chips">
              ${project.collaborators.map(c => `<span class="tech-tag large">${c}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        ${project.links && Object.keys(project.links).length > 0 ? `
          <div class="detail-section">
            <h4 class="detail-subhead">REPOSITORIES & RESOURCES</h4>
            <div class="detail-links-group">
              ${Object.entries(project.links).map(([name, url]) => `
                <a href="${url}" target="_blank" rel="noopener" class="detail-external-btn">
                  <span>${name.toUpperCase()} REPOSITORY</span>
                  <span>↗</span>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  renderExperienceDetail(exp) {
    return `
      <div class="detail-header-editorial">
        <div class="detail-header-top">
          <span class="detail-tag-category">POSITION DOSSIER</span>
          <button class="detail-close-btn" onclick="App.closeDetail()" aria-label="Close modal">${Icons.close}</button>
        </div>
        <h2 class="detail-headline">${exp.title}</h2>
        <p class="detail-subtitle">${exp.company} // ${exp.year}</p>
      </div>

      <div class="detail-body-editorial">
        <div class="detail-section">
          <h4 class="detail-subhead">ROLE SCOPE & MANDATE</h4>
          <p class="detail-prose">${exp.description}</p>
        </div>

        <div class="detail-section">
          <h4 class="detail-subhead">CORE COMPETENCIES APPLIED</h4>
          <div class="detail-chips">
            ${exp.skillsAchieved.map(s => `<span class="tech-tag large">${s}</span>`).join('')}
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-subhead">METHODOLOGIES & TOOLS</h4>
          <div class="detail-chips">
            ${exp.technologies.map(t => `<span class="tech-tag large">${t}</span>`).join('')}
          </div>
        </div>

        ${exp.links && Object.keys(exp.links).length > 0 ? `
          <div class="detail-section">
            <h4 class="detail-subhead">EXTERNAL REFERENCES</h4>
            <div class="detail-links-group">
              ${Object.entries(exp.links).map(([name, url]) => `
                <a href="${url}" target="_blank" rel="noopener" class="detail-external-btn">
                  <span>${name.toUpperCase()}</span>
                  <span>↗</span>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  // ============================================================
  // SIDE PANEL NAVIGATION DRAWER
  // ============================================================
  renderSidePanel() {
    const navItems = [
      { id: 'about', label: '01 // ABOUT', anchor: '#section-about' },
      { id: 'projects', label: '02 // SELECTED WORK', anchor: '#section-projects' },
      { id: 'experience', label: '03 // EXPERIENCE', anchor: '#section-experience' },
      { id: 'skills', label: '04 // TECHNICAL SKILLS', anchor: '#section-skills' },
      { id: 'education', label: '05 // ACADEMICS & HONORS', anchor: '#section-education' },
      { id: 'leadership', label: '06 // LEADERSHIP & ROLES', anchor: '#section-leadership' },
      { id: 'contact', label: '07 // GET IN TOUCH', anchor: '#section-contact' },
    ];

    return `
      <div class="side-panel-overlay" id="side-panel-overlay"></div>
      <aside class="side-panel-drawer" id="side-panel">
        <div class="side-panel-top">
          <div class="side-panel-brand">
            <span class="sp-title">NAVIGATION</span>
            <span class="sp-sub">JOYEL SHAJI</span>
          </div>
          <button class="side-panel-close-btn" id="side-panel-close-btn" aria-label="Close menu">
            ${Icons.close}
          </button>
        </div>

        <div class="side-panel-nav-list">
          ${navItems.map(item => `
            <a href="${item.anchor}" class="side-panel-link" onclick="App.navigateTo('${item.id}')">
              <span class="sp-link-text">${item.label}</span>
              <span class="sp-link-arrow">↗</span>
            </a>
          `).join('')}
        </div>

        <div class="side-panel-footer">
          <button class="sp-action-btn" onclick="App.showHelp()">
            ${Icons.help} <span>Help & Site Guide</span>
          </button>
          <button class="sp-action-btn" onclick="App.showLogin()">
            ${Icons.login} <span>Admin Login</span>
          </button>
        </div>
      </aside>
    `;
  },

  // ============================================================
  // LOGIN MODAL
  // ============================================================
  renderLoginModal() {
    return `
      <div class="modal-overlay" id="login-overlay">
        <div class="modal-dialog-panel">
          <div class="modal-header-line">
            <h3 class="modal-title">ADMINISTRATOR AUTHENTICATION</h3>
            <button class="modal-close-btn" onclick="App.hideLogin()" aria-label="Close dialog">${Icons.close}</button>
          </div>
          <form id="login-form" onsubmit="return App.handleLogin(event)" class="modal-form">
            <div class="form-group-editorial">
              <label class="form-label-editorial" for="login-username">USERNAME</label>
              <input type="text" id="login-username" class="form-input-editorial" placeholder="Enter username" autocomplete="username">
            </div>
            <div class="form-group-editorial">
              <label class="form-label-editorial" for="login-password">PASSWORD</label>
              <input type="password" id="login-password" class="form-input-editorial" placeholder="Enter password" autocomplete="current-password">
              <p class="form-error-editorial" id="login-error">Invalid administrator credentials</p>
            </div>
            <div class="form-btn-row">
              <button type="submit" class="btn-solid-dark">AUTHENTICATE</button>
              <button type="button" class="btn-outline-minimal" onclick="App.hideLogin()">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  // ============================================================
  // HELP & NAVIGATION MODAL
  // ============================================================
  renderHelpModal() {
    return `
      <div class="modal-overlay" id="help-overlay">
        <div class="modal-dialog-panel large">
          <div class="modal-header-line">
            <h3 class="modal-title">SITE GUIDE & ARCHITECTURE</h3>
            <button class="modal-close-btn" onclick="App.hideHelp()" aria-label="Close dialog">${Icons.close}</button>
          </div>
          <div class="modal-body-editorial">
            <div class="help-grid-editorial">
              <div class="help-box">
                <span class="help-idx">01</span>
                <h4 class="help-term">DESIGN SYSTEM</h4>
                <p class="help-desc">Inspired by Swiss typography, brutalist grids, and editorial poster layout. Strict monochrome palette with high typographic scale contrast.</p>
              </div>
              <div class="help-box">
                <span class="help-idx">02</span>
                <h4 class="help-term">WORK & CASE STUDIES</h4>
                <p class="help-desc">Click any project entry in the Selected Work index to inspect complete architectural details, technology dependencies, and repository links.</p>
              </div>
              <div class="help-box">
                <span class="help-idx">03</span>
                <h4 class="help-term">MONOCHROME THEME</h4>
                <p class="help-desc">Switch between light canvas mode and high-contrast dark mode via the theme toggle button in the header bar.</p>
              </div>
              <div class="help-box">
                <span class="help-idx">04</span>
                <h4 class="help-term">CONTENT INTEGRITY</h4>
                <p class="help-desc">All biographical data, academic records, project specifications, and leadership mandates are sourced directly from verified credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ============================================================
  // DETAIL OVERLAY SHELL
  // ============================================================
  renderDetailOverlay() {
    return `
      <div class="detail-backdrop-overlay" id="detail-overlay">
        <div class="detail-sheet-panel" id="detail-panel">
          <div id="detail-content"></div>
        </div>
      </div>
    `;
  }
};
