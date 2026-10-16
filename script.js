/**
 * ============================================================================
 * 00 // MASTER CONFIGURATION (EDIT ALL YOUR PERSONAL DETAILS HERE)
 * ============================================================================
 *
 * HOW TO ADD YOUR 3D SATELLITE MODEL (.GLB):
 * 1. Download any free satellite .glb model (keep file size under ~10 MB):
 *    - NASA 3D Resources: https://nasa3d.arc.nasa.gov/models
 *    - Sketchfab (filter by Downloadable + CC license): https://sketchfab.com
 *    - Poly Pizza: https://poly.pizza
 *    - Khronos glTF Sample Models: https://github.com/KhronosGroup/glTF-Sample-Assets
 * 2. Save the file as `assets/satellite.glb` (or update `satelliteGlbPath` below).
 * 3. Optional: Add backup URLs to `satelliteGlbFallbackUrls` (tried in order if
 *    `satelliteGlbPath` fails). Draco, Meshopt, and KTX2 compressed .glb files
 *    are supported out of the box, and the model is auto-centered and scaled to
 *    `satelliteTargetSize`.
 */
const CONFIG = {
  name: "RUSHIL",
  fullName: "Rushil Jindal",
  roleBadge: "B.TECH CSE @ MIT MANIPAL • PARIKSHIT 2U CUBESAT ADCS",
  tagline: "Teaching a 2U CubeSat which way is up at 600 km LEO — and turning salvaged silicon into Linux edge nodes on the ground.",
  email: "rushil.mitmpl2025@learner.manipal.edu",
  location: "Manipal, India",
  timeZone: "Asia/Kolkata",

  // 3D Satellite Model (.glb) Configuration — NO procedural satellite is generated
  satelliteGlbPath: "assets/satellite.glb",
  satelliteGlbFallbackUrls: [
    // Optional backup .glb paths or CORS-enabled CDN URLs tried in order if satelliteGlbPath fails
  ],
  satelliteTargetSize: 0.9, // Largest bounding-box dimension in Three.js scene units
  satelliteRotationOffset: { x: 0, y: 0, z: 0 }, // Degrees (x, y, z) to tweak your model's facing direction

  // Bio paragraph (words wrapped in *asterisks* glow in electric aqua as you scroll)
  bio: "I'm Rushil — a *Computer* *Science* undergrad at *MIT* *Manipal* obsessed with systems where math meets bare metal. By day, I write *Attitude* *Determination* and *Control* algorithms for the *Parikshit* *2U* *CubeSat*, fusing magnetometer and sun-sensor telemetry to stabilize an *electrodynamic* *tether* in Low Earth Orbit. Off-duty, I salvage *discarded* *hardware* into Linux servers, trek the *Western* *Ghats*, and chase clean code with filter coffee.",

  // Key metadata strip under the bio
  dossier: [
    { label: "ORIGIN // BASE", value: "Gorakhpur, UP → Manipal, KA (13.35° N)" },
    { label: "SPACECRAFT SUBSYSTEM", value: "Parikshit ADCS (QUEST, MEKF, B-Dot Control)" },
    { label: "DAILY DRIVER OS", value: "Fedora Linux / Windows Dual-Boot" },
    { label: "OFF-GRID TELEMETRY", value: "Iron Addicts 4x/wk • Surfing Thottam • Doodle's Human" }
  ],

  // Marquee ticker keywords
  marqueeKeywords: [
    "PARIKSHIT 2U CUBESAT",
    "ATTITUDE DETERMINATION & CONTROL",
    "MIT MANIPAL CSE",
    "EMBEDDED SYSTEMS",
    "SALVAGED HARDWARE LAB",
    "QUEST & KALMAN FILTERING",
    "WESTERN GHATS TREKKER"
  ],

  // Selected Projects (numbered architectural index)
  projects: [
    {
      id: "01",
      name: "Parikshit 2U CubeSat ADCS",
      summary: "Flight software, QUEST/MEKF attitude estimation & B-dot magnetorquer control for a 600 km LEO electrodynamic tether mission.",
      architecture: "Fuses RM3100 magnetometer, BMI088 IMU, and 12x SLCD-61N8 coarse sun sensors across 6 faces to maintain 10–15° tether pointing without reaction wheels.",
      tech: ["C / C++", "Python", "QUEST / MEKF", "Embedded", "Orbital Mechanics"],
      year: "2025—26",
      link: "https://parikshitspace.in",
      accent: "#00e5ff"
    },
    {
      id: "02",
      name: "CAN-7USAT & Ground Station",
      summary: "IN-SPACe CanSat flight avionics, mechanical flywheel stabilization, and real-time PyQt5 Ground Control Station.",
      architecture: "Engineered full PDR-to-CDR telemetry pipeline with live 3D orientation visualization, packet loss recovery, and descent rate analytics.",
      tech: ["Python", "PyQt5", "Embedded C", "RF Telemetry", "Sensor Fusion"],
      year: "2026",
      link: "https://github.com",
      accent: "#c6ff00"
    },
    {
      id: "03",
      name: "EdgeNILM Disaggregation",
      summary: "Non-intrusive appliance load monitoring running real-time energy disaggregation on low-power edge hardware.",
      architecture: "Built for Smart India Hackathon: extracts harmonic current signatures at the smart-meter edge to identify individual appliances without plug-level sensors.",
      tech: ["Edge AI", "Python", "DSP", "Embedded Linux", "Time-Series"],
      year: "2026",
      link: "https://github.com",
      accent: "#ff2a85"
    },
    {
      id: "04",
      name: "Parameterized SPI Controller IP",
      summary: "Synthesizable Master/Slave RTL bus architecture with runtime-configurable CPOL, CPHA, and word length.",
      architecture: "Designed and verified in Verilog HDL for CES 2112 Digital Systems Lab with deterministic state machines and full testbench coverage.",
      tech: ["Verilog HDL", "RTL Design", "FPGA", "Digital Systems"],
      year: "2026",
      link: "https://github.com",
      accent: "#00e5ff"
    },
    {
      id: "05",
      name: "Parikshit Orbital Web Portal",
      summary: "Interactive 3D satellite showcase and dark-mode engineering portal for MIT Manipal's student satellite team.",
      architecture: "Rebuilt parikshitspace.in from scratch using Vite, React, Three.js, and hardware-accelerated scroll choreography.",
      tech: ["Three.js", "React", "Vite", "GSAP", "WebGL"],
      year: "2026",
      link: "https://parikshitspace.in",
      accent: "#c6ff00"
    },
    {
      id: "06",
      name: "Salvaged Silicon Hardware Lab",
      summary: "Headless Linux edge server on a broken-screen Galaxy C9 Pro & standalone monitor from a salvaged laptop LVDS panel.",
      architecture: "Rooted Android-to-Linux chroot node over ADB/USB networking + custom controller board driving an AU Optronics B156XTN07.1 panel.",
      tech: ["Linux Kernel", "Raspberry Pi", "Hardware Hacking", "Bash"],
      year: "2025—26",
      link: "https://github.com",
      accent: "#ff2a85"
    }
  ],

  // College Life & Experiences Photo Gallery (place real files in images/photo1.jpg ... photo6.jpg)
  photos: [
    {
      src: "images/photo1.jpg",
      code: "CAM_01 // PARIKSHIT_LAB.RAW",
      caption: "Late-night ADCS subsystem debugging & QUEST quaternion sanity checks at the satellite lab.",
      date: "MANIPAL • 2026",
      hue: 190
    },
    {
      src: "images/photo2.jpg",
      code: "CAM_02 // KUDREMUKH_PEAK.RAW",
      caption: "1,892m above sea level trekking through Kudremukh National Park in the Western Ghats.",
      date: "KARNATAKA • 2026",
      hue: 150
    },
    {
      src: "images/photo3.jpg",
      code: "CAM_03 // THOTTAM_SURF.RAW",
      caption: "Trading orbital mechanics for wave mechanics — dawn surf session at Thottam Beach.",
      date: "UDUPI • 2026",
      hue: 205
    },
    {
      src: "images/photo4.jpg",
      code: "CAM_04 // HARDWARE_SALVAGE.RAW",
      caption: "Bench setup: salvaged IdeaPad LVDS panel wired as a second monitor next to Fedora Linux.",
      date: "BLOCK 15 • 2026",
      hue: 320
    },
    {
      src: "images/photo5.jpg",
      code: "CAM_05 // GOKARNA_COAST.RAW",
      caption: "Monsoon cliffside trail between beaches on the Gokarna road trip with the crew.",
      date: "GOKARNA • 2026",
      hue: 175
    },
    {
      src: "images/photo6.jpg",
      code: "CAM_06 // DOODLE_VIP.RAW",
      caption: "Chief Morale Officer Doodle back home in Gorakhpur inspecting the winter sweater fleet.",
      date: "GORAKHPUR • 2026",
      hue: 45
    }
  ],

  // Typographic Skills & Tools Matrix
  skillsStream1: ["C / C++", "PYTHON", "THREE.JS", "VERILOG HDL", "KALMAN FILTERING", "FEDORA LINUX", "EMBEDDED C", "REACT"],
  skillsStream2: ["ORBITAL ADCS", "MATLAB / SIMULINK", "PYQT5", "GIT", "RASPBERRY PI", "SIGNAL PROCESSING", "GSAP", "HARDWARE HACKING"],
  skillsCategories: [
    {
      title: "01 // FLIGHT & ADCS",
      items: [
        ["QUEST & MEKF Estimation", "FLIGHT"],
        ["B-Dot Magnetorquer Control", "FLIGHT"],
        ["RM3100 / BMI088 Drivers", "CORE"],
        ["Orbital Dynamics & IGRF", "SIM"]
      ]
    },
    {
      title: "02 // SYSTEMS & SILICON",
      items: [
        ["C / C++ & Embedded C", "PRIMARY"],
        ["Verilog HDL & RTL Design", "LAB"],
        ["Fedora Linux & Bash", "DAILY"],
        ["Raspberry Pi & Salvage Mods", "BUILD"]
      ]
    },
    {
      title: "03 // COMPUTATION & AI",
      items: [
        ["Python (NumPy / SciPy)", "PRIMARY"],
        ["EdgeNILM Signal Inference", "RESEARCH"],
        ["Data Structures & Networks", "CSE"],
        ["PyQt5 Mission Dashboards", "GUI"]
      ]
    },
    {
      title: "04 // WEB & INTERACTION",
      items: [
        ["Three.js & Custom Shaders", "3D"],
        ["React, Vite & TypeScript", "STACK"],
        ["GSAP & Lenis Choreography", "MOTION"],
        ["UI / Engineering Systems", "CRAFT"]
      ]
    }
  ],

  // Random Facts / Anomalies
  funFacts: [
    {
      code: "ANOMALY_01 // REACTION WHEELS",
      stat: "0 RPM",
      text: "We deleted the reaction wheels from our 2U CubeSat. An electrodynamic tether tolerates 10–15° pointing error, so 3 magnetic rods + Earth's B-field do the heavy lifting."
    },
    {
      code: "ANOMALY_02 // E-WASTE NECROMANCY",
      stat: "100% UP",
      text: "My home edge server is a Samsung Galaxy C9 Pro with a shattered display, rooted and running headless Linux utilities over USB debugging."
    },
    {
      code: "ANOMALY_03 // IRON & ALTITUDE",
      stat: "4 DAYS / WK",
      text: "Splits time between Iron Addicts gym near AB5, 8:00 AM lectures in AB5-406, and mangrove kayaking or surfing along the Udupi coast."
    },
    {
      code: "ANOMALY_04 // CANINE TELEMETRY",
      stat: "DOODLE",
      text: "Has a dog named Doodle in Gorakhpur who owns more winter sweaters than most engineering students in Manipal."
    }
  ],

  // Pre-filled Guestbook Entries
  guestbookSeed: [
    {
      name: "Shreyash_ADCS",
      origin: "Manipal SatLab",
      msg: "Quaternion norm drifted to 1.00004 again, pls push the hotfix before review.",
      time: "ORBIT #402"
    },
    {
      name: "Doodle_The_Dog",
      origin: "Gorakhpur HQ",
      msg: "Woof. Send treats. Stop playing with space magnets.",
      time: "ORBIT #389"
    },
    {
      name: "Anonymous_Recruiter",
      origin: "Bangalore / Earth",
      msg: "Came for the resume, stayed because I spent 4 minutes playing with the orbital telemetry.",
      time: "ORBIT #351"
    },
    {
      name: "AB5_Coffee_Machine",
      origin: "Academic Block 5",
      msg: "Warning: 8:30 AM Thursday Digital Systems Lab detected. Dispensing emergency caffeine.",
      time: "ORBIT #312"
    }
  ],

  // Contact & Social Links
  links: [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "Parikshit Satellite Team", url: "https://parikshitspace.in" }
  ]
};

