import { useState } from "react";
import { motion } from "framer-motion";
import PricingPlansItem from "./PricingPlansItem";

function PricingPlans() {
  const [type, setType] = useState("month");

  function changeType() {
    if (type === "month") {
      setType("year");
    } else {
      setType("month");
    }
  }

  return (
    <section className="px-6 pb-20 pt-16 sm:px-10 sm:pb-28 md:pt-20 lg:px-16 xl:px-[165px] xl:pb-40 xl:pt-28">
      <motion.div
        className="flex items-center justify-center gap-5 pb-10 sm:gap-8 sm:pb-12"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        onClick={changeType}
      >
        <span
          className={`text-[18px] font-bold leading-[25px] transition-all duration-300 ${
            type === "month" ? "opacity-100" : "opacity-60"
          }`}
        >
          Monthly
        </span>
        <motion.div
          className="relative h-[32px] w-[64px] cursor-pointer rounded-full bg-[#dfdfdf] p-[3px] hover:bg-black"
          animate={{ backgroundColor: type === "month" ? "#dfdfdf" : "#000000" }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="h-[26px] w-[26px] rounded-full bg-black hover:bg-white"
            animate={{ x: type === "month" ? 0 : 32 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.div>
        <span
          className={`text-[18px] font-bold leading-[25px] transition-all duration-300 ${
            type === "year" ? "opacity-100" : "opacity-60"
          }`}
        >
          Yearly
        </span>
      </motion.div>

      <motion.section
        className="mx-auto grid w-full max-w-[1110px] grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <PricingPlansItem
          plan="Basic"
          text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          price={type === "month" ? "19.00" : "190.00"}
          type={type === "month" ? "month" : "year"}
        />
        <PricingPlansItem
          plan="Pro"
          text="More advanced features available. Recommended for photography veterans and professionals."
          price={type === "month" ? "39.00" : "390.00"}
          type={type === "month" ? "month" : "year"}
          color="black"
        />
        <PricingPlansItem
          plan="Business"
          text="Additional features available such as more detailed metrics. Recommended for business owners."
          price={type === "month" ? "99.00" : "990.00"}
          type={type === "month" ? "month" : "year"}
        />
      </motion.section>
    </section>
  );
}

export default PricingPlans;
