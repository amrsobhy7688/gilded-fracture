const reader   = document.getElementById("reader");
const screens  = [...document.querySelectorAll(".screen")];
const prevBtn  = document.getElementById("prevBtn");
const nextBtn  = document.getElementById("nextBtn");
const countEl  = document.getElementById("progressCount");
const markersEl = document.getElementById("progressMarkers");
const evidenceBtn   = document.getElementById("evidenceBtn");
const evidenceDrawer = document.getElementById("evidenceDrawer");
const closeDrawer   = document.getElementById("closeDrawer");
const drawerScrim   = document.getElementById("drawerScrim");

const TOTAL = screens.length;
let current = 0;
let touchStartX = 0;
let touchStartY = 0;
let drawerOpen = false;

// ── Build progress diamonds ──────────────────────────────────

function buildMarkers() {
  markersEl.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const d = document.createElement("span");
    d.className = "progress-diamond";
    markersEl.appendChild(d);
  }
}

function updateMarkers() {
  const diamonds = [...markersEl.querySelectorAll(".progress-diamond")];
  diamonds.forEach((d, i) => {
    d.classList.toggle("is-past",    i < current);
    d.classList.toggle("is-current", i === current);
  });
}

// ── Navigate ─────────────────────────────────────────────────

function goTo(index) {
  current = ((index % TOTAL) + TOTAL) % TOTAL;
  screens.forEach((s, i) => s.classList.toggle("is-active", i === current));
  countEl.textContent =
    String(current + 1).padStart(2, "0") + " / " + String(TOTAL).padStart(2, "0");
  updateMarkers();
}

// ── Drawer ────────────────────────────────────────────────────

function setDrawer(open) {
  drawerOpen = open;
  evidenceDrawer.setAttribute("aria-hidden", String(!open));
  if (open) reader.classList.remove("is-focus");
}

// ── Focus mode ────────────────────────────────────────────────

function onReaderClick(e) {
  if (e.target.closest("button, .evidence-drawer, .drawer-panel")) return;
  if (drawerOpen) { setDrawer(false); return; }
  reader.classList.toggle("is-focus");
}

// ── Touch swipe ───────────────────────────────────────────────

reader.addEventListener("touchstart", e => {
  const t = e.changedTouches[0];
  touchStartX = t.clientX;
  touchStartY = t.clientY;
}, { passive: true });

reader.addEventListener("touchend", e => {
  if (drawerOpen) return;
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStartX;
  const dy = t.clientY - touchStartY;
  if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy)) return;
  goTo(current + (dx < 0 ? 1 : -1));
}, { passive: true });

// ── Mouse wheel (desktop) ─────────────────────────────────────

let wheelCooldown = false;
reader.addEventListener("wheel", e => {
  if (wheelCooldown || drawerOpen) return;
  e.preventDefault();
  wheelCooldown = true;
  goTo(current + (e.deltaY > 0 ? 1 : -1));
  setTimeout(() => { wheelCooldown = false; }, 420);
}, { passive: false });

// ── Keyboard ──────────────────────────────────────────────────

window.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown")  goTo(current + 1);
  if (e.key === "ArrowLeft"  || e.key === "ArrowUp")    goTo(current - 1);
  if (e.key === "Escape") { reader.classList.remove("is-focus"); setDrawer(false); }
  if (e.key === "f" || e.key === "F") reader.classList.toggle("is-focus");
});

// ── Evidence drawer cards ────────────────────────────────────

document.querySelectorAll(".drawer-card").forEach(card => {
  card.addEventListener("click", () => {
    goTo(Number(card.dataset.jump));
    setDrawer(false);
  });
});

// ── Wire up buttons ──────────────────────────────────────────

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));
reader.addEventListener("click", onReaderClick);
evidenceBtn.addEventListener("click", () => setDrawer(!drawerOpen));
closeDrawer.addEventListener("click", () => setDrawer(false));
drawerScrim.addEventListener("click", () => setDrawer(false));

// ── Init ─────────────────────────────────────────────────────

buildMarkers();
goTo(0);
