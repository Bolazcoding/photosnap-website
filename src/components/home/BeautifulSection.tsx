import Cta from "../../ui/Cta";

function BeautifulSection() {
  return (
    <section className="flex flex-row-reverse text-black h-150">
      <div className="bg-white py-40 px-28">
        <h1 className="text-[2.6rem] font-bold uppercase tracking-widest leading-12">
          Beautiful stories every time.
        </h1>
        <p className="text-[0.95rem] mt-3.5 leading-6">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>

        <Cta className="mt-8" linkTo="/stories" ctaColor="black">
          View the stories
        </Cta>
      </div>
      <img
        className="w-[750px]"
        src="./home/desktop/beautiful-stories.jpg"
        alt="hero-image"
      />
    </section>
  );
}

export default BeautifulSection;
