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

  // Selected Projects (curated portfolio index — edit project details, links & visual modes here)
  projects: [
    {
      id: "01",
      title: "Parikshit 2U CubeSat ADCS",
      shortDescription:
        "Flight software, QUEST/MEKF attitude estimation & B-dot magnetorquer control for a 600 km LEO electrodynamic tether mission.",
      detailedDescription:
        "Fuses RM3100 magnetometer, BMI088 IMU, and 12x SLCD-61N8 coarse sun sensors across 6 faces to maintain 10–15° tether pointing without reaction wheels.",
      technologies: ["C / C++", "Python", "QUEST / MEKF", "Embedded", "Orbital Mechanics"],
      year: "2025—26",
      link: "https://parikshitspace.in",
      accent: "#00e5ff",
      visualType: "orbital",
      animationType: "attitude-bdot"
    },
    {
      id: "02",
      title: "CAN-7USAT & Ground Station",
      shortDescription:
        "IN-SPACe CanSat flight avionics, mechanical flywheel stabilization, and real-time PyQt5 Ground Control Station.",
      detailedDescription:
        "Engineered full PDR-to-CDR telemetry pipeline with live 3D orientation visualization, packet loss recovery, and descent rate analytics.",
      technologies: ["Python", "PyQt5", "Embedded C", "RF Telemetry", "Sensor Fusion"],
      year: "2026",
      link: "", // Flagged for review: replace with specific repository URL when public
      accent: "#c6ff00",
      visualType: "descent",
      animationType: "trajectory-guidance"
    },
    {
      id: "03",
      title: "Parikshit Orbital Web Portal",
      shortDescription:
        "Interactive 3D satellite showcase and dark-mode engineering portal for MIT Manipal's student satellite team.",
      detailedDescription:
        "Rebuilt parikshitspace.in from scratch using Vite, React, Three.js, and hardware-accelerated scroll choreography.",
      technologies: ["Three.js", "React", "Vite", "GSAP", "WebGL"],
      year: "2026",
      link: "https://parikshitspace.in",
      accent: "#00e5ff",
      visualType: "web",
      animationType: "dom-webgl-layers"
    },
    {
      id: "04",
      title: "EdgeNILM Disaggregation",
      shortDescription:
        "Non-intrusive appliance load monitoring running real-time energy disaggregation on low-power edge hardware.",
      detailedDescription:
        "Built for Smart India Hackathon: extracts harmonic current signatures at the smart-meter edge to identify individual appliances without plug-level sensors.",
      technologies: ["Edge AI", "Python", "DSP", "Embedded Linux", "Time-Series"],
      year: "2026",
      link: "", // Flagged for review: replace with specific repository URL when public
      accent: "#ff2a85",
      visualType: "ml",
      animationType: "harmonic-inference"
    }
  ],

  // 01.5 // Closed-Loop Flight Sequence Stages (Orbit -> Attitude -> Sensors -> Estimation -> Control -> Descent -> Landing)
  missionStoryStages: [
    {
      code: "STAGE 01 // 07",
      metric: "ALT: 600.0 KM",
      title: "ORBITAL INSERTION",
      desc: "The spacecraft settles into low Earth orbit. Attitude knowledge begins with inertial measurements and a geomagnetic reference, not a guessed orientation.",
      eq: "ṙ = v  ·  q̇ = ½ Ω(ω)q",
      hud: "ORBIT // INITIAL CONDITIONS (ILLUSTRATIVE SIM)"
    },
    {
      code: "STAGE 02 // 07",
      metric: "SENSORS: NOMINAL",
      title: "SENSE THE FIELD",
      desc: "RM3100 magnetometer, BMI088 IMU, and 12x SLCD-61N8 coarse sun sensors provide complementary body-frame measurements reconciled across timestamps.",
      eq: "z = h(x) + ν",
      hud: "SENSOR FUSION // RM3100 + BMI088 + 12x CSS"
    },
    {
      code: "STAGE 03 // 07",
      metric: "ATTITUDE: ESTIMATED",
      title: "ESTIMATE ATTITUDE",
      desc: "QUEST computes a single-frame attitude quaternion while a multiplicative EKF propagates gyro kinematics and corrects bias drift.",
      eq: "q̂ ← MEKF(ω, z, q̂⁻)",
      hud: "ATTITUDE DETERMINATION // QUEST & MEKF"
    },
    {
      code: "STAGE 04 // 07",
      metric: "CONTROL: B-DOT",
      title: "DAMP ROTATION",
      desc: "Without reaction wheels, 3-axis magnetorquers interact with Earth's B-field via B-dot control to detumble and maintain 10–15° tether pointing.",
      eq: "m = −k · Ḃ  ·  τ = m × B",
      hud: "MAGNETIC ACTUATION // B-DOT DETUMBLING"
    },
    {
      code: "STAGE 05 // 07",
      metric: "TELEMETRY: LINKED",
      title: "DOWNLINK THE STATE",
      desc: "Orientation, angular rates, and subsystem health are packetized for the PyQt5 Ground Control Station with packet-loss recovery.",
      eq: "packet = header + state + CRC",
      hud: "RF TELEMETRY // GROUND STATION LINK"
    },
    {
      code: "STAGE 06 // 07",
      metric: "DESCENT: TRACKED",
      title: "MODEL THE DESCENT",
      desc: "During CanSat atmospheric descent, mechanical flywheel stabilization and descent-rate analytics track altitude and projected glide footprint.",
      eq: "t₍ground₎ = h / v₍descent₎",
      hud: "CANSAT // DESCENT RATE & STABILIZATION"
    },
    {
      code: "STAGE 07 // 07",
      metric: "MISSION: COMPLETE",
      title: "CLOSE THE LOOP",
      desc: "From 600 km orbital attitude estimation to ground-station telemetry verification, every control action is logged against physical models.",
      eq: "e = x₍target₎ − x₍estimated₎",
      hud: "MISSION REVIEW // TELEMETRY VERIFIED"
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
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

/**
 * Centralized Motion System Constants & Physics Presets
 */
const MOTION = {
  springs: {
    cursorRing: { stiffness: 260, damping: 22, mass: 0.85, precision: 0.05 },
    projectPreview: { stiffness: 200, damping: 18, mass: 1.0, precision: 0.04 },
    projectPreviewTilt: { stiffness: 170, damping: 16, mass: 0.85, precision: 0.02 },
    projectPreviewScale: { stiffness: 230, damping: 20, mass: 0.9, precision: 0.002 },
    letsTalkChar: { stiffness: 210, damping: 17, mass: 1.0, precision: 0.03 },
    letsTalkDeform: { stiffness: 185, damping: 15, mass: 0.9, precision: 0.01 },
    magnetic: { stiffness: 215, damping: 17, mass: 0.85, precision: 0.03 }
  },
  easings: {
    expoOut: "expo.out",
    power3Out: "power3.out",
    power2Out: "power2.out"
  },
  durations: {
    heroReveal: 1.3,
    sectionTitle: 0.95,
    cardReveal: 0.72,
    hoverTransition: 0.32
  },
  scroll: {
    lenisDuration: 1.15,
    gallerySkewDivisor: -360,
    gallerySkewMax: 4.5,
    aboutVelocitySkewMax: 2.2,
    parallax: {
      bgCoordsY: -46,
      sectionFrameY: 18
    }
  }
};

/**
 * Reusable 1D damped spring with velocity preservation and sub-stepped stability.
 * Matches conceptual API: `const x = useSpring(0, { stiffness: 200, damping: 18, mass: 1 })`
 */
class SpringValue {
  constructor(initial = 0, opts = {}) {
    this.value = initial;
    this.target = initial;
    this.velocity = 0;
    this.stiffness = opts.stiffness ?? 200;
    this.damping = opts.damping ?? 18;
    this.mass = Math.max(0.05, opts.mass ?? 1);
    this.precision = opts.precision ?? 0.01;
  }

  set(nextTarget) {
    if (!Number.isFinite(nextTarget)) return;
    this.target = nextTarget;
  }

  snap(nextValue) {
    if (!Number.isFinite(nextValue)) return;
    this.value = nextValue;
    this.target = nextValue;
    this.velocity = 0;
  }

  impulse(deltaVelocity) {
    if (!Number.isFinite(deltaVelocity)) return;
    this.velocity += deltaVelocity;
  }

  addVelocity(deltaVelocity) {
    this.impulse(deltaVelocity);
  }

  get() {
    return this.value;
  }

  getVelocity() {
    return this.velocity;
  }

  isAtRest() {
    return (
      Math.abs(this.target - this.value) <= this.precision &&
      Math.abs(this.velocity) <= this.precision * 6
    );
  }

  step(dt, reducedMotion = false) {
    if (reducedMotion) {
      this.value += (this.target - this.value) * Math.min(1, dt * 18);
      this.velocity = 0;
      if (Math.abs(this.target - this.value) <= this.precision) {
        this.value = this.target;
      }
      return this.value;
    }

    if (this.isAtRest()) {
      this.value = this.target;
      this.velocity = 0;
      return this.value;
    }

    // Clamp & sub-step dt for unconditional numerical stability at any frame rate
    const clampedDt = Math.min(0.05, Math.max(0.001, dt));
    const steps = clampedDt > 0.018 ? 2 : 1;
    const stepDt = clampedDt / steps;

    for (let i = 0; i < steps; i++) {
      const displacement = this.target - this.value;
      const springForce = this.stiffness * displacement;
      const dampingForce = -this.damping * this.velocity;
      const acceleration = (springForce + dampingForce) / this.mass;
      this.velocity += acceleration * stepDt;
      this.value += this.velocity * stepDt;
    }

    if (this.isAtRest()) {
      this.value = this.target;
      this.velocity = 0;
    }
    return this.value;
  }
}

class Spring2D {
  constructor(initialX = 0, initialY = 0, opts = {}) {
    this.x = new SpringValue(initialX, opts);
    this.y = new SpringValue(initialY, opts);
  }

  set(targetX, targetY) {
    this.x.set(targetX);
    this.y.set(targetY);
  }

  snap(valX, valY) {
    this.x.snap(valX);
    this.y.snap(valY);
  }

  impulse(vx, vy) {
    this.x.impulse(vx);
    this.y.impulse(vy);
  }

  addVelocity(vx, vy) {
    this.impulse(vx, vy);
  }

  isAtRest() {
    return this.x.isAtRest() && this.y.isAtRest();
  }

  step(dt, reducedMotion = false) {
    this.x.step(dt, reducedMotion);
    this.y.step(dt, reducedMotion);
    return {
      x: this.x.value,
      y: this.y.value,
      vx: this.x.velocity,
      vy: this.y.velocity
    };
  }
}

function useSpring(initial = 0, opts = {}) {
  return new SpringValue(initial, opts);
}

const STATE = {
  bootActive: true,
  modalOpen: false,
  tabHidden: document.hidden,
  soundEnabled: false,
  reducedMotion: reducedMotionQuery.matches,
  isCoarsePointer: coarsePointerQuery.matches,
  overdrive: false,
  scrollProgress: 0,
  scrollVelocity: 0,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  pointerClientX: window.innerWidth / 2,
  pointerClientY: window.innerHeight / 2,
  pointerVelocityX: 0,
  pointerVelocityY: 0,
  activeProjectIndex: 0,
  hoveredProjectIndex: -1,
  satellitePingCount: 0,
  lenis: null,
  lastFocusedElement: null,
  motionChangeCallbacks: []
};

function onMotionPreferenceChange(cb) {
  if (typeof cb === "function") {
    STATE.motionChangeCallbacks.push(cb);
  }
}

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
  STATE.motionChangeCallbacks.forEach((cb) => {
    try {
      cb(STATE.reducedMotion);
    } catch {
      // ignore listener error
    }
  });
}
syncReducedMotionClass();

reducedMotionQuery.addEventListener("change", (e) => {
  STATE.reducedMotion = e.matches;
  syncReducedMotionClass();
  updateHudButtons();
});

coarsePointerQuery.addEventListener("change", (e) => {
  STATE.isCoarsePointer = e.matches;
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
/**
 * Normalizes a project entry so edits using either the new schema
 * (title, shortDescription, detailedDescription, technologies, visualType, animationType)
 * or legacy aliases (name, summary, architecture, tech) always stay in sync.
 */
function normalizeProject(raw, index = 0) {
  const id = String(raw.id || index + 1).padStart(2, "0");
  const title = raw.title || raw.name || `System ${id}`;
  const shortDescription = raw.shortDescription || raw.summary || "";
  const detailedDescription = raw.detailedDescription || raw.architecture || "";
  const technologies = Array.isArray(raw.technologies)
    ? raw.technologies
    : Array.isArray(raw.tech)
      ? raw.tech
      : [];
  const year = raw.year || "2026";
  const link = typeof raw.link === "string" ? raw.link.trim() : "";
  const accent = raw.accent || "#00e5ff";
  const visualType = (raw.visualType || "").toLowerCase() || inferVisualType(title, id);
  const animationType = raw.animationType || `${visualType}-sim`;

  return Object.assign(raw, {
    id,
    title,
    name: title,
    shortDescription,
    summary: shortDescription,
    detailedDescription,
    architecture: detailedDescription,
    technologies,
    tech: technologies,
    year,
    link,
    accent,
    visualType,
    animationType
  });
}

function inferVisualType(title = "", id = "") {
  if (/ADCS|CubeSat/i.test(title) || id === "01") return "orbital";
  if (/CAN|Descent|Ground Station/i.test(title) || id === "02") return "descent";
  if (/Portal|Web/i.test(title)) return "web";
  if (/NILM|Disaggregation|AI|ML/i.test(title)) return "ml";
  return "hardware";
}

function isVerifiedExternalLink(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "#") return false;
  // Reject bare placeholder domain roots such as "https://github.com" or "https://linkedin.com"
  if (/^https?:\/\/(www\.)?(github|linkedin)\.com\/?$/i.test(trimmed)) return false;
  return /^https?:\/\//i.test(trimmed);
}

function hydrateContent() {
  CONFIG.projects = (CONFIG.projects || []).map((p, idx) => normalizeProject(p, idx));

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

  // Bottom row social links pulled from CONFIG.links
  const socialContainer = document.getElementById("footer-social-links");
  const targetSocials = CONFIG.links.filter((l) =>
    /linkedin|github|parikshit/i.test(l.label)
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
    runAllFits();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      runAllFits();
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }, 80);
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
      <article class="project-row${idx === 0 ? " is-dominant" : ""}" role="listitem" tabindex="0" data-index="${idx}" data-visual-type="${escapeHtml(p.visualType)}" style="--row-accent: ${escapeHtml(p.accent)}" data-cursor="INSPECT" aria-label="${escapeHtml(p.title)} — ${escapeHtml(p.shortDescription)}">
        <span class="proj-num">${escapeHtml(p.id)} //</span>
        <div>
          <h3 class="proj-name">${escapeHtml(p.title)}</h3>
          <div class="proj-tech">
            ${p.technologies.map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
        <p class="proj-summary">${escapeHtml(p.shortDescription)}</p>
        <div class="proj-meta-right">
          <span class="proj-year">(${escapeHtml(p.year)})</span>
          <span class="proj-sim-badge">${escapeHtml(projectMode(p))}</span>
        </div>
      </article>`
    )
    .join("");

  // Initialize active project indicator & mobile stage from first curated project
  if (CONFIG.projects.length > 0) {
    const firstProj = CONFIG.projects[0];
    const activeNameEl = document.getElementById("work-active-name");
    const mobileTagEl = document.getElementById("mobile-stage-tag");
    const mobileModeEl = document.getElementById("mobile-stage-mode");
    const mobileCanvasEl = document.getElementById("mobile-work-canvas");
    if (activeNameEl) activeNameEl.textContent = `${firstProj.id}. ${firstProj.title.toUpperCase()}`;
    if (mobileTagEl) mobileTagEl.textContent = `LIVE SIMULATION // ${firstProj.id}`;
    if (mobileModeEl) mobileModeEl.textContent = `MODE: ${projectMode(firstProj)}`;
    if (mobileCanvasEl) drawProjectSchematic(mobileCanvasEl, firstProj);
  }

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

  // Reset inline font sizes before reading container width so previous larger sizes never inflate mobile layout viewport
  measure.style.fontSize = "";
  line1.style.fontSize = "";
  line2.style.fontSize = "";

  const viewportW = document.documentElement.clientWidth || window.innerWidth;
  const targetWidth = Math.min(stage.clientWidth, viewportW - 32);
  if (targetWidth <= 0) return;

  const isMobileStack = viewportW < 640;

  if (!isMobileStack) {
    measure.style.fontSize = "100px";
    const measuredW = measure.getBoundingClientRect().width;
    if (measuredW > 0) {
      const fitted = (100 * (targetWidth / measuredW) * 0.992).toFixed(2);
      measure.style.fontSize = `${fitted}px`;
    }
  } else {
    [line1, line2].forEach((lineEl) => {
      lineEl.style.fontSize = "100px";
      const lw = lineEl.getBoundingClientRect().width;
      if (lw > 0) {
        const fitted = (100 * (targetWidth / lw) * 0.992).toFixed(2);
        lineEl.style.fontSize = `${fitted}px`;
      }
    });
  }
  window.dispatchEvent(new CustomEvent("letsTalkLayoutUpdated"));
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
  renderer.setSize(window.innerWidth, window.innerHeight, false);
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
    const w = document.documentElement.clientWidth || window.innerWidth;
    const h = window.innerHeight;
    isMobile = w < 768;
    const dpr = getCappedPixelRatio();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(dpr);
    composer.setSize(w, h);
    bloomPass.resolution.set(w, h);
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

  // Word-by-word illumination + subtle scroll-velocity response on the About editorial manifesto
  const aboutScrubEl = document.getElementById("about-scrub-text");
  const scrubWords = gsap.utils.toArray(".scrub-word");
  const setAboutSkew = aboutScrubEl
    ? gsap.quickTo(aboutScrubEl, "skewY", { duration: 0.35, ease: "power3.out" })
    : null;

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
      if (setAboutSkew) {
        if (STATE.reducedMotion) {
          setAboutSkew(0);
        } else {
          const velSkew = THREE.MathUtils.clamp(self.getVelocity() / -1800, -1.6, 1.6);
          setAboutSkew(velSkew);
        }
      }
    },
    onLeave: () => {
      if (setAboutSkew) setAboutSkew(0);
    },
    onLeaveBack: () => {
      if (setAboutSkew) setAboutSkew(0);
    }
  });

  gsap.utils.toArray(".display-title").forEach((title) => {
    gsap.fromTo(
      title,
      { y: 46, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: "expo.out",
        scrollTrigger: {
          trigger: title,
          start: "top 86%"
        }
      }
    );
  });

  // Pinned Horizontal Gallery with Pointer Capture & Click-vs-Drag Threshold
  const galleryTrack = document.getElementById("gallery-track");
  const gallerySection = document.getElementById("gallery");
  const viewport = document.getElementById("gallery-viewport");
  const photoCards = gsap.utils.toArray(".photo-card");
  const photoSkewSetters = photoCards.map((card) =>
    gsap.quickTo(card, "skewX", { duration: 0.32, ease: "power2.out" })
  );

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
        if (STATE.reducedMotion) {
          photoSkewSetters.forEach((setSkew) => setSkew(0));
          return;
        }
        const skew = THREE.MathUtils.clamp(self.getVelocity() / -350, -5, 5);
        photoSkewSetters.forEach((setSkew) => setSkew(skew));
      },
      onScrubComplete: () => {
        photoSkewSetters.forEach((setSkew) => setSkew(0));
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

  // Staggered character slide-up reveal for "LET'S TALK" on scroll into view (targets outer .lt-char-wrap so inner .lt-char is reserved for spring physics)
  const ltCharWraps = gsap.utils.toArray("#lets-talk-cta .lt-char-wrap");
  if (ltCharWraps.length > 0) {
    gsap.fromTo(
      ltCharWraps,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.042,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#lets-talk-stage",
          start: "top 84%",
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
let activeModalProject = null;

function setDominantProject(index, source = "scroll") {
  const idx = Math.max(0, Math.min(CONFIG.projects.length - 1, Number(index) || 0));
  STATE.activeProjectIndex = idx;
  const proj = CONFIG.projects[idx];
  if (!proj) return;

  const rows = document.querySelectorAll(".project-row");
  rows.forEach((r, i) => {
    r.classList.toggle("is-dominant", i === idx);
  });

  const activeName = document.getElementById("work-active-name");
  if (activeName) activeName.textContent = `${proj.id}. ${proj.title.toUpperCase()}`;

  const mobileTag = document.getElementById("mobile-stage-tag");
  const mobileMode = document.getElementById("mobile-stage-mode");
  const mobileCanvas = document.getElementById("mobile-work-canvas");
  if (mobileTag) mobileTag.textContent = `LIVE SIMULATION // ${proj.id}`;
  if (mobileMode) mobileMode.textContent = `MODE: ${projectMode(proj)}`;
  if (mobileCanvas && source !== "loop") {
    drawProjectSchematic(mobileCanvas, proj, performance.now() * 0.001);
  }
}

function initCursorAndInteractions() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const label = document.getElementById("cursor-label");
  const cursorToast = document.getElementById("cursor-toast");
  const sparkleCanvas = document.getElementById("sparkle-canvas");
  const sCtx = sparkleCanvas ? sparkleCanvas.getContext("2d") : null;

  if (sparkleCanvas) {
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", () => {
    if (!sparkleCanvas) return;
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
  });

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let lastPointerX = cx;
  let lastPointerY = cy;
  let lastPointerTime = performance.now();
  let cursorInitialized = false;
  const cursorSpring = new Spring2D(cx, cy, MOTION.springs.cursorRing);
  const sparkles = [];

  // Floating Project Hover Preview Spring State
  const previewBox = document.getElementById("project-hover-preview");
  const previewInner = document.getElementById("preview-inner");
  const previewCanvas = document.getElementById("preview-canvas");
  const previewTag = document.getElementById("preview-tag");
  const previewYear = document.getElementById("preview-year");
  const previewModeEl = document.getElementById("preview-mode");
  const previewTitleEl = document.getElementById("preview-title-mini");
  const projectIndexEl = document.getElementById("project-index");
  const mobileStageEl = document.getElementById("mobile-work-stage");
  const mobileCanvasEl = document.getElementById("mobile-work-canvas");
  const workSectionEl = document.getElementById("work");

  const previewPosSpring = new Spring2D(24, 120, MOTION.springs.projectPreview);
  const previewTiltSpring = new Spring2D(0, 0, MOTION.springs.projectPreviewTilt);
  const previewScaleSpring = new SpringValue(0.88, MOTION.springs.projectPreviewScale);
  let previewVisible = false;
  let hoveredProject = CONFIG.projects[0] || null;
  let switchTimer = null;

  function computePreviewTargetPosition(clientX, clientY) {
    const boxW = (previewBox && previewBox.offsetWidth) || 390;
    const boxH = (previewBox && previewBox.offsetHeight) || 310;
    const margin = 16;
    const offsetX = clientX + 34 + boxW > window.innerWidth - margin ? -boxW - 34 : 34;
    const tx = Math.max(margin, Math.min(window.innerWidth - boxW - margin, clientX + offsetX));
    const ty = Math.max(64, Math.min(window.innerHeight - boxH - 48, clientY - boxH * 0.42));
    return { tx, ty };
  }

  function positionToastNearPoint(x, y) {
    if (!cursorToast) return;
    const clampedX = Math.max(110, Math.min(window.innerWidth - 110, x));
    const clampedY = Math.max(56, Math.min(window.innerHeight - 36, y));
    cursorToast.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0) translate(-50%, -155%)`;
  }

  window.addEventListener("pointermove", (e) => {
    const now = performance.now();
    const dtMs = Math.max(4, now - lastPointerTime);
    const instVx = ((e.clientX - lastPointerX) / dtMs) * 1000;
    const instVy = ((e.clientY - lastPointerY) / dtMs) * 1000;
    STATE.pointerVelocityX = STATE.pointerVelocityX * 0.65 + instVx * 0.35;
    STATE.pointerVelocityY = STATE.pointerVelocityY * 0.65 + instVy * 0.35;

    lastPointerX = cx = e.clientX;
    lastPointerY = cy = e.clientY;
    lastPointerTime = now;
    STATE.pointerClientX = cx;
    STATE.pointerClientY = cy;

    if (!cursorInitialized) {
      cursorInitialized = true;
      cursorSpring.snap(cx, cy);
      document.body.classList.add("custom-cursor-ready");
    } else {
      cursorSpring.set(cx, cy);
    }

    STATE.targetMouseX = (cx / window.innerWidth) * 2 - 1;
    STATE.targetMouseY = -(cy / window.innerHeight) * 2 + 1;

    if (dot) dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    if (cursorToast && cursorToast.classList.contains("is-visible")) {
      positionToastNearPoint(cx, cy);
    }

    const spawnChance = STATE.overdrive ? 0.75 : 0.28;
    if (!STATE.reducedMotion && !STATE.tabHidden && !STATE.isCoarsePointer && Math.random() < spawnChance) {
      sparkles.push({
        x: cx + (Math.random() - 0.5) * 14,
        y: cy + (Math.random() - 0.5) * 14,
        size: STATE.overdrive ? 4 + Math.random() * 5.5 : 2.4 + Math.random() * 3.2,
        alpha: 1,
        color: Math.random() > 0.3 ? "#00e5ff" : STATE.overdrive ? "#ff2a85" : "#ffffff"
      });
    }
  });

  let lastFrameTime = performance.now();

  function renderCursorAndPreviewsLoop(now) {
    requestAnimationFrame(renderCursorAndPreviewsLoop);
    if (STATE.tabHidden) {
      lastFrameTime = now;
      return;
    }

    const dt = Math.min(0.04, Math.max(0.001, (now - lastFrameTime) / 1000));
    lastFrameTime = now;
    const simTime = now * 0.001 * (STATE.reducedMotion ? 0.15 : 1);

    // Decay pointer velocity when pointer stops moving
    if (now - lastPointerTime > 32) {
      STATE.pointerVelocityX *= 0.82;
      STATE.pointerVelocityY *= 0.82;
      if (previewVisible) {
        previewTiltSpring.set(0, 0);
      }
    }

    // 1. Update Cursor Ring via Spring2D
    if (cursorInitialized && ring && !STATE.isCoarsePointer) {
      const cState = cursorSpring.step(dt, STATE.reducedMotion);
      ring.style.transform = `translate3d(${cState.x.toFixed(2)}px, ${cState.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
    }

    // 2. Update Floating Project Preview Spring Position, Velocity Tilt & Live Canvas
    if (
      previewBox &&
      !STATE.isCoarsePointer &&
      window.innerWidth > 960 &&
      (previewVisible || !previewPosSpring.isAtRest() || !previewScaleSpring.isAtRest() || !previewTiltSpring.isAtRest())
    ) {
      const pos = previewPosSpring.step(dt, STATE.reducedMotion);
      const tilt = previewTiltSpring.step(dt, STATE.reducedMotion);
      const scale = previewScaleSpring.step(dt, STATE.reducedMotion);

      previewBox.style.left = "0px";
      previewBox.style.top = "0px";
      previewBox.style.transform = `translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0)`;

      if (previewInner) {
        if (STATE.reducedMotion) {
          previewInner.style.transform = "scale(1)";
        } else {
          const rotY = THREE.MathUtils.clamp(tilt.x, -11, 11);
          const rotX = THREE.MathUtils.clamp(tilt.y, -9, 9);
          const rotZ = THREE.MathUtils.clamp(tilt.x * 0.28, -3.2, 3.2);
          const skewX = THREE.MathUtils.clamp(tilt.x * 0.18, -2.2, 2.2);
          previewInner.style.transform = `scale(${scale.toFixed(3)}) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) skewX(${skewX.toFixed(2)}deg)`;
        }
      }

      if (previewVisible && hoveredProject && previewCanvas) {
        drawProjectSchematic(previewCanvas, hoveredProject, simTime);
      }
    }

    // 3. Live Canvas Update for Open Project Inspector Modal
    if (STATE.modalOpen && activeModalProject) {
      const modalCanvas = document.getElementById("modal-canvas");
      if (modalCanvas) {
        drawProjectSchematic(modalCanvas, activeModalProject, simTime);
      }
    }

    // 4. Live Canvas Update for Docked Mobile/Tablet Stage when #work is in viewport
    if (
      mobileCanvasEl &&
      mobileStageEl &&
      (STATE.isCoarsePointer || window.innerWidth <= 960) &&
      workSectionEl
    ) {
      const rect = workSectionEl.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const activeProj = CONFIG.projects[STATE.activeProjectIndex] || CONFIG.projects[0];
        if (activeProj) {
          drawProjectSchematic(mobileCanvasEl, activeProj, simTime);
        }
      }
    }

    // 5. Render Cursor Sparkles
    if (!sCtx || !sparkleCanvas) return;
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
  requestAnimationFrame(renderCursorAndPreviewsLoop);

  // Anti-flicker hover tracking using relatedTarget containment check
  let activeCursorEl = null;

  document.addEventListener("pointerover", (e) => {
    const target = e.target.closest("[data-cursor]");
    if (target && target !== activeCursorEl) {
      activeCursorEl = target;
      if (ring) ring.classList.add("is-active");
      if (label) label.textContent = target.getAttribute("data-cursor");
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
        if (ring) ring.classList.add("is-active");
        if (label) label.textContent = nextCursorEl.getAttribute("data-cursor");
      } else {
        activeCursorEl = null;
        if (ring) ring.classList.remove("is-active");
      }
    }
  });

  // -------------------------------------------------------------------------
  // PROJECT HOVER PREVIEW & ACCESSIBLE MODAL
  // -------------------------------------------------------------------------
  const projectModal = document.getElementById("project-modal");
  const modalCanvas = document.getElementById("modal-canvas");
  const modalCloseBtn = document.getElementById("modal-close");

  document.querySelectorAll(".project-row").forEach((row) => {
    const idx = Number(row.dataset.index);
    const proj = CONFIG.projects[idx];
    if (!proj) return;

    row.addEventListener("pointerenter", (e) => {
      const wasHidden = !previewVisible;
      const switchedProject = hoveredProject !== proj;
      hoveredProject = proj;
      STATE.hoveredProjectIndex = idx;
      setDominantProject(idx, "hover");

      if (projectIndexEl) projectIndexEl.classList.add("is-hovering");
      if (previewTag) previewTag.textContent = `SYS // ${proj.id}`;
      if (previewYear) previewYear.textContent = proj.year;
      if (previewModeEl) previewModeEl.textContent = projectMode(proj);
      if (previewTitleEl) previewTitleEl.textContent = proj.title.toUpperCase();
      if (previewInner) {
        previewInner.style.setProperty("--preview-accent", proj.accent || "#00e5ff");
        if (switchedProject && !wasHidden) {
          previewInner.classList.add("is-switching");
          clearTimeout(switchTimer);
          switchTimer = setTimeout(() => previewInner.classList.remove("is-switching"), 180);
        }
      }

      const { tx, ty } = computePreviewTargetPosition(e.clientX || STATE.pointerClientX, e.clientY || STATE.pointerClientY);
      if (wasHidden && previewScaleSpring.get() < 0.92) {
        previewPosSpring.snap(tx, ty + (STATE.reducedMotion ? 0 : 18));
      }
      previewPosSpring.set(tx, ty);
      previewScaleSpring.set(1);
      previewVisible = true;
      if (previewBox) previewBox.classList.add("is-visible");
      if (previewCanvas) drawProjectSchematic(previewCanvas, proj, performance.now() * 0.001);
    });

    row.addEventListener("pointermove", (e) => {
      const { tx, ty } = computePreviewTargetPosition(e.clientX, e.clientY);
      previewPosSpring.set(tx, ty);

      if (!STATE.reducedMotion) {
        const targetTiltX = THREE.MathUtils.clamp(STATE.pointerVelocityX * 0.0085, -10, 10);
        const targetTiltY = THREE.MathUtils.clamp(-STATE.pointerVelocityY * 0.0085, -8, 8);
        previewTiltSpring.set(targetTiltX, targetTiltY);
      }
    });

    row.addEventListener("pointerleave", (e) => {
      const nextRow = e.relatedTarget ? e.relatedTarget.closest?.(".project-row") : null;
      if (!nextRow) {
        previewVisible = false;
        STATE.hoveredProjectIndex = -1;
        previewScaleSpring.set(0.88);
        previewTiltSpring.set(0, 0);
        if (previewBox) previewBox.classList.remove("is-visible");
        if (projectIndexEl) projectIndexEl.classList.remove("is-hovering");
      }
    });

    row.addEventListener("focus", () => {
      setDominantProject(idx, "focus");
    });

    const triggerOpen = () => {
      SFX.playClick();
      previewVisible = false;
      STATE.hoveredProjectIndex = -1;
      previewScaleSpring.set(0.88);
      if (previewBox) previewBox.classList.remove("is-visible");
      if (projectIndexEl) projectIndexEl.classList.remove("is-hovering");
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

  if (modalCloseBtn && projectModal) {
    modalCloseBtn.addEventListener("click", () => closeAccessibleModal(projectModal));
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeAccessibleModal(projectModal);
    });
  }

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

  if (lbCloseBtn && lightbox) {
    lbCloseBtn.addEventListener("click", () => closeAccessibleModal(lightbox));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeAccessibleModal(lightbox);
    });
  }

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
  activeModalProject = null;
  document.body.classList.remove("modal-open");
  if (STATE.lenis && !STATE.bootActive) STATE.lenis.start();

  if (STATE.lastFocusedElement && typeof STATE.lastFocusedElement.focus === "function") {
    STATE.lastFocusedElement.focus();
  }
}

