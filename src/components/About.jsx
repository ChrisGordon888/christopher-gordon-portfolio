import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
    return (
        <Tilt
            className="w-full h-full"
            options={{
                max: 25,
                scale: 1,
                speed: 450,
            }}
        >
            <motion.div
                variants={fadeIn('right', 'spring', 0.25 * index, 0.75)}
                className="w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[230px] h-full flex justify-center gap-4 items-center flex-col text-center">
                    <img
                        src={icon}
                        alt={`${title} icon`}
                        className="w-14 h-14 object-contain shrink-0"
                    />

                    <h3 className="text-white text-[20px] font-bold min-h-[56px] flex items-center justify-center">
                        {title}
                    </h3>

                    {description && (
                        <p className="text-secondary text-[13px] leading-[22px] max-w-[210px]">
                            {description}
                        </p>
                    )}
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 max-w-4xl"
            >
                <p className="text-white/85 text-[18px] leading-[30px]">
                    I’m a full-stack developer and creative builder based in Austin, Texas.
                    I create web apps, digital tools, and interactive experiences that blend
                    technology, music, design, and real-world problem solving.
                </p>

                <p className="mt-4 text-secondary text-[16px] leading-[28px]">
                    My focus is building useful projects, improving my technical foundation,
                    and turning creative ideas into something people can actually use.
                </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');