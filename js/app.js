// ============================================================
// MAIN APP — Initialization, routing, scroll, interactions
// ============================================================

const App = {
  init() {
    ThemeManager.init();
    this.render();
    this._bindEvents();
    this._setupScrollObserver();

    // Check if admin is logged in
    if (Admin.isLoggedIn()) {
      Admin.showAdminBar();
    }
  },

  // ============================================================
  // RENDER ALL
  // ============================================================
  render() {
    const data = DataManager.getData();

    document.getElementById('app').innerHTML = `
      ${Components.renderHero(data.profile)}
      ${Components.renderMenuBar()}
      <main class="main-content">
        ${Components.renderAbout(data.profile)}
        ${Components.renderProjects(data.projects)}
        ${Components.renderExperience(data.experience)}
        ${Components.renderSkills(data.skills)}
        ${Components.renderEducation(data.education)}
        ${Components.renderCertificates(data.certificates)}
        ${Components.renderLeadership(data.leadership)}
      </main>
      ${Components.renderFooter(data.profile)}
      ${Components.renderSidePanel()}
      ${Components.renderDetailOverlay()}
      ${Components.renderLoginModal()}
      ${Components.renderHelpModal()}
      ${Admin.renderAdminBar()}
      ${Admin.renderEditOverlay()}
    `;

    // Re-setup after render
    this._setupScrollObserver();
    this._animateSkillBars();

    if (Admin.isLoggedIn()) {
      Admin.showAdminBar();
    }
  },

  // ============================================================
  // EVENTS
  // ============================================================
  _bindEvents() {
    // Side panel toggle
    document.addEventListener('click', (e) => {
      if (e.target.closest('#side-panel-toggle')) {
        this.toggleSidePanel();
      }
      if (e.target.closest('#side-panel-close-btn') || e.target.closest('#side-panel-overlay')) {
        this.closeSidePanel();
      }
    });

    // Menu bar item click
    document.addEventListener('click', (e) => {
      const item = e.target.closest('.menu-bar-item');
      if (item) {
        const section = item.dataset.section;
        this.navigateTo(section);
      }
    });

    // Detail overlay close on background click
    document.addEventListener('click', (e) => {
      if (e.target.id === 'detail-overlay') {
        this.closeDetail();
      }
      if (e.target.id === 'help-overlay') {
        this.hideHelp();
      }
      if (e.target.id === 'login-overlay') {
        this.hideLogin();
      }
      if (e.target.id === 'admin-edit-overlay') {
        Admin.closeEditPanel();
      }
    });

    // Keyboard: Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDetail();
        this.hideHelp();
        this.hideLogin();
        this.closeSidePanel();
        Admin.closeEditPanel();
      }
    });

    // Menu bar scroll shadow
    window.addEventListener('scroll', () => {
      const menuBar = document.getElementById('menu-bar');
      if (menuBar) {
        if (window.scrollY > 50) {
          menuBar.classList.add('scrolled');
        } else {
          menuBar.classList.remove('scrolled');
        }
      }
    });
  },

  // ============================================================
  // SCROLL OBSERVER — Animate sections on scroll
  // ============================================================
  _setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate skill bars when skills section is visible
          if (entry.target.id === 'section-skills') {
            this._animateSkillBars();
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));
  },

  _animateSkillBars() {
    setTimeout(() => {
      document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = level + '%';
      });
    }, 300);
  },

  // ============================================================
  // NAVIGATION
  // ============================================================
  navigateTo(sectionId) {
    this.closeSidePanel();
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      const offset = document.getElementById('menu-bar')?.offsetHeight || 50;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 10;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  },

  // ============================================================
  // SIDE PANEL
  // ============================================================
  toggleSidePanel() {
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('side-panel-overlay');
    panel?.classList.toggle('active');
    overlay?.classList.toggle('active');
  },

  closeSidePanel() {
    document.getElementById('side-panel')?.classList.remove('active');
    document.getElementById('side-panel-overlay')?.classList.remove('active');
  },

  // ============================================================
  // DETAIL VIEW
  // ============================================================
  openDetail(type, id) {
    const data = DataManager.getData();
    const overlay = document.getElementById('detail-overlay');
    const content = document.getElementById('detail-content');

    let html = '';
    if (type === 'project') {
      const item = data.projects.find(p => p.id === id);
      if (item) html = Components.renderProjectDetail(item);
    } else if (type === 'experience') {
      const item = data.experience.find(e => e.id === id);
      if (item) html = Components.renderExperienceDetail(item);
    }

    if (html && content && overlay) {
      content.innerHTML = html;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  closeDetail() {
    document.getElementById('detail-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  },

  // ============================================================
  // LOGIN
  // ============================================================
  showLogin() {
    this.closeSidePanel();
    document.getElementById('login-overlay')?.classList.add('active');
    setTimeout(() => document.getElementById('login-username')?.focus(), 100);
  },

  hideLogin() {
    document.getElementById('login-overlay')?.classList.remove('active');
    document.getElementById('login-error').style.display = 'none';
  },

  handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (Admin.login(username, password)) {
      this.hideLogin();
      Admin.showAdminBar();
    } else {
      document.getElementById('login-error').style.display = 'block';
    }
    return false;
  },

  // ============================================================
  // HELP
  // ============================================================
  showHelp() {
    this.closeSidePanel();
    document.getElementById('help-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  hideHelp() {
    document.getElementById('help-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => App.init());