function projectMode(proj) {
  if (!proj) return "ORBITAL SIM";
  const vt = String(proj.visualType || "").toLowerCase();
  if (vt === "orbital") return "ORBITAL ADCS";
  if (vt === "descent") return "DESCENT / RF";
  if (vt === "web") return "WEBGL SYSTEM";
  if (vt === "ml") return "EDGE AI / DSP";
  if (vt === "hardware") return "LOGIC / BUS";

  const title = String(proj.title || proj.name || "");
  if (/ADCS|CubeSat/i.test(title)) return "ORBITAL ADCS";
  if (/CAN|GROUND STATION/i.test(title)) return "DESCENT / RF";
  if (/PORTAL|WEB/i.test(title)) return "WEBGL SYSTEM";
  if (/NILM|DISAGGREGATION/i.test(title)) return "EDGE AI / DSP";
  return "SYSTEM TRACE";
}

/**
 * Reusable Per-Project Live Visualization System
 * Supports visualType: "orbital" | "descent" | "web" | "ml" | "hardware"
 */
function drawProjectSchematic(canvas, proj, timeSec = performance.now() * 0.001) {
  if (!canvas || !proj) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.width || 520;
  const h = canvas.height || 330;
  const t = Number.isFinite(timeSec) ? timeSec : 0;
  const accent = proj.accent || "#00e5ff";
  const mode = projectMode(proj);
  const vt = String(proj.visualType || inferVisualType(proj.title || proj.name, proj.id)).toLowerCase();

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#04070f";
  ctx.fillRect(0, 0, w, h);

  // Subtle calibration grid
  ctx.strokeStyle = "rgba(120, 185, 225, 0.08)";
  ctx.lineWidth = 1;
  const gridStep = Math.round(Math.max(24, w / 18));
  for (let x = 0; x < w; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gridStep) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Radial atmospheric glow
  ctx.save();
  ctx.globalAlpha = 0.14;
  const glow = ctx.createRadialGradient(w * 0.48, h * 0.44, 6, w * 0.48, h * 0.44, h * 0.62);
  glow.addColorStop(0, accent);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  const cx = w * 0.46;
  const cy = h * 0.44;
  const r = Math.min(w, h) * 0.21;

  if (vt === "orbital") {
    // -----------------------------------------------------------------------
    // 01 // PARIKSHIT ADCS: Orbit ellipse, Earth limb, B-dot field & attitude triad
    // -----------------------------------------------------------------------
    const earthX = cx - r * 0.35;
    const earthY = cy + r * 0.08;

    // Geomagnetic B-field dipole loops
    ctx.save();
    ctx.translate(earthX, earthY);
    ctx.rotate(-0.22);
    ctx.strokeStyle = "rgba(198, 255, 0, 0.2)";
    ctx.setLineDash([4, 5]);
    for (let side of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(side * r * 0.92, 0, r * 0.95, r * 0.52, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();

    // Shaded LEO Earth sphere
    const earthGrad = ctx.createRadialGradient(earthX - r * 0.3, earthY - r * 0.3, 2, earthX, earthY, r * 0.92);
    earthGrad.addColorStop(0, "#1c7ea6");
    earthGrad.addColorStop(0.65, "#092847");
    earthGrad.addColorStop(1, "#040b17");
    ctx.fillStyle = earthGrad;
    ctx.beginPath();
    ctx.arc(earthX, earthY, r * 0.92, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 229, 255, 0.55)";
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // Tilted 600 km SSO orbit ellipse
    const orbitTilt = -0.26;
    const rxOrbit = r * 1.95;
    const ryOrbit = r * 0.76;
    ctx.save();
    ctx.translate(earthX, earthY);
    ctx.rotate(orbitTilt);
    ctx.strokeStyle = "rgba(0, 229, 255, 0.45)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.ellipse(0, 0, rxOrbit, ryOrbit, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Propagating satellite position along orbit
    const theta = t * 0.85 + 0.45;
    const satLocalX = Math.cos(theta) * rxOrbit;
    const satLocalY = Math.sin(theta) * ryOrbit;

    // Nadir & electrodynamic tether vector toward Earth center
    ctx.strokeStyle = "rgba(255, 42, 133, 0.55)";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(satLocalX, satLocalY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 2U CubeSat body + attitude axes triad + B-dot damping ring
    ctx.translate(satLocalX, satLocalY);
    const satAttitude = Math.sin(t * 1.7) * 0.16 - 0.3;
    ctx.rotate(satAttitude);

    // Pulsing B-dot magnetorquer dipole ring
    const pulseR = 16 + ((t * 18) % 18);
    const pulseAlpha = Math.max(0, 0.55 - ((t * 18) % 18) / 32);
    ctx.strokeStyle = `rgba(198, 255, 0, ${pulseAlpha.toFixed(2)})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
    ctx.stroke();

    // Attitude reference axes (+Roll, +Pitch, +Yaw)
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = "#00e5ff";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(28, 0);
    ctx.stroke();
    ctx.strokeStyle = "#c6ff00";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -26);
    ctx.stroke();
    ctx.strokeStyle = "#ff2a85";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-16, 16);
    ctx.stroke();

    // Solar wings & 2U bus
    ctx.fillStyle = "rgba(0, 229, 255, 0.85)";
    ctx.fillRect(-26, -4, 15, 8);
    ctx.fillRect(11, -4, 15, 8);
    ctx.fillStyle = "#e4f0f8";
    ctx.fillRect(-8, -11, 16, 22);
    ctx.strokeStyle = "#050b14";
    ctx.lineWidth = 1;
    ctx.strokeRect(-8, -11, 16, 22);
    ctx.restore();

    // Telemetry readout overlay
    const q0 = (0.998 + Math.sin(t * 0.9) * 0.001).toFixed(3);
    const q1 = (0.014 + Math.cos(t * 1.3) * 0.006).toFixed(3);
    const omega = (0.0021 + Math.abs(Math.sin(t * 1.1)) * 0.0008).toFixed(4);
    const ptErr = (11.2 + Math.sin(t * 1.4) * 1.4).toFixed(1);
    ctx.fillStyle = "rgba(215, 238, 252, 0.84)";
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillText(`q̂ = [${q0}, ${q1}, -0.039, 0.031]`, w - 210, 40);
    ctx.fillStyle = "#c6ff00";
    ctx.fillText(`|ω| = ${omega} rad/s // B-DOT`, w - 210, 56);
    ctx.fillStyle = "#00e5ff";
    ctx.fillText(`TETHER ERR: ${ptErr}° (<15° MAX)`, w - 210, 72);
  } else if (vt === "descent") {
    // -----------------------------------------------------------------------
    // 02 // CAN-7USAT: Descent trajectory, altitude decay, guidance vectors & RF
    // -----------------------------------------------------------------------
    const prog = (t * 0.15) % 1;
    const startX = w * 0.18;
    const startY = h * 0.16;
    const lzX = w * 0.56;
    const lzY = h * 0.73;

    // Altitude reference lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fillStyle = "rgba(170, 195, 215, 0.55)";
    ctx.font = "9px 'JetBrains Mono', monospace";
    [1000, 650, 300, 0].forEach((alt, idx) => {
      const ly = startY + (lzY - startY) * (idx / 3);
      ctx.beginPath();
      ctx.moveTo(w * 0.08, ly);
      ctx.lineTo(w * 0.88, ly);
      ctx.stroke();
      ctx.fillText(`${String(alt).padStart(4, "0")}m`, w * 0.08, ly - 4);
    });

    // Landing Zone target rings
    ctx.save();
    ctx.translate(lzX, lzY);
    ctx.strokeStyle = "rgba(198, 255, 0, 0.65)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.ellipse(0, 0, 34, 11, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 229, 255, 0.45)";
    ctx.beginPath();
    ctx.ellipse(0, 0, 16 + Math.sin(t * 3) * 3, 5.5, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#c6ff00";
    ctx.font = "9px 'JetBrains Mono', monospace";
    ctx.fillText("TARGET LZ", -26, 22);
    ctx.restore();

    // Nominal dashed glide slope vs active trajectory
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(lzX, lzY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
      const u = i / 40;
      const px = startX + (lzX - startX) * u + Math.sin(u * Math.PI * 2) * 18 * (1 - u);
      const py = startY + (lzY - startY) * u - Math.sin(u * Math.PI) * 14;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Current CanSat position along descent curve
    const canX = startX + (lzX - startX) * prog + Math.sin(prog * Math.PI * 2) * 18 * (1 - prog);
    const canY = startY + (lzY - startY) * prog - Math.sin(prog * Math.PI) * 14;

    // Parachute canopy + suspension lines + CanSat cylinder + guidance correction vector
    ctx.save();
    ctx.translate(canX, canY);
    ctx.rotate(Math.sin(t * 2.4) * 0.08);
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, -24, 18, Math.PI, 0);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-16, -24);
    ctx.lineTo(-6, -8);
    ctx.moveTo(16, -24);
    ctx.lineTo(6, -8);
    ctx.stroke();

    ctx.fillStyle = "#e6f2f8";
    ctx.fillRect(-8, -8, 16, 20);
    ctx.strokeStyle = accent;
    ctx.strokeRect(-8, -8, 16, 20);

    // Guidance correction vector arrow
    const corrLen = 22 * (1 - prog * 0.6);
    ctx.strokeStyle = "#ff2a85";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(8, 2);
    ctx.lineTo(8 + corrLen, 2);
    ctx.stroke();
    ctx.restore();

    // Ground Station RF dish & expanding telemetry wave arcs
    const gsX = w * 0.82;
    const gsY = h * 0.71;
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(gsX - 10, gsY + 12);
    ctx.lineTo(gsX, gsY);
    ctx.lineTo(gsX + 10, gsY + 12);
    ctx.stroke();
    for (let k = 0; k < 3; k++) {
      const waveR = 16 + ((t * 22 + k * 14) % 42);
      const waveAlpha = Math.max(0.08, 0.65 - waveR / 62);
      ctx.strokeStyle = `rgba(0, 229, 255, ${waveAlpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(gsX, gsY, waveR, -Math.PI * 0.88, -Math.PI * 0.42);
      ctx.stroke();
    }

    // Telemetry readout
    const curAlt = Math.max(0, 850 * (1 - prog)).toFixed(0);
    const vDesc = (8.2 + Math.sin(t * 1.8) * 0.4).toFixed(1);
    ctx.fillStyle = "rgba(220, 242, 255, 0.88)";
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillText(`ALT: ${curAlt.padStart(3, "0")} m // Vz: -${vDesc} m/s`, w - 205, 38);
    ctx.fillStyle = "#c6ff00";
    ctx.fillText(`FLYWHEEL STAB: NOMINAL`, w - 205, 54);
    ctx.fillStyle = "#00e5ff";
    ctx.fillText(`RF LINK: 433 MHz [LOCKED]`, w - 205, 70);
  } else if (vt === "web") {
    // -----------------------------------------------------------------------
    // 03 // PARIKSHIT WEB PORTAL: Layered UI windows, DOM grid & 3D WebGL node
    // -----------------------------------------------------------------------
    const winW = w * 0.64;
    const winH = h * 0.56;
    const winX = w * 0.14;
    const winY = h * 0.16;

    // Back depth layer (CSS Grid / DOM Layer)
    const shift1 = Math.sin(t * 1.2) * 5;
    const shift2 = Math.cos(t * 1.2) * 6;
    ctx.strokeStyle = "rgba(0, 229, 255, 0.28)";
    ctx.strokeRect(winX + 18 + shift1, winY + 14 - shift1, winW, winH);

    // Primary Browser/Viewport Frame
    ctx.fillStyle = "rgba(7, 13, 26, 0.92)";
    ctx.fillRect(winX, winY, winW, winH);
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(winX, winY, winW, winH);

    // Browser header bar & window controls
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.beginPath();
    ctx.moveTo(winX, winY + 20);
    ctx.lineTo(winX + winW, winY + 20);
    ctx.stroke();
    ["#ff2a85", "#c6ff00", "#00e5ff"].forEach((col, i) => {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(winX + 12 + i * 10, winY + 10, 2.8, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = "rgba(210, 235, 255, 0.7)";
    ctx.font = "9px 'JetBrains Mono', monospace";
    ctx.fillText("parikshitspace.in // THREE.JS + VITE", winX + 48, winY + 13);

    // Left UI column cards moving independently (scroll choreography)
    for (let c = 0; c < 2; c++) {
      const cardY = winY + 32 + c * 48 + Math.sin(t * 1.6 + c) * 4;
      ctx.fillStyle = "rgba(0, 229, 255, 0.08)";
      ctx.fillRect(winX + 12, cardY, winW * 0.38, 36);
      ctx.strokeStyle = c === 0 ? "#00e5ff" : "rgba(255,255,255,0.22)";
      ctx.strokeRect(winX + 12, cardY, winW * 0.38, 36);
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.fillRect(winX + 20, cardY + 10, winW * 0.24, 4);
      ctx.fillStyle = "rgba(0, 229, 255, 0.55)";
      ctx.fillRect(winX + 20, cardY + 20, winW * 0.16, 3);
    }

    // Right embedded 3D WebGL viewport box with rotating wireframe satellite ring
    const glX = winX + winW * 0.7;
    const glY = winY + winH * 0.56;
    const glR = Math.min(winW, winH) * 0.22;
    ctx.strokeStyle = "rgba(198, 255, 0, 0.65)";
    ctx.beginPath();
    ctx.ellipse(glX, glY, glR * 1.35, glR * 0.55, t * 0.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#00e5ff";
    ctx.beginPath();
    ctx.arc(glX, glY, glR * 0.68, 0, Math.PI * 2);
    ctx.stroke();

    // Floating foreground UI inspector card
    const fgX = winX + winW * 0.52 + shift2;
    const fgY = winY + winH - 22;
    ctx.fillStyle = "rgba(10, 18, 34, 0.95)";
    ctx.fillRect(fgX, fgY, winW * 0.54, 34);
    ctx.strokeStyle = "#c6ff00";
    ctx.strokeRect(fgX, fgY, winW * 0.54, 34);
    ctx.fillStyle = "#c6ff00";
    ctx.font = "9px 'JetBrains Mono', monospace";
    ctx.fillText("SCROLLTIMELINE // GSAP + WEBGL SYNC", fgX + 10, fgY + 20);
  } else if (vt === "ml") {
    // -----------------------------------------------------------------------
    // 04 // EDGENILM: Aggregate waveform -> Edge inference graph -> Disaggregated loads
    // -----------------------------------------------------------------------
    // 1. Left: Composite AC Current Waveform
    const waveX0 = 24;
    const waveW = w * 0.31;
    const waveY = h * 0.38;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
    ctx.strokeRect(waveX0, h * 0.16, waveW, h * 0.46);
    ctx.fillStyle = "rgba(220, 240, 255, 0.75)";
    ctx.font = "9px 'JetBrains Mono', monospace";
    ctx.fillText("I_AGG(t) // SMART METER", waveX0 + 8, h * 0.22);

    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    for (let x = 0; x <= waveW - 12; x += 2) {
      const ph = (x / waveW) * Math.PI * 4 - t * 3.2;
      const y =
        waveY +
        Math.sin(ph) * 20 +
        Math.sin(ph * 3) * 8 +
        Math.cos(ph * 5) * 4;
      if (x === 0) ctx.moveTo(waveX0 + 6 + x, y);
      else ctx.lineTo(waveX0 + 6 + x, y);
    }
    ctx.stroke();

    // 2. Center: Edge Inference Node Graph with flowing pulses
    const col1X = w * 0.43;
    const col2X = w * 0.57;
    const nodes1 = [h * 0.23, h * 0.39, h * 0.55];
    const nodes2 = [h * 0.22, h * 0.39, h * 0.56];

    ctx.lineWidth = 1;
    nodes1.forEach((y1, i) => {
      nodes2.forEach((y2, j) => {
        ctx.strokeStyle = "rgba(0, 229, 255, 0.22)";
        ctx.beginPath();
        ctx.moveTo(col1X, y1);
        ctx.lineTo(col2X, y2);
        ctx.stroke();

        // Flowing inference pulse along edge
        const pNorm = (t * 0.9 + i * 0.27 + j * 0.19) % 1;
        const px = col1X + (col2X - col1X) * pNorm;
        const py = y1 + (y2 - y1) * pNorm;
        ctx.fillStyle = j === 0 ? "#00e5ff" : j === 1 ? "#c6ff00" : "#ff2a85";
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    nodes1.forEach((y1) => {
      ctx.fillStyle = "#081224";
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(col1X, y1, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });

    // 3. Right: Disaggregated Appliance Signatures & Confidence Bars
    const loads = [
      { label: "HVAC COMPRESSOR", col: "#00e5ff", conf: 0.94, freq: 1.5 },
      { label: "INDUCTION COIL", col: "#c6ff00", conf: 0.89, freq: 3.0 },
      { label: "SWITCHED PSU", col: "#ff2a85", conf: 0.92, freq: 4.5 }
    ];
    const rightX = w * 0.63;
    const rightW = w * 0.32;

    loads.forEach((ld, idx) => {
      const ly = nodes2[idx];
      ctx.fillStyle = ld.col;
      ctx.beginPath();
      ctx.arc(col2X, ly, 5.5, 0, Math.PI * 2);
      ctx.fill();

      // Mini disaggregated harmonic waveform
      ctx.strokeStyle = ld.col;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let x = 0; x <= rightW * 0.55; x += 2) {
        const ph = (x / 40) * ld.freq - t * 3.5;
        const wy = ly + Math.sin(ph) * 8;
        if (x === 0) ctx.moveTo(rightX, wy);
        else ctx.lineTo(rightX + x, wy);
      }
      ctx.stroke();

      ctx.fillStyle = "rgba(230, 245, 255, 0.85)";
      ctx.font = "8.5px 'JetBrains Mono', monospace";
      ctx.fillText(ld.label, rightX, ly - 12);
      const dynConf = Math.round((ld.conf + Math.sin(t * 1.5 + idx) * 0.02) * 100);
      ctx.fillStyle = ld.col;
      ctx.fillText(`${dynConf}%`, rightX + rightW * 0.64, ly + 3);
    });
  } else {
    // -----------------------------------------------------------------------
    // 05 // HARDWARE / EMBEDDED FALLBACK: PCB traces & SPI logic timing diagram
    // -----------------------------------------------------------------------
    const signals = ["SCLK", "MOSI", "MISO", "CS_N"];
    const stepShift = Math.floor(t * 6);
    signals.forEach((s, k) => {
      const y = 52 + k * 42;
      ctx.fillStyle = "rgba(220, 240, 250, 0.78)";
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillText(s, 20, y - 4);
      ctx.strokeStyle = k === 0 ? accent : k === 3 ? "#ff2a85" : "#c6ff00";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      let high = false;
      for (let x = 76; x < w - 22; x += 14) {
        const bitIdx = Math.floor((x - 76) / 28) + k + stepShift;
        const next = k === 0 ? ((x - 76) / 14 + stepShift) % 2 === 0 : bitIdx % 2 === 0;
        const yy = next ? y - 13 : y + 3;
        if (x === 76) ctx.moveTo(x, yy);
        else {
          ctx.lineTo(x - 14, high ? y - 13 : y + 3);
          ctx.lineTo(x - 14, yy);
          ctx.lineTo(x, yy);
        }
        high = next;
      }
      ctx.stroke();
    });
  }

  // Bottom & Top Technical Framing HUD
  ctx.fillStyle = "rgba(5, 9, 18, 0.86)";
  ctx.fillRect(0, h - 52, w, 52);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, h - 52);
  ctx.lineTo(w, h - 52);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.94)";
  ctx.font = `700 ${Math.max(12, Math.min(16, Math.round(w / 32)))}px 'Syne', sans-serif`;
  ctx.fillText(String(proj.title || proj.name).toUpperCase().slice(0, 42), 20, h - 28);

  ctx.fillStyle = accent;
  ctx.font = "10px 'JetBrains Mono', monospace";
  ctx.fillText(`${mode}  //  NODE ${String(proj.id).padStart(2, "0")}  //  ${proj.animationType || vt}`, 20, h - 11);

  ctx.fillStyle = "rgba(210, 235, 250, 0.52)";
  ctx.font = "9px 'JetBrains Mono', monospace";
  ctx.fillText("ILLUSTRATIVE SYSTEM SIMULATION", 20, 18);
}

function openProjectModal(proj, canvas, triggerEl) {
  const p = normalizeProject(proj);
  activeModalProject = p;
  drawProjectSchematic(canvas, p, performance.now() * 0.001);
  document.getElementById("modal-index").textContent = `SYSTEM ARCHIVE // ${p.id} (${p.year})`;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.shortDescription;
  document.getElementById("modal-arch").textContent = `ARCHITECTURE // ${p.detailedDescription}`;
  document.getElementById("modal-tags").innerHTML = p.technologies
    .map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`)
    .join("");

  const modalLink = document.getElementById("modal-link");
  const modalLinkLabel = document.getElementById("modal-link-label");
  const hasExternalLink = isVerifiedExternalLink(p.link);

  if (modalLink) {
    if (hasExternalLink) {
      modalLink.href = p.link;
      modalLink.target = "_blank";
      modalLink.rel = "noopener noreferrer";
      modalLink.setAttribute("data-cursor", "OPEN");
    } else {
      const subject = encodeURIComponent(`Inquiry: ${p.title} (${p.id})`);
      modalLink.href = `mailto:${CONFIG.email}?subject=${subject}`;
      modalLink.removeAttribute("target");
      modalLink.removeAttribute("rel");
      modalLink.setAttribute("data-cursor", "REQUEST");
    }
  }
  if (modalLinkLabel) {
    if (hasExternalLink) {
      modalLinkLabel.textContent = /github\.com\/.+/i.test(p.link) ? "VIEW SOURCE REPOSITORY" : "OPEN LIVE SYSTEM";
    } else {
      modalLinkLabel.textContent = "REQUEST REPOSITORY / BRIEFING";
    }
  }

  const modalMetrics = document.getElementById("modal-metrics");
  if (modalMetrics) {
    const metrics = [
      ["YEAR", p.year],
      ["STACK", p.technologies.slice(0, 3).join(" / ")],
      ["VISUAL", projectMode(p)]
    ];
    modalMetrics.innerHTML = metrics
      .map(
        ([label, value]) =>
          `<div class="modal-metric-box"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`
      )
      .join("");
  }

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


/* ============================================================================
 * 10 // NEW EDITORIAL STORYTELLING, SEMANTIC PROJECT VISUALS & PHYSICS SPRINGS
 * ============================================================================ */
function initMissionStory() {
  const stages = Array.isArray(CONFIG.missionStoryStages) ? CONFIG.missionStoryStages : [];
  const section = document.getElementById("mission-story");
  const canvas = document.getElementById("mission-story-canvas");
  const rail = document.getElementById("mission-rail");
  const activeCard = document.getElementById("mission-active-card");
  if (!section || !canvas || !rail || stages.length === 0) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const title = document.getElementById("ms-stage-title");
  const desc = document.getElementById("ms-stage-desc");
  const code = document.getElementById("ms-stage-code");
  const metric = document.getElementById("ms-stage-metric");
  const equation = document.getElementById("ms-stage-eq");
  const hudLeft = document.getElementById("ms-hud-left");
  const hudProgress = document.getElementById("ms-hud-progress");
  const buttons = [];
  let progress = 0;
  let activeStage = -1;
  let stageSwitchTimer = null;

  rail.innerHTML = stages
    .map(
      (s, i) =>
        `<button type="button" class="mission-step-btn${i === 0 ? " is-active" : ""}" data-stage="${i}" role="tab" aria-selected="${i === 0}" aria-label="Go to ${escapeHtml(s.title)}"><span class="step-num">0${i + 1}</span><span class="mission-rail-name">${escapeHtml(s.title)}</span></button>`
    )
    .join("");

  rail.querySelectorAll("[data-stage]").forEach((button) => {
    buttons.push(button);
    button.addEventListener("click", () => {
      SFX.playClick();
      const i = Number(button.dataset.stage);
      const targetProgress = (i + 0.02) / Math.max(1, stages.length);
      if (window.gsap && window.ScrollTrigger) {
        const st = ScrollTrigger.getById("mission-story-progress");
        if (st) {
          const targetY = st.start + targetProgress * (st.end - st.start);
          if (STATE.lenis && !STATE.reducedMotion) {
            STATE.lenis.scrollTo(targetY);
          } else {
            window.scrollTo({ top: targetY, behavior: STATE.reducedMotion ? "auto" : "smooth" });
          }
        } else {
          progress = i / Math.max(1, stages.length - 1);
          setStage(i);
          draw();
        }
      } else {
        progress = i / Math.max(1, stages.length - 1);
        setStage(i);
        draw();
      }
    });
  });

  function setStage(index) {
    const i = Math.max(0, Math.min(stages.length - 1, index));
    if (i === activeStage) return;
    const hadPrevious = activeStage !== -1;
    activeStage = i;
    const s = stages[i];

    if (activeCard && hadPrevious && !STATE.reducedMotion) {
      activeCard.classList.add("is-stage-switching");
      clearTimeout(stageSwitchTimer);
      stageSwitchTimer = setTimeout(() => {
        activeCard.classList.remove("is-stage-switching");
      }, 150);
    }

    if (title) title.textContent = s.title;
    if (desc) desc.textContent = s.desc;
    if (code) code.textContent = s.code;
    if (metric) metric.textContent = s.metric;
    if (equation) equation.textContent = s.eq;
    if (hudLeft) hudLeft.textContent = s.hud;
    buttons.forEach((b, j) => {
      b.classList.toggle("is-active", j === i);
      b.setAttribute("aria-selected", String(j === i));
    });
  }

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#040811";
    ctx.fillRect(0, 0, w, h);

    // Subtle telemetry grid
    ctx.strokeStyle = "rgba(0, 229, 255, 0.075)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 34) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 34) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const p = Math.max(0, Math.min(1, progress));
    const stageCount = stages.length;
    const stage = Math.min(stageCount - 1, Math.floor(p * stageCount));
    const local = p >= 1 ? 1 : (p * stageCount) % 1;
    const earthR = Math.min(w, h) * 0.21;
    const earthY = h * 0.88;

    // Planet limb & atmospheric glow
    const earthGrad = ctx.createRadialGradient(
      w * 0.5,
      earthY - earthR * 0.35,
      earthR * 0.1,
      w * 0.5,
      earthY,
      earthR * 1.95
    );
    earthGrad.addColorStop(0, "#0b4364");
    earthGrad.addColorStop(0.62, "#071d34");
    earthGrad.addColorStop(1, "#02050b");
    ctx.fillStyle = earthGrad;
    ctx.beginPath();
    ctx.arc(w * 0.5, earthY, earthR * 1.85, Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(0, 229, 255, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w * 0.5, earthY, earthR * 1.88, Math.PI, Math.PI * 2);
    ctx.stroke();

    // Primary reference trajectory curve from 600 km LEO to ground station / landing zone
    ctx.strokeStyle = "rgba(0, 229, 255, 0.28)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 6]);
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = w * (0.11 + t * 0.78);
      const y = h * (0.24 + Math.sin(t * Math.PI * 1.15) * 0.11 + p * 0.34 * t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Active traced arc up to current scroll progress
    const activeT = Math.min(1, 0.08 + p * 0.92);
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * activeT;
      const x = w * (0.11 + t * 0.78);
      const y = h * (0.24 + Math.sin(t * Math.PI * 1.15) * 0.11 + p * 0.34 * t);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    const satX = w * (0.11 + 0.78 * activeT);
    const satY = h * (0.24 + Math.sin(activeT * Math.PI * 1.15) * 0.11 + p * 0.34 * activeT);

    // -----------------------------------------------------------------------
    // STAGE-SPECIFIC ENGINEERING VISUALIZATION OVERLAYS (SCROLL = TIME)
    // -----------------------------------------------------------------------
    if (stage === 0) {
      // 01 // ORBITAL INSERTION: Separation ring & high initial tip-off tumble vectors
      const sepRadius = 18 + local * 56;
      ctx.strokeStyle = `rgba(198, 255, 0, ${(0.75 * (1 - local * 0.65)).toFixed(2)})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(satX, satY, sepRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Tip-off angular rate vectors
      for (let k = 0; k < 3; k++) {
        const ang = local * 6.2 + (k * Math.PI * 2) / 3;
        ctx.strokeStyle = k === 0 ? "#ff2a85" : "#c6ff00";
        ctx.beginPath();
        ctx.moveTo(satX, satY);
        ctx.lineTo(satX + Math.cos(ang) * 44, satY + Math.sin(ang) * 44);
        ctx.stroke();
      }
    } else if (stage === 1) {
      // 02 // SENSE THE FIELD: IGRF-13 geomagnetic field lines & sun sensor cone
      ctx.strokeStyle = "rgba(0, 229, 255, 0.32)";
      ctx.lineWidth = 1.2;
      for (let m = -2; m <= 2; m++) {
        ctx.beginPath();
        ctx.ellipse(
          w * 0.5,
          earthY - earthR * 0.9,
          w * (0.26 + Math.abs(m) * 0.06),
          h * (0.18 + Math.abs(m) * 0.05),
          m * 0.08,
          Math.PI * 1.08,
          Math.PI * 1.92
        );
        ctx.stroke();
      }
      // Sun vector cone
      ctx.fillStyle = "rgba(198, 255, 0, 0.12)";
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(satX - 75, satY - 48);
      ctx.lineTo(satX - 38, satY - 76);
      ctx.closePath();
      ctx.fill();
    } else if (stage === 2) {
      // 03 // ESTIMATE ATTITUDE: QUEST/MEKF covariance ellipse shrinking as filter converges
      const covRx = 64 * (1 - local * 0.72);
      const covRy = 38 * (1 - local * 0.72);
      ctx.strokeStyle = "#c6ff00";
      ctx.lineWidth = 1.6;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.ellipse(satX, satY, covRx, covRy, -0.35 + local * 0.25, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Estimated vs Reference triad
      const triadErr = (1 - local) * 0.52;
      ctx.strokeStyle = "rgba(0, 229, 255, 0.85)";
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(satX + 46, satY - 12);
      ctx.moveTo(satX, satY);
      ctx.lineTo(satX + 12, satY - 46);
      ctx.stroke();

      ctx.strokeStyle = "#ff2a85";
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(satX + Math.cos(-0.25 + triadErr) * 46, satY + Math.sin(-0.25 + triadErr) * 46);
      ctx.stroke();
    } else if (stage === 3) {
      // 04 // DAMP ROTATION: B-dot magnetorquer dipole loops & torque vector τ = m × B
      for (let loop = -1; loop <= 1; loop += 2) {
        ctx.strokeStyle = "rgba(255, 42, 133, 0.55)";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(satX + loop * 22, satY, 22, 12, 0.3, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Damping rate mini-plot in upper-right quadrant
      const plotX = w * 0.62;
      const plotY = h * 0.16;
      const plotW = w * 0.3;
      const plotH = h * 0.16;
      ctx.fillStyle = "rgba(5, 10, 20, 0.82)";
      ctx.fillRect(plotX, plotY, plotW, plotH);
      ctx.strokeStyle = "rgba(0, 229, 255, 0.3)";
      ctx.strokeRect(plotX, plotY, plotW, plotH);
      ctx.strokeStyle = "#c6ff00";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const u = i / 40;
        const px = plotX + 6 + u * (plotW - 12);
        const env = Math.exp(-u * 3.4) * Math.cos(u * 14);
        const py = plotY + plotH * 0.5 - env * (plotH * 0.38);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    } else if (stage === 4) {
      // 05 // DOWNLINK THE STATE: Ground-station telemetry cone & CRC-16 packet pulses
      const gsX = w * 0.52;
      const gsY = earthY - earthR * 1.85;
      ctx.fillStyle = "rgba(0, 229, 255, 0.09)";
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(gsX - 38, gsY);
      ctx.lineTo(gsX + 38, gsY);
      ctx.closePath();
      ctx.fill();

      // Streaming telemetry packets along beam
      for (let k = 0; k < 5; k++) {
        const u = (local * 2 + k * 0.2) % 1;
        const px = satX + (gsX - satX) * u;
        const py = satY + (gsY - satY) * u;
        ctx.fillStyle = k % 2 === 0 ? "#00e5ff" : "#c6ff00";
        ctx.fillRect(px - 4, py - 2, 8, 4);
      }
    } else if (stage === 5) {
      // 06 // MODEL THE DESCENT: CAN-7USAT guided descent corridor & target landing ellipse
      const lzX = w * 0.82;
      const lzY = h * 0.76;
      ctx.strokeStyle = "rgba(198, 255, 0, 0.45)";
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(lzX - 42 * (1 - local * 0.6), lzY);
      ctx.moveTo(satX, satY);
      ctx.lineTo(lzX + 42 * (1 - local * 0.6), lzY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "#c6ff00";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(lzX, lzY, 44 * (1 - local * 0.55), 13 * (1 - local * 0.55), 0, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      // 07 // CLOSE THE LOOP: Phase-portrait spiral converging to nominal equilibrium
      ctx.strokeStyle = "rgba(198, 255, 0, 0.72)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let i = 0; i <= 90; i++) {
        const u = i / 90;
        const r = (1 - u) * 58 * (1 - local * 0.35);
        const a = u * Math.PI * 5.5 + local * 3;
        const px = satX + Math.cos(a) * r;
        const py = satY + Math.sin(a) * r * 0.68;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Satellite / vehicle body
    const tumbleRate = stage === 0 ? (1 - local * 0.5) * 2.6 : stage <= 3 ? (1 - p * 0.8) * 1.1 : 0.18;
    ctx.save();
    ctx.translate(satX, satY);
    ctx.rotate(p * 2.4 * tumbleRate);
    ctx.fillStyle = "#dce8ee";
    ctx.fillRect(-9, -8, 18, 16);
    ctx.fillStyle = "#00e5ff";
    ctx.fillRect(-28, -6, 16, 12);
    ctx.fillRect(12, -6, 16, 12);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
    ctx.strokeRect(-28, -6, 16, 12);
    ctx.strokeRect(12, -6, 16, 12);
    ctx.restore();

    // Primary attitude vector arrow
    const vecAngle = -0.55 + Math.cos(p * 6.5) * (1 - p * 0.78);
    ctx.strokeStyle = "#c6ff00";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(satX, satY);
    ctx.lineTo(satX + Math.cos(vecAngle) * 40, satY + Math.sin(vecAngle) * 40);
    ctx.stroke();

    ctx.fillStyle = "#c6ff00";
    ctx.beginPath();
    ctx.arc(satX, satY, 3.2, 0, Math.PI * 2);
    ctx.fill();

    // Telemetry Readouts
    const altKm = stage < 5 ? (600 - p * 42).toFixed(1) : (1.8 * (1 - local * 0.88)).toFixed(2);
    const omegaDeg = (12.4 * Math.exp(-p * 3.8)).toFixed(2);
    ctx.fillStyle = "rgba(230, 245, 255, 0.86)";
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillText(`ALTITUDE      ${altKm} KM`, 20, 28);
    ctx.fillText(`FLIGHT PHASE  0${stage + 1}/0${stageCount} // ${stages[stage].title}`, 20, 46);
    ctx.fillText(`BODY RATE |ω| ${omegaDeg} DEG/S`, 20, 64);

    ctx.fillStyle = "rgba(0, 229, 255, 0.78)";
    ctx.fillText(`CLOSED-LOOP PROGRESS // ${(p * 100).toFixed(1)}%`, 20, h - 18);

    // Top-right progress bar inside canvas
    ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
    ctx.strokeRect(w - 150, 18, 128, 7);
    ctx.fillStyle = "#00e5ff";
    ctx.fillRect(w - 150, 18, 128 * p, 7);

    if (hudProgress) {
      hudProgress.textContent = `T+ ${(p * 5790).toFixed(1)}s [${String(Math.round(p * 100)).padStart(2, "0")}%]`;
    }
    setStage(stage);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    draw();
  }

  if (window.gsap && window.ScrollTrigger) {
    ScrollTrigger.create({
      id: "mission-story-progress",
      trigger: section,
      start: "top top",
      end: () => `+=${Math.max(2200, window.innerHeight * MOTION.scroll.missionPinScreens)}`,
      pin: "#mission-pin-wrap",
      scrub: MOTION.scroll.scrubSmooth,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        progress = self.progress;
        draw();
      }
    });
  } else {
    const update = () => {
      const r = section.getBoundingClientRect();
      const span = section.offsetHeight - window.innerHeight;
      progress = Math.max(0, Math.min(1, -r.top / Math.max(1, span)));
      draw();
    };
    window.addEventListener("scroll", update, { passive: true });
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}

function initPhysicsInteractions() {
  // Pointer-reactive closing typography ("LET'S TALK"):
  // Outer .lt-char-wrap is reserved for GSAP scroll entrance; inner .lt-char is driven by 2D spring physics.
  const stage = document.getElementById("lets-talk-stage");
  const cta = document.getElementById("lets-talk-cta");
  if (!stage || !cta) return;

  const wraps = Array.from(cta.querySelectorAll(".lt-char-wrap"));
  if (!wraps.length) return;

  const nodes = wraps
    .map((wrapEl, idx) => {
      const charEl = wrapEl.querySelector(".lt-char");
      if (!charEl) return null;
      return {
        wrapEl,
        charEl,
        idx,
        localCx: 0,
        localCy: 0,
        posSpring: new Spring2D(0, 0, MOTION.springs.letsTalkChar),
        deformSpring: new Spring2D(0, 0, MOTION.springs.letsTalkDeform) // x = rotate (deg), y = skewX (deg)
      };
    })
    .filter(Boolean);

  if (!nodes.length) return;

  let stageRect = { left: 0, top: 0, width: 1000, height: 220 };
  let localPointerX = -10000;
  let localPointerY = -10000;
  let lastLocalX = 0;
  let lastLocalY = 0;
  let lastMoveTime = performance.now();
  let inside = false;
  let rafId = null;
  let prevFrameTime = performance.now();

  // Cache resting centers relative to #lets-talk-stage on layout/resize — zero per-frame getBoundingClientRect()
  function measureLayout() {
    const sRect = stage.getBoundingClientRect();
    if (sRect.width <= 0) return;
    stageRect = {
      left: sRect.left,
      top: sRect.top,
      width: sRect.width,
      height: sRect.height
    };
    nodes.forEach((n) => {
      const wRect = n.wrapEl.getBoundingClientRect();
      n.localCx = wRect.left - sRect.left + wRect.width * 0.5;
      n.localCy = wRect.top - sRect.top + wRect.height * 0.5;
    });
  }

  function refreshStageOffsetOnly() {
    const sRect = stage.getBoundingClientRect();
    stageRect.left = sRect.left;
    stageRect.top = sRect.top;
    stageRect.width = sRect.width || stageRect.width;
    stageRect.height = sRect.height || stageRect.height;
  }

  function resetAllTargetsToRest(snapImmediately = false) {
    nodes.forEach((n) => {
      if (snapImmediately) {
        n.posSpring.snap(0, 0);
        n.deformSpring.snap(0, 0);
        n.charEl.style.transform = "translate3d(0px, 0px, 0px)";
        n.charEl.style.setProperty("--rgb-x", "0px");
        n.charEl.style.setProperty("--rgb-y", "0px");
      } else {
        n.posSpring.set(0, 0);
        n.deformSpring.set(0, 0);
      }
    });
  }

  function updateFieldTargets(transferVelocityPxX = 0, transferVelocityPxY = 0) {
    if (!inside || STATE.reducedMotion) {
      resetAllTargetsToRest(STATE.reducedMotion);
      return;
    }

    const radius = Math.max(165, Math.min(285, stageRect.width * 0.24));
    const attractRadius = radius * 1.48;
    const speed = Math.hypot(transferVelocityPxX, transferVelocityPxY);

    nodes.forEach((n) => {
      const dx = n.localCx - localPointerX;
      const dy = n.localCy - localPointerY;
      const dist = Math.hypot(dx, dy) || 1;

      let tx = 0;
      let ty = 0;
      let tRot = 0;
      let tSkew = 0;

      if (dist < radius) {
        const u = 1 - dist / radius;
        const falloff = u * u * (3 - 2 * u); // smoothstep falloff
        const repulseStrength = 44 * falloff;
        tx += (dx / dist) * repulseStrength;
        ty += (dy / dist) * repulseStrength * 0.88;

        // Rotational torque and shear based on horizontal/vertical offset from cursor
        const normX = dx / radius;
        const normY = dy / radius;
        tRot += normX * -14 * falloff + normY * 5 * falloff;
        tSkew += normX * -10 * falloff;

        // Transfer pointer momentum directly into nearby letters when sweeping quickly
        if (speed > 25) {
          const impulseScale = falloff * 0.34;
          const clampedVx = Math.max(-780, Math.min(780, transferVelocityPxX * impulseScale));
          const clampedVy = Math.max(-680, Math.min(680, transferVelocityPxY * impulseScale));
          n.posSpring.addVelocity(clampedVx, clampedVy);
          n.deformSpring.addVelocity(
            Math.max(-180, Math.min(180, transferVelocityPxX * 0.09 * falloff)),
            Math.max(-140, Math.min(140, transferVelocityPxX * 0.065 * falloff))
          );
        }
      } else if (dist < attractRadius) {
        // Subtle outer elastic tension field pulling neighboring letters slightly toward the wake
        const u = 1 - (dist - radius) / (attractRadius - radius);
        const pull = Math.sin(u * Math.PI) * 6.5;
        tx -= (dx / dist) * pull;
        ty -= (dy / dist) * pull * 0.7;
        tRot += (dx / attractRadius) * 3.2 * u;
      }

      n.posSpring.set(tx, ty);
      n.deformSpring.set(tRot, tSkew);
    });
  }

  function ensureTickRunning() {
    if (rafId !== null || STATE.reducedMotion) return;
    prevFrameTime = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function tick(now) {
    if (STATE.reducedMotion) {
      resetAllTargetsToRest(true);
      rafId = null;
      return;
    }

    const dt = Math.min(0.032, Math.max(0.001, (now - prevFrameTime) / 1000));
    prevFrameTime = now;

    // If pointer is stationary inside stage, settle target field smoothly without velocity impulses
    if (inside && now - lastMoveTime > 48) {
      updateFieldTargets(0, 0);
    }

    let anyActive = inside;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const pos = n.posSpring.step(dt, false);
      const def = n.deformSpring.step(dt, false);

      const atRest = n.posSpring.isAtRest() && n.deformSpring.isAtRest();
      if (!atRest) anyActive = true;

      if (atRest && !inside) {
        n.charEl.style.transform = "translate3d(0px, 0px, 0px)";
        n.charEl.style.setProperty("--rgb-x", "0px");
        n.charEl.style.setProperty("--rgb-y", "0px");
      } else {
        // Elastic squash/stretch derived from vertical velocity & displacement magnitude
        const velMag = Math.hypot(pos.vx, pos.vy);
        const stretch = Math.min(0.11, velMag * 0.00018 + Math.hypot(pos.x, pos.y) * 0.0012);
        const scaleY = 1 + stretch;
        const scaleX = 1 - stretch * 0.45;

        n.charEl.style.transform = `translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0) rotate(${def.x.toFixed(2)}deg) skewX(${def.y.toFixed(2)}deg) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;

        // Dynamic RGB chromatic split proportional to displacement + velocity
        const rgbX = Math.max(-7.5, Math.min(7.5, pos.x * 0.14 + pos.vx * 0.008));
        const rgbY = Math.max(-5.5, Math.min(5.5, pos.y * 0.12 + pos.vy * 0.006));
        n.charEl.style.setProperty("--rgb-x", `${rgbX.toFixed(2)}px`);
        n.charEl.style.setProperty("--rgb-y", `${rgbY.toFixed(2)}px`);
      }
    }

    if (anyActive) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function triggerWaveImpulse(amplitudeY = -28) {
    if (STATE.reducedMotion) return;
    nodes.forEach((n, i) => {
      const phase = (i / Math.max(1, nodes.length - 1)) * Math.PI;
      const vy = amplitudeY * 11 * (0.65 + Math.sin(phase) * 0.65);
      const vx = (i - (nodes.length - 1) * 0.5) * 26;
      n.posSpring.addVelocity(vx, vy);
      n.deformSpring.addVelocity((i % 2 === 0 ? 1 : -1) * 85, (i - 4) * 18);
    });
    ensureTickRunning();
  }

  stage.addEventListener(
    "pointerenter",
    (e) => {
      if (STATE.reducedMotion) return;
      measureLayout();
      inside = e.pointerType !== "touch";
      localPointerX = e.clientX - stageRect.left;
      localPointerY = e.clientY - stageRect.top;
      lastLocalX = localPointerX;
      lastLocalY = localPointerY;
      lastMoveTime = performance.now();
      if (inside) {
        updateFieldTargets(STATE.pointerVelocityX * 0.25, STATE.pointerVelocityY * 0.25);
        ensureTickRunning();
      }
    },
    { passive: true }
  );

  stage.addEventListener(
    "pointermove",
    (e) => {
      if (STATE.reducedMotion || e.pointerType === "touch") return;
      if (!inside) {
        measureLayout();
        inside = true;
      } else {
        refreshStageOffsetOnly();
      }
      const now = performance.now();
      const dtMs = Math.max(4, now - lastMoveTime);
      const nextX = e.clientX - stageRect.left;
      const nextY = e.clientY - stageRect.top;
      const pvx = ((nextX - lastLocalX) / dtMs) * 1000;
      const pvy = ((nextY - lastLocalY) / dtMs) * 1000;

      localPointerX = lastLocalX = nextX;
      localPointerY = lastLocalY = nextY;
      lastMoveTime = now;

      updateFieldTargets(pvx, pvy);
      ensureTickRunning();
    },
    { passive: true }
  );

  const handleLeave = () => {
    inside = false;
    resetAllTargetsToRest(false);
    ensureTickRunning();
  };

  stage.addEventListener("pointerleave", handleLeave, { passive: true });
  stage.addEventListener("pointercancel", handleLeave, { passive: true });

  // Graceful mobile/touch fallback: radial spring ripple on tap that settles naturally
  stage.addEventListener(
    "pointerdown",
    (e) => {
      if (STATE.reducedMotion) return;
      measureLayout();
      const tapX = e.clientX - stageRect.left;
      const tapY = e.clientY - stageRect.top;
      if (e.pointerType === "touch" || STATE.isCoarsePointer) {
        inside = false;
        nodes.forEach((n) => {
          const dx = n.localCx - tapX;
          const dy = n.localCy - tapY;
          const dist = Math.hypot(dx, dy) || 1;
          const falloff = Math.max(0.18, 1 - Math.min(1, dist / Math.max(220, stageRect.width * 0.6)));
          n.posSpring.addVelocity((dx / dist) * 340 * falloff, (dy / dist - 0.55) * 380 * falloff);
          n.deformSpring.addVelocity((dx / dist) * -120 * falloff, (dx / dist) * -65 * falloff);
          n.posSpring.set(0, 0);
          n.deformSpring.set(0, 0);
        });
        ensureTickRunning();
      }
    },
    { passive: true }
  );

  // Keyboard focus response
  cta.addEventListener("focus", () => {
    if (!inside && !STATE.reducedMotion) {
      triggerWaveImpulse(-22);
    }
  });

  window.addEventListener("resize", measureLayout, { passive: true });
  window.addEventListener("letsTalkLayoutUpdated", measureLayout);
  onMotionPreferenceChange((reduced) => {
    if (reduced) {
      inside = false;
      resetAllTargetsToRest(true);
    }
  });

  requestAnimationFrame(measureLayout);
}

function initEditorialScrollEnhancements() {
  if (!window.gsap || !window.ScrollTrigger) return;
  const reduced = STATE.reducedMotion;

  // Staggered editorial entrance for dossier cards, facts, skill columns, and guestbook entries
  gsap.utils.toArray(".dossier-item, .fact-card, .skill-col, .gb-entry").forEach((el, i) => {
    if (reduced) {
      el.style.opacity = "1";
      return;
    }
    gsap.fromTo(
      el,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.durations.reveal,
        delay: (i % 4) * 0.035,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true
        }
      }
    );
  });

  // Counter-drifting background orbital coordinates in Section 01 (#about)
  const coordSpans = gsap.utils.toArray("#about-bg-coords span");
  coordSpans.forEach((span, idx) => {
    if (reduced) return;
    const dir = idx % 2 === 0 ? -1 : 1;
    gsap.fromTo(
      span,
      { xPercent: dir * -6 },
      {
        xPercent: dir * 6,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      }
    );
  });

  // Subtle depth scrub on mission canvas frame and active project indicator
  gsap.utils.toArray(".mission-canvas-frame, .work-active-indicator").forEach((el) => {
    if (reduced) return;
    gsap.fromTo(
      el,
      { y: 18, opacity: 0.65 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7
        }
      }
    );
  });

  // Scroll-driven Project Rows: depth reveal + automatic dominant system selection as rows cross viewport center
  gsap.utils.toArray(".project-row").forEach((row, idx) => {
    if (!reduced) {
      gsap.fromTo(
        row,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: idx * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            once: true
          }
        }
      );
    }

    ScrollTrigger.create({
      trigger: row,
      start: "top 58%",
      end: "bottom 42%",
      onEnter: () => {
        if (STATE.hoveredProjectIndex === -1) setDominantProject(idx, "scroll");
      },
      onEnterBack: () => {
        if (STATE.hoveredProjectIndex === -1) setDominantProject(idx, "scroll");
      }
    });
  });

  onMotionPreferenceChange(() => {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  });
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
    ["initSystemsAndGuestbook", initSystemsAndGuestbook],
    ["initMissionStory", initMissionStory],
    ["initPhysicsInteractions", initPhysicsInteractions],
    ["initEditorialScrollEnhancements", initEditorialScrollEnhancements]
  ];

  subsystems.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[System Init] Subsystem "${name}" encountered an error:`, err);
    }
  });
});