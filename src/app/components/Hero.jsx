"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto lg:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-12">
          
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
              <div className="relative pb-6 md:hidden sm:hidden">
                <Image
                    src="/images/Exclamation.png"
                    alt="exclamation image"
                    className="absolute transform rotate-10 top-0 mr-100"
                    width={90}
                    height={90}
                />
              </div>
          <h1 className="text-slate-900 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-purple-700 text-opacity-75 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Catherine",
                1000,
                "Scrum Master",
                1000,
                "Agile",
                1000,
                "Professional",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-700 text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 to-secondary-600 hover:text-slate-700 text-slate-100"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:text-slate-700 text-slate-100 mt-3"
            >
              <span className="block bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-400 rounded-full px-5 py-2">
                Contact Me
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-auto pr-12 col-span-4 place-self-center mt-4 lg:mt-0 "
        >
          <div className="rounded-full pr-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/Cat1.jpg"
              alt="blob image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={285}
              height={285}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;