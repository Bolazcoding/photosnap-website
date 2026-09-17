function PricingComparisonItem({ feature, basic, pro, business }) {
  return (
    <div className="grid grid-cols-[300px_1fr_1fr_1fr] justify-items-center border-b border-solid border-[#dfdfdf] pb-[22.5px] text-[12px] font-bold uppercase tracking-[2px] max-sm:grid-cols-3 max-sm:justify-items-start max-sm:gap-y-[15px]">
      <h4 className="justify-self-start pl-[10px] max-sm:col-span-full max-sm:pl-0">
        {feature}
      </h4>
      <div>
        <h3 className="hidden pb-[5px] text-[10px] font-bold uppercase tracking-[1.667px] opacity-50 max-sm:block">
          Basic
        </h3>
        <img
          src="./pricing/desktop/check.svg"
          alt="check icon"
          className={`${basic === true ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div>
        <h3 className="hidden pb-[5px] text-[10px] font-bold uppercase tracking-[1.667px] opacity-50 max-sm:block">
          Pro
        </h3>
        <img
          src="./pricing/desktop/check.svg"
          alt="check icon"
          className={`${pro === true ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div>
        <h3 className="hidden pb-[5px] text-[10px] font-bold uppercase tracking-[1.667px] opacity-50 max-sm:block">
          Business
        </h3>
        <img
          src="./pricing/desktop/check.svg"
          alt="check icon"
          className={`${business === true ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}

export default PricingComparisonItem;
