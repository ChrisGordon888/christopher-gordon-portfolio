import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  status,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="h-full"
    >
      <Tilt
        options={{
          max: 18,
          scale: 1,
          speed: 450,
        }}
        className="h-full"
      >
        <div className="h-full bg-tertiary/90 border border-white/10 p-5 rounded-2xl shadow-card hover:border-[#915eff]/50 transition-all duration-300">
          <div className="relative w-full h-[220px] overflow-hidden rounded-2xl bg-primary">
            <img
              src={image}
              alt={`${name} project preview`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

            {status && (
              <div className="absolute left-3 top-3">
                <span className="text-white text-[11px] font-semibold uppercase tracking-[0.16em] bg-primary/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  {status}
                </span>
              </div>
            )}

            {source_code_link && (
              <button
                type="button"
                onClick={() =>
                  window.open(source_code_link, '_blank', 'noopener,noreferrer')
                }
                className="absolute right-3 top-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition"
                aria-label={`View ${name} source code`}
              >
                <img
                  src={github}
                  alt=""
                  className="w-1/2 h-1/2 object-contain"
                />
              </button>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[23px] leading-tight">
              {name}
            </h3>

            <p className="mt-3 text-secondary text-[14px] leading-[24px]">
              {description}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {(live_site_link || source_code_link) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {live_site_link && (
                <button
                  type="button"
                  onClick={() =>
                    window.open(live_site_link, '_blank', 'noopener,noreferrer')
                  }
                  className="text-white text-[13px] font-semibold bg-[#915eff] px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                  Live Project
                </button>
              )}

              {source_code_link && (
                <button
                  type="button"
                  onClick={() =>
                    window.open(source_code_link, '_blank', 'noopener,noreferrer')
                  }
                  className="text-white text-[13px] font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Code
                </button>
              )}
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Projects</p>
        <h2 className={styles.sectionHeadText}>Built Work.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-white/80 text-[17px] max-w-3xl leading-[30px]"
        >
          A few projects that show how I build practical web apps, creative
          tools, and interactive experiences from idea to deployment.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');