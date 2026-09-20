// import BetaImage from "../../ui/BetaImage";
import BetaImage from "../../ui/BetaImage";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Features from "./Features";
import HeroFeature from "./HeroFeature";
import { motion } from "framer-motion";

function FeatureDetails() {
  return (
    <>
      <Header />
      <HeroFeature />
      <Features />
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

export default FeatureDetails;
