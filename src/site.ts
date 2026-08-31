export const site = {
  name: "Orza",
  tagline: "A Mac browser. Free. Built with the people who use it.",
  title: "Orza — a Mac browser. Free. Built with the people who use it.",
  description: "A Mac browser. Free. Built with the people who use it.",
  url: "https://orza.acidity.lol",
  email: "hello@useorza.dev",
  acidityUrl: "https://acidity.lol",
  acidityStudioUrl: "https://acidity.lol#studio",
  miseUrl: "https://usemise.dev",
} as const;

export const features = [
  {
    n: "01",
    title: "Pins",
    tip: "Save up to 12 sites. Close a pin and it comes back to that address.",
  },
  {
    n: "02",
    title: "Split",
    tip: "Cmd+[ and Cmd+] stay on the pane you’re in. Option-Cmd arrows jump the other one.",
  },
  {
    n: "03",
    title: "Mini-player",
    tip: "Control audio and video from the sidebar.",
  },
  {
    n: "04",
    title: "Spaces",
    tip: "Profiles with separate cookies and logins.",
  },
  {
    n: "05",
    title: "Idle tabs",
    tip: "Unused tabs unload to free memory. Coming back shows a snapshot, not a blank page.",
  },
  {
    n: "06",
    title: "Reader",
    tip: "Strip a page down to the article.",
  },
  {
    n: "07",
    title: "Ads & trackers",
    tip: "Blocked with macOS content rules, not an extension.",
  },
  {
    n: "08",
    title: "Phishing & malware",
    tip: "Warns if a site is on the OpenPhish or URLhaus lists.",
  },
  {
    n: "09",
    title: "HTTPS-only",
    tip: "HTTP is upgraded to HTTPS when it can.",
  },
  {
    n: "10",
    title: "Shortcuts",
    tip: "Click a row, press the new chord. Defaults until you change one. Reset this one, or all of them.",
  },
  {
    n: "11",
    title: "Tabs",
    tip: "Page links open behind you. New tabs land next to the current one. Close goes to the neighbor, or last used if you turn that on.",
  },
  {
    n: "12",
    title: "Switcher",
    tip: "Ctrl+Tab walks open tabs in this Space, with previews.",
  },
  {
    n: "13",
    title: "Numbers",
    tip: "Cmd+1–9 follow the order you opened them. A closed pin doesn’t steal a number.",
  },
  {
    n: "14",
    title: "Command bar",
    tip: "Cmd+K is the same glass as Cmd+L. Still a palette.",
  },
  {
    n: "15",
    title: "Shortcut HUD",
    tip: "Optional. Chords only, off until you turn it on.",
  },
  {
    n: "16",
    title: "Background tab",
    tip: "Open Link in Background Tab sits at the top of the link menu.",
  },
  {
    n: "17",
    title: "Mise",
    tip: "Mise Pro restores this Space — tabs, split, sidebar — into the slot you saved. Closed pins stay pins.",
    href: site.miseUrl,
    icon: "/favicons/mise.png",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BrowserApplication",
  operatingSystem: "macOS",
  description: site.description,
  url: site.url,
};
