import BetaImage from "../../ui/BetaImage";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import PricingComparison from "./PricingComparison";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";

function PricingDetails() {
  return (
    <>
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <BetaImage />
      <Footer />
    </>
  );
}

export default PricingDetails;
