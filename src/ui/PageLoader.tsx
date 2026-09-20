import { motion } from "framer-motion";

type PageLoaderProps = {
  pageName: string;
};

const shutters = [0, 1, 2, 3, 4];

function PageLoader({ pageName }: PageLoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label={`Loading ${pageName} page`}
    >
      <div className="flex w-full max-w-[20rem] flex-col items-center px-6">
        <div className="flex h-20 items-center gap-2.5 overflow-hidden">
          {shutters.map((shutter) => (
            <motion.span
              key={shutter}
              className="block h-16 w-2 origin-bottom skew-x-[-18deg] bg-gradient-to-t from-[#ffc593] via-[#bc7198] to-[#5a77ff]"
              initial={{ scaleY: 0.15, opacity: 0.35 }}
              animate={{ scaleY: [0.15, 1, 0.35, 0.8], opacity: [0.35, 1, 0.5, 0.85] }}
              transition={{
                duration: 1.2,
                delay: shutter * 0.12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <motion.p
          className="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.35rem] text-white/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {pageName}
        </motion.p>
        <motion.div
          className="mt-5 h-px w-40 origin-left bg-gradient-to-r from-[#ffc593] via-[#bc7198] to-[#5a77ff]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default PageLoader;
