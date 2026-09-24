// ============================================================
// DATA STORE — All resume data + localStorage persistence
// ============================================================

const DEFAULT_DATA = {
  profile: {
    name: "Joyel Shaji",
    title: "Computer Science Engineering Student | Aspiring Product Manager",
    location: "Wayanad, Kerala, India",
    email: "joyelshajim@gmail.com",
    github: "https://github.com/joyelshajii",
    linkedin: "https://linkedin.com/in/joyelshaji",
    photo: "assets/joyel-hero.jpg",
    aboutPhoto: "assets/joyel-about.jpg",
    outdoorPhoto: "assets/joyel-outdoor.jpg",
    benchPhoto: "assets/joyel-bench.jpg",
    techPhoto: "assets/joyel-tech.jpg",
    about: `I'm Joyel Shaji, a passionate Computer Science Engineering student at Amal Jyothi College of Engineering with a consistent record of academic excellence — including a perfect 10.0 SGPA in my third semester and placement on the Manager's Honors List every semester. I thrive at the intersection of technology, product thinking, and community leadership. From founding a music institution at 17 to leading the AI Club at my college and coordinating logistics for the NASA Space Apps Hackathon with 2500+ participants, I bring both technical depth and organizational vision to everything I do. I'm driven by a desire to build meaningful products, lead high-impact teams, and create technology that solves real problems.`,
    introTagline: "Building meaningful products at the intersection of technology, leadership & creativity."
  },

  projects: [
    {
      id: "p1",
      title: "CampusPath — Campus Navigation System",
      shortDesc: "A backend system to help users locate faculty members and event venues on campus.",
      description: "CampusPath is a comprehensive campus navigation system developed to streamline the process of locating faculty members and finding event venues across the campus. The system features an optimized SQLite database architecture to manage dynamic location coordinates and real-time scheduling data, along with role-based access control for different user types including students, faculty, coordinators, HODs, and administrators.",
      technologies: ["Node.js", "SQLite", "Express.js", "JavaScript", "HTML5", "CSS3"],
      skillsAchieved: ["Backend Development", "Database Design", "REST API Development", "Role-Based Access Control", "Full-Stack Architecture"],
      collaborators: [],
      links: { github: "https://github.com/joyelshajii" },
      documents: [],
      coverColor: "#0d9e6e"
    },
    {
      id: "p2",
      title: "CropStack — Decentralized Crop Marketplace",
      shortDesc: "A decentralized marketplace for crop storage with real-time IoT-based monitoring.",
      description: "CropStack is an innovative decentralized marketplace designed to revolutionize crop storage management. The platform leverages Firebase for real-time data synchronization and integrates ESP32 IoT sensors to continuously monitor critical storage parameters such as temperature, humidity, and air quality. Built with Next.js and TypeScript for a robust, type-safe frontend experience, CropStack connects farmers directly with storage providers, cutting out middlemen and ensuring produce quality.",
      technologies: ["Next.js", "TypeScript", "Firebase", "IoT", "ESP32"],
      skillsAchieved: ["Full-Stack Web Development", "IoT Integration", "Real-Time Data Sync", "TypeScript", "Firebase Architecture"],
      collaborators: [],
      links: { github: "https://github.com/joyelshajii" },
      documents: [],
      coverColor: "#10b981"
    },
    {
      id: "p3",
      title: "Wild Animal Detection System (WADS)",
      shortDesc: "A camera-based detection system for identifying wild animals near forest-border areas.",
      description: "WADS (Wild Animal Detection System) is an innovative safety solution developed for the YIP 8.0 Hackathon. The system uses camera-based detection technology to identify wild animals approaching forest-border human settlements. Upon detection, it triggers a multi-channel alert system including automated SMS notifications, audible warning alarms, and real-time dashboard alerts to nearby forest offices, enabling rapid response to prevent human-wildlife conflict.",
      technologies: ["Python", "Computer Vision", "IoT", "SMS API"],
      skillsAchieved: ["Computer Vision", "IoT Systems", "Alert System Design", "Hackathon Development"],
      collaborators: [],
      links: {},
      documents: [],
      coverColor: "#059669"
    },
    {
      id: "p4",
      title: "Stedilyf — Earthquake Protection for Dialysis Machines",
      shortDesc: "A safety system to detect seismic activity and stabilize dialysis equipment.",
      description: "Stedilyf is a life-saving innovation designed to protect patients undergoing dialysis during seismic events. The system employs advanced sensors to detect seismic activity in real-time and activates stabilization mechanisms to secure dialysis equipment, preventing dangerous disconnections or spills. This project addresses a critical gap in healthcare safety infrastructure, particularly in earthquake-prone regions where patients on life-support equipment are most vulnerable.",
      technologies: ["IoT", "Sensors", "Embedded Systems"],
      skillsAchieved: ["IoT Development", "Sensor Integration", "Healthcare Technology", "Emergency Systems Design"],
      collaborators: [],
      links: {},
      documents: [],
      coverColor: "#047857"
    },
    {
      id: "p5",
      title: "Stock Management System",
      shortDesc: "A desktop application for inventory management using Java Swing and OOP.",
      description: "A robust desktop application for comprehensive inventory and stock management, built using Java Swing with object-oriented programming principles at its core. The system features an intuitive graphical interface for managing product records, tracking inventory levels, and generating reports. Performance was a key focus — optimized data structures were implemented to ensure rapid product record retrieval even with large datasets.",
      technologies: ["Java", "Swing", "Data Structures", "OOP"],
      skillsAchieved: ["Java Development", "GUI Programming", "Data Structures", "Object-Oriented Design"],
      collaborators: [],
      links: { github: "https://github.com/joyelshajii" },
      documents: [],
      coverColor: "#065f46"
    }
  ],

  experience: [
    {
      id: "e1",
      title: "Internship Coordinator",
      company: "JnS Global — Abroad Education Consultancy",
      year: "2025 — 2026",
      description: "Coordinating comprehensive internship programs including application tracking, placement logistics, and partner communication. Managing end-to-end internship workflows and assisting students through structured onboarding processes. Acting as the primary liaison between the consultancy and its international education partners to ensure seamless program delivery.",
      technologies: ["Project Management", "Communication", "Workflow Management"],
      skillsAchieved: ["Program Coordination", "Stakeholder Management", "Logistics Planning", "Student Mentorship"],
      links: {},
      documents: []
    },
    {
      id: "e2",
      title: "Social Media Marketing Manager",
      company: "JnS Global — Abroad Education Consultancy",
      year: "2024 — 2025",
      description: "Managed the complete social media strategy and digital branding initiatives for the consultancy. Designed and executed promotional campaigns across multiple platforms to improve engagement metrics, expand online reach, and build brand awareness among prospective students seeking international education opportunities.",
      technologies: ["Social Media Marketing", "Digital Branding", "Content Strategy", "Analytics"],
      skillsAchieved: ["Digital Marketing", "Brand Strategy", "Campaign Management", "Analytics & Reporting"],
      links: {},
      documents: []
    },
    {
      id: "e3",
      title: "Graphic Design Intern",
      company: "PrintBot (Kasperob) — 3D Printing Startup",
      year: "2024 — 2025",
      description: "Designed digital marketing assets and visual branding materials for an innovative 3D printing services startup. Created compelling visual content for social media platforms and assisted in the strategic planning and execution of promotional campaigns to drive brand visibility and customer engagement.",
      technologies: ["Adobe Photoshop", "Figma", "Digital Marketing", "Visual Design"],
      skillsAchieved: ["Graphic Design", "Visual Branding", "Marketing Campaigns", "Content Creation"],
      links: {},
      documents: []
    }
  ],

  skills: [
    { name: "JavaScript", level: 85, category: "Languages" },
    { name: "Python", level: 65, category: "Languages" },
    { name: "Java", level: 80, category: "Languages" },
    { name: "C", level: 88, category: "Languages" },
    { name: "SQL", level: 89, category: "Languages" },
    { name: "HTML5", level: 90, category: "Languages" },
    { name: "CSS3", level: 90, category: "Languages" },
    { name: "Node.js", level: 82, category: "Frameworks & Runtime" },
    { name: "Next.js", level: 75, category: "Frameworks & Runtime" },
    { name: "TypeScript", level: 70, category: "Frameworks & Runtime" },
    { name: "SQLite", level: 80, category: "Databases & Data" },
    { name: "MySQL", level: 75, category: "Databases & Data" },
    { name: "Oracle DB", level: 90, category: "Databases & Data" },
    { name: "Firebase", level: 75, category: "Databases & Data" },
    { name: "Talend Open Studio", level: 60, category: "Databases & Data" },
    { name: "Git & GitHub", level: 85, category: "Tools & Platforms" },
    { name: "Figma", level: 85, category: "Tools & Platforms" },
    { name: "Adobe Photoshop", level: 85, category: "Tools & Platforms" },
    { name: "Cloudflare", level: 65, category: "Tools & Platforms" },
    { name: "MS Office", level: 88, category: "Tools & Platforms" },
    { name: "Data Structures", level: 82, category: "Core Concepts" },
    { name: "Operating Systems", level: 75, category: "Core Concepts" },
    { name: "Theory of Computation", level: 90, category: "Core Concepts" },
    { name: "Graph Theory", level: 90, category: "Core Concepts" },
    { name: "Product Management", level: 78, category: "Soft Skills" },
    { name: "Marketing Strategy", level: 80, category: "Soft Skills" },
    { name: "Event Coordination", level: 85, category: "Soft Skills" },
    { name: "Team Leadership", level: 88, category: "Soft Skills" }
  ],

  education: [
    {
      id: "ed1",
      institution: "Amal Jyothi College of Engineering",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2024 — 2028",
      details: "SGPA: 9.68 (S1) · 9.81 (S2) · 10.00 (S3) · 10.00 (S4)",
      achievements: ["Manager's Honors List: Awarded for academic excellence in Semesters 1, 2, 3 & 4"]
    },
    {
      id: "ed2",
      institution: "Sacred Heart HSS, Dwaraka",
      degree: "Higher Secondary (PCMB)",
      year: "2022 — 2024",
      details: "Result: 99.1%",
      achievements: []
    },
    {
      id: "ed3",
      institution: "St. Joseph HSS, Kallody",
      degree: "Secondary School",
      year: "2022",
      details: "Result: Full A+",
      achievements: []
    }
  ],

  certificates: [
    {
      id: "c1",
      title: "Manager's Honors List — S1, S2, S3, S4",
      issuer: "Amal Jyothi College of Engineering",
      year: "2024 — 2026",
      description: "Awarded for outstanding academic performance across four consecutive semesters."
    },
    {
      id: "c2",
      title: "Idea from Industry Competition — Selected Twice",
      issuer: "Amal Jyothi College of Engineering",
      year: "2025 - 2026",
      description: "Selected twice for presenting innovative industry-relevant project ideas."
    },
    {
      id: "c3",
      title: "Data Structure and Algorithms using Java — NPTEL Top 1%",
      issuer: "NPTEL — IIT Kharagpur",
      year: "2025",
      description: "Completed the 12-week NPTEL course with an Elite certificate and secured a place in the Top 1% among 3,234 certified candidates, with a score of 78%."
    },

    {
      id: "c4",
      title: "Data Base Management System — NPTEL Top 5%",
      issuer: "NPTEL — IIT Kharagpur",
      year: "2026",
      description: "Completed the 8-week NPTEL course with an Elite certificate and secured a place in the Top 5% among 12,988 certified candidates, with a score of 78%."
    }
  ],

  leadership: [
    {
      id: "l1",
      title: "Chairman — AI Club, AJCE",
      year: "2025 — 2026",
      description: "Led AI-focused workshops and learning initiatives, coordinating activities for 100+ students."
    },
    {
      id: "l2",
      title: "Judge Management Co-Lead — NASA Space Apps Hackathon",
      year: "2025",
      description: "Coordinated the judge's communication and evaluation workflow for a hackathon with 2500+ participants."
    },
    {
      id: "l3",
      title: "Class Representative",
      year: "2024-2026",
      description: "Facilitate communication between faculty and students to address academic concerns at Amal Jyothi College of Engineering."
    },
    {
      id: "l4",
      title: "Marketing Lead — ACM Student Chapter, AJCE",
      year: "2025 — 2026",
      description: "Leading marketing initiatives for the ACM Student Chapter at Amal Jyothi College of Engineering."
    },
    {
      id: "l5",
      title: "Marketing Team — Google Developer Groups (GDG)",
      year: "2025 — Present",
      description: "Contributing to marketing efforts for the Google Developer Groups community."
    },
    {
      id: "l6",
      title: "Product Management IG Lead — μLearn",
      year: "2026 — Present",
      description: "Leading the Product Management Interest Group at μLearn community."
    },
    {
      id: "l7",
      title: "NSS Volunteer",
      year: "Ongoing",
      description: "Active volunteer with the National Service Scheme at AJCE and SH HSS Dwaraka."
    },
    {
      id: "l8",
      title: "Founder & Instructor — Cadence Music Institution",
      year: "2023 — Present",
      description: "Founded a music institution at age 17 offering keyboard and piano training. Prepares students for Trinity College London music certification examinations."
    }
  ],

  interests: ["Product Management", "Web Development", "Marketing Strategy", "Event Coordination", "Music (Keyboard & Piano)"]
};

