import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import HeroStories from "./HeroStories";
import StoriesSection from "./StoriesSection";

function StoriesDetails() {
  return (
    <>
      <Header />
      <main>
        <HeroStories />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}

export default StoriesDetails;
