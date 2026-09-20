import { motion } from "framer-motion";

function HeroFeature() {
  return (
    <section className="flex flex-col text-white md:max-h-[400px] md:min-h-[500px] md:flex-row">
      <motion.div
        className="order-2 flex w-full flex-col justify-center bg-black px-6 py-16 sm:px-10 md:order-1 md:w-[42%] md:px-12 lg:px-28"
        initial={{ opacity: 0, x: -48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="text-[2rem] font-bold uppercase leading-tight tracking-widest md:text-[2.5rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          Features
        </motion.h1>
        <motion.p
          className="mt-5 max-w-[30rem] text-[0.95rem] leading-6 text-white/75"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
        >
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photographers who wanted to share their
          stories.
        </motion.p>
      </motion.div>
      <motion.picture
        className="order-1 block w-full md:order-2 md:w-[58%]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <source media="(max-width: 767px)" srcSet="/features/mobile/hero.jpg" />
        <source
          media="(max-width: 1023px)"
          srcSet="/features/tablet/hero.jpg"
        />
        <img
          className="h-auto min-h-[300px] w-full object-cover md:h-full"
          src="/features/desktop/hero.jpg"
          alt="Photographer taking a photo"
        />
      </motion.picture>
    </section>
  );
}

export default HeroFeature;
