export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Portfolio",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      "title": "About",
      "href": "#about"
    },
    {
      "title": "Skills",
      "href": "#skills"
    },
    {
      "title": "Education",
      "href": "#education"
    },
    {
      "title": "Contact",
      "href": "#contact"
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
