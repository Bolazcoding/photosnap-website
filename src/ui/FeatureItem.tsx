import { motion } from "framer-motion";

type FeatureItemProps = {
  featureImage: string;
  title: string;
  text: string;
};

function FeatureItem({ featureImage, title, text }: FeatureItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.img
        className="size-[72px] object-contain"
        src={featureImage}
        alt={title}
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <h2 className="mt-12 text-lg font-bold text-black">{title}</h2>
      <p className="mt-4 max-w-[22rem] text-[15px] font-normal leading-6 text-black/60">
        {text}
      </p>
    </motion.div>
  );
}

export default FeatureItem;