/**
 * ============================================================================
 * 01 // IMPORTS, SAFE STORAGE & GLOBAL STATE
 * ============================================================================
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const STATE = {
  bootActive: true,
  modalOpen: false,
  tabHidden: document.hidden,
  soundEnabled: false,
  reducedMotion: reducedMotionQuery.matches,
  overdrive: false,
  scrollProgress: 0,
  scrollVelocity: 0,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  pointerClientX: window.innerWidth / 2,
  pointerClientY: window.innerHeight / 2,
  satellitePingCount: 0,
  lenis: null,
  lastFocusedElement: null
};

// Safe localStorage wrapper with in-memory fallback (prevents crashes in private browsing or file://)
const memoryStore = new Map();
const SafeStorage = {
  get(key, fallback = null) {
    try {
      const val = window.localStorage.getItem(key);
      return val !== null ? val : (memoryStore.has(key) ? memoryStore.get(key) : fallback);
    } catch {
      return memoryStore.has(key) ? memoryStore.get(key) : fallback;
    }
  },
  set(key, value) {
    memoryStore.set(key, String(value));
    try {
      window.localStorage.setItem(key, String(value));
    } catch {
      // Handled by in-memory map
    }
  }
};

function syncReducedMotionClass() {
  document.body.classList.toggle("reduced-motion", STATE.reducedMotion);
}
syncReducedMotionClass();

reducedMotionQuery.addEventListener("change", (e) => {
  STATE.reducedMotion = e.matches;
  syncReducedMotionClass();
  updateHudButtons();
});

document.addEventListener("visibilitychange", () => {
  STATE.tabHidden = document.hidden;
});

/**
 * ============================================================================
 * 02 // WEB AUDIO API RETRO SYNTHESIZER (USER-GESTURE GATED, OFF BY DEFAULT)
 * ============================================================================
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  ensureContext() {
    if (!STATE.soundEnabled) return null;
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  playBootChime() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.0, 523.25, 659.25];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.0001, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.045, now + idx * 0.06 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 1.45);
    });
  }

  playHover() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1320, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.035);

    gain.gain.setValueAtTime(0.014, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.045);
  }

  playClick() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.065);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.075);
  }

  playSatellitePing() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [1046.5, 1567.98, 2093.0].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.07);
      gain.gain.setValueAtTime(0.04, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.26);
    });
  }
}

const SFX = new SoundEngine();

/**
 * ============================================================================
 * 03 // POPULATE DOM FROM CONFIG & AUTO-FIT HERO / LET'S TALK TYPOGRAPHY
 * ============================================================================
 */
