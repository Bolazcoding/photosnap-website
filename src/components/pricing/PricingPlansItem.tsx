import { motion } from "framer-motion";

type PricingPlansItemProps = {
  plan: string;
  text: string;
  price: string;
  type: string;
  color?: "black";
};

function PricingPlansItem({
  plan,
  text,
  price,
  type,
  color,
}: PricingPlansItemProps) {
  return (
    <motion.div
      className={`${
        color === "black"
          ? `before:bg-lin-grad relative bg-[#000] pb-[71px] pt-[82px] text-white`
          : "bg-[#f5f5f5] pb-[40px] pt-[56px] text-black "
      } grid w-full px-6 text-center sm:grid-cols-2 sm:px-10 sm:text-start lg:grid-cols-1 lg:text-center`}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div>
        <h3 className="text-[24px] font-bold leading-[25px]">{plan}</h3>
        <p className="pb-[40px] pt-[20px] text-[15px] leading-[25px] opacity-60">
          {text}
        </p>
      </div>

      <div className="justify-self-center sm:justify-self-end lg:justify-self-center">
        <p className="text-[40px] font-bold uppercase leading-[48px] tracking-[4.167px]">
          ${price}
        </p>
        <p className="pb-[40px] text-[15px] leading-[25px]">per {type}</p>
      </div>

      <button
        className={`${
          color === "black" ? "bg-white text-black" : "bg-black text-white"
        } w-full py-3 text-[12px] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[#dfdfdf] hover:text-black sm:col-span-2 lg:col-span-1`}
      >
        Pick plan
      </button>
    </motion.div>
  );
}

export default PricingPlansItem;
