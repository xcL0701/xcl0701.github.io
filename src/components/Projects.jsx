import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, behance } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_links }) => {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const renderIcon = (platform) => {
    switch (platform) {
      case "github":
        return github;
      case "behance":
        return behance;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={isMobile ? false : "hidden"} // Nonaktifkan animasi untuk mobile
      animate={isMobile ? false : "visible"}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`project-card ${isMobile ? "mobile" : ""}`}
    >
      <Tilt
        options={{
          max: isMobile ? 10 : 45, // Kurangi efek tilt pada mobile
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_links.map((link, index) => (
              <div
                key={index}
                onClick={() => window.open(link.url, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1"
              >
                <img
                  src={renderIcon(link.platform)}
                  alt={link.platform}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.paddingX} ${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.paddingX} ${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className={`${styles.paddingX} mt-20 flex flex-wrap gap-7`}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "project");
