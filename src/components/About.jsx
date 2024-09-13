import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.paddingX} ${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.paddingX} ${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.paddingX} mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        I am Nicholas Abel Williem, usually called Niko, born in Jakarta, July 1 2023.
        I am a student at Binus University majoring in Computer Science who is currently studying in the 5th semester.
        I specifically studied Interactive Multimedia to support my interest in the design and visuals of an application or web.
        While I find immense satisfaction working on front-end projects, I maintain a strong desire and readiness to learn new concepts and technologies.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
