import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import BeautifulSection from "./BeautifulSection";
import DesignedSection from "./DesignedSection";
import HeroSection from "./HeroSection";
import HomeFeatures from "./HomeFeatures";
import HomeStories from "./HomeStories";

function HomeDetails() {
  return (
    <>
      <Header />
      <HeroSection />
      <BeautifulSection />
      <DesignedSection />
      <HomeStories />
      <HomeFeatures />
      <Footer />
    </>
  );
}

export default HomeDetails;