function hydrateContent() {
  document.getElementById("hud-name").textContent = CONFIG.name;
  document.getElementById("hero-role").textContent = CONFIG.roleBadge;
  const wordmarkEl = document.getElementById("hero-wordmark");
  wordmarkEl.textContent = CONFIG.name;
  wordmarkEl.setAttribute("aria-label", CONFIG.name);
  document.getElementById("hero-tagline").textContent = CONFIG.tagline;

  // Build split-character spans for "LET'S" and "TALK"
  const renderSplitWord = (word) =>
    word
      .split("")
      .map(
        (ch) =>
          `<span class="lt-char-wrap"><span class="lt-char">${escapeHtml(ch)}</span></span>`
      )
      .join("");

  document.getElementById("lt-line-1").innerHTML = renderSplitWord("LET'S");
  document.getElementById("lt-line-2").innerHTML = renderSplitWord("TALK");

  const letsTalkCta = document.getElementById("lets-talk-cta");
  letsTalkCta.href = `mailto:${CONFIG.email}`;
  letsTalkCta.setAttribute(
    "aria-label",
    `Let's Talk — open mail to ${CONFIG.email} and copy email address`
  );

  // Bottom row email copy button (with <wbr> at natural @ and . boundaries for 360px screens)
  const footerEmailBtn = document.getElementById("footer-email-copy");
  footerEmailBtn.innerHTML = escapeHtml(CONFIG.email)
    .replace("@", "<wbr>@")
    .replace(/\./g, "<wbr>.");
  footerEmailBtn.setAttribute("aria-label", `Copy email address ${CONFIG.email}`);

  // Bottom row LinkedIn & GitHub text links pulled from CONFIG.links
  const socialContainer = document.getElementById("footer-social-links");
  const targetSocials = CONFIG.links.filter((l) =>
    /linkedin|github/i.test(l.label)
  );
  socialContainer.innerHTML = targetSocials
    .map(
      (s) =>
        `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener" class="cb-link" data-cursor="OPEN">${escapeHtml(s.label)}</a>`
    )
    .join("");

  // Fit-to-width for Hero Wordmark and Closing "LET'S TALK"
  let resizeTimer = null;
  const runAllFits = () => {
    fitHeroWordmark();
    fitLetsTalk();
  };

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(runAllFits, 60);
  });
  runAllFits();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      runAllFits();
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  }

  // Marquee 1
  const marqueeTrack = document.getElementById("marquee-track-1");
  marqueeTrack.innerHTML = [...CONFIG.marqueeKeywords, ...CONFIG.marqueeKeywords]
    .map((kw) => `<span><strong>//</strong> ${escapeHtml(kw)}</span>`)
    .join("");

  // 01 // About word-by-word scrub paragraph
  const aboutEl = document.getElementById("about-scrub-text");
  const words = CONFIG.bio.split(" ");
  aboutEl.innerHTML = words
    .map((w) => {
      const isAccent = w.startsWith("*") && w.endsWith("*");
      const clean = escapeHtml(w.replace(/\*/g, ""));
      return `<span class="scrub-word ${isAccent ? "is-accent" : ""}">${clean}</span>`;
    })
    .join(" ");

  // Dossier strip
  const dossierEl = document.getElementById("about-dossier");
  dossierEl.innerHTML = CONFIG.dossier
    .map(
      (d) => `
      <div class="dossier-item">
        <span class="dossier-label">${escapeHtml(d.label)}</span>
        <div class="dossier-val">${escapeHtml(d.value)}</div>
      </div>`
    )
    .join("");

  // 02 // Projects architectural index
  const projContainer = document.getElementById("project-index");
  projContainer.innerHTML = CONFIG.projects
    .map(
      (p, idx) => `
      <article class="project-row" role="listitem" tabindex="0" data-index="${idx}" data-cursor="INSPECT" aria-label="${escapeHtml(p.name)} — ${escapeHtml(p.summary)}">
        <span class="proj-num">${escapeHtml(p.id)} //</span>
        <div>
          <h3 class="proj-name">${escapeHtml(p.name)}</h3>
          <div class="proj-tech">
            ${p.tech.map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
        <p class="proj-summary">${escapeHtml(p.summary)}</p>
        <span class="proj-year">(${escapeHtml(p.year)})</span>
      </article>`
    )
    .join("");

  // 03 // College Life Photo Gallery
  const galleryTrack = document.getElementById("gallery-track");
  galleryTrack.innerHTML = CONFIG.photos
    .map(
      (ph, idx) => `
      <figure class="photo-card" tabindex="0" role="button" data-photo-index="${idx}" data-cursor="EXPAND" aria-label="Expand photo: ${escapeHtml(ph.caption)}">
        <div class="photo-frame" id="photo-frame-${idx}">
          <img src="${escapeHtml(ph.src)}" alt="${escapeHtml(ph.caption)}" loading="lazy" data-idx="${idx}" />
          <span class="photo-hud-stamp">${escapeHtml(ph.code)}</span>
        </div>
        <figcaption class="photo-meta">
          <span class="photo-caption">${escapeHtml(ph.caption)}</span>
          <span class="photo-date">${escapeHtml(ph.date)}</span>
        </figcaption>
      </figure>`
    )
    .join("");

  CONFIG.photos.forEach((ph, idx) => {
    const frame = document.getElementById(`photo-frame-${idx}`);
    const img = frame.querySelector("img");
    img.addEventListener("load", () => {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
    img.addEventListener("error", () => {
      img.remove();
      const c = createFallbackPhotoCanvas(ph, idx);
      frame.prepend(c);
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  });

  // 04 // Skills Streams & Spec Grid
  const s1 = document.getElementById("skills-stream-1");
  const s2 = document.getElementById("skills-stream-2");
  s1.innerHTML = [...CONFIG.skillsStream1, ...CONFIG.skillsStream1]
    .map((s) => `<span>${escapeHtml(s)}</span><span class="sep">&bull;</span>`)
    .join("");
  s2.innerHTML = [...CONFIG.skillsStream2, ...CONFIG.skillsStream2]
    .map((s) => `<span>${escapeHtml(s)}</span><span class="sep">//</span>`)
    .join("");

  const specGrid = document.getElementById("skills-spec-grid");
  specGrid.innerHTML = CONFIG.skillsCategories
    .map(
      (cat) => `
      <div class="skill-col">
        <div class="skill-cat-title">${escapeHtml(cat.title)}</div>
        <ul class="skill-list">
          ${cat.items.map(([name, tag]) => `<li><span>${escapeHtml(name)}</span><span class="lvl">[${escapeHtml(tag)}]</span></li>`).join("")}
        </ul>
      </div>`
    )
    .join("");

  // 05 // Random Facts
  const factsGrid = document.getElementById("facts-grid");
  factsGrid.innerHTML = CONFIG.funFacts
    .map(
      (f) => `
      <article class="fact-card" data-cursor="PING">
        <div class="fact-top">
          <span>${escapeHtml(f.code)}</span>
          <span>SYS.VERIFIED</span>
        </div>
        <div>
          <div class="fact-stat">${escapeHtml(f.stat)}</div>
          <p class="fact-text">${escapeHtml(f.text)}</p>
        </div>
      </article>`
    )
    .join("");
}

/**
 * Ensures #hero-wordmark never overflows horizontally regardless of Syne glyph width
 */
function fitHeroWordmark() {
  const el = document.getElementById("hero-wordmark");
  if (!el || !el.parentElement) return;
  el.style.fontSize = "";
  const availableWidth = el.parentElement.clientWidth - 16;
  const actualWidth = el.scrollWidth;
  if (actualWidth > availableWidth && availableWidth > 0) {
    const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
    const scaledSize = Math.floor(currentSize * (availableWidth / actualWidth) * 0.96);
    el.style.fontSize = `${scaledSize}px`;
  }
}

/**
 * Fits "LET'S TALK" edge-to-edge across the full container width:
 * - Desktop (>= 640px): single line "LET'S TALK" filling 100% width
 * - Mobile (< 640px): two stacked lines "LET'S" / "TALK" each filling 100% width
 */
function fitLetsTalk() {
  const stage = document.getElementById("lets-talk-stage");
  const measure = document.getElementById("lt-measure");
  const line1 = document.getElementById("lt-line-1");
  const line2 = document.getElementById("lt-line-2");
  if (!stage || !measure || !line1 || !line2) return;

  const targetWidth = stage.clientWidth;
  if (targetWidth <= 0) return;

  const isMobileStack = window.innerWidth < 640;

  if (!isMobileStack) {
    line1.style.fontSize = "";
    line2.style.fontSize = "";
    measure.style.fontSize = "100px";
    const measuredW = measure.getBoundingClientRect().width;
    if (measuredW > 0) {
      const fitted = (100 * (targetWidth / measuredW) * 0.992).toFixed(2);
      measure.style.fontSize = `${fitted}px`;
    }
  } else {
    measure.style.fontSize = "";
    [line1, line2].forEach((lineEl) => {
      lineEl.style.fontSize = "100px";
      const lw = lineEl.getBoundingClientRect().width;
      if (lw > 0) {
        const fitted = (100 * (targetWidth / lw) * 0.992).toFixed(2);
        lineEl.style.fontSize = `${fitted}px`;
      }
    });
  }
}

function createFallbackPhotoCanvas(photo, index) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 440;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", photo.caption);
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 640, 440);
  grad.addColorStop(0, `hsl(${photo.hue}, 75%, 8%)`);
  grad.addColorStop(0.55, `hsl(${(photo.hue + 30) % 360}, 65%, 16%)`);
  grad.addColorStop(1, "#05070d");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 640, 440);

  ctx.strokeStyle = "rgba(0, 229, 255, 0.09)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 640; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 440);
    ctx.stroke();
  }
  for (let y = 0; y < 440; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(640, y);
    ctx.stroke();
  }

  ctx.strokeStyle = `hsla(${photo.hue}, 95%, 60%, 0.42)`;
  ctx.lineWidth = 1.5;
  for (let r = 50; r <= 200; r += 50) {
    ctx.beginPath();
    ctx.arc(320, 220, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "600 13px 'JetBrains Mono', monospace";
  ctx.fillText(`ARCHIVE FRAME // 0${index + 1}`, 28, 390);
  ctx.fillStyle = "#00e5ff";
  ctx.font = "400 11px 'JetBrains Mono', monospace";
  ctx.fillText(`REPLACE IN: ${photo.src}`, 28, 412);

  return canvas;
}

/**
 * ============================================================================
 * 04 // TERMINAL BOOT SEQUENCE (WITH KEYBOARD SUPPORT & LENIS LOCK)
 * ============================================================================
 */
function initBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const bootLog = document.getElementById("boot-log");
  const bootBar = document.getElementById("boot-progress-bar");
  const bootProgressbar = document.getElementById("boot-progressbar");
  const bootPct = document.getElementById("boot-percent");
  const bootTask = document.getElementById("boot-task-label");
  const btnSound = document.getElementById("btn-enter-sound");
  const btnMuted = document.getElementById("btn-enter-muted");
  const btnSkip = document.getElementById("btn-skip-boot");

  requestAnimationFrame(() => {
    btnSound.focus();
  });

  const logLines = [
    ["00.012", "PARIKSHIT_OBC // COLD START VECTOR VERIFIED", "OK"],
    ["00.048", "MOUNTING MANIPAL_CSE_SEM_III KERNEL MODULES...", "OK"],
    ["00.095", "INITIALIZING RM3100 MAGNETOMETER & BMI088 IMU...", "OK"],
    ["00.142", "POLLING 12x SLCD-61N8 COARSE SUN SENSORS...", "LOCKED"],
    ["00.210", "QUEST ATTITUDE QUATERNION CONVERGED: [0.998, 0.012, -0.041, 0.033]", "OK"],
    ["00.284", "REACTION WHEELS: NOT FOUND (DELETED BY DESIGN — TETHER MODE)", "BYPASS"],
    ["00.350", "SYNTHESIZING 600 KM LEO EARTH SHADER & SATELLITE TELEMETRY...", "READY"]
  ];

  let progress = 0;
  let lineIdx = 0;
  let bootClosed = false;

  const interval = setInterval(() => {
    progress = Math.min(100, progress + Math.floor(Math.random() * 14) + 7);
    bootBar.style.width = `${progress}%`;
    bootProgressbar.setAttribute("aria-valuenow", String(progress));
    bootPct.textContent = `${String(progress).padStart(3, "0")}%`;

    if (lineIdx < logLines.length) {
      const [ts, msg, status] = logLines[lineIdx];
      bootTask.textContent = msg;
      const row = document.createElement("div");
      row.className = "boot-log-line";
      row.innerHTML = `<span class="ts">[${ts}]</span><span>${msg}</span><span class="ok">[${status}]</span>`;
      bootLog.appendChild(row);
      bootLog.scrollTop = bootLog.scrollHeight;
      lineIdx++;
    }

    if (progress >= 100) {
      clearInterval(interval);
      bootTask.textContent = "ORBITAL TELEMETRY NOMINAL. AWAITING OPERATOR ENTRY.";
    }
  }, 150);

  function onBootKeydown(e) {
    if (!STATE.bootActive) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (document.activeElement === btnMuted || document.activeElement === btnSkip) {
        dismissBoot(false);
      } else {
        dismissBoot(true);
      }
    } else if (e.key === "Escape" || e.key === " ") {
      e.preventDefault();
      dismissBoot(false);
    }
  }
  window.addEventListener("keydown", onBootKeydown);

  function dismissBoot(withSound) {
    if (bootClosed) return;
    bootClosed = true;
    STATE.bootActive = false;
    clearInterval(interval);
    window.removeEventListener("keydown", onBootKeydown);

    STATE.soundEnabled = Boolean(withSound);
    updateHudButtons();
    if (withSound) SFX.playBootChime();

    bootScreen.classList.add("is-hidden");
    bootScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-loading");

    if (STATE.lenis) STATE.lenis.start();
    fitHeroWordmark();
    fitLetsTalk();
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();

    if (window.gsap && !STATE.reducedMotion) {
      gsap.fromTo(
        "#hero-wordmark",
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.3, ease: "expo.out", delay: 0.15 }
      );
      gsap.fromTo(
        ".hero-top-meta, .hero-subbar",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: "power3.out", delay: 0.35 }
      );
    }
  }

  btnSound.addEventListener("click", () => dismissBoot(true));
  btnMuted.addEventListener("click", () => dismissBoot(false));
  btnSkip.addEventListener("click", () => dismissBoot(false));
}

