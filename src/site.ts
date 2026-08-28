export const site = {
  name: "Orza",
  tagline: "A Mac browser. Free. Built with the people who use it.",
  title: "Orza — a Mac browser. Free. Built with the people who use it.",
  description: "A Mac browser. Free. Built with the people who use it.",
  url: "https://orza.acidity.lol",
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
    title: "Split View",
    tip: "Two pages in one window.",
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
    title: "Mise",
    tip: "Opens an Orza window to a page, or a split with two pages, in the slot you saved.",
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
