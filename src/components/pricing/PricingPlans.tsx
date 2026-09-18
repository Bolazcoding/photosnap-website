import { useState } from "react";
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
      <div
        className="flex items-center justify-center gap-5 pb-10 sm:gap-8 sm:pb-12"
        onClick={changeType}
      >
        <span
          className={`text-[18px] font-bold leading-[25px] transition-all duration-300 ${
            type === "month" ? "opacity-100" : "opacity-60"
          }`}
        >
          Monthly
        </span>
        <div
          className={`relative h-[32px] w-[64px] cursor-pointer rounded-full bg-[#dfdfdf] transition-all duration-300 before:absolute before:left-[3px] before:top-[3px] before:h-[25px] before:w-[25px] before:rounded-full before:bg-black before:transition-all before:duration-300 hover:bg-black hover:before:bg-white ${
            type === "month"
              ? "before:translate-x-0"
              : "before:translate-x-[120%]"
          } before:transition-all before:duration-300`}
        ></div>
        <span
          className={`text-[18px] font-bold leading-[25px] transition-all duration-300 ${
            type === "year" ? "opacity-100" : "opacity-60"
          }`}
        >
          Yearly
        </span>
      </div>

      <section className="mx-auto grid w-full max-w-[1110px] grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-7">
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
      </section>
    </section>
  );
}

export default PricingPlans;