/**
 * ============================================================================
 * 05 // THREE.JS REALISTIC EARTH & .GLB SATELLITE HERO SCENE
 * ============================================================================
 */
function initOrbitalScene() {
  const container = document.getElementById("webgl-container");
  const canvas = document.getElementById("orbital-canvas");
  let isMobile = window.innerWidth < 768;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      powerPreference: "high-performance",
      alpha: false
    });
  } catch (err) {
    console.error("[OrbitalScene] WebGL unavailable, enabling gradient fallback:", err);
    container.classList.add("webgl-fallback");
    return;
  }

  const getCappedPixelRatio = () =>
    Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);

  const initialDpr = getCappedPixelRatio();
  renderer.setPixelRatio(initialDpr);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070d);

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0.35, isMobile ? 9.5 : 7.1);

  // Post-processing with RenderPass -> UnrealBloomPass -> OutputPass
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(initialDpr);
  composer.addPass(new RenderPass(scene, camera));

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    isMobile ? 0.24 : 0.32,
    0.42,
    0.86
  );
  composer.addPass(bloomPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // Studio environment reflections for metallic satellite surfaces
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x0b1930);
  const envLight1 = new THREE.Mesh(
    new THREE.SphereGeometry(5, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  envLight1.position.set(20, 15, 20);
  const envLight2 = new THREE.Mesh(
    new THREE.SphereGeometry(6, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00e5ff })
  );
  envLight2.position.set(-20, -10, -15);
  envScene.add(envLight1, envLight2);
  const envRT = pmremGenerator.fromScene(envScene, 0.04);
  scene.environment = envRT.texture;
  pmremGenerator.dispose();

  // Lighting
  const sunDirection = new THREE.Vector3(5, 2.2, 4).normalize();
  const sunLight = new THREE.DirectionalLight(0xfff6e8, 2.6);
  sunLight.position.copy(sunDirection).multiplyScalar(25);
  scene.add(sunLight);

  const earthAlbedoLight = new THREE.DirectionalLight(0x00aaff, 0.85);
  earthAlbedoLight.position.set(-8, -5, -4);
  scene.add(earthAlbedoLight);

  const ambientLight = new THREE.AmbientLight(0x1b2b4a, 0.85);
  scene.add(ambientLight);

  // -------------------------------------------------------------------------
  // A. EARTH SYSTEM
  // -------------------------------------------------------------------------
  const earthGroup = new THREE.Group();
  earthGroup.position.set(0, 0.32, 0);
  scene.add(earthGroup);

  const fallbackMaps = generateProceduralEarthTextures();

  const earthGeo = new THREE.SphereGeometry(1.95, isMobile ? 48 : 72, isMobile ? 48 : 72);
  const earthMat = new THREE.MeshPhongMaterial({
    map: fallbackMaps.dayMap,
    bumpMap: fallbackMaps.bumpMap,
    bumpScale: 0.03,
    specularMap: fallbackMaps.specMap,
    specular: new THREE.Color(0x1e5c8a),
    shininess: 22,
    emissive: new THREE.Color(0xffb84d),
    emissiveMap: fallbackMaps.nightMap,
    emissiveIntensity: 0.72
  });

  earthMat.onBeforeCompile = (shader) => {
    shader.uniforms.uSunDir = { value: sunDirection };
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `
      #ifdef USE_EMISSIVEMAP
        vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
        float dayFactor = dot( normalize(vNormal), normalize( (viewMatrix * vec4(1.0, 0.4, 0.8, 0.0)).xyz ) );
        float nightMask = smoothstep(0.25, -0.35, dayFactor);
        totalEmissiveRadiance *= emissiveColor.rgb * (0.14 + nightMask * 1.3);
      #endif
      `
    );
  };

  const earthMesh = new THREE.Mesh(earthGeo, earthMat);
  earthMesh.rotation.z = THREE.MathUtils.degToRad(23.4);
  earthGroup.add(earthMesh);

  // Cloud Layer
  const cloudGeo = new THREE.SphereGeometry(1.976, isMobile ? 40 : 64, isMobile ? 40 : 64);
  const cloudMat = new THREE.MeshLambertMaterial({
    map: fallbackMaps.cloudMap,
    transparent: true,
    opacity: 0.46,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
  earthGroup.add(cloudMesh);

  // Crisp GLSL Fresnel Atmosphere Rim
  const atmosGeo = new THREE.SphereGeometry(2.14, isMobile ? 40 : 64, isMobile ? 40 : 64);
  const atmosMat = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      void main() {
        float intensity = pow(0.58 + dot(vNormal, vPositionNormal), 3.6);
        vec3 aqua = vec3(0.0, 0.88, 1.0);
        vec3 deepBlue = vec3(0.0, 0.28, 0.85);
        vec3 col = mix(deepBlue, aqua, intensity);
        gl_FragColor = vec4(col, clamp(intensity * 0.5, 0.0, 0.62));
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
  });
  const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
  earthGroup.add(atmosMesh);

  // Upgrade to NASA/Three.js CDN textures seamlessly in background
  const texLoader = new THREE.TextureLoader();
  texLoader.setCrossOrigin("anonymous");
  const cdnBase = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r160/examples/textures/planets/";
  texLoader.load(`${cdnBase}earth_atmos_2048.jpg`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    const old = earthMat.map;
    earthMat.map = t;
    earthMat.needsUpdate = true;
    if (old) old.dispose();
  });
  texLoader.load(`${cdnBase}earth_specular_2048.jpg`, (t) => {
    t.colorSpace = THREE.NoColorSpace;
    const old = earthMat.specularMap;
    earthMat.specularMap = t;
    earthMat.needsUpdate = true;
    if (old) old.dispose();
  });
  texLoader.load(`${cdnBase}earth_normal_2048.jpg`, (t) => {
    t.colorSpace = THREE.NoColorSpace;
    const old = earthMat.bumpMap;
    earthMat.bumpMap = t;
    earthMat.needsUpdate = true;
    if (old) old.dispose();
  });
  texLoader.load(`${cdnBase}earth_lights_2048.png`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    const old = earthMat.emissiveMap;
    earthMat.emissiveMap = t;
    earthMat.needsUpdate = true;
    if (old) old.dispose();
  });
  texLoader.load(`${cdnBase}earth_clouds_1024.png`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    const old = cloudMat.map;
    cloudMat.map = t;
    cloudMat.needsUpdate = true;
    if (old) old.dispose();
  });

  // -------------------------------------------------------------------------
  // B. ORBIT PATH & .GLB SATELLITE LOADER (WITH DRACO, MESHOPT & KTX2)
  // -------------------------------------------------------------------------
  const orbitPivot = new THREE.Group();
  orbitPivot.rotation.x = THREE.MathUtils.degToRad(22);
  orbitPivot.rotation.z = THREE.MathUtils.degToRad(-19);
  earthGroup.add(orbitPivot);

  const orbitRadius = 2.85;
  const orbitPoints = [];
  const orbitColors = [];
  const segments = 180;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    orbitPoints.push(new THREE.Vector3(Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius));
    const fade = 0.2 + 0.8 * Math.pow(i / segments, 2.0);
    orbitColors.push(0 * fade, 0.9 * fade, 1.0 * fade);
  }
  const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
  orbitLineGeo.setAttribute("color", new THREE.Float32BufferAttribute(orbitColors, 3));
  const orbitLineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });
  const orbitRing = new THREE.Line(orbitLineGeo, orbitLineMat);
  orbitPivot.add(orbitRing);

  const satelliteAnchor = new THREE.Group();
  orbitPivot.add(satelliteAnchor);

  const satKeyLight = new THREE.PointLight(0xffffff, 2.4, 4.5);
  satKeyLight.position.set(1.2, 1.2, 1.5);
  satelliteAnchor.add(satKeyLight);

  const satelliteAttitudeGroup = new THREE.Group();
  satelliteAnchor.add(satelliteAttitudeGroup);

  // Tiny glowing orbital beacon shown while loading (or if .glb file is missing)
  const beaconGeo = new THREE.SphereGeometry(0.065, 16, 16);
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xc6ff00 });
  const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
  satelliteAttitudeGroup.add(beaconMesh);

  let loadedSatelliteRoot = null;
  let loadedSatelliteMeshes = [];
  const statusHudEl = document.getElementById("sat-model-status");

  function setModelHudStatus(text, isError = false) {
    if (!statusHudEl) return;
    statusHudEl.textContent = text;
    statusHudEl.classList.toggle("is-error", isError);
  }

  function disposeModelHierarchy(rootObj) {
    if (!rootObj) return;
    rootObj.traverse((node) => {
      if (node.isMesh) {
        if (node.geometry) node.geometry.dispose();
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((m) => {
          if (!m) return;
          Object.values(m).forEach((val) => {
            if (val && typeof val.dispose === "function" && val.isTexture) {
              val.dispose();
            }
          });
          m.dispose();
        });
      }
    });
  }

  const gltfLoader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
  gltfLoader.setDRACOLoader(dracoLoader);

  try {
    if (MeshoptDecoder) gltfLoader.setMeshoptDecoder(MeshoptDecoder);
  } catch (e) {
    console.warn("[OrbitalScene] MeshoptDecoder setup skipped:", e);
  }

  try {
    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath("https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/basis/");
    ktx2Loader.detectSupport(renderer);
    gltfLoader.setKTX2Loader(ktx2Loader);
  } catch (e) {
    console.warn("[OrbitalScene] KTX2Loader setup skipped:", e);
  }

  const candidateUrls = [
    CONFIG.satelliteGlbPath,
    ...(Array.isArray(CONFIG.satelliteGlbFallbackUrls) ? CONFIG.satelliteGlbFallbackUrls : [])
  ].filter(Boolean);

  function tryLoadSatelliteQueue(urls, idx = 0) {
    if (idx >= urls.length) {
      beaconMesh.visible = true;
      setModelHudStatus("MODEL NOT FOUND: add assets/satellite.glb", true);
      console.error(
        `[OrbitalScene] Satellite .glb model could not be loaded. Checked paths: ${urls.join(", ")}. Place a valid .glb model at ${CONFIG.satelliteGlbPath}.`
      );
      return;
    }

    const currentUrl = urls[idx];
    setModelHudStatus("ACQUIRING SATELLITE MODEL...", false);

    gltfLoader.load(
      currentUrl,
      (gltf) => {
        if (loadedSatelliteRoot) {
          satelliteAttitudeGroup.remove(loadedSatelliteRoot);
          disposeModelHierarchy(loadedSatelliteRoot);
        }
        loadedSatelliteMeshes = [];

        const rawModel = gltf.scene || (gltf.scenes && gltf.scenes[0]);
        if (!rawModel) {
          tryLoadSatelliteQueue(urls, idx + 1);
          return;
        }

        rawModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            loadedSatelliteMeshes.push(child);

            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((mat) => {
              if (!mat) return;
              if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
              if (mat.emissiveMap) mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
              if (mat.normalMap) mat.normalMap.colorSpace = THREE.NoColorSpace;
              if (mat.roughnessMap) mat.roughnessMap.colorSpace = THREE.NoColorSpace;
              if (mat.metalnessMap) mat.metalnessMap.colorSpace = THREE.NoColorSpace;
              if ("envMapIntensity" in mat) {
                mat.envMapIntensity = 1.35;
              }
              mat.needsUpdate = true;
            });
          }
        });

        rawModel.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(rawModel);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const targetSize = Number(CONFIG.satelliteTargetSize) || 0.9;
        const scaleFactor = targetSize / maxDim;

        rawModel.position.sub(center);

        const normWrapper = new THREE.Group();
        normWrapper.add(rawModel);
        normWrapper.scale.setScalar(scaleFactor);

        const rotOff = CONFIG.satelliteRotationOffset || { x: 0, y: 0, z: 0 };
        normWrapper.rotation.set(
          THREE.MathUtils.degToRad(Number(rotOff.x) || 0),
          THREE.MathUtils.degToRad(Number(rotOff.y) || 0),
          THREE.MathUtils.degToRad(Number(rotOff.z) || 0)
        );

        loadedSatelliteRoot = normWrapper;
        satelliteAttitudeGroup.add(loadedSatelliteRoot);
        beaconMesh.visible = false;
        setModelHudStatus("SAT MODEL // LOCKED", false);
      },
      undefined,
      (err) => {
        console.warn(`[OrbitalScene] Could not load "${currentUrl}", trying next fallback if available.`, err);
        tryLoadSatelliteQueue(urls, idx + 1);
      }
    );
  }

  tryLoadSatelliteQueue(candidateUrls, 0);

  // -------------------------------------------------------------------------
  // C. DEEP STARFIELD
  // -------------------------------------------------------------------------
  const starCount = isMobile ? 900 : 2200;
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i += 3) {
    const r = 28 + Math.random() * 65;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    starPos[i] = r * Math.sin(phi) * Math.cos(theta);
    starPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    starPos[i + 2] = r * Math.cos(phi);
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xd8ecff,
    size: 0.085,
    transparent: true,
    opacity: 0.8
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // -------------------------------------------------------------------------
  // D. RAYCASTER FOR CLICKING THE LOADED SATELLITE (EASTER EGG PING)
  // -------------------------------------------------------------------------
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  window.addEventListener("pointerdown", (e) => {
    if (STATE.bootActive || STATE.modalOpen) return;
    if (e.target.closest("a, button, input, .project-row, .photo-card, .modal-backdrop, .section--contact")) return;
    if (loadedSatelliteMeshes.length === 0) return;

    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(loadedSatelliteMeshes, true);
    if (hits.length > 0) {
      triggerSatellitePing();
    }
  });

  // -------------------------------------------------------------------------
  // E. ANIMATION & SCROLL-COUPLED ADCS TELEMETRY LOOP
  // -------------------------------------------------------------------------
  const clock = new THREE.Clock();
  const rollEl = document.getElementById("tel-roll");
  const pitchEl = document.getElementById("tel-pitch");
  const yawEl = document.getElementById("tel-yaw");
  const altEl = document.getElementById("tel-alt");

  function formatSignedAngle(degValue) {
    let clean = degValue % 180;
    if (Math.abs(clean) < 0.05) clean = 0;
    const sign = clean >= 0 ? "+" : "-";
    return `${sign}${Math.abs(clean).toFixed(1)}°`;
  }

  let elapsedAcc = 0;

  function animate() {
    requestAnimationFrame(animate);
    if (STATE.tabHidden) {
      clock.getDelta();
      return;
    }

    const dt = Math.min(clock.getDelta(), 0.1);
    const motionScale = STATE.reducedMotion ? 0.12 : 1;
    elapsedAcc += dt * motionScale;

    STATE.mouseX += (STATE.targetMouseX - STATE.mouseX) * 0.05;
    STATE.mouseY += (STATE.targetMouseY - STATE.mouseY) * 0.05;

    earthMesh.rotation.y = elapsedAcc * 0.05 + STATE.scrollProgress * 1.8;
    cloudMesh.rotation.y = elapsedAcc * 0.068 + STATE.scrollProgress * 2.1;
    stars.rotation.y = elapsedAcc * 0.008;

    const orbitAngle = 1.15 + elapsedAcc * 0.26 + STATE.scrollProgress * Math.PI * 2.4;
    satelliteAnchor.position.set(
      Math.cos(orbitAngle) * orbitRadius,
      Math.sin(orbitAngle * 2) * 0.12,
      Math.sin(orbitAngle) * orbitRadius
    );
    orbitRing.rotation.y = -orbitAngle;

    satelliteAnchor.lookAt(earthGroup.position);
    satelliteAttitudeGroup.rotation.x = Math.sin(elapsedAcc * 0.9) * 0.18 + STATE.scrollProgress * 0.8;
    satelliteAttitudeGroup.rotation.y = elapsedAcc * 0.4;
    satelliteAttitudeGroup.rotation.z = Math.cos(elapsedAcc * 0.7) * 0.15 + STATE.mouseX * 0.35;

    const camRadius = (isMobile ? 9.5 : 7.1) + Math.sin(STATE.scrollProgress * Math.PI) * 1.1;
    camera.position.x = Math.sin(STATE.scrollProgress * 1.4) * 1.2 + STATE.mouseX * 0.42;
    camera.position.y = 0.35 - STATE.scrollProgress * 0.75 + STATE.mouseY * 0.32;
    camera.position.z = camRadius;
    camera.lookAt(0, earthGroup.position.y * 0.4, 0);

    const rollDeg = THREE.MathUtils.radToDeg(satelliteAttitudeGroup.rotation.x);
    const pitchDeg = THREE.MathUtils.radToDeg(satelliteAttitudeGroup.rotation.z);
    const yawDeg = ((THREE.MathUtils.radToDeg(orbitAngle) % 360) + 360) % 360 - 180;
    const altKm = 601.4 + Math.sin(orbitAngle) * 3.8;

    rollEl.textContent = formatSignedAngle(rollDeg);
    pitchEl.textContent = formatSignedAngle(pitchDeg);
    yawEl.textContent = formatSignedAngle(yawDeg);
    if (altEl) altEl.textContent = `${altKm.toFixed(1)} KM`;

    composer.render();
  }

  animate();

  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 768;
    const dpr = getCappedPixelRatio();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(dpr);
    composer.setSize(window.innerWidth, window.innerHeight);
    bloomPass.resolution.set(window.innerWidth, window.innerHeight);
  });
}

