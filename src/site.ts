export const site = {
  name: "Orza",
  tagline: "A Mac browser. Free. Built with the people who use it.",
  title: "Orza — a Mac browser. Free. Built with the people who use it.",
  description: "A Mac browser. Free. Built with the people who use it.",
  url: "https://orza.acidity.lol",
  acidityUrl: "https://acidity.lol",
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BrowserApplication",
  operatingSystem: "macOS",
  description: site.description,
  url: site.url,
};
