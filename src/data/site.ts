// Edit this file to update the values shown across the site.

export const site = {
  name: "Jonah Gräfe",
  role: "Data Science · Machine Learning · AI",
  status: "AI Engineer Intern at amber",
  tagline:
    "I build practical machine-learning systems across computer vision, generative AI, and retrieval-augmented search — from scalable data pipelines to production.",
  location: "Düsseldorf, Germany",
  email: "jonah.graefe@gmail.com",
  // Set to "" to hide the Resume / CV button. To enable it,
  // set this to "/cv.pdf" and drop your real PDF at public/cv.pdf.
  resumeUrl: "https://cdn.jsdelivr.net/gh/Jonah-gr/cv@main/cv.pdf",
  socials: {
    github: "https://github.com/jonah-gr",
    linkedin: "https://www.linkedin.com/in/jonah-gr/",
    googleScholar: "",
    twitter: "",
  },
  url: "https://jonah-gr.github.io",
} as const;

export type SiteConfig = typeof site;
