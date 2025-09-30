import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.paddingX} ${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.paddingX} ${styles.sectionHeadText}`}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.paddingX} mt-4 text-secondary text-[17px] leading-[30px]`}
      >
        Hello, my name is Nicholas Abel Williem, and I usually go by Niko. I was born in Jakarta on July 1, 2003. I am a Computer Science graduate from Binus University.
        During my studies, I specialized in Interactive Multimedia to support my strong interest in the design and visuals of applications and web interfaces.
        While I find immense satisfaction in working on Front-End Development projects, I maintain a strong desire and readiness to continuously learn new concepts and technologies.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