function generateProceduralEarthTextures() {
  const dayCanvas = document.createElement("canvas");
  dayCanvas.width = 1024;
  dayCanvas.height = 512;
  const ctx = dayCanvas.getContext("2d");

  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
  oceanGrad.addColorStop(0, "#0b2240");
  oceanGrad.addColorStop(0.5, "#061730");
  oceanGrad.addColorStop(1, "#0b2240");
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 1024, 512);

  const specCanvas = document.createElement("canvas");
  specCanvas.width = 1024;
  specCanvas.height = 512;
  const sCtx = specCanvas.getContext("2d");
  sCtx.fillStyle = "#ffffff";
  sCtx.fillRect(0, 0, 1024, 512);

  const nightCanvas = document.createElement("canvas");
  nightCanvas.width = 1024;
  nightCanvas.height = 512;
  const nCtx = nightCanvas.getContext("2d");
  nCtx.fillStyle = "#000000";
  nCtx.fillRect(0, 0, 1024, 512);

  const continents = [
    [220, 170, 95, 70],
    [290, 310, 65, 95],
    [510, 155, 80, 55],
    [540, 265, 75, 85],
    [680, 185, 130, 80],
    [790, 355, 65, 45]
  ];

  continents.forEach(([cx, cy, rx, ry]) => {
    for (let i = 0; i < 45; i++) {
      const ox = cx + (Math.random() - 0.5) * rx * 1.4;
      const oy = cy + (Math.random() - 0.5) * ry * 1.4;
      const r = 14 + Math.random() * 36;

      ctx.fillStyle = i % 3 === 0 ? "#1d4734" : "#28593f";
      ctx.beginPath();
      ctx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.fill();

      sCtx.fillStyle = "#111111";
      sCtx.beginPath();
      sCtx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.fill();

      nCtx.fillStyle = "rgba(255, 195, 95, 0.85)";
      for (let c = 0; c < 6; c++) {
        nCtx.fillRect(ox + (Math.random() - 0.5) * r, oy + (Math.random() - 0.5) * r, 2.2, 2.2);
      }
    }
  });

  const cloudCanvas = document.createElement("canvas");
  cloudCanvas.width = 512;
  cloudCanvas.height = 256;
  const cCtx = cloudCanvas.getContext("2d");
  for (let i = 0; i < 160; i++) {
    cCtx.fillStyle = `rgba(255, 255, 255, ${0.08 + Math.random() * 0.22})`;
    cCtx.beginPath();
    cCtx.ellipse(
      Math.random() * 512,
      Math.random() * 256,
      20 + Math.random() * 55,
      4 + Math.random() * 10,
      0,
      0,
      Math.PI * 2
    );
    cCtx.fill();
  }

  const dayMap = new THREE.CanvasTexture(dayCanvas);
  dayMap.colorSpace = THREE.SRGBColorSpace;

  const specMap = new THREE.CanvasTexture(specCanvas);
  const bumpMap = new THREE.CanvasTexture(specCanvas);

  const nightMap = new THREE.CanvasTexture(nightCanvas);
  nightMap.colorSpace = THREE.SRGBColorSpace;

  const cloudMap = new THREE.CanvasTexture(cloudCanvas);
  cloudMap.colorSpace = THREE.SRGBColorSpace;

  return { dayMap, specMap, bumpMap, nightMap, cloudMap };
}

