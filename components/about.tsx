"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
      I am Azriel, with 1 year of experience as an IT Assistant. I have a strong background in system implementation, IT equipment, telecommunications networks, e-channels, and technical support through the help desk.{" "}
        <span className="font-medium">   </span> I am highly interested in IT Support, Web Development, and Software Engineering and am ready to further develop my skills in these areas.

      </p>
    </motion.section>
  );
}
