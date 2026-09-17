import PricingComparisonItem from "./PricingComparisonItem";

function PricingComparison() {
  return (
    <section className="px-[20px] pb-[160px] xl:px-[165px] max-sm:pb-[70px]">
      <h2 className="pb-[60px] text-center text-[40px] font-bold uppercase leading-[48px] tracking-[4.167px]">
        Compare
      </h2>

      <section className="mx-auto flex max-w-[731px] flex-col justify-center gap-[22.5px]">
        <div className="grid grid-cols-[300px_1fr_1fr_1fr] justify-items-center border-b border-solid border-black pb-[22.5px] text-[12px] font-bold uppercase tracking-[2px] max-sm:grid-cols-1">
          <h3 className="justify-self-start">The features</h3>
          <h3 className="max-sm:hidden">basic</h3>
          <h3 className="max-sm:hidden">pro</h3>
          <h3 className="max-sm:hidden">business</h3>
        </div>
        <PricingComparisonItem
          feature={"Unlimited story posting"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"unlimited photo upload"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"embedding custom content"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"customize metadata"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"advanced metrics"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"photo downloads"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"search engine indexing"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"custom analytics"}
          basic={false}
          pro={false}
          business={true}
        />
      </section>
    </section>
  );
}

export default PricingComparison;
