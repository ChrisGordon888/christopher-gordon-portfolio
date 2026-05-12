import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(29, 24, 54, 0.85)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 18px 45px rgba(0, 0, 0, 0.22)',
      borderRadius: '18px',
    }}
    contentArrowStyle={{ borderRight: '7px solid rgba(29, 24, 54, 0.85)' }}
    date={experience.date}
    dateClassName="text-secondary"
    iconStyle={{
      background: experience.iconBg,
      boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.08)',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.iconText ? (
          <span className="text-white text-[18px] font-bold tracking-wider">
            {experience.iconText}
          </span>
        ) : (
          <img
            src={experience.icon}
            alt={`${experience.company_name} icon`}
            className="w-[58%] h-[58%] object-contain"
          />
        )}
      </div>
    }
  >
    <div>
      <p className="text-[#915eff] text-[13px] font-semibold uppercase tracking-[0.18em] mb-2">
        {experience.category}
      </p>

      <h3 className="text-white text-[22px] font-bold leading-tight">
        {experience.title}
      </h3>

      <p className="text-secondary text-[15px] font-medium mt-1">
        {experience.company_name}
      </p>
    </div>

    {experience.summary && (
      <p className="mt-4 text-white/80 text-[14px] leading-[24px]">
        {experience.summary}
      </p>
    )}

    <ul className="mt-5 space-y-3">
      {experience.points.map((point, index) => (
        <li
          key={`${experience.title}-${index}`}
          className="flex gap-3 text-white-100 text-[14px] leading-[23px]"
        >
          <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#915eff] shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Background</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <p className="mt-4 text-white/80 text-[17px] max-w-3xl leading-[30px]">
        A grounded mix of operations, project coordination, technical training,
        and self-directed creative development.
      </p>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.12)">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.title}-${experience.company_name}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');