const THEME_KEY = "orza-theme";
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

const themeToggle = document.querySelector<HTMLButtonElement>("#theme-toggle");
const themeColorMeta = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
    );
  }
  const color = theme === "light" ? "#f4f4f2" : "#0c0d10";
  themeColorMeta.forEach((meta) => {
    meta.setAttribute("content", color);
    meta.removeAttribute("media");
  });
}

const initialTheme =
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
});

const mascotLines = [
  "Don’t lick the mascot. We put that on the site for a reason.",
  "I’m the lime. Orza is still in the pan.",
  "Decorative until you click me. Now I’m tart.",
  "Don’t ask for a TestFlight. I already said that.",
  "You clicked a citrus. Peak browsing.",
];

const mascotBtn = document.querySelector<HTMLButtonElement>("[data-mascot]");
const mascotBubble = document.querySelector<HTMLElement>("[data-mascot-bubble]");
let mascotLine = 0;
let mascotHide: number | undefined;

mascotBtn?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!mascotBubble) return;
  mascotBubble.hidden = false;
  mascotBubble.textContent = mascotLines[mascotLine % mascotLines.length] ?? "";
  mascotLine += 1;
  mascotBubble.style.animation = "none";
  void mascotBubble.offsetWidth;
  mascotBubble.style.animation = "";
  window.clearTimeout(mascotHide);
  mascotHide = window.setTimeout(() => {
    mascotBubble.hidden = true;
  }, 3200);
});

const panel = document.querySelector<HTMLElement>("[data-features-panel]");
const sheet = document.querySelector<HTMLElement>("[data-features-sheet]");
const openLinks = document.querySelectorAll<HTMLAnchorElement>("[data-features-open]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-features-close]");
const main = document.querySelector("main");

function isHome() {
  return location.pathname === "/" || location.pathname === "/index.html";
}

function featuresOpen() {
  return panel?.classList.contains("is-open") ?? false;
}

function setExpanded(open: boolean) {
  openLinks.forEach((link) => {
    link.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function applyFeatures(open: boolean) {
  if (!panel) return;
  panel.classList.toggle("is-open", open);
  panel.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("features-open", open);
  if (main) {
    if (open) main.setAttribute("inert", "");
    else main.removeAttribute("inert");
  }
  setExpanded(open);
  if (open) {
    if (location.hash !== "#features") {
      history.pushState({ features: true }, "", "#features");
    }
    closeBtn?.focus();
  } else if (location.hash === "#features") {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function transition(update: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { finished: Promise<void> };
  };
  if (!reduce.matches && typeof doc.startViewTransition === "function") {
    doc.startViewTransition(update);
    return;
  }
  update();
}

function openFeatures() {
  if (!panel || featuresOpen()) return;
  transition(() => applyFeatures(true));
}

function closeFeatures() {
  if (!panel || !featuresOpen()) return;
  transition(() => applyFeatures(false));
}

function toggleFeatures() {
  if (featuresOpen()) closeFeatures();
  else openFeatures();
}

function syncFromLocation() {
  if (!panel) return;
  const want = location.hash === "#features";
  if (want === featuresOpen()) {
    setExpanded(want);
    return;
  }
  applyFeatures(want);
}

openLinks.forEach((link) => {
  link.setAttribute("aria-expanded", "false");
  link.setAttribute("aria-controls", "features");
  link.addEventListener("click", (event) => {
    if (!panel || !isHome()) return;
    event.preventDefault();
    toggleFeatures();
  });
});

closeBtn?.addEventListener("click", () => closeFeatures());

panel?.addEventListener("click", (event) => {
  if (event.target === panel) closeFeatures();
});

sheet?.addEventListener("click", (event) => event.stopPropagation());

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && featuresOpen()) {
    event.preventDefault();
    closeFeatures();
  }
});

window.addEventListener("popstate", syncFromLocation);
window.addEventListener("hashchange", syncFromLocation);

if (panel && location.hash === "#features") {
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("features-open");
  if (main) main.setAttribute("inert", "");
  setExpanded(true);
}
