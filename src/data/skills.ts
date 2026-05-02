export type SkillGroup = {
  title: string;
  icon: string; // lucide icon name (without the "lucide:" prefix)
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code-2",
    items: ["Python", "SQL", "Bash"],
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "brain-circuit",
    items: [
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "pandas",
      "NumPy",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
      "Reinforcement Learning",
      "CUDA",
      "Tensorboard",
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: "sparkles",
    items: ["LLMs", "RAG", "Vector Search", "AI Agents", "Diffusion Models"],
  },
  {
    title: "Data & Pipelines",
    icon: "workflow",
    items: ["Azure Databricks", "PySpark", "Delta Lake", "ETL Pipelines", "MLflow"],
  },
  {
    title: "Tools & Infrastructure",
    icon: "wrench",
    items: [
      "Git",
      "GitHub Actions / CI/CD",
      "Docker",
      "Linux",
      "Jupyter Notebooks",
      "MS Power BI",
    ],
  },
];