function triggerSatellitePing() {
  SFX.playSatellitePing();
  STATE.satellitePingCount++;
  const messages = [
    "PONG // SATELLITE TELEMETRY: QUATERNIONS NORMALIZED & CAFFEINATED",
    "PING ACK // B-DOT MAGNETORQUERS DAMPING AT 0.002 RAD/S",
    "DOWNLINK // GREETINGS FROM 601.8 KM OVER MANIPAL!",
    "SYS.OK // NO REACTION WHEELS WERE HARMED IN THIS ORBIT"
  ];
  const toast = document.getElementById("satellite-toast");
  toast.textContent = messages[(STATE.satellitePingCount - 1) % messages.length];
  toast.classList.add("is-visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

/**
 * ============================================================================
 * 06 // LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER CHOREOGRAPHY
 * ============================================================================
 */
function initScrollAndMotion() {
  if (!window.gsap || !window.ScrollTrigger || !window.Lenis) return;
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });
  STATE.lenis = lenis;

  if (STATE.bootActive) {
    lenis.stop();
  }

  lenis.on("scroll", (e) => {
    ScrollTrigger.update();
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    STATE.scrollProgress = maxScroll > 0 ? e.scroll / maxScroll : 0;
    STATE.scrollVelocity = e.velocity || 0;
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        SFX.playClick();
        lenis.scrollTo(target, { offset: 0 });
      }
    });
  });

  // Back to Top button in Section 07
  const backToTopBtn = document.getElementById("btn-back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      SFX.playClick();
      lenis.scrollTo(0);
    });
  }

  // Word-by-word illumination on the About editorial manifesto
  const scrubWords = gsap.utils.toArray(".scrub-word");
  ScrollTrigger.create({
    trigger: "#about-scrub-text",
    start: "top 82%",
    end: "bottom 42%",
    scrub: true,
    onUpdate: (self) => {
      const litCount = Math.floor(self.progress * scrubWords.length);
      scrubWords.forEach((word, i) => {
        word.classList.toggle("is-lit", i <= litCount);
      });
    }
  });

  gsap.utils.toArray(".display-title").forEach((title) => {
    gsap.fromTo(
      title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%"
        }
      }
    );
  });

  // Pinned Horizontal Gallery with Pointer Capture & Click-vs-Drag Threshold
  const galleryTrack = document.getElementById("gallery-track");
  const gallerySection = document.getElementById("gallery");
  const viewport = document.getElementById("gallery-viewport");

  const getScrollAmount = () =>
    -Math.max(0, galleryTrack.scrollWidth - window.innerWidth + 96);

  gsap.to(galleryTrack, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: gallerySection,
      start: "top top",
      end: () => `+=${Math.max(400, galleryTrack.scrollWidth)}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (STATE.reducedMotion) return;
        const skew = THREE.MathUtils.clamp(self.getVelocity() / -350, -5, 5);
        gsap.to(".photo-card", {
          skewX: skew,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    }
  });

  let isDragging = false;
  let dragMovedBeyondThreshold = false;
  let startX = 0;
  let lastX = 0;
  let activePointerId = null;

  function endGalleryDrag() {
    if (!isDragging) return;
    isDragging = false;
    if (activePointerId !== null && viewport.hasPointerCapture(activePointerId)) {
      try {
        viewport.releasePointerCapture(activePointerId);
      } catch {
        // ignore
      }
    }
    activePointerId = null;
  }

  viewport.addEventListener("pointerdown", (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    isDragging = true;
    dragMovedBeyondThreshold = false;
    startX = e.clientX;
    lastX = e.clientX;
    activePointerId = e.pointerId;
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const totalDx = Math.abs(e.clientX - startX);
    if (!dragMovedBeyondThreshold && totalDx > 7) {
      dragMovedBeyondThreshold = true;
      try {
        viewport.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    if (dragMovedBeyondThreshold) {
      const dx = lastX - e.clientX;
      lastX = e.clientX;
      const baseScroll = STATE.lenis ? STATE.lenis.scroll : window.scrollY;
      if (STATE.lenis) {
        STATE.lenis.scrollTo(baseScroll + dx * 1.4, { immediate: true });
      } else {
        window.scrollTo(0, baseScroll + dx * 1.4);
      }
    }
  });

  viewport.addEventListener("pointerup", endGalleryDrag);
  viewport.addEventListener("pointercancel", endGalleryDrag);
  window.addEventListener("blur", endGalleryDrag);

  viewport.addEventListener(
    "click",
    (e) => {
      if (dragMovedBeyondThreshold) {
        e.stopPropagation();
        e.preventDefault();
        dragMovedBeyondThreshold = false;
      }
    },
    true
  );

  // Smoothly fade out the 3D Earth canvas & ambient overlays as Section 07 (#contact) enters
  gsap.to(["#webgl-container", "#ambient-grid", "#y2k-lens-flare"], {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 95%",
      end: "top 20%",
      scrub: true
    }
  });

  // Staggered character slide-up reveal for "LET'S TALK" on scroll into view
  const ltChars = gsap.utils.toArray("#lets-talk-cta .lt-char");
  if (ltChars.length > 0) {
    gsap.fromTo(
      ltChars,
      { yPercent: 115 },
      {
        yPercent: 0,
        duration: 0.95,
        stagger: 0.045,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#lets-talk-stage",
          start: "top 82%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }
}

/**
 * ============================================================================
 * 07 // CUSTOM CURSOR, SPARKLE TRAIL, CURSOR TOAST & ACCESSIBLE MODALS
 * ============================================================================
 */
function initCursorAndInteractions() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const label = document.getElementById("cursor-label");
  const cursorToast = document.getElementById("cursor-toast");
  const sparkleCanvas = document.getElementById("sparkle-canvas");
  const sCtx = sparkleCanvas.getContext("2d");

  sparkleCanvas.width = window.innerWidth;
  sparkleCanvas.height = window.innerHeight;
  window.addEventListener("resize", () => {
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
  });

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let rx = cx;
  let ry = cy;
  let cursorInitialized = false;
  const sparkles = [];

  function positionToastNearPoint(x, y) {
    if (!cursorToast) return;
    const clampedX = Math.max(110, Math.min(window.innerWidth - 110, x));
    const clampedY = Math.max(56, Math.min(window.innerHeight - 36, y));
    cursorToast.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0) translate(-50%, -155%)`;
  }

  window.addEventListener("pointermove", (e) => {
    cx = e.clientX;
    cy = e.clientY;
    STATE.pointerClientX = cx;
    STATE.pointerClientY = cy;

    if (!cursorInitialized) {
      cursorInitialized = true;
      rx = cx;
      ry = cy;
      document.body.classList.add("custom-cursor-ready");
    }

    STATE.targetMouseX = (cx / window.innerWidth) * 2 - 1;
    STATE.targetMouseY = -(cy / window.innerHeight) * 2 + 1;

    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    if (cursorToast && cursorToast.classList.contains("is-visible")) {
      positionToastNearPoint(cx, cy);
    }

    const spawnChance = STATE.overdrive ? 0.8 : 0.3;
    if (!STATE.reducedMotion && !STATE.tabHidden && Math.random() < spawnChance) {
      sparkles.push({
        x: cx + (Math.random() - 0.5) * 14,
        y: cy + (Math.random() - 0.5) * 14,
        size: STATE.overdrive ? 4 + Math.random() * 5.5 : 2.5 + Math.random() * 3.5,
        alpha: 1,
        color: Math.random() > 0.3 ? "#00e5ff" : STATE.overdrive ? "#ff2a85" : "#ffffff"
      });
    }
  });

  function renderCursorLoop() {
    requestAnimationFrame(renderCursorLoop);
    if (STATE.tabHidden) return;

    if (cursorInitialized) {
      rx += (cx - rx) * 0.2;
      ry += (cy - ry) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    }

    sCtx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    if (STATE.reducedMotion) {
      sparkles.length = 0;
      return;
    }

    for (let i = sparkles.length - 1; i >= 0; i--) {
      const p = sparkles[i];
      p.y += 0.35;
      p.alpha -= 0.032;
      if (p.alpha <= 0) {
        sparkles.splice(i, 1);
        continue;
      }
      sCtx.save();
      sCtx.translate(p.x, p.y);
      sCtx.fillStyle = p.color;
      sCtx.globalAlpha = p.alpha;
      sCtx.beginPath();
      const s = p.size;
      sCtx.moveTo(0, -s);
      sCtx.quadraticCurveTo(0, 0, s, 0);
      sCtx.quadraticCurveTo(0, 0, 0, s);
      sCtx.quadraticCurveTo(0, 0, -s, 0);
      sCtx.quadraticCurveTo(0, 0, 0, -s);
      sCtx.fill();
      sCtx.restore();
    }
  }
  renderCursorLoop();

  // Anti-flicker hover tracking using relatedTarget containment check
  let activeCursorEl = null;

  document.addEventListener("pointerover", (e) => {
    const target = e.target.closest("[data-cursor]");
    if (target && target !== activeCursorEl) {
      activeCursorEl = target;
      ring.classList.add("is-active");
      label.textContent = target.getAttribute("data-cursor");
      SFX.playHover();
    }
  });

  document.addEventListener("pointerout", (e) => {
    if (!activeCursorEl) return;
    const related = e.relatedTarget;
    if (!related || !activeCursorEl.contains(related)) {
      const nextCursorEl = related ? related.closest?.("[data-cursor]") : null;
      if (nextCursorEl) {
        activeCursorEl = nextCursorEl;
        ring.classList.add("is-active");
        label.textContent = nextCursorEl.getAttribute("data-cursor");
      } else {
        activeCursorEl = null;
        ring.classList.remove("is-active");
      }
    }
  });

  // -------------------------------------------------------------------------
  // PROJECT HOVER PREVIEW & ACCESSIBLE MODAL
  // -------------------------------------------------------------------------
  const previewBox = document.getElementById("project-hover-preview");
  const previewCanvas = document.getElementById("preview-canvas");
  const previewTag = document.getElementById("preview-tag");
  const previewYear = document.getElementById("preview-year");

  const projectModal = document.getElementById("project-modal");
  const modalCanvas = document.getElementById("modal-canvas");
  const modalCloseBtn = document.getElementById("modal-close");

  document.querySelectorAll(".project-row").forEach((row) => {
    const idx = Number(row.dataset.index);
    const proj = CONFIG.projects[idx];

    row.addEventListener("pointerenter", () => {
      drawProjectSchematic(previewCanvas, proj);
      previewTag.textContent = `SYS // ${proj.id}`;
      previewYear.textContent = proj.year;
      previewBox.classList.add("is-visible");
    });

    row.addEventListener("pointermove", (e) => {
      const offsetX = e.clientX + 220 + 180 > window.innerWidth ? -210 : 220;
      previewBox.style.left = `${e.clientX + offsetX}px`;
      previewBox.style.top = `${e.clientY}px`;
    });

    row.addEventListener("pointerleave", () => {
      previewBox.classList.remove("is-visible");
    });

    const triggerOpen = () => {
      SFX.playClick();
      previewBox.classList.remove("is-visible");
      openProjectModal(proj, modalCanvas, row);
    };

    row.addEventListener("click", triggerOpen);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerOpen();
      }
    });
  });

  modalCloseBtn.addEventListener("click", () => closeAccessibleModal(projectModal));
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeAccessibleModal(projectModal);
  });

  // -------------------------------------------------------------------------
  // PHOTO GALLERY LIGHTBOX
  // -------------------------------------------------------------------------
  const lightbox = document.getElementById("lightbox-modal");
  const lbWrap = document.getElementById("lightbox-media-wrap");
  const lbCloseBtn = document.getElementById("lightbox-close");

  document.querySelectorAll(".photo-card").forEach((card) => {
    const triggerLightbox = () => {
      SFX.playClick();
      const idx = Number(card.dataset.photoIndex);
      const ph = CONFIG.photos[idx];
      document.getElementById("lightbox-meta").textContent = ph.code;
      document.getElementById("lightbox-caption").textContent = ph.caption;
      document.getElementById("lightbox-date").textContent = ph.date;

      lbWrap.innerHTML = "";
      const sourceMedia = card.querySelector("img, canvas");
      if (sourceMedia && sourceMedia.tagName === "CANVAS") {
        lbWrap.appendChild(createFallbackPhotoCanvas(ph, idx));
      } else if (sourceMedia) {
        const cloneImg = sourceMedia.cloneNode(true);
        lbWrap.appendChild(cloneImg);
      }
      openAccessibleModal(lightbox, lbCloseBtn, card);
    };

    card.addEventListener("click", triggerLightbox);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerLightbox();
      }
    });
  });

  lbCloseBtn.addEventListener("click", () => closeAccessibleModal(lightbox));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeAccessibleModal(lightbox);
  });

  // -------------------------------------------------------------------------
  // CLIPBOARD COPY + CURSOR TOAST FOR "LET'S TALK" AND FOOTER EMAIL
  // -------------------------------------------------------------------------
  let toastResetTimer = null;

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fall through to textarea fallback
      }
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return Boolean(ok);
    } catch {
      return false;
    }
  }

  function showCursorToast(message, isError, anchorEl) {
    if (!cursorToast) return;
    clearTimeout(toastResetTimer);

    let tx = STATE.pointerClientX;
    let ty = STATE.pointerClientY;
    if (!cursorInitialized && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      tx = rect.left + rect.width / 2;
      ty = rect.top;
    }

    positionToastNearPoint(tx, ty);
    cursorToast.textContent = message;
    cursorToast.classList.toggle("is-error", Boolean(isError));
    cursorToast.classList.add("is-visible");

    toastResetTimer = setTimeout(() => {
      cursorToast.classList.remove("is-visible", "is-error");
      cursorToast.textContent = "";
    }, 2500);
  }

  async function handleEmailCopyInteraction(triggerEl) {
    SFX.playClick();
    const succeeded = await copyTextToClipboard(CONFIG.email);
    if (succeeded) {
      showCursorToast("EMAIL COPIED", false, triggerEl);
    } else {
      showCursorToast("COPY FAILED // PRESS CTRL+C", true, triggerEl);
    }
  }

  // Clicking "LET'S TALK" opens mailto: (via native <a href="mailto:...">) AND copies email
  const letsTalkCta = document.getElementById("lets-talk-cta");
  if (letsTalkCta) {
    letsTalkCta.addEventListener("click", () => {
      handleEmailCopyInteraction(letsTalkCta);
    });
  }

  // Clicking the bottom-left email copies it and shows the same toast
  const footerEmailBtn = document.getElementById("footer-email-copy");
  if (footerEmailBtn) {
    footerEmailBtn.addEventListener("click", () => {
      handleEmailCopyInteraction(footerEmailBtn);
    });
  }
}

