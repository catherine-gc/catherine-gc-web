"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SAT</li>
        <li>Excel</li>
        <li>OS</li>
        <li>Scrum</li>
        <li>Agile</li>
        <li>more</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum org</li>
        <li>University of , Colombia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft</li>
        <li>Google Professional ...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-slate-900 py-8"  id="about">
      <div className="md:grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center py-8 ml-5 px-4 xl:gap-16 sm:py-12 xl:px-16">
        <Image 
            src="/images/Brain.svg" 
            alt="image-about-section" 
            width={355} 
            height={355} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed perspiciatis quis aperiam est! Laboriosam explicabo 
            fugiat quam impedit provident sed maiores pariatur dolorem 
            suscipit aut reprehenderit, expedita corporis inventore delectus?
            Sed perspiciatis quis aperiam est! Laboriosam explicabo 
            fugiat quam impedit provident sed maiores pariatur dolorem 
            Sed perspiciatis quis aperiam est! Laboriosam explicabo 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;