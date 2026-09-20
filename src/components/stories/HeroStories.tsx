import { motion } from "framer-motion";

function HeroStories() {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden md:min-h-[650px]">
      <motion.picture
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <source
          media="(max-width: 767px)"
          srcSet="/stories/mobile/moon-of-appalacia.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/stories/tablet/moon-of-appalacia.jpg"
        />
        <img
          className="h-full w-full object-cover"
          src="/stories/desktop/moon-of-appalacia.jpg"
          alt="Moonlight over the Appalachian mountains"
        />
      </motion.picture>
      <motion.div
        className="absolute inset-0 z-10 bg-black/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      />

      <motion.div
        className="com-container relative z-20 w-full px-6 pb-16 pt-20 sm:px-10 md:px-12 md:pb-24 md:pt-28 lg:px-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
        }}
      >
        <motion.p
          className="text-white text-[13px] font-bold tracking-widest uppercase"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Last month's featured story
        </motion.p>
        <motion.h1
          className="mt-5 max-w-[15rem] text-[2rem] font-semibold uppercase leading-tight tracking-wider text-white md:text-[2.5rem]"
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Hazy full moon of Appalachia
        </motion.h1>
        <motion.p
          className="text-white text-sm font-medium mt-5"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="opacity-75 pr-2">March 2nd 2020</span>
          <span>by John Appleseed</span>
        </motion.p>

        <motion.p
          className="mt-5 max-w-[28rem] text-[1.05rem] font-medium text-white/60"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default HeroStories;