// ============================================================
// Auth credentials (editable in source)
// ============================================================


// ============================================================
// Data Manager
// ============================================================
const DataManager = {
  _storageKey: "joyelProfileData",

  getData() {
    const stored = localStorage.getItem(this._storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (!parsed.profile.photo || parsed.profile.photo === "assets/profile.jpg") {
          parsed.profile.photo = DEFAULT_DATA.profile.photo;
        }
        parsed.profile.aboutPhoto = parsed.profile.aboutPhoto || DEFAULT_DATA.profile.aboutPhoto;
        parsed.profile.outdoorPhoto = parsed.profile.outdoorPhoto || DEFAULT_DATA.profile.outdoorPhoto;
        parsed.profile.benchPhoto = parsed.profile.benchPhoto || DEFAULT_DATA.profile.benchPhoto;
        parsed.profile.techPhoto = parsed.profile.techPhoto || DEFAULT_DATA.profile.techPhoto;
        return parsed;
      } catch {
        return { ...DEFAULT_DATA };
      }
    }
    return { ...DEFAULT_DATA };
  },

  saveData(data) {
    localStorage.setItem(this._storageKey, JSON.stringify(data));
  },

  resetData() {
    localStorage.removeItem(this._storageKey);
    return { ...DEFAULT_DATA };
  },

  updateSection(section, value) {
    const data = this.getData();
    data[section] = value;
    this.saveData(data);
    return data;
  },

  addItem(section, item) {
    const data = this.getData();
    if (!data[section]) data[section] = [];
    item.id = section.charAt(0) + Date.now();
    data[section].push(item);
    this.saveData(data);
    return data;
  },

  updateItem(section, id, updatedItem) {
    const data = this.getData();
    const idx = data[section].findIndex(i => i.id === id);
    if (idx !== -1) {
      data[section][idx] = { ...data[section][idx], ...updatedItem };
      this.saveData(data);
    }
    return data;
  },

  deleteItem(section, id) {
    const data = this.getData();
    data[section] = data[section].filter(i => i.id !== id);
    this.saveData(data);
    return data;
  }
};
