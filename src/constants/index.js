import {
    html,
    css,
    javascript,
    reactjs,
    tailwind,
    threejs,
    java,
    mysql,
    laravel,
    firebase,
    unity,
    git,
    figma,
    pl,
    binus,
    schedulemate,
    lecturna,
    axforasset,
    buildmaster,
    insecure,
    tanakaguitar,
    astronom,
    ailectric,
    tripplan,
    joinbumn,
    legho,
    inkandquill,
    dungeonhunter,
    ytredesign,
    solarsystem,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "project",
      title: "Projects",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Unity ",
      icon: unity,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const education = [
    {
      title: "Pangudi Luhur II Servasius Bekasi",
      company_name: "High School",
      icon: pl,
      iconBg: "#383E56",
      date: "2018 - 2021",
      points: [
        "When I was in high school, I majored in Mathematics and Science (MIPA) at Pangudi Luhur II Servasius. I joined the programming extracurricular, from there I began to be interested in the world of programming.",
      ],
    },
    {
      title: "Bina Nusantara University",
      company_name: "College",
      icon: binus,
      iconBg: "#E6DEDD",
      date: "2021 - 2025 (Expected)",
      points: [
        "I majored in Computer Science at this college and learned many things from the basics to the specifics, such as algorithms, data structures, human computer interaction, databases, and how to implement them. I took streaming for multimedia because I was interested in the front end.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Schedule Mate",
      description: "Your personal partner in time! A tool that provides timely notifications and alarms to keep you on the academic journey to success.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "androidstudio",
          color: "blue-text-gradient",
        },
      ],
      image: schedulemate,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/Schedule-Mate" },
        { platform: "behance", url: "https://www.behance.net/gallery/180748569/Schedule-Mate" },
      ],
    },
    {
      name: "Lecturna",
      description: "Lecturna is a Children's Coding Course for ages 7-17. The topics taught at Lecturna are Web Programming, Mobile Programming, Text Programming (Roblox), and Visual Programming (Scratch). Currently, Lecturna provides courses online.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: lecturna,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/Lecturna-Landing-Page" },
        { platform: "behance", url: "https://www.behance.net/gallery/180808675/Lecturna-Landing-Page" },
      ],
    },
    {
      name: "AXforAsset",
      description: "AXForAsset is a marketplace for game assets where the user needs to log in before they are able to buy game assets.",
      tags: [
        {
          name: "axurerp",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
      ],
      image: axforasset,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/AXForAsset" },
        { platform: "behance", url: "https://www.behance.net/gallery/181506887/AxForAsset" },
      ],
    },
    {
      name: "Build Master",
      description: "Build Master employs machine learning algorithms to process and analyze player data from Genshin Impact, including character levels, equipment, artifacts, elemental affinities, and player preferences. By combining this data with a vast knowledge base of character builds and optimal synergies, the app will provide personalized suggestions for improving character performance and creating well-rounded teams.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        }
      ],
      image: buildmaster,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/171130559/Build-Master-Genshin-Impact-AI-Builder" },
      ],
    },
    {
      name: "Youtube Studio Redesign",
      description: "A Redesign model idea for Youtube Studio.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: ytredesign,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/165262951/Youtube-Studio-Redesign" },
      ],
    },
    {
      name: "Insecure - Instagram Redesign",
      description: "A Redesign model idea for Instagram",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: insecure,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/164136917/Insecure-Instagram-Redesign" },
      ],
    },
    {
      name: "Tanaka Guitar",
      description: "Tanaka Guitar is an online store for guitar.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tanakaguitar,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/Tanaka-Guitar" },
      ],
    },
    {
      name: "Astronom",
      description: "Astronom is a website about the planets in our solar system.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: astronom,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/Astronom" },
      ],
    },
    {
      name: "AI-Lectric",
      description: "AI-Lectric is a mobile application for controlling electronic goods with the help of AI.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: ailectric,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/185425997/AILECTRIC" },
      ],
    },
    {
      name: "Trip Plan Labuan Bajo",
      description: "Trip Plan Labuan Bajo is a website prototype for booking travel agents to Labuan Bajo.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: tripplan,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/185426225/Labuan-Bajo-Trip-Plan" },
      ],
    },
    {
      name: "Join BUMN",
      description: "JOIN BUMN is a website from the Indonesian government that contains training for employees who want to enter BUMN.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: joinbumn,
      source_code_links: [
        { platform: "behance", url: "https://www.behance.net/gallery/185189425/JoinBUMN" },
      ],
    },
    {
      name: "LEGHO",
      description: "A LEGHO purchase application from the company which manufactures and sells a type of plastic building block.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
      ],
      image: legho,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/LEGHO" },
      ],
    },
    {
      name: "Solar System",
      description: "Solar System is a web application that displays our solar system and details the planets in it with 3d objects.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
      ],
      image: solarsystem,
      source_code_links: [
        { platform: "github", url: "https://github.com/xcL0701/Solar-System" },
      ],
    },
    {
      name: "Ink and Quill Book",
      description: "Is a website where you can borrow or buy books",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "blade",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: inkandquill,
      source_code_links: [
        { platform: "github", url: "https://github.com/zenthlol/WebProgFinalProject" },
      ],
    },
    {
      name: "Dungeon Hunter",
      description: "A rougelike game concept about an adventurer who wants to cure his sick mother by exploring dungeons",
      tags: [
        {
          name: "gitbook",
          color: "blue-text-gradient",
        },
        {
          name: "unity3d",
          color: "green-text-gradient",
        },
      ],
      image: dungeonhunter,
      source_code_links: [
        { platform: "github", url: "https://dungeon-hunter.gitbook.io/dungeon-hunter/" },
      ],
    },
  ];
  
  export { technologies, education, projects };