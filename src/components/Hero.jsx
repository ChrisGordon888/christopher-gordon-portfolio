import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-primary">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-[320px] h-[320px] bg-[#915eff]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-24 right-20 w-[360px] h-[360px] bg-[#00cea8]/10 rounded-full blur-[150px]" />
      </div>

      {/* 3D canvas - visible and interactable */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ComputersCanvas />
      </div>

      {/* Soft readability overlay - visible but does not block 3D interaction */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-primary/55 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/20 via-transparent to-primary/40 pointer-events-none" />

      {/* Hero content */}
      <div
        className={`${styles.paddingX} relative z-20 min-h-screen max-w-7xl mx-auto flex items-center pointer-events-none`}
      >
        <div className="flex flex-row items-start gap-5 max-w-3xl pointer-events-auto">
          <div className="flex flex-col justify-center items-center mt-5 pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <p className="text-secondary text-[14px] sm:text-[16px] uppercase tracking-[3px] mb-4">
              Web Developer · Creative Builder
            </p>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Building digital tools with{' '}
              <span className="text-[#915eff]">creative depth.</span>
            </h1>

            <p className={`${styles.heroSubText} mt-5 text-white-100 max-w-3xl`}>
              I’m Christopher Gordon, a web developer and creative builder based
              in Austin. I build practical web apps, digital tools, and
              organized workflows that connect technology, creativity, and
              real-world problem solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-[#915eff] text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center z-20 pointer-events-none">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="pointer-events-auto"
        >
          <div className="w-[35px] h-[64px] rounded-lg border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;