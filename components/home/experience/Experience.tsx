import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "DPL",
    position: "Flutter Developer",
    time: "July 2023 - Present",
    location: "Islamabad, Pakistan",
    description:
      "I commenced my tenure with DPL as a Mobile Application Developer Intern as part of their esteemed summer internship program. My role within the organization was instrumental in contributing to the successful execution of the DPL Ticket System, a pivotal project within the company. This invaluable experience not only allowed me to contribute significantly to the project but also afforded me the opportunity to assimilate and adopt new industry standards in software development",
    tech: [
      "Flutter",
      "Dart",
      "Git",
      "TFS Azure",
      "Figma",
      "Rest API's",
      "Third Party API's"
    ],
  },
  {
    title: "H-SQUARE SOFT",
    position: "Social Media Manager",
    time: "August 2021 - October 2022",
    location: "London, UK",
    description:
      "Worked as a Social Media Manager at H-Square Soft (a UK-based company) for 16 months and grew their business with my expertise. I successfully managed to attract many clients for them. Created and maintained brand’s social media channels and published content, including blogs and press releases Boosted social media engagement by nearly 60",
    tech: [
      "Google Adsense",
      "Facebook",
      "Instagram",
      "Linkedin",
      "Twitter",
      "Google Analytics",
      "ahrefs"
    ],
  },
  
];