function openAccessibleModal(modalEl, initialFocusEl, triggerEl) {
  STATE.lastFocusedElement = triggerEl || document.activeElement;
  STATE.modalOpen = true;
  document.body.classList.add("modal-open");
  if (STATE.lenis) STATE.lenis.stop();

  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    if (initialFocusEl) initialFocusEl.focus();
  });
}

function closeAccessibleModal(modalEl) {
  if (!modalEl.classList.contains("is-open")) return;
  SFX.playClick();
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  STATE.modalOpen = false;
  document.body.classList.remove("modal-open");
  if (STATE.lenis && !STATE.bootActive) STATE.lenis.start();

  if (STATE.lastFocusedElement && typeof STATE.lastFocusedElement.focus === "function") {
    STATE.lastFocusedElement.focus();
  }
}

function drawProjectSchematic(canvas, proj) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = "#060b16";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(0, 229, 255, 0.08)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  ctx.strokeStyle = proj.accent || "#00e5ff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.48, h * 0.28, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.strokeRect(w * 0.32, h * 0.28, w * 0.36, h * 0.4);

  ctx.strokeStyle = proj.accent;
  ctx.beginPath();
  for (let x = 40; x < w - 40; x += 4) {
    const y = h * 0.48 + Math.sin(x * 0.04 + Number(proj.id)) * 28;
    if (x === 40) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 18px 'Syne', sans-serif";
  ctx.fillText(proj.name.toUpperCase(), 24, h - 42);
  ctx.fillStyle = proj.accent;
  ctx.font = "400 12px 'JetBrains Mono', monospace";
  ctx.fillText(`TELEMETRY NODE // ${proj.tech.join(" • ")}`, 24, h - 20);
}

