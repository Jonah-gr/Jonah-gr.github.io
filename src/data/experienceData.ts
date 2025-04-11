export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const jobs: Job[] = [
  {
    title: "Data Science Intern for ADAS/AD",
    company: "Porsche AG",
    dates: "03/2025 - today",
    description: [
      "point 1",
      "point 2"
    ],
    image: "https://upload.wikimedia.org/wikipedia/de/thumb/2/2d/Porsche_Wappen.svg/315px-Porsche_Wappen.svg.png?20190521143657",
    imageWidth: 100,
    imageHeight: 100,
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
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/20150501_HSD_Logo_rot_transparent.png",
    imageWidth: 150,
    imageHeight: 150,
  },
  {
    title: "Student Intern for Interior Sensing",
    company: "Aptiv",
    dates: "04/2024 - 07/2024",
    description: [
      "Programming tool to analyze and enhance a metric for evaluating images created by generative AI",
      "Conduct a small study and presenting the findings"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Aptiv_logo.svg/257px-Aptiv_logo.svg.png",
    imageWidth: 200,
    imageHeight: 80,
  },
  {
    title: "Student Intern for Computer Vision",
    company: "eekual bionic GmbH",
    dates: "04/2024 - 07/2024",
    description: [
      "Creating of a proof of concept for a new software solution",
      "Training of different YOLO networks for object detection including hyperparameter optimazation",
      "Creating and labeling a dataset for object detection"
    ],
    image: "https://cdn.theorg.com/c5bd0a5b-cd6e-49c3-943b-3a11013dceac_medium.jpg",
    imageWidth: 80,
    imageHeight: 80,
  },
];