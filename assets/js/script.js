/**
 * script.js - Omiru Ranshan Cyber Security Portfolio
 * Dynamic Edition Engine (Alien 👽, Kali Linux, BlackArch, Matrix, Light ☀️)
 * Clean Minimalist Alien Loader, Interactive Linux Terminal, Matrix FX
 */

'use strict';

(() => {
  // ==========================================
  // 1. DYNAMIC THEME & EDITION ENGINE
  // ==========================================
  const THEME_KEY = 'omiru_cyber_theme';
  const FX_KEY = 'omiru_fx_enabled';
  const root = document.documentElement;

  // Edition definitions for each theme
  const editions = {
    alien: {
      name: 'Alien',
      iconType: 'emoji',
      emoji: '👽',
      editionLabel: 'ALIEN EDITION // CYBER DEFENSE 👽',
      prompt: 'xeon👽alien',
      session: 'omiru@alien-sec',
      os: 'Kali Linux [Alien Edition] x86_64',
      host: 'Omiru Ranshan (XEON)',
      kernel: '6.8.0-kali-xenon-alien',
      status: '[● LIVE] Cyber Unit Active',
      termTitle: 'xeon@alien-cyber-core:~ (zsh) 👽',
      flag: 'FLAG{0m1ru_x30n_4l13n_3d1t10n_👽}',
      heroRole: 'Alien Edition // Cyber Security Specialist 👽',
      waGreeting: '👋 Hi Xeon 👽'
    },
    kali: {
      name: 'Kali',
      iconType: 'image',
      iconSrc: './assets/images/kali-logo.png',
      emoji: '',
      editionLabel: 'KALI LINUX // OFFENSIVE DEFENSE',
      prompt: 'xeon@kali',
      session: 'omiru@kali-sec',
      os: 'Kali Linux Rolling x86_64',
      host: 'Omiru Ranshan (XEON)',
      kernel: '6.8.0-kali-security',
      status: '[● LIVE] Offensive SecOps Active',
      termTitle: 'xeon@kali-security:~ (zsh)',
      flag: 'FLAG{0m1ru_k4l1_rolling_2026}',
      heroRole: 'Kali Linux // Penetration Tester & Researcher',
      waGreeting: '👋 Hi Xeon'
    },
    blackarch: {
      name: 'BlackArch',
      iconType: 'image',
      iconSrc: './assets/images/blackarch-logo.png',
      emoji: '',
      editionLabel: 'BLACKARCH // PENTEST ARSENAL',
      prompt: 'xeon@blackarch',
      session: 'omiru@blackarch-sec',
      os: 'BlackArch Linux x86_64',
      host: 'Omiru Ranshan (XEON)',
      kernel: '6.8.0-blackarch-hardened',
      status: '[● LIVE] Strike Team Ready',
      termTitle: 'xeon@blackarch-pentest:~ (zsh)',
      flag: 'FLAG{0m1ru_bl4ck_4rch_pentest}',
      heroRole: 'BlackArch // Offensive Security Specialist',
      waGreeting: '👋 Hi Xeon'
    },
    matrix: {
      name: 'Matrix',
      iconType: 'image',
      iconSrc: './assets/images/matrix-logo.png',
      emoji: '',
      editionLabel: 'MATRIX EDITION // BINARY SYSTEM',
      prompt: 'xeon@matrix',
      session: 'omiru@matrix-sec',
      os: 'Cyber Matrix Terminal v4.2',
      host: 'Omiru Ranshan (XEON)',
      kernel: '6.8.0-matrix-phosphor',
      status: '[● LIVE] Defense',
      termTitle: 'xeon@matrix-mainframe:~ (zsh)',
      flag: 'FLAG{0m1ru_m4tr1x_phosphor}',
      heroRole: 'Matrix // Anomaly & Binary Defender',
      waGreeting: '👋 Hi Xeon'
    },
    light: {
      name: 'Light',
      iconType: 'emoji',
      emoji: '',
      editionLabel: 'LIGHT TERMINAL // DAYLIGHT DEFENSE ',
      prompt: 'xeon@terminal',
      session: 'omiru@light-sec',
      os: 'Cyber Daylight Terminal ',
      host: 'Omiru Ranshan (XEON)',
      kernel: '6.8.0-solar-defense',
      status: '[● LIVE] Defense Grid Active',
      termTitle: 'xeon@light-terminal:~ (zsh)',
      flag: 'FLAG{0m1ru_l1ght_t3rm1n4l}',
      heroRole: 'Light Terminal // Security Architect',
      waGreeting: '👋 Hi Xeon'
    }
  };

  const validThemes = Object.keys(editions);

  const getSavedTheme = () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (validThemes.includes(saved)) return saved;
    } catch (e) {}
    // Default to Alien Edition
    return 'alien';
  };

  const updateEditionUI = (themeName) => {
    const ed = editions[themeName] || editions.alien;

    // 1. Update theme icons/emojis across brand and badges
    document.querySelectorAll('[data-theme-emoji]').forEach((el) => {
      if (ed.iconType === 'image') {
        el.innerHTML = `<img src="${ed.iconSrc}" class="theme-inline-img" alt="${ed.name} icon" width="18" height="18">`;
      } else if (ed.emoji) {
        el.textContent = ed.emoji;
      } else {
        el.textContent = '';
      }
    });

    // 2. Update brand session
    document.querySelectorAll('[data-theme-session]').forEach((el) => {
      el.textContent = ed.session;
    });

    // 3. Update hero badge and prompt
    document.querySelectorAll('[data-theme-hero-badge]').forEach((el) => {
      el.textContent = ed.editionLabel;
    });
    document.querySelectorAll('[data-theme-prompt]').forEach((el) => {
      el.textContent = ed.prompt;
    });

    // 4. Update Fastfetch / Neofetch HUD Card
    document.querySelectorAll('[data-theme-fastfetch-title]').forEach((el) => {
      el.textContent = `${ed.session}:~ (zsh)${ed.emoji ? ' ' + ed.emoji : ''}`;
    });
    document.querySelectorAll('[data-theme-os]').forEach((el) => {
      el.textContent = ed.os;
    });
    document.querySelectorAll('[data-theme-host]').forEach((el) => {
      el.textContent = ed.host;
    });
    document.querySelectorAll('[data-theme-kernel]').forEach((el) => {
      el.textContent = ed.kernel;
    });
    document.querySelectorAll('[data-theme-status]').forEach((el) => {
      el.textContent = ed.status;
    });

    // 5. Update Interactive Terminal Window Title
    document.querySelectorAll('[data-theme-term-title]').forEach((el) => {
      el.textContent = ed.termTitle;
    });

    // 6. Update Form title & WhatsApp greeting
    document.querySelectorAll('[data-theme-form-title]').forEach((el) => {
      el.textContent = `ENCRYPTED_MESSAGE_DISPATCH [TLS 1.3]${ed.emoji ? ' ' + ed.emoji : ''}`;
    });

    const waLink = document.querySelector('[data-wa-link]');
    if (waLink) {
      waLink.href = `https://wa.me/94772602443?text=${encodeURIComponent(ed.waGreeting)}`;
    }
  };

  const setTheme = (themeName) => {
    if (!validThemes.includes(themeName)) themeName = 'alien';
    root.setAttribute('data-theme', themeName);

    // Update active state in theme buttons
    document.querySelectorAll('[data-set-theme]').forEach((btn) => {
      const isActive = btn.getAttribute('data-set-theme') === themeName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Dynamically update text & edition emojis
    updateEditionUI(themeName);

    try {
      localStorage.setItem(THEME_KEY, themeName);
    } catch (e) {}

    // Dispatch custom event for background canvas
    window.dispatchEvent(new CustomEvent('cyber-theme-change', { detail: { theme: themeName } }));
  };

  // Attach click listeners to all theme buttons
  document.querySelectorAll('[data-set-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTheme(btn.getAttribute('data-set-theme'));
    });
  });

  // Apply initial theme immediately
  setTheme(getSavedTheme());

  // ==========================================
  // 2. CLEAN MINIMALIST LOADING SCREEN (Medium Alien Emoji Only)
  // ==========================================
  const loader = document.querySelector('[data-loading]');
  const bootProgress = document.querySelector('[data-boot-progress]');

  const dismissLoader = () => {
    if (!loader || loader.classList.contains('loaded')) return;
    if (bootProgress) bootProgress.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.classList.remove('active');
    }, 180);
  };

  if (loader) {
    document.body.classList.add('active');

    // Smooth progress line animation
    let progress = 10;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        setTimeout(dismissLoader, 200);
      }
      if (bootProgress) bootProgress.style.width = `${progress}%`;
    }, 110);

    // Safe fallback timeout
    setTimeout(dismissLoader, 1400);

    // Allow user to click anywhere to dismiss instantly
    loader.addEventListener('click', dismissLoader);
  }

  // ==========================================
  // 3. MATRIX / BINARY / HEX RAIN CANVAS
  // ==========================================
  const canvas = document.createElement('canvas');
  canvas.className = 'binary-rain-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let cols = 0;
  let drops = [];
  let fxEnabled = true;

  try {
    const savedFx = localStorage.getItem(FX_KEY);
    if (savedFx !== null) fxEnabled = savedFx === 'true';
  } catch (e) {}

  const getThemeChars = () => {
    const currentTheme = root.getAttribute('data-theme') || 'alien';
    const ed = editions[currentTheme] || editions.alien;
    const extra = ed.emoji ? `${ed.emoji}${ed.emoji}` : '>>';
    return `010101010101ABCDEF!@#$%^&*<>_/{}\\λπΩ§${extra}XEON-${ed.name.toUpperCase()}`;
  };

  let cyberChars = getThemeChars();
  window.addEventListener('cyber-theme-change', () => {
    cyberChars = getThemeChars();
  });

  const resizeCanvas = () => {
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const fontSize = window.innerWidth < 768 ? 12 : 14;
    cols = Math.floor(window.innerWidth / fontSize);
    drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -50));
  };

  const getCanvasColors = () => {
    const computed = getComputedStyle(root);
    return {
      bright: computed.getPropertyValue('--matrix-char-bright').trim() || 'rgba(57, 255, 20, 0.98)',
      dim: computed.getPropertyValue('--matrix-char-dim').trim() || 'rgba(0, 240, 255, 0.45)',
      trail: computed.getPropertyValue('--matrix-trail').trim() || 'rgba(5, 8, 17, 0.16)'
    };
  };

  let colors = getCanvasColors();
  window.addEventListener('cyber-theme-change', () => {
    colors = getCanvasColors();
  });

  const drawMatrix = () => {
    if (!fxEnabled || !ctx) return;

    ctx.fillStyle = colors.trail;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    const fontSize = window.innerWidth < 768 ? 12 : 14;
    ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = cyberChars[Math.floor(Math.random() * cyberChars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      if (y > 0) {
        ctx.fillStyle = Math.random() > 0.85 ? colors.bright : colors.dim;
        ctx.fillText(char, x, y);
      }

      if (y > window.innerHeight && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    animationId = requestAnimationFrame(drawMatrix);
  };

  const setFxState = (enabled) => {
    fxEnabled = enabled;
    canvas.classList.toggle('paused', !enabled);

    document.querySelectorAll('[data-toggle-fx]').forEach((btn) => {
      btn.classList.toggle('active', enabled);
      btn.textContent = enabled ? 'FX: ON' : 'FX: OFF';
    });

    try {
      localStorage.setItem(FX_KEY, enabled ? 'true' : 'false');
    } catch (e) {}

    if (enabled) {
      if (!animationId) {
        resizeCanvas();
        drawMatrix();
      }
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      if (ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  };

  window.addEventListener('resize', () => {
    if (fxEnabled) {
      resizeCanvas();
    }
  }, { passive: true });

  document.querySelectorAll('[data-toggle-fx]').forEach((btn) => {
    btn.addEventListener('click', () => setFxState(!fxEnabled));
  });

  // Check reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    setFxState(false);
  } else {
    setFxState(fxEnabled);
  }

  // ==========================================
  // 4. HERO SECTION TYPEWRITER EFFECT
  // ==========================================
  const typewriterEl = document.querySelector('[data-typewriter]');
  const roles = [
    'Cyber Security Undergraduate',
    'Penetration Tester & Ethical Hacker',
    'Kali Linux & BlackArch Power User',
    'CCNA Certified Network Defender',
    'AI & Threat Intelligence Researcher'
  ];

  if (typewriterEl) {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 65;

    const tick = () => {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 30;
      } else {
        typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 65;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 350;
      }

      setTimeout(tick, typingSpeed);
    };

    tick();
  }

  // ==========================================
  // 5. INTERACTIVE LINUX TERMINAL DRAWER
  // ==========================================
  const terminalModal = document.querySelector('[data-terminal-modal]');
  const terminalOpenBtns = document.querySelectorAll('[data-open-terminal]');
  const terminalCloseBtns = document.querySelectorAll('[data-close-terminal]');
  const terminalOutput = document.querySelector('[data-terminal-output]');
  const terminalInput = document.querySelector('[data-terminal-input]');
  const terminalChips = document.querySelectorAll('[data-term-cmd]');

  const openTerminal = () => {
    if (!terminalModal) return;
    terminalModal.classList.add('open');
    if (terminalInput) {
      setTimeout(() => terminalInput.focus(), 150);
    }
  };

  const closeTerminal = () => {
    if (!terminalModal) return;
    terminalModal.classList.remove('open');
  };

  terminalOpenBtns.forEach((btn) => btn.addEventListener('click', openTerminal));
  terminalCloseBtns.forEach((btn) => btn.addEventListener('click', closeTerminal));

  if (terminalModal) {
    terminalModal.addEventListener('click', (e) => {
      if (e.target === terminalModal) closeTerminal();
    });
  }

  // Global Hotkey: ` (backtick) or Ctrl + ~ to toggle terminal
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (terminalModal?.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    }
    if (e.key === 'Escape' && terminalModal?.classList.contains('open')) {
      closeTerminal();
    }
  });

  const appendTerminalLine = (text, type = 'info') => {
    if (!terminalOutput) return;
    const line = document.createElement('div');
    line.className = `terminal-output-line ${type}`;
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  const executeCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const currentTheme = root.getAttribute('data-theme') || 'alien';
    const ed = editions[currentTheme] || editions.alien;

    appendTerminalLine(`┌──(${ed.prompt})-[~]\n└─$ ${raw}`, 'cmd');

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    switch (cmd) {
      case 'help':
      case '?':
        appendTerminalLine('AVAILABLE COMMANDS:', 'highlight');
        appendTerminalLine('  edition        - Show current edition details & security telemetry');
        appendTerminalLine('  whoami         - View Omiru Ranshan profile & specialization');
        appendTerminalLine('  skills         - List core cybersecurity & programming skills');
        appendTerminalLine('  tools          - List offensive & defensive security arsenal');
        appendTerminalLine('  projects       - Overview of featured portfolio projects');
        appendTerminalLine('  education      - View academic qualifications & certifications');
        appendTerminalLine('  contact        - Display direct email and WhatsApp contact');
        appendTerminalLine('  neofetch       - Display live system info & Linux specs');
        appendTerminalLine('  theme <name>   - Switch theme: alien, kali, blackarch, matrix, light');
        appendTerminalLine('  fx <on|off>    - Toggle background matrix rain animation');
        appendTerminalLine('  cat flag.txt   - CTF secret challenge');
        appendTerminalLine('  clear          - Clear terminal window');
        appendTerminalLine('  exit           - Close terminal drawer');
        break;

      case 'alien':
      case 'edition':
        appendTerminalLine(`[${ed.name.toUpperCase()} EDITION TELEMETRY]${ed.emoji ? ' ' + ed.emoji : ''}`, 'highlight');
        appendTerminalLine(`  ACTIVE_EDITION: ${ed.editionLabel}`);
        appendTerminalLine(`  SYSTEM_PROMPT: ${ed.prompt}`);
        appendTerminalLine(`  PILOT: Omiru Ranshan [XEON${ed.emoji ? ' ' + ed.emoji : ''}]`);
        appendTerminalLine(`  STATUS: ${ed.status}`);
        appendTerminalLine('  HOMEWORLD: Chilaw, Puttalam, Sri Lanka');
        appendTerminalLine('  ARSENAL: Metasploit, Nmap, Burp Suite, Wireshark, Python');
        break;

      case 'whoami':
        appendTerminalLine(`NAME: Omiru Ranshan [Handle: XEON${ed.emoji ? ' ' + ed.emoji : ''}]`);
        appendTerminalLine(`ACTIVE_EDITION: ${ed.editionLabel}`);
        appendTerminalLine('ROLE: Cybersecurity Undergraduate | Penetration Tester | Linux Lover');
        appendTerminalLine('LOCATION: Chilaw, Puttalam, Sri Lanka');
        appendTerminalLine('MISSION: Hardening networks, conducting ethical pentests, and developing secure AI systems.');
        break;

      case 'skills':
        appendTerminalLine('CORE CYBERSECURITY SKILLS:', 'highlight');
        appendTerminalLine('  • Penetration Testing (Web Apps & Networks)');
        appendTerminalLine('  • Ethical Hacking & Vulnerability Assessment');
        appendTerminalLine('  • SIEM & Threat Monitoring (Splunk)');
        appendTerminalLine('  • Linux System Administration & Hardening');
        appendTerminalLine('  • Python & Bash Security Scripting');
        appendTerminalLine('  • Machine Learning & Anomaly Detection');
        break;

      case 'tools':
        appendTerminalLine('OFFENSIVE & DEFENSIVE ARSENAL:', 'highlight');
        appendTerminalLine(`  • OS: ${ed.os}, Arch Linux, Ubuntu`);
        appendTerminalLine('  • Network Analysis: Nmap, Wireshark, Scapy');
        appendTerminalLine('  • Exploitation: Metasploit, Burp Suite Professional');
        appendTerminalLine('  • DevOps & Cloud: Docker, Git, Linux CLI');
        appendTerminalLine('  • ML/AI: Python, TensorFlow, PyTorch, Scikit-learn');
        break;

      case 'projects':
        appendTerminalLine('FEATURED PROJECTS:', 'highlight');
        appendTerminalLine('  1. Web Vulnerability Scanner (OWASP XSS/SQLi detection)');
        appendTerminalLine('  2. Network Scanner & Subnet Port Mapper');
        appendTerminalLine('  3. Malware Analysis Lab & Reverse Engineering Notes');
        appendTerminalLine('  4. SOC Alert Triage Dashboard with Splunk');
        appendTerminalLine('  5. Secure JWT Authentication System');
        appendTerminalLine('Type "cat flag.txt" for an edition challenge.');
        break;

      case 'education':
        appendTerminalLine('EDUCATION & CERTIFICATIONS:', 'highlight');
        appendTerminalLine('  • Higher National Diploma in Cybersecurity — NEBULA Institute (2026-2028)');
        appendTerminalLine('  • Professional Certificate in Data Science — Harvard University');
        appendTerminalLine('  • CCNA: Introduction to Networks — Cisco');
        appendTerminalLine('  • LPIC-1 / Linux Security Essentials');
        break;

      case 'contact':
        appendTerminalLine(`CONNECT WITH OMIRU (XEON${ed.emoji ? ' ' + ed.emoji : ''}):`, 'highlight');
        appendTerminalLine('  • Email: omiruonline@gmail.com');
        appendTerminalLine('  • WhatsApp: +94 77 260 2443');
        appendTerminalLine('  • LinkedIn: linkedin.com/in/omiru');
        appendTerminalLine('Or use the contact form at the bottom of the page.');
        break;

      case 'neofetch':
      case 'fastfetch':
        appendTerminalLine(
`       .---.
      /     \\        xeon@${ed.name.toLowerCase()}${ed.emoji ? ' ' + ed.emoji : ''}
     | () () |       ------------------
      \\  ^  /        OS: ${ed.os}
       |||||         Host: ${ed.host}
                     Kernel: ${ed.kernel}
     /  ___  \\       Uptime: 2+ Years in Security Research
    / /|   |\\ \\      Shell: zsh 5.9 (x86_64-pc-linux)
   / / |   | \\ \\     Terminal: Alacritty / ${ed.name}-HUD
  (_/  |   |  \\_)    Focus: Pentesting, Web Sec, Forensics
       |   |         Status: ${ed.status}
`, 'highlight');
        break;

      case 'theme':
        if (validThemes.includes(arg)) {
          setTheme(arg);
          const newEd = editions[arg];
          appendTerminalLine(`[✓] Theme updated to: ${newEd.name.toUpperCase()}${newEd.emoji ? ' ' + newEd.emoji : ''}`, 'highlight');
        } else {
          appendTerminalLine(`[!] Unknown theme "${arg}". Valid options: ${validThemes.join(', ')}`);
        }
        break;

      case 'fx':
        if (arg === 'on') {
          setFxState(true);
          appendTerminalLine('[✓] Matrix background animation enabled.', 'highlight');
        } else if (arg === 'off') {
          setFxState(false);
          appendTerminalLine('[✓] Matrix background animation disabled.', 'highlight');
        } else {
          appendTerminalLine('Usage: fx <on|off>');
        }
        break;

      case 'cat':
        if (arg === 'flag.txt') {
          appendTerminalLine('[+] Accessing secure vault entry...');
          appendTerminalLine('[+] Decrypting payload with RSA-4096 / SHA-256...');
          appendTerminalLine(ed.flag, 'highlight');
          appendTerminalLine(`Congratulations! You discovered XEON\'s ${ed.name} CTF flag!${ed.emoji ? ' ' + ed.emoji : ''}`);
        } else {
          appendTerminalLine(`cat: ${arg || 'file'}: No such file or directory`);
        }
        break;

      case 'date':
        appendTerminalLine(new Date().toString());
        break;

      case 'uname':
        appendTerminalLine(`Linux ${ed.name.toLowerCase()}-xeon 6.8.0-kali1-amd64 #1 SMP PREEMPT_DYNAMIC GNU/Linux`);
        break;

      case 'clear':
        if (terminalOutput) terminalOutput.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      default:
        appendTerminalLine(`bash: ${cmd}: command not found. Type "help" for valid commands.`);
        break;
    }
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = terminalInput.value;
        terminalInput.value = '';
        executeCommand(val);
      }
    });
  }

  terminalChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-term-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  // ==========================================
  // 6. SKILLS & EDUCATION TAB TOGGLES
  // ==========================================
  const initTabToggle = (containerSel, list1Sel, list2Sel, loadMoreSel) => {
    const container = document.querySelector(containerSel);
    if (!container) return;

    const btns = container.querySelectorAll('[data-toggle-btn]');
    const list1 = container.querySelector(list1Sel);
    const list2 = container.querySelector(list2Sel);
    const loadMore = container.querySelector(loadMoreSel);

    btns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        btns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const showSecond = idx === 1;
        if (list1) list1.setAttribute('aria-hidden', showSecond ? 'true' : 'false');
        if (list2) list2.setAttribute('aria-hidden', showSecond ? 'false' : 'true');

        if (loadMore) {
          loadMore.style.display = showSecond ? 'inline-block' : 'none';
        }
      });
    });
  };

  initTabToggle('#skills', '.skills-list', '.tools-list');
  initTabToggle('#education', '.qualification-list', '.certification-list', '[data-load-more-certs]');

  // Load More Certifications button
  const loadMoreCertsBtn = document.querySelector('[data-load-more-certs]');
  if (loadMoreCertsBtn) {
    loadMoreCertsBtn.addEventListener('click', () => {
      document.querySelectorAll('.certification-list .hidden-cert').forEach((item) => {
        item.classList.remove('hidden-cert');
      });
      loadMoreCertsBtn.style.display = 'none';
    });
  }

  // ==========================================
  // 7. PROJECT FILTERING & QUICKVIEW MODAL
  // ==========================================
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const projectCards = document.querySelectorAll('[data-project-category]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter-btn');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-project-category')?.split(' ') || [];
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Quickview Modal
  const modalBackdrop = document.querySelector('[data-project-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalDesc = document.querySelector('[data-modal-desc]');
  const modalTags = document.querySelector('[data-modal-tags]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');

  const openProjectModal = (title, desc, tags) => {
    if (!modalBackdrop) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalTags) {
      modalTags.innerHTML = tags
        .map((t) => `<span class="project-tag">${t}</span>`)
        .join('');
    }
    modalBackdrop.classList.add('open');
  };

  document.querySelectorAll('[data-view-project]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (!card) return;

      const title = card.querySelector('.card-title')?.textContent || 'Project Details';
      const desc = card.querySelector('.card-text')?.textContent || '';
      const tags = Array.from(card.querySelectorAll('.project-tag')).map((el) => el.textContent);

      openProjectModal(title, desc, tags);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modalBackdrop?.classList.remove('open'));
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  // ==========================================
  // 8. CONTACT FORM DISPATCH & VALIDATION
  // ==========================================
  const contactForm = document.querySelector('[data-contact-form]');
  const formFeedback = document.querySelector('[data-form-feedback]');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = contactForm.querySelector('#contact-name');
      const emailInput = contactForm.querySelector('#contact-email');
      const phoneInput = contactForm.querySelector('#contact-phone');
      const msgInput = contactForm.querySelector('#contact-message');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const msg = msgInput?.value.trim();

      if (!name || !email || !msg) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback active error';
          formFeedback.innerHTML = `[!] VALIDATION_ERROR: Please provide your name, valid email, and message.`;
        }
        return;
      }

      const currentTheme = root.getAttribute('data-theme') || 'alien';
      const ed = editions[currentTheme] || editions.alien;

      // Simulate Encrypted Transmission and provide direct email/whatsapp options
      if (formFeedback) {
        formFeedback.className = 'form-feedback active success';
        formFeedback.innerHTML = `
          <strong>[✓] TRANSMISSION READY${ed.emoji ? ' ' + ed.emoji : ''}:</strong> Encrypted with TLS 1.3.<br>
          Delivering directly to <strong>omiruonline@gmail.com</strong>...<br>
          <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="mailto:omiruonline@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nPhone: ' + phone + '\nEmail: ' + email)}" class="btn btn-primary" style="padding: 6px 14px; font-size: 1.2rem;">Send via Email</a>
            <a href="https://wa.me/94772602443?text=${encodeURIComponent(ed.waGreeting + '! My name is ' + name + '.\n' + msg)}" target="_blank" class="btn btn-outline" style="padding: 6px 14px; font-size: 1.2rem;">Send via WhatsApp</a>
          </div>
        `;
      }

      // Optional auto-redirect to mailto
      setTimeout(() => {
        window.location.href = `mailto:omiruonline@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nPhone: ' + phone + '\nEmail: ' + email)}`;
      }, 900);
    });
  }

  // ==========================================
  // 9. SCROLLSPY & NAVIGATION DOCK ACTIVE STATE
  // ==========================================
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('section[id], footer[id]');

  const updateScrollspy = () => {
    const scrollY = window.scrollY + 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', updateScrollspy, { passive: true });
  updateScrollspy();

  // Back to top button
  const backTopBtn = document.querySelector('[data-back-top-btn]');
  if (backTopBtn) {
    const onScrollBackTop = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollPos / docHeight) * 100)) : 0;

      backTopBtn.textContent = `▲ ${pct}%`;
      backTopBtn.classList.toggle('show', scrollPos > 250);
    };

    window.addEventListener('scroll', onScrollBackTop, { passive: true });
    onScrollBackTop();
  }

  // ==========================================
  // 10. SCROLL REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  // ==========================================
  // 11. CUSTOM DESKTOP CROSSHAIR CURSOR
  // ==========================================
  const cursor = document.querySelector('[data-cursor]');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const hoverables = document.querySelectorAll('a, button, input, textarea, .skill-card, .project-card');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    document.addEventListener('mouseleave', () => cursor.classList.add('disabled'));
    document.addEventListener('mouseenter', () => cursor.classList.remove('disabled'));
  }
})();
