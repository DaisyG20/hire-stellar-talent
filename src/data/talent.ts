import t1 from "@/assets/talent-1.jpg";
import t2 from "@/assets/talent-2.jpg";
import t3 from "@/assets/talent-3.jpg";
import t4 from "@/assets/talent-4.jpg";
import t5 from "@/assets/talent-5.jpg";
import t6 from "@/assets/talent-6.jpg";

export type Department = "Engineering" | "Design" | "Marketing" | "Operations";
export type Level = "Mid" | "Senior" | "Lead";

export interface Talent {
  id: string;
  name: string;
  role: string;
  location: string;
  department: Department;
  level: Level;
  skills: string[];
  bio: string;
  photo: string;
  rate: string;
}

export const talent: Talent[] = [
  {
    id: "1",
    name: "Amara N.",
    role: "Senior Brand Designer",
    location: "Lisbon, PT",
    department: "Design",
    level: "Senior",
    skills: ["Brand systems", "Figma", "Art direction"],
    bio: "8 years shaping identities for DTC and fintech. Previously in-house at two unicorns.",
    photo: t3,
    rate: "$70 / hr",
  },
  {
    id: "2",
    name: "Daniel K.",
    role: "Full-stack Engineer",
    location: "Berlin, DE",
    department: "Engineering",
    level: "Senior",
    skills: ["TypeScript", "React", "Postgres"],
    bio: "Ex-Stripe. Builds reliable product surfaces and the systems behind them.",
    photo: t2,
    rate: "$95 / hr",
  },
  {
    id: "3",
    name: "Sofía R.",
    role: "Performance Marketer",
    location: "Mexico City, MX",
    department: "Marketing",
    level: "Lead",
    skills: ["Paid social", "Lifecycle", "Attribution"],
    bio: "Scaled three SaaS brands past $10M ARR through paid + retention.",
    photo: t5,
    rate: "$80 / hr",
  },
  {
    id: "4",
    name: "Mei L.",
    role: "Product Designer",
    location: "Singapore, SG",
    department: "Design",
    level: "Mid",
    skills: ["Product design", "Research", "Prototyping"],
    bio: "Designs measured product flows for B2B SaaS. Loves messy problems.",
    photo: t1,
    rate: "$60 / hr",
  },
  {
    id: "5",
    name: "Arjun P.",
    role: "RevOps Lead",
    location: "Bangalore, IN",
    department: "Operations",
    level: "Lead",
    skills: ["HubSpot", "Forecasting", "Workflow"],
    bio: "Builds the operating systems that let go-to-market teams move faster.",
    photo: t6,
    rate: "$75 / hr",
  },
  {
    id: "6",
    name: "Hiro T.",
    role: "Senior iOS Engineer",
    location: "Tokyo, JP",
    department: "Engineering",
    level: "Senior",
    skills: ["Swift", "SwiftUI", "Architecture"],
    bio: "Ships polished, performant mobile experiences. Apple Design Award contributor.",
    photo: t4,
    rate: "$90 / hr",
  },
];
