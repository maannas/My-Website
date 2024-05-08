"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import Brain from "@/components/brain";
import { useScroll, useInView, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function AboutPage() {
  const skillList = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "SQL",
    "C",
    "Tailwind",
    "ReactJS",
    "NextJS",
    "FastAPI",
    "Django",
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const skillRef = useRef(null);
  const skillRefInView = useInView(skillRef);

  return (
    <PageTransitionProvider>
      {/* Container */}
      <div className="lg:flex" ref={targetRef}>
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-24 xl:p-48 flex flex-col gap-20 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-y-12">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="p-4 md:text-md rounded-md shadow-xl">
            Welcome to my vibrant digital universe! I'm Manas Kolaskar, a Prompt Engineer, adept web developer, 
            and avid student of AI and data analysis. Within my animated portfolio, 
            I showcase not just static projects but living, breathing creations, 
            each infused with dynamic animations and innovative web development techniques. 
            With a passion for pushing the boundaries of possibility, I sculpt immersive digital experiences 
            that captivate and inspire. Join me on a journey through the limitless possibilities of the web, 
            where dreams become pixels and imagination knows no bounds.
            </p>

            <span className="italic font-semibold">
            "Code creates worlds. Let's craft yours together."{" "}
              <span className="font-normal">- Manas Kolaskar</span>
            </span>

            <Link
              href="#skill"
              className="p-2 border border-black rounded-full self-start animate-bounce transition-all"
            >
              &darr;
            </Link>
          </div>

          {/* SKILLS container */}
          <div
            id="skill"
            className="flex flex-col gap-12 justify-center"
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: "-400px" }}
              animate={skillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILL LIST
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={skillRefInView ? { opacity: 1 } : {}}
            >
              {skillList.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded bg-stone-900 text-zinc-50 cursor-pointer hover:bg-zinc-50 hover:text-stone-900 transition-all"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* SVG container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageTransitionProvider>
  );
}

export default AboutPage;
