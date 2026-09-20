import BetaImage from "../../ui/BetaImage";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import PricingComparison from "./PricingComparison";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";
import { motion } from "framer-motion";

function PricingDetails() {
  return (
    <>
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <BetaImage />
      </motion.div>
      <Footer />
    </>
  );
}

export default PricingDetails;
