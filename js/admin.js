// ============================================================
// ADMIN PANEL — Login, CRUD, Edit all content
// ============================================================

const Admin = {
  _sessionKey: "joyelAdminSession",

  isLoggedIn() {
    return sessionStorage.getItem(this._sessionKey) === "true";
  },

  login(username, password) {
    if (username === AUTH.username && password === AUTH.password) {
      sessionStorage.setItem(this._sessionKey, "true");
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(this._sessionKey);
  },

  // ============================================================
  // Admin Bar
  // ============================================================
  renderAdminBar() {
    return `
      <div class="admin-bar" id="admin-bar">
        <div class="admin-bar-label">
          🔑 Admin Mode Active
        </div>
        <div class="admin-bar-actions">
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('profile')">Edit Profile</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('projects')">Projects</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('experience')">Experience</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('skills')">Skills</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('education')">Education</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('certificates')">Certificates</button>
          <button class="admin-bar-btn" onclick="Admin.openEditPanel('leadership')">Leadership</button>
          <button class="admin-bar-btn danger" onclick="Admin.handleLogout()">Logout</button>
        </div>
      </div>
    `;
  },

  renderEditOverlay() {
    return `
      <div class="admin-edit-overlay" id="admin-edit-overlay">
        <div class="admin-edit-panel">
          <div class="admin-edit-header">
            <h3 class="admin-edit-title" id="admin-edit-title">Edit</h3>
            <button class="side-panel-close" onclick="Admin.closeEditPanel()">✕</button>
          </div>
          <div class="admin-edit-body" id="admin-edit-body"></div>
          <div class="admin-edit-footer" id="admin-edit-footer"></div>
        </div>
      </div>
    `;
  },

  showAdminBar() {
    const bar = document.getElementById('admin-bar');
    if (bar) bar.classList.add('active');
    document.body.style.paddingTop = '44px';
    // Change login button text
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
      loginBtn.innerHTML = `${Icons.login} Admin Dashboard`;
      loginBtn.onclick = () => Admin.openEditPanel('profile');
    }
  },

  hideAdminBar() {
    const bar = document.getElementById('admin-bar');
    if (bar) bar.classList.remove('active');
    document.body.style.paddingTop = '0';
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
      loginBtn.innerHTML = `${Icons.login} Admin Login`;
      loginBtn.onclick = () => App.showLogin();
    }
  },

  handleLogout() {
    this.logout();
    this.hideAdminBar();
    this.closeEditPanel();
    App.closeSidePanel();
  },

  // ============================================================
  // Edit Panel System
  // ============================================================
  openEditPanel(section) {
    const overlay = document.getElementById('admin-edit-overlay');
    const title = document.getElementById('admin-edit-title');
    const body = document.getElementById('admin-edit-body');
    const footer = document.getElementById('admin-edit-footer');

    App.closeSidePanel();

    switch (section) {
      case 'profile': this._renderProfileEdit(title, body, footer); break;
      case 'projects': this._renderListEdit(title, body, footer, 'projects', 'Project'); break;
      case 'experience': this._renderListEdit(title, body, footer, 'experience', 'Experience'); break;
      case 'skills': this._renderSkillsEdit(title, body, footer); break;
      case 'education': this._renderListEdit(title, body, footer, 'education', 'Education'); break;
      case 'certificates': this._renderListEdit(title, body, footer, 'certificates', 'Certificate'); break;
      case 'leadership': this._renderListEdit(title, body, footer, 'leadership', 'Leadership Role'); break;
    }

    overlay.classList.add('active');
  },

  closeEditPanel() {
    document.getElementById('admin-edit-overlay')?.classList.remove('active');
  },

  // ============================================================
  // Profile Edit
  // ============================================================
  _renderProfileEdit(titleEl, bodyEl, footerEl) {
    const data = DataManager.getData();
    const p = data.profile;

    titleEl.textContent = 'Edit Profile';
    bodyEl.innerHTML = `
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-input" id="edit-name" value="${this._esc(p.name)}">
      </div>
      <div class="form-group">
        <label class="form-label">Title</label>
        <input type="text" class="form-input" id="edit-title" value="${this._esc(p.title)}">
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <input type="text" class="form-input" id="edit-location" value="${this._esc(p.location)}">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-input" id="edit-email" value="${this._esc(p.email)}">
      </div>
      <div class="form-group">
        <label class="form-label">GitHub URL</label>
        <input type="url" class="form-input" id="edit-github" value="${this._esc(p.github)}">
      </div>
      <div class="form-group">
        <label class="form-label">LinkedIn URL</label>
        <input type="url" class="form-input" id="edit-linkedin" value="${this._esc(p.linkedin)}">
      </div>
      <div class="form-group">
        <label class="form-label">Profile Photo URL</label>
        <input type="text" class="form-input" id="edit-photo" value="${this._esc(p.photo)}">
      </div>
      <div class="form-group">
        <label class="form-label">Intro Tagline</label>
        <input type="text" class="form-input" id="edit-tagline" value="${this._esc(p.introTagline)}">
      </div>
      <div class="form-group">
        <label class="form-label">About Me</label>
        <textarea class="form-textarea" id="edit-about" rows="6">${this._esc(p.about)}</textarea>
      </div>
    `;

    footerEl.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.closeEditPanel()">Cancel</button>
      <button class="btn btn-primary" onclick="Admin.saveProfile()">Save Changes</button>
    `;
  },

  saveProfile() {
    const data = DataManager.getData();
    data.profile.name = document.getElementById('edit-name').value;
    data.profile.title = document.getElementById('edit-title').value;
    data.profile.location = document.getElementById('edit-location').value;
    data.profile.email = document.getElementById('edit-email').value;
    data.profile.github = document.getElementById('edit-github').value;
    data.profile.linkedin = document.getElementById('edit-linkedin').value;
    data.profile.photo = document.getElementById('edit-photo').value;
    data.profile.introTagline = document.getElementById('edit-tagline').value;
    data.profile.about = document.getElementById('edit-about').value;
    DataManager.saveData(data);
    this.closeEditPanel();
    App.render();
  },

  // ============================================================
  // List Edit (Projects, Experience, Education, Certificates, Leadership)
  // ============================================================
  _renderListEdit(titleEl, bodyEl, footerEl, section, label) {
    const data = DataManager.getData();
    const items = data[section] || [];

    titleEl.textContent = `Manage ${label}s`;

    const getTitleField = (item) => {
      return item.title || item.degree || item.name || 'Untitled';
    };

    bodyEl.innerHTML = `
      <ul class="admin-item-list">
        ${items.map(item => `
          <li class="admin-item">
            <span class="admin-item-title">${this._esc(getTitleField(item))}</span>
            <div class="admin-item-actions">
              <button class="admin-icon-btn" onclick="Admin.editItem('${section}', '${item.id}')" title="Edit">${Icons.edit}</button>
              <button class="admin-icon-btn danger" onclick="Admin.deleteItem('${section}', '${item.id}', '${this._esc(getTitleField(item))}')" title="Delete">${Icons.delete}</button>
            </div>
          </li>
        `).join('')}
      </ul>
    `;

    footerEl.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.closeEditPanel()">Close</button>
      <button class="btn btn-primary" onclick="Admin.addItem('${section}', '${label}')">Add ${label}</button>
    `;
  },

  // ============================================================
  // Skills Edit
  // ============================================================
  _renderSkillsEdit(titleEl, bodyEl, footerEl) {
    const data = DataManager.getData();
    const skills = data.skills || [];

    titleEl.textContent = 'Manage Skills';

    bodyEl.innerHTML = `
      <ul class="admin-item-list">
        ${skills.map((s, i) => `
          <li class="admin-item">
            <span class="admin-item-title">${this._esc(s.name)} — ${s.level}% (${s.category})</span>
            <div class="admin-item-actions">
              <button class="admin-icon-btn" onclick="Admin.editSkill(${i})" title="Edit">${Icons.edit}</button>
              <button class="admin-icon-btn danger" onclick="Admin.deleteSkill(${i}, '${this._esc(s.name)}')" title="Delete">${Icons.delete}</button>
            </div>
          </li>
        `).join('')}
      </ul>
    `;

    footerEl.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.closeEditPanel()">Close</button>
      <button class="btn btn-primary" onclick="Admin.addSkill()">Add Skill</button>
    `;
  },

  addSkill() {
    const data = DataManager.getData();
    const overlay = document.getElementById('admin-edit-overlay');
    const title = document.getElementById('admin-edit-title');
    const body = document.getElementById('admin-edit-body');
    const footer = document.getElementById('admin-edit-footer');

    title.textContent = 'Add Skill';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Skill Name</label>
        <input type="text" class="form-input" id="edit-skill-name">
      </div>
      <div class="form-group">
        <label class="form-label">Level (0-100)</label>
        <input type="number" class="form-input" id="edit-skill-level" min="0" max="100" value="70">
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <input type="text" class="form-input" id="edit-skill-category" placeholder="e.g., Languages, Frameworks, Tools">
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.openEditPanel('skills')">Back</button>
      <button class="btn btn-primary" onclick="Admin.saveNewSkill()">Save</button>
    `;
  },

  saveNewSkill() {
    const data = DataManager.getData();
    data.skills.push({
      name: document.getElementById('edit-skill-name').value,
      level: parseInt(document.getElementById('edit-skill-level').value) || 70,
      category: document.getElementById('edit-skill-category').value
    });
    DataManager.saveData(data);
    App.render();
    this.openEditPanel('skills');
  },

  editSkill(index) {
    const data = DataManager.getData();
    const s = data.skills[index];

    const title = document.getElementById('admin-edit-title');
    const body = document.getElementById('admin-edit-body');
    const footer = document.getElementById('admin-edit-footer');

    title.textContent = 'Edit Skill';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Skill Name</label>
        <input type="text" class="form-input" id="edit-skill-name" value="${this._esc(s.name)}">
      </div>
      <div class="form-group">
        <label class="form-label">Level (0-100)</label>
        <input type="number" class="form-input" id="edit-skill-level" min="0" max="100" value="${s.level}">
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <input type="text" class="form-input" id="edit-skill-category" value="${this._esc(s.category)}">
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.openEditPanel('skills')">Back</button>
      <button class="btn btn-primary" onclick="Admin.saveEditedSkill(${index})">Save</button>
    `;
  },

  saveEditedSkill(index) {
    const data = DataManager.getData();
    data.skills[index] = {
      name: document.getElementById('edit-skill-name').value,
      level: parseInt(document.getElementById('edit-skill-level').value) || 70,
      category: document.getElementById('edit-skill-category').value
    };
    DataManager.saveData(data);
    App.render();
    this.openEditPanel('skills');
  },

  deleteSkill(index, name) {
    if (confirm(`Delete skill "${name}"?`)) {
      const data = DataManager.getData();
      data.skills.splice(index, 1);
      DataManager.saveData(data);
      App.render();
      this.openEditPanel('skills');
    }
  },

  // ============================================================
  // Generic Item Operations
  // ============================================================
  editItem(section, id) {
    const data = DataManager.getData();
    const item = data[section].find(i => i.id === id);
    if (!item) return;

    const title = document.getElementById('admin-edit-title');
    const body = document.getElementById('admin-edit-body');
    const footer = document.getElementById('admin-edit-footer');

    title.textContent = `Edit Item`;
    body.innerHTML = this._generateFormFields(section, item);
    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.openEditPanel('${section}')">Back</button>
      <button class="btn btn-primary" onclick="Admin.saveItem('${section}', '${id}')">Save</button>
    `;
  },

  addItem(section, label) {
    const title = document.getElementById('admin-edit-title');
    const body = document.getElementById('admin-edit-body');
    const footer = document.getElementById('admin-edit-footer');

    title.textContent = `Add ${label}`;
    body.innerHTML = this._generateFormFields(section, {});
    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="Admin.openEditPanel('${section}')">Back</button>
      <button class="btn btn-primary" onclick="Admin.saveNewItem('${section}')">Save</button>
    `;
  },

  saveItem(section, id) {
    const data = DataManager.getData();
    const idx = data[section].findIndex(i => i.id === id);
    if (idx === -1) return;

    data[section][idx] = { ...data[section][idx], ...this._collectFormData(section) };
    DataManager.saveData(data);
    App.render();
    this.openEditPanel(section);
  },

  saveNewItem(section) {
    const data = DataManager.getData();
    const newItem = { id: section.charAt(0) + Date.now(), ...this._collectFormData(section) };
    data[section].push(newItem);
    DataManager.saveData(data);
    App.render();
    this.openEditPanel(section);
  },

  deleteItem(section, id, name) {
    if (confirm(`Delete "${name}"?`)) {
      const data = DataManager.getData();
      data[section] = data[section].filter(i => i.id !== id);
      DataManager.saveData(data);
      App.render();
      this.openEditPanel(section);
    }
  },

  // ============================================================
  // Form Generators
  // ============================================================
  _generateFormFields(section, item) {
    const fields = this._getFieldsForSection(section);
    return fields.map(f => {
      const val = item[f.key] || (f.type === 'array' ? [] : '');
      if (f.type === 'textarea') {
        return `
          <div class="form-group">
            <label class="form-label">${f.label}</label>
            <textarea class="form-textarea" id="edit-${f.key}" rows="4">${this._esc(val)}</textarea>
          </div>
        `;
      } else if (f.type === 'array') {
        return `
          <div class="form-group">
            <label class="form-label">${f.label} (comma-separated)</label>
            <input type="text" class="form-input" id="edit-${f.key}" value="${Array.isArray(val) ? val.join(', ') : val}">
          </div>
        `;
      } else {
        return `
          <div class="form-group">
            <label class="form-label">${f.label}</label>
            <input type="${f.type || 'text'}" class="form-input" id="edit-${f.key}" value="${this._esc(val)}">
          </div>
        `;
      }
    }).join('');
  },

  _getFieldsForSection(section) {
    const fieldMap = {
      projects: [
        { key: 'title', label: 'Title' },
        { key: 'shortDesc', label: 'Short Description' },
        { key: 'description', label: 'Full Description', type: 'textarea' },
        { key: 'technologies', label: 'Technologies', type: 'array' },
        { key: 'skillsAchieved', label: 'Skills Achieved', type: 'array' },
        { key: 'collaborators', label: 'Collaborators', type: 'array' },
        { key: 'coverColor', label: 'Cover Color (hex)' },
      ],
      experience: [
        { key: 'title', label: 'Job Title' },
        { key: 'company', label: 'Company' },
        { key: 'year', label: 'Year' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'technologies', label: 'Technologies/Tools', type: 'array' },
        { key: 'skillsAchieved', label: 'Skills Achieved', type: 'array' },
      ],
      education: [
        { key: 'institution', label: 'Institution' },
        { key: 'degree', label: 'Degree' },
        { key: 'year', label: 'Year' },
        { key: 'details', label: 'Details' },
        { key: 'achievements', label: 'Achievements', type: 'array' },
      ],
      certificates: [
        { key: 'title', label: 'Title' },
        { key: 'issuer', label: 'Issuer' },
        { key: 'year', label: 'Year' },
        { key: 'description', label: 'Description', type: 'textarea' },
      ],
      leadership: [
        { key: 'title', label: 'Title' },
        { key: 'year', label: 'Year' },
        { key: 'description', label: 'Description', type: 'textarea' },
      ]
    };
    return fieldMap[section] || [];
  },

  _collectFormData(section) {
    const fields = this._getFieldsForSection(section);
    const result = {};
    fields.forEach(f => {
      const el = document.getElementById(`edit-${f.key}`);
      if (!el) return;
      if (f.type === 'array') {
        result[f.key] = el.value.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        result[f.key] = el.value;
      }
    });
    return result;
  },

  _esc(str) {
    if (typeof str !== 'string') return str || '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
};
