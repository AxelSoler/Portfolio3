import { useTranslations } from "next-intl";
import yellowroomsimg from "@/img/projects/YellowRooms.png";
import monsterimg from "@/img/projects/MonsterHunterWorld.png";
import mycroverseimg from "@/img/projects/Mycroverse2.0.png";
import afi from "@/img/projects/afi.png";
import rocketbooking from "@/img/projects/rp1.png";
import homeplate from "@/img/projects/homeplate.png";
import ghs from "@/img/projects/ghs.png";
import healthTrack from "@/img/projects/healthtrack/healthtrack.png";

const useProjects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      name: "GHS",
      nameKey: "GHS",
      description: t("ghs.description"),
      longDescription: t("ghs.longDescription"),
      image: ghs,
      technologies: [
        "JavaScript",
        "React",
        "CSS",
        "Tailwind",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
      live: "https://app.stangsfb.com/",
      repository: "https://github.com/AxelSoler/GHS",
      position: "Front End Developer",
      company: "GoodSoftwareDev",
    },
    {
      name: "Rocket-Booking",
      nameKey: "RP-1",
      description: t("rocketbooking.description"),
      longDescription: t("rocketbooking.longDescription"),
      image: rocketbooking,
      technologies: [
        "JavaScript",
        "React",
        "CSS",
        "Tailwind",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
      live: "https://app.rp1.ai/signin",
      repository: "private",
      position: "Front End Developer",
      company: "GoodSoftwareDev",
    },
    {
      name: "American Fleet Insurance",
      nameKey: "AFI",
      description: t("afi.description"),
      longDescription: t("afi.longDescription"),
      image: afi,
      technologies: [
        "JavaScript",
        "React",
        "CSS",
        "Tailwind",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
      live: "private",
      repository: "private",
      position: "Front End Developer",
      company: "GoodSoftwareDev",
    },
    {
      name: "Health Track",
      nameKey: "HealthTrack",
      description: t("healthTrack.description"),
      longDescription: t("healthTrack.longDescription"),
      image: healthTrack,
      technologies: [
        "JavaScript",
        "React",
        "Tailwind",
        "Next",
        "Supabase",
      ],
      live: "private",
      repository: "https://github.com/AxelSoler/healthtrack-as",
      position: "Full Stack Developer",
      company: "Self-Employed",
    },
    {
      name: "Home Plate",
      nameKey: "HomePlate",
      description: t("homeplate.description"),
      longDescription: t("homeplate.longDescription"),
      image: homeplate,
      technologies: [
        "JavaScript",
        "React",
        "CSS",
        "Tailwind",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
      live: "private",
      repository: "private",
      position: "Front End Developer",
      company: "GoodSoftwareDev",
    },
    {
      name: "YellowRooms",
      nameKey: "YellowRooms",
      description: t("yellowrooms.description"),
      longDescription: t("yellowrooms.longDescription"),
      image: yellowroomsimg,
      technologies: ["JavaScript", "React", "CSS", "Ruby", "Rails"],
      live: "https://yellow-rooms.netlify.app/",
      repository: "https://github.com/AxelSoler/YellowRooms-Front",
      position: "Full Stack Developer",
      company: "Microverse",
    },
    {
      name: "Monster Hunter World",
      nameKey: "MHW",
      description: t("monsterhunter.description"),
      longDescription: t("monsterhunter.longDescription"),
      image: monsterimg,
      technologies: ["CSS", "JavaScript", "React", "Redux"],
      live: "https://classy-banoffee-260a19.netlify.app/",
      repository: "https://github.com/AxelSoler/monster-hunter-world",
      position: "Full Stack Developer",
      company: "Microverse",
    },
    {
      name: "Mycroverse-2.0",
      nameKey: "Mycroverse",
      description: t("mycroverse.description"),
      longDescription: t("mycroverse.longDescription"),
      image: mycroverseimg,
      technologies: ["CSS", "HTML", "JavaScript"],
      live: "https://axelsoler.github.io/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0/",
      repository:
        "https://github.com/AxelSoler/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0",
      position: "Front End Developer",
      company: "Microverse",
    },
  ];

  return projects;
};

export default useProjects;