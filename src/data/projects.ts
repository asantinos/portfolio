export interface Project {
  name: string;
  url: string;
  status: "active" | "dev";
  description: string;
  tech: string[];
  className?: string;
}

export const projects: Project[] = [
  {
    name: "Stride",
    url: "https://stride.asantinos.com",
    status: "active",
    description:
      "A beautiful steps tracking application for iOS with seamless HealthKit integration and a focus on user experience.",
    tech: ["Expo", "HealthKit"],
    className: "stride",
  },
  {
    name: "Monked",
    url: "https://monked.asantinos.com",
    status: "active",
    description:
      "A calm app focused on discipline and mindfulness through habits, journaling, and meditation practice.",
    tech: ["Expo", "SwiftUI", "SQLite"],
    className: "monked",
  },
  {
    name: "Pump",
    url: "https://pump.asantinos.com",
    status: "dev",
    description:
      "A gym workout tracker for iOS to log exercises, track progress, and build consistent training routines.",
    tech: ["Expo", "HealthKit"],
    className: "pump",
  },
];