function openProjectModal(proj, canvas, triggerEl) {
  drawProjectSchematic(canvas, proj);
  document.getElementById("modal-index").textContent = `SYSTEM ARCHIVE // ${proj.id} (${proj.year})`;
  document.getElementById("modal-title").textContent = proj.name;
  document.getElementById("modal-desc").textContent = proj.summary;
  document.getElementById("modal-arch").textContent = `ARCHITECTURE // ${proj.architecture}`;
  document.getElementById("modal-tags").innerHTML = proj.tech
    .map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`)
    .join("");
  document.getElementById("modal-link").href = proj.link;

  const modalEl = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");
  openAccessibleModal(modalEl, closeBtn, triggerEl);
}

/**
 * ============================================================================
 * 08 // GUESTBOOK, ODOMETER, CLOCKS, HUD TOGGLES & KONAMI ROCKET
 * ============================================================================
 */
function initSystemsAndGuestbook() {
  // HUD bottom-right clock (HH:MM:SS IST)
  const hudClockEl = document.getElementById("local-clock");
  const updateHudClock = () => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("en-GB", {
      timeZone: CONFIG.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(now);
    if (hudClockEl) hudClockEl.textContent = `${formatted} IST`;
  };
  updateHudClock();
  setInterval(updateHudClock, 1000);

  // Section 07 Contact bottom-row clock ("MANIPAL HH:MM", Asia/Kolkata, updates every 30s)
  const contactClockEl = document.getElementById("contact-clock");
  const updateContactClock = () => {
    const now = new Date();
    const hhmm = new Intl.DateTimeFormat("en-GB", {
      timeZone: CONFIG.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now);
    if (contactClockEl) contactClockEl.textContent = `MANIPAL ${hhmm}`;
  };
  updateContactClock();
  setInterval(updateContactClock, 30000);

  // Retro 7-Digit Odometer using SafeStorage
  const odoKey = "rushil_orbital_passes_v2";
  const count = (Number(SafeStorage.get(odoKey, "20042")) || 20042) + 1;
  SafeStorage.set(odoKey, String(count));
  const odoContainer = document.getElementById("odometer-digits");
  odoContainer.innerHTML = String(count)
    .padStart(7, "0")
    .split("")
    .map((d) => `<span class="odo-digit">${escapeHtml(d)}</span>`)
    .join("");

  // Guestbook using SafeStorage
  const gbKey = "rushil_orbital_guestbook_v2";
  let entries = null;
  try {
    const raw = SafeStorage.get(gbKey, null);
    if (raw) entries = JSON.parse(raw);
  } catch {
    entries = null;
  }
  if (!Array.isArray(entries)) {
    entries = [...CONFIG.guestbookSeed];
  }

  const entriesContainer = document.getElementById("guestbook-entries");
  const countTag = document.getElementById("gb-count-tag");

  function renderGuestbook() {
    countTag.textContent = `${String(entries.length).padStart(2, "0")} ENTRIES`;
    entriesContainer.innerHTML = entries
      .map(
        (item) => `
        <div class="gb-entry">
          <div class="gb-entry-head">
            <span class="gb-author">${escapeHtml(item.name)}</span>
            <span class="gb-meta">${escapeHtml(item.origin || "EARTH")} // ${escapeHtml(item.time)}</span>
          </div>
          <p class="gb-body">${escapeHtml(item.msg)}</p>
        </div>`
      )
      .join("");
  }
  renderGuestbook();

  document.getElementById("guestbook-form").addEventListener("submit", (e) => {
    e.preventDefault();
    SFX.playSatellitePing();
    const nameInput = document.getElementById("gb-name");
    const originInput = document.getElementById("gb-origin");
    const msgInput = document.getElementById("gb-msg");

    const nameVal = nameInput.value.trim();
    const msgVal = msgInput.value.trim();
    if (!nameVal || !msgVal) return;

    entries.unshift({
      name: nameVal,
      origin: originInput.value.trim() || "LEO",
      msg: msgVal,
      time: "JUST NOW"
    });
    entries = entries.slice(0, 25);
    SafeStorage.set(gbKey, JSON.stringify(entries));
    nameInput.value = "";
    originInput.value = "";
    msgInput.value = "";
    renderGuestbook();
  });

  document.getElementById("toggle-overdrive").addEventListener("click", toggleOverdrive);
  document.getElementById("toggle-sound").addEventListener("click", () => {
    STATE.soundEnabled = !STATE.soundEnabled;
    updateHudButtons();
    if (STATE.soundEnabled) SFX.playSatellitePing();
  });
  document.getElementById("toggle-motion").addEventListener("click", () => {
    STATE.reducedMotion = !STATE.reducedMotion;
    syncReducedMotionClass();
    updateHudButtons();
    SFX.playClick();
  });

  const konamiSeq = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
  ];
  let konamiIdx = 0;

  window.addEventListener("keydown", (e) => {
    if (STATE.bootActive) return;

    const openModal = document.querySelector(".modal-backdrop.is-open");
    if (openModal && e.key === "Tab") {
      const focusables = openModal.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    if (e.key === "Escape") {
      if (openModal) {
        closeAccessibleModal(openModal);
      } else {
        toggleOverdrive();
      }
    }

    if (e.key.toLowerCase() === konamiSeq[konamiIdx].toLowerCase()) {
      konamiIdx++;
      if (konamiIdx === konamiSeq.length) {
        konamiIdx = 0;
        launchKonamiRocket();
      }
    } else {
      konamiIdx = 0;
    }
  });
}

function toggleOverdrive() {
  STATE.overdrive = !STATE.overdrive;
  document.body.classList.toggle("y2k-overdrive", STATE.overdrive);
  updateHudButtons();
  SFX.playClick();
}

function updateHudButtons() {
  const odBtn = document.getElementById("toggle-overdrive");
  const sndBtn = document.getElementById("toggle-sound");
  const motBtn = document.getElementById("toggle-motion");

  document.getElementById("overdrive-state").textContent = STATE.overdrive ? "ON" : "OFF";
  odBtn.classList.toggle("is-on", STATE.overdrive);
  odBtn.setAttribute("aria-pressed", String(STATE.overdrive));

  document.getElementById("sound-state").textContent = STATE.soundEnabled ? "ON" : "OFF";
  sndBtn.classList.toggle("is-on", STATE.soundEnabled);
  sndBtn.setAttribute("aria-pressed", String(STATE.soundEnabled));

  document.getElementById("motion-state").textContent = STATE.reducedMotion ? "LOW" : "ON";
  motBtn.classList.toggle("is-on", !STATE.reducedMotion);
  motBtn.setAttribute("aria-pressed", String(!STATE.reducedMotion));
}

function launchKonamiRocket() {
  SFX.playBootChime();
  const rocket = document.createElement("div");
  rocket.style.cssText = `
    position: fixed; left: -120px; bottom: 15vh; z-index: 9800;
    padding: 0.6rem 1.2rem; border-radius: 999px;
    border: 1px solid #c6ff00; background: rgba(5, 10, 20, 0.92);
    color: #c6ff00; font-size: 0.78rem; letter-spacing: 0.14em;
    box-shadow: 0 0 35px rgba(198, 255, 0, 0.5); pointer-events: none;
  `;
  rocket.textContent = "🚀 PSLV // PARIKSHIT 2U INSERTION BURN NOMINAL!";
  document.body.appendChild(rocket);

  if (window.gsap && !STATE.reducedMotion) {
    gsap.to(rocket, {
      x: window.innerWidth + 450,
      y: -window.innerHeight * 0.65,
      rotation: -18,
      duration: 3.4,
      ease: "power2.inOut",
      onComplete: () => rocket.remove()
    });
  } else {
    rocket.style.left = "20px";
    setTimeout(() => rocket.remove(), 2500);
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

/**
 * ============================================================================
 * 09 // INITIALIZE APPLICATION (FAULT-ISOLATED PER SUBSYSTEM)
 * ============================================================================
 */
window.addEventListener("DOMContentLoaded", () => {
  const subsystems = [
    ["hydrateContent", hydrateContent],
    ["initScrollAndMotion", initScrollAndMotion],
    ["initBootSequence", initBootSequence],
    ["initOrbitalScene", initOrbitalScene],
    ["initCursorAndInteractions", initCursorAndInteractions],
    ["initSystemsAndGuestbook", initSystemsAndGuestbook]
  ];

  subsystems.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[System Init] Subsystem "${name}" encountered an error:`, err);
    }
  });
});