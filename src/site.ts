export const site = {
  name: "Orza",
  tagline: "A Mac browser for people who actually browse.",
  title: "Orza — a Mac browser for people who actually browse",
  description: "A Mac browser for people who actually browse.",
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
