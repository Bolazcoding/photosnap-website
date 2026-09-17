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
    <div
      className={`${
        color === "black"
          ? `before:bg-lin-grad relative bg-[#000] pb-[71px] pt-[82px] text-white`
          : "bg-[#f5f5f5] pb-[40px] pt-[56px] text-black "
      } grid w-full px-[20px] text-center sm:grid-cols-2 sm:px-[40px] sm:text-start xl:grid-cols-1 xl:text-center`}
    >
      <div>
        <h3 className="text-[24px] font-bold leading-[25px]">{plan}</h3>
        <p className="pb-[40px] pt-[20px] text-[15px] leading-[25px] opacity-60">
          {text}
        </p>
      </div>

      <div className="justify-self-center sm:justify-self-end xl:justify-self-center">
        <p className="text-[40px] font-bold uppercase leading-[48px] tracking-[4.167px]">
          ${price}
        </p>
        <p className="pb-[40px] text-[15px] leading-[25px]">per {type}</p>
      </div>

      <button
        className={`${
          color === "black" ? "bg-white text-black" : "bg-black text-white"
        } w-full py-[12px] text-[12px] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[#dfdfdf] hover:text-black sm:col-span-2 xl:col-span-1`}
      >
        Pick plan
      </button>
    </div>
  );
}

export default PricingPlansItem;
