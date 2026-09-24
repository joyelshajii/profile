// ============================================================
// MAIN APP — Swiss Editorial Interactions, Cursor, Navigation
// ============================================================

const App = {
  init() {
    ThemeManager.init();
    this.render();
    this._bindEvents();
    this._initCursor();
    this._setupScrollObserver();

    // Check if admin is logged in
    if (Admin.isLoggedIn()) {
      Admin.showAdminBar();
    }
  },

  // ============================================================
  // RENDER APP
  // ============================================================
  render() {
    const data = DataManager.getData();

    document.getElementById('app').innerHTML = `
      ${Components.renderHeader(data.profile)}
      ${Components.renderHero(data.profile)}
      ${Components.renderMenuBar()}
      <main class="main-content" id="main-content">
        ${Components.renderAbout(data.profile)}
        ${Components.renderProjects(data.projects)}
        ${Components.renderExperience(data.experience)}
        ${Components.renderSkills(data.skills)}
        ${Components.renderEducationAndCertificates(data.education, data.certificates)}
        ${Components.renderLeadership(data.leadership)}
        ${Components.renderContact(data.profile)}
      </main>
      ${Components.renderFooter(data.profile)}
      ${Components.renderSidePanel()}
      ${Components.renderDetailOverlay()}
      ${Components.renderLoginModal()}
      ${Components.renderHelpModal()}
      ${Admin.renderAdminBar()}
      ${Admin.renderEditOverlay()}
    `;

    // Re-bind scroll observer and theme icon
    this._setupScrollObserver();

    if (Admin.isLoggedIn()) {
      Admin.showAdminBar();
    }
  },

  // ============================================================
  // MINIMAL CUSTOM CURSOR
  // ============================================================
  _initCursor() {
    // Only enable custom cursor if fine pointer (desktop mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Smooth animation loop for ring
    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(renderRing);
    };
    requestAnimationFrame(renderRing);

    // Expand cursor on interactive elements
    const interactiveSelectors = 'a, button, [onclick], .project-row, .experience-entry, input, .btn-circular';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  },

  // ============================================================
  // EVENT BINDINGS
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

    // Ticker item click navigation
    document.addEventListener('click', (e) => {
      const tickerItem = e.target.closest('.ticker-item');
      if (tickerItem) {
        const section = tickerItem.dataset.section;
        if (section) this.navigateTo(section);
      }
    });

    // Header smooth anchor jump
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          const targetId = href.replace('#', '');
          this.navigateTo(targetId);
        }
      }
    });

    // Modal background close
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

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDetail();
        this.hideHelp();
        this.hideLogin();
        this.closeSidePanel();
        Admin.closeEditPanel();
      }
    });

    // Sticky header border on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('site-header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    }, { passive: true });
  },

  // ============================================================
  // SCROLL OBSERVER
  // ============================================================
  _setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.editorial-section, .hero-section').forEach(s => observer.observe(s));
  },

  // ============================================================
  // NAVIGATION
  // ============================================================
  navigateTo(target) {
    this.closeSidePanel();
    let el = document.getElementById(target);
    if (!el && !target.startsWith('section-')) {
      el = document.getElementById(`section-${target}`);
    }
    if (el) {
      const headerOffset = document.getElementById('site-header')?.offsetHeight || 64;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  },

  // ============================================================
  // SIDE PANEL DRAWER
  // ============================================================
  toggleSidePanel() {
    const panel = document.getElementById('side-panel');
    const overlay = document.getElementById('side-panel-overlay');
    panel?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('drawer-open');
  },

  closeSidePanel() {
    document.getElementById('side-panel')?.classList.remove('active');
    document.getElementById('side-panel-overlay')?.classList.remove('active');
    document.body.classList.remove('drawer-open');
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
  // LOGIN MODAL
  // ============================================================
  showLogin() {
    this.closeSidePanel();
    document.getElementById('login-overlay')?.classList.add('active');
    setTimeout(() => document.getElementById('login-username')?.focus(), 120);
  },

  hideLogin() {
    document.getElementById('login-overlay')?.classList.remove('active');
    const err = document.getElementById('login-error');
    if (err) err.style.display = 'none';
  },

  handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username')?.value;
    const password = document.getElementById('login-password')?.value;

    if (Admin.login(username, password)) {
      this.hideLogin();
      Admin.showAdminBar();
    } else {
      const err = document.getElementById('login-error');
      if (err) err.style.display = 'block';
    }
    return false;
  },

  // ============================================================
  // HELP MODAL
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
