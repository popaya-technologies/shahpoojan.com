"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Techtures Website",
    description:
      "Ai-Tech-Tures Labs LLP is a software development and consulting firm that specializes in using artificial intelligence (AI) to solve real-world problems.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://aitechtures.com/",
  },
  {
    id: 2,
    title: "Anemone Homes Website",
    description:
      "Anemone Homes LLP, a leading real estate redevelopment firm that specializes in breathing new life into properties.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://anemonehomes.in/",
  },
  {
    id: 3,
    title: "Real Estate Application",
    description:
      "We are a tech enabled, professional residential real estate management company, providing a full range of services personalized to our client’s needs.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://buildstone.in/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description:
      "Exclusive National distributors of Prestige, Manttra, Hawkins & Futura pressure cookers for over 20 years. We are located in  New Brunswick, NJ.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://pressurecookersparts.com/",
  },
  {
    id: 5,
    title: "Rotary Club of Deonar Website",
    description:
      "Happy group of like minded people from different walks of life who come together to serve the community and have fellowships with fun...",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://rotarydeonar.com/",
  },
  {
    id: 6,
    title: "Production House Website",
    description:
      "If you are an independent film maker, then Prana Pictures is your natural ally to help you realize the objective of effective global reach.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://pranapictures.com",
  },
  {
    id: 7,
    title: "E-commerce Application",
    description:
      "Innovating, designing, developing, manufacturing, wholesaling and distributing unique appliances, tools and gadgets for every cook in their kitchen.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://chefprousa.com/",
  },
  {
    id: 8,
    title: "Able to Ability Website",
    description:
      "“Empower differently abled adults and youth through employment and entrpreneurial opportunities to earn livelihood through inclusivity and equal opportunities and lead a life with pride and dignity”",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://abletoability.org.in/",
  },
  {
    id: 9,
    title: "Travel Agent Website",
    description:
      "Atithi Devo Bhava Holidays, has built a reputation for offering a quality, personalized service and superb value for money for its customers.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/popaya-technologies",
    previewUrl: "https://adbholidays.com",
  },
];

const ProjectSection = () => {
  const [tag, settag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag) => {
    settag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTabChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTabChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTabChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
