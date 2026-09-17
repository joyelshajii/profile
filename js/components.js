// ============================================================
// COMPONENTS — Renders all sections, cards, and detail views
// ============================================================

const Icons = {
  projects: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  experience: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  skills: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  education: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg>`,
  certificates: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  leadership: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  contact: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  help: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  login: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  edit: `✏️`,
  delete: `🗑️`,
  add: `➕`,
  scroll: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`
};

const Components = {
  // ============================================================
  // HERO
  // ============================================================
  renderHero(profile) {
    return `
      <section class="hero" id="hero">
        <img src="${profile.photo}" alt="${profile.name}" class="hero-photo" id="hero-photo" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 160 160%22><rect fill=%22%2310b981%22 width=%22160%22 height=%22160%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22white%22 font-family=%22Inter,sans-serif%22>${profile.name.split(" ").map(n => n[0]).join("")}</text></svg>'"/>
        <h1 class="hero-name">${profile.name}</h1>
        <p class="hero-title">${profile.title}</p>
        <p class="hero-tagline">${profile.introTagline}</p>
        <div class="hero-social">
          <a href="mailto:${profile.email}" aria-label="Email" title="Email">${Icons.email}</a>
          <a href="${profile.github}" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${Icons.github}</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${Icons.linkedin}</a>
        </div>
        <div class="hero-scroll-indicator">
          <span>Scroll</span>
          ${Icons.scroll}
        </div>
      </section>
    `;
  },

  // ============================================================
  // INFINITE MENU BAR
  // ============================================================
  renderMenuBar() {
    const items = [
      { id: 'about', label: 'About', icon: Icons.contact },
      { id: 'projects', label: 'Projects', icon: Icons.projects },
      { id: 'experience', label: 'Experience', icon: Icons.experience },
      { id: 'skills', label: 'Skills', icon: Icons.skills },
      { id: 'education', label: 'Education', icon: Icons.education },
      { id: 'certificates', label: 'Certificates', icon: Icons.certificates },
      { id: 'leadership', label: 'Leadership', icon: Icons.leadership },
    ];

    const itemsHtml = items.map(item =>
      `<div class="menu-bar-item" data-section="${item.id}">${item.icon} ${item.label}</div>`
    ).join('');

    // Repeat items multiple times for infinite feel
    const repeated = itemsHtml.repeat(5);

    return `
      <div class="menu-bar-wrapper" id="menu-bar">
        <div class="menu-bar">
          <div class="menu-bar-track">${repeated}</div>
        </div>
      </div>
    `;
  },

  // ============================================================
  // ABOUT SECTION
  // ============================================================
  renderAbout(profile) {
    return `
      <section class="section" id="section-about">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-content">
          <p>${profile.about}</p>
        </div>
      </section>
    `;
  },

  // ============================================================
  // PROJECTS
  // ============================================================
  renderProjects(projects) {
    const cards = projects.map(p => `
      <div class="card" data-type="project" data-id="${p.id}" onclick="App.openDetail('project', '${p.id}')">
        <div class="card-cover" style="background: ${p.coverColor || 'var(--accent-gradient)'};">
          ${p.title.split('—')[0]?.trim().split(' ').map(w => w[0]).join('') || 'P'}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.shortDesc}</p>
        <div class="card-tags">
          ${p.technologies.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-arrow">${Icons.arrow}</div>
      </div>
    `).join('');

    return `
      <section class="section" id="section-projects">
        <div class="section-header">
          <h2 class="section-title">Projects</h2>
          <div class="section-line"></div>
        </div>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  },

  // ============================================================
  // EXPERIENCE
  // ============================================================
  renderExperience(experience) {
    const cards = experience.map(e => `
      <div class="card exp-card" data-type="experience" data-id="${e.id}" onclick="App.openDetail('experience', '${e.id}')">
        <p class="card-year">${e.year}</p>
        <h3 class="card-title">${e.title}</h3>
        <p class="card-subtitle">${e.company}</p>
        <p class="card-desc">${e.description}</p>
        <div class="card-tags">
          ${e.technologies.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-arrow">${Icons.arrow}</div>
      </div>
    `).join('');

    return `
      <section class="section" id="section-experience">
        <div class="section-header">
          <h2 class="section-title">Experience</h2>
          <div class="section-line"></div>
        </div>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  },

  // ============================================================
  // SKILLS — Interactive & Graphical
  // ============================================================
  renderSkills(skills) {
    // Group by category
    const groups = {};
    skills.forEach(s => {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    });

    // Render skill bubbles
    const bubbles = skills.map(s => {
      const size = 40 + (s.level * 0.6);
      return `<div class="skill-bubble" style="width:${size}px;height:${size}px;font-size:${Math.max(9, size / 6)}px;" title="${s.name}: ${s.level}%">${s.name.split(' ')[0]}</div>`;
    }).join('');

    // Render category cards with bars
    const categories = Object.entries(groups).map(([cat, items]) => `
      <div class="skill-category">
        <h3 class="skill-category-title">${cat}</h3>
        ${items.map(s => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${s.name}</span>
              <span class="skill-level">${s.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" data-level="${s.level}" style="width: 0%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');

    return `
      <section class="section" id="section-skills">
        <div class="section-header">
          <h2 class="section-title">Skills</h2>
          <div class="section-line"></div>
        </div>
        <div class="skill-bubbles">${bubbles}</div>
        <div class="skills-container">${categories}</div>
      </section>
    `;
  },

  // ============================================================
  // EDUCATION — Timeline
  // ============================================================
  renderEducation(education) {
    const items = education.map(ed => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <p class="timeline-year">${ed.year}</p>
        <h3 class="timeline-title">${ed.degree}</h3>
        <p class="timeline-institution">${ed.institution}</p>
        <p class="timeline-details">${ed.details}</p>
        ${ed.achievements.map(a => `
          <div class="timeline-achievement">
            <span>🏆</span> ${a}
          </div>
        `).join('')}
      </div>
    `).join('');

    return `
      <section class="section" id="section-education">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <div class="section-line"></div>
        </div>
        <div class="timeline">${items}</div>
      </section>
    `;
  },

  // ============================================================
  // CERTIFICATES
  // ============================================================
  renderCertificates(certificates) {
    const cards = certificates.map(c => `
      <div class="cert-card">
        <div class="cert-icon">${Icons.certificates}</div>
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        <p class="cert-year">${c.year}</p>
        <p class="cert-desc">${c.description}</p>
      </div>
    `).join('');

    return `
      <section class="section" id="section-certificates">
        <div class="section-header">
          <h2 class="section-title">Certificates & Achievements</h2>
          <div class="section-line"></div>
        </div>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  },

  // ============================================================
  // LEADERSHIP
  // ============================================================
  renderLeadership(leadership) {
    const cards = leadership.map(l => `
      <div class="leadership-card">
        <h3 class="leadership-title">${l.title}</h3>
        <p class="leadership-year">${l.year}</p>
        <p class="leadership-desc">${l.description}</p>
      </div>
    `).join('');

    return `
      <section class="section" id="section-leadership">
        <div class="section-header">
          <h2 class="section-title">Leadership & Involvement</h2>
          <div class="section-line"></div>
        </div>
        <div class="leadership-grid">${cards}</div>
      </section>
    `;
  },

  // ============================================================
  // FOOTER
  // ============================================================
  renderFooter(profile) {
    return `
      <footer class="footer" id="section-contact">
        <h3 class="footer-name">${profile.name}</h3>
        <p class="footer-tagline">${profile.introTagline}</p>
        <div class="footer-links">
          <a href="mailto:${profile.email}" class="footer-link">${Icons.email} ${profile.email}</a>
          <a href="${profile.github}" target="_blank" class="footer-link">${Icons.github} GitHub</a>
          <a href="${profile.linkedin}" target="_blank" class="footer-link">${Icons.linkedin} LinkedIn</a>
        </div>
        <p class="footer-copy">© ${new Date().getFullYear()} ${profile.name}. All rights reserved.</p>
      </footer>
    `;
  },

  // ============================================================
  // DETAIL VIEW
  // ============================================================
  renderProjectDetail(project) {
    return `
      <div class="detail-cover" style="background: ${project.coverColor || 'var(--accent-gradient)'};">
        ${project.title.split('—')[0]?.trim() || project.title}
      </div>
      <div class="detail-body">
        <h2 class="detail-title">${project.title}</h2>
        <p class="detail-description">${project.description}</p>

        <h4 class="detail-section-title">Technologies Used</h4>
        <div class="detail-tags">
          ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <h4 class="detail-section-title">Skills Achieved</h4>
        <div class="detail-tags">
          ${project.skillsAchieved.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>

        ${project.collaborators && project.collaborators.length > 0 ? `
          <h4 class="detail-section-title">Collaborators</h4>
          <div class="detail-tags">
            ${project.collaborators.map(c => `<span class="tag">${c}</span>`).join('')}
          </div>
        ` : ''}

        ${project.links && Object.keys(project.links).length > 0 ? `
          <h4 class="detail-section-title">Links</h4>
          <div>
            ${Object.entries(project.links).map(([name, url]) =>
      `<a href="${url}" target="_blank" class="detail-link">${Icons[name] || ''} ${name.charAt(0).toUpperCase() + name.slice(1)}</a>`
    ).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderExperienceDetail(exp) {
    return `
      <div class="detail-cover" style="background: var(--accent-gradient);">
        ${exp.title}
      </div>
      <div class="detail-body">
        <h2 class="detail-title">${exp.title}</h2>
        <p class="detail-subtitle">${exp.company} · ${exp.year}</p>
        <p class="detail-description">${exp.description}</p>

        <h4 class="detail-section-title">Technologies & Tools</h4>
        <div class="detail-tags">
          ${exp.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <h4 class="detail-section-title">Skills Achieved</h4>
        <div class="detail-tags">
          ${exp.skillsAchieved.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>

        ${exp.links && Object.keys(exp.links).length > 0 ? `
          <h4 class="detail-section-title">Links</h4>
          <div>
            ${Object.entries(exp.links).map(([name, url]) =>
      `<a href="${url}" target="_blank" class="detail-link">${name.charAt(0).toUpperCase() + name.slice(1)}</a>`
    ).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  // ============================================================
  // SIDE PANEL
  // ============================================================
  renderSidePanel() {
    const navItems = [
      { id: 'about', label: 'About Me', icon: Icons.contact },
      { id: 'projects', label: 'Projects', icon: Icons.projects },
      { id: 'experience', label: 'Experience', icon: Icons.experience },
      { id: 'skills', label: 'Skills', icon: Icons.skills },
      { id: 'education', label: 'Education', icon: Icons.education },
      { id: 'certificates', label: 'Certificates', icon: Icons.certificates },
      { id: 'leadership', label: 'Leadership', icon: Icons.leadership },
      { id: 'contact', label: 'Contact', icon: Icons.email },
    ];

    return `
      <div class="side-panel-overlay" id="side-panel-overlay"></div>
      <aside class="side-panel" id="side-panel">
        <div class="side-panel-header">
          <span class="side-panel-title">Navigation</span>
          <button class="side-panel-close" id="side-panel-close-btn" aria-label="Close menu">✕</button>
        </div>
        <div class="side-panel-body">
          ${navItems.map(item => `
            <div class="side-panel-nav-item" data-nav="${item.id}" onclick="App.navigateTo('${item.id}')">
              ${item.icon} ${item.label}
            </div>
          `).join('')}

          <hr class="side-panel-divider">

          <div class="side-panel-nav-item" onclick="App.showHelp()">
            ${Icons.help} Help & Guide
          </div>

          <hr class="side-panel-divider">

          <button class="side-panel-login-btn" id="login-btn" onclick="App.showLogin()">
            ${Icons.login} Admin Login
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
      <div class="login-overlay" id="login-overlay">
        <div class="login-card">
          <h2 class="login-title">Admin Login</h2>
          <form id="login-form" onsubmit="return App.handleLogin(event)">
            <div class="form-group">
              <label class="form-label" for="login-username">Username</label>
              <input type="text" id="login-username" class="form-input" placeholder="Enter username" autocomplete="username">
            </div>
            <div class="form-group">
              <label class="form-label" for="login-password">Password</label>
              <input type="password" id="login-password" class="form-input" placeholder="Enter password" autocomplete="current-password">
              <p class="form-error" id="login-error">Invalid username or password</p>
            </div>
            <button type="submit" class="login-btn">Login</button>
            <button type="button" class="login-cancel" onclick="App.hideLogin()">Cancel</button>
          </form>
        </div>
      </div>
    `;
  },

  // ============================================================
  // HELP PANEL
  // ============================================================
  renderHelpModal() {
    return `
      <div class="detail-overlay" id="help-overlay">
        <div class="detail-panel" style="position:relative;">
          <button class="detail-close" onclick="App.hideHelp()">✕</button>
          <div class="detail-body">
            <h2 class="detail-title" style="margin-bottom: 1.5rem;">How to Navigate This Site</h2>
            <div class="help-content">
              <div class="help-section">
                <h3 class="help-section-title">🏠 Homepage</h3>
                <p class="help-text">The homepage displays an introduction with a profile photo, name, and tagline. Scroll down to discover more sections.</p>
              </div>
              <div class="help-section">
                <h3 class="help-section-title">📌 Menu Bar</h3>
                <p class="help-text">The horizontal scrolling bar below the hero section provides quick navigation. It scrolls infinitely — hover to pause, click any item to jump to that section.</p>
              </div>
              <div class="help-section">
                <h3 class="help-section-title">📂 Sections</h3>
                <ul class="help-list">
                  <li><strong>Projects</strong> — Click any project card to see full details including technologies, skills, and links.</li>
                  <li><strong>Experience</strong> — Click any experience card to view the complete job description and achievements.</li>
                  <li><strong>Skills</strong> — Interactive skill bars and bubbles showing proficiency levels across categories.</li>
                  <li><strong>Education</strong> — Academic timeline with achievements and grades.</li>
                  <li><strong>Certificates</strong> — Awards and certifications displayed as cards.</li>
                  <li><strong>Leadership</strong> — Campus involvement and leadership roles.</li>
                </ul>
              </div>
              <div class="help-section">
                <h3 class="help-section-title">🌗 Theme Toggle</h3>
                <p class="help-text">Click the sun/moon icon in the top-left corner to switch between dark and light modes. Your preference is saved automatically.</p>
              </div>
              <div class="help-section">
                <h3 class="help-section-title">☰ Side Menu</h3>
                <p class="help-text">Click the menu icon in the top-right corner to open the navigation panel. Use it to jump to any section, access help, or login as admin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ============================================================
  // DETAIL OVERLAY
  // ============================================================
  renderDetailOverlay() {
    return `
      <div class="detail-overlay" id="detail-overlay">
        <div class="detail-panel" style="position:relative;">
          <button class="detail-close" onclick="App.closeDetail()">✕</button>
          <div id="detail-content"></div>
        </div>
      </div>
    `;
  }
};
