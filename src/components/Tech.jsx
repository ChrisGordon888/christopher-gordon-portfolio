import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const techGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'MongoDB', 'SQL', 'APIs'],
  },
  {
    title: 'Tools & Workflow',
    items: ['GitHub', 'Vercel', 'VS Code', 'Figma', 'Documentation'],
  },
  {
    title: 'AI-Assisted Work',
    items: ['Planning', 'Debugging', 'Research', 'Content Drafting', 'Workflow Design'],
  },
];

const TechCard = ({ group, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="bg-tertiary/80 border border-white/10 rounded-2xl p-6 min-h-[220px] shadow-card"
    >
      <h3 className="text-white text-[20px] font-bold">{group.title}</h3>

      <div className="mt-5 flex flex-wrap gap-3">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-secondary text-[13px] px-3 py-2 rounded-full bg-white/5 border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools I’m Building With</p>
        <h2 className={styles.sectionHeadText}>Technical Focus.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white/80 text-[17px] max-w-3xl leading-[30px]"
      >
        I’m focused on building practical web projects with modern JavaScript
        tools, strengthening my full-stack foundation, and using AI-assisted
        workflows to support planning, debugging, research, and project
        organization.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techGroups.map((group, index) => (
          <TechCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');