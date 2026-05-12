import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const email = 'chris.c.gordon888@gmail.com';
  const phone = '9368286488';

  const subject = encodeURIComponent('Portfolio Inquiry');
  const body = encodeURIComponent(
    'Hi Christopher,\n\nI found your portfolio and wanted to reach out about:\n\n'
  );

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100/80 border border-white/10 p-8 rounded-2xl shadow-card"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className="mt-4 text-secondary text-[16px] leading-[26px]">
          Have a project, opportunity, or collaboration in mind? Reach out
          directly and I’ll follow up as soon as I can.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="bg-[#915eff] py-4 px-6 rounded-xl text-white font-bold hover:opacity-90 transition text-center"
          >
            Email Me
          </a>

          <a
            href={`tel:${phone}`}
            className="bg-tertiary py-4 px-6 rounded-xl text-white font-bold border border-white/10 hover:border-[#915eff]/60 transition text-center"
          >
            Call / Text
          </a>

          <div className="mt-4 rounded-2xl border border-white/10 bg-tertiary/60 p-5">
            <p className="text-white font-semibold">Direct Contact</p>

            <a
              href={`mailto:${email}`}
              className="block mt-3 text-secondary hover:text-white transition"
            >
              {email}
            </a>

            <a
              href={`tel:${phone}`}
              className="block mt-2 text-secondary hover:text-white transition"
            >
              936-828-6488
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');