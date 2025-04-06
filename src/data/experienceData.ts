export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Data Science Intern for ADAS/AD",
    company: "Porsche AG",
    dates: "03/2025 - today",
    description: [
      "point 1",
      "point 2"
    ]
  },
  {
    title: "Tutor/Student Assistant",
    company: "University of Applied Sciences Düsseldorf",
    dates: "05/2023 - 02/2025",
    description: [
      "Assistance with organizational and technical preparation",
      "Correcting students' assignments and submissions",
      "Give tutorials to students",
      "Help students with their homework",
      "Supervise laboratory"
    ]
  },
  {
    title: "Student Intern for Interior Sensing",
    company: "Aptiv",
    dates: "04/2024 - 07/2024",
    description: [
      "Programming tool to analyze and enhance a metric for evaluating images created by generative AI",
      "Conduct a small study and presenting the findings"
    ]
  },
  {
    title: "Student Intern for Computer Vision",
    company: "eekual bionic GmbH",
    dates: "04/2024 - 07/2024",
    description: [
      "Creating of a proof of concept for a new software solution",
      "Training of different YOLO networks for object detection including hyperparameter optimazation",
      "Creating and labeling a dataset for object detection"
    ]
  },
];