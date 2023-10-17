"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Project 1 description",
    image: "/images/projects/Cat-028.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Project 2 description",
    image: "/images/projects/Cat-103.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "Project 3 description",
    image: "/images/projects/Cat-111.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project Name 4",
    description: "Project 4 description",
    image: "/images/projects/Cat-112.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project Name 5",
    description: "Description project details",
    image: "/images/projects/Cat-fake.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project Name 6",
    description: "Project 6 description",
    image: "/images/projects/Cat-notfound.jpeg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
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
      <h3 className="text-center text-4xl font-bold uppercase text-slate-900 mt-4 mb-8 md:mb-12">
        Top Projects
      </h3>
      <div className="text-slate-700 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;