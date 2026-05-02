// `end: null` renders as "Present".

export type Experience = {
  kind: "work" | "education";
  role: string;
  organization: string;
  url?: string;
  location?: string;
  start: string; // ISO YYYY-MM
  end: string | null;
  highlights: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    kind: "work",
    role: "AI Engineer Intern",
    organization: "amber",
    url: "https://ambersearch.de/",
    location: "Cologne, Germany",
    start: "2026-04",
    end: null,
    highlights: [
      "Working on amber's Business-AI platform — enterprise search, AI assistants, and AI agents — that turns internal company knowledge into precise, secure answers.",
    ],
    stack: ["Python", "LLMs", "RAG", "Vector Search", "AI Agents"],
  },
  {
    kind: "education",
    role: "B.Sc. Data Science, AI and Intelligent Systems",
    organization: "University of Applied Sciences Düsseldorf",
    url: "https://www.hs-duesseldorf.de/",
    location: "Düsseldorf, Germany",
    start: "2022-09",
    end: "2026-03",
    highlights: [
      "Graduated with a final grade of 1.4.",
      "Bachelor thesis at Porsche AG on multi-agent visual RAG for ADAS computer vision datasets — graded 1.0.",
    ],
  },
  {
    kind: "work",
    role: "Bachelor Thesis Researcher — Camera Perception for ADAS/AD",
    organization: "Porsche AG",
    url: "https://www.porsche.com/",
    location: "Weissach,Germany",
    start: "2025-09",
    end: "2026-02",
    highlights: [
      "Designed and developed a multi-agent visual RAG system for hybrid image retrieval and analysis of large-scale ADAS computer vision datasets.",
    ],
    stack: ["Python", "Computer Vision", "RAG", "LLMs", "PyTorch"],
  },
  {
    kind: "work",
    role: "Data Science Intern — Camera Perception for ADAS/AD",
    organization: "Porsche AG",
    url: "https://www.porsche.com/",
    location: "Weissach, Germany",
    start: "2025-03",
    end: "2025-08",
    highlights: [
      "Built a scalable ETL pipeline using Azure Databricks to ingest and transform large camera and bus video recordings, enabling automated upload into a cloud-based data management platform.",
      "Evaluated ODDs for novel LiDAR-based sensor concepts for Level-3 autonomous driving using map-based data analysis.",
      "Owned end-to-end data preprocessing and analysis for an image-annotation proof-of-concept, improving data quality and labeling efficiency.",
    ],
    stack: ["Python", "Azure Databricks", "PySpark", "Delta Lake", "ETL", "MLflow"],
  },
  {
    kind: "work",
    role: "Tutor / Student Assistant",
    organization: "University of Applied Sciences Düsseldorf",
    url: "https://www.hs-duesseldorf.de/",
    location: "Düsseldorf, Germany",
    start: "2023-05",
    end: "2025-02",
    highlights: [
      "Held tutorials and supported students with hands-on exercises.",
      "Assisted with organizational and technical preparation of courses.",
      "Reviewed and graded student assignments and submissions.",
    ],
  },
  {
    kind: "work",
    role: "Student Intern — Interior Sensing",
    organization: "Aptiv",
    url: "https://www.aptiv.com/",
    location: "Wuppertal, Germany",
    start: "2024-04",
    end: "2024-07",
    highlights: [
      "Built a Python-based tool to analyze and improve the quality of diffusion-generated images.",
      "Performed qualitative analysis of generated interior sensing images and presented key findings.",
    ],
    stack: ["Python", "Diffusion Models", "Generative AI", "Computer Vision"],
  },
  {
    kind: "work",
    role: "Student Intern — Computer Vision",
    organization: "eekual bionic GmbH",
    url: "https://www.one-ai.fashion/",
    location: "Cologne, Germany",
    start: "2024-04",
    end: "2024-07",
    highlights: [
      "Led the development of a proof of concept for in-app object detection.",
      "Trained and optimized multiple YOLO models on custom datasets, including systematic hyperparameter tuning.",
    ],
    stack: ["Python", "PyTorch", "YOLO", "Computer Vision"],
  },
];
