import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "workpace",
    name: "WorkPace",
    description:
      "A rapid prototyping and product management environment for testing product ideas, building personal tools, and gathering feedback.",
    url: "https://github.com/SammyEl-Sherif/workpace",
    tags: ["React", "TypeScript", "Prototyping"],
  },
  {
    slug: "voxchop",
    name: "voxchop",
    description:
      "AI-powered audio tools for processing and manipulating voice recordings.",
    url: "https://github.com/SammyEl-Sherif/voxchop",
    tags: ["AI", "Audio", "Python"],
  },
  {
    slug: "sight",
    name: "Sight",
    description:
      "An intention-based media consumption manager that helps you be more mindful about your content diet.",
    url: "https://github.com/SammyEl-Sherif/Sight",
    tags: ["Productivity", "Media", "React Native"],
  },
  {
    slug: "ralli",
    name: "ralli",
    description:
      "Your shortcut to good times. A social coordination app for planning and organizing group activities.",
    url: "https://github.com/SammyEl-Sherif/ralli",
    tags: ["Social", "Mobile", "React Native"],
  },
];

export const featuredProject = projects[0];
