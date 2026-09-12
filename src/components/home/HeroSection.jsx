import Cta from "../../ui/Cta";

function HeroSection() {
  return (
    <section className="flex text-white h-150">
      <div className="bg-black py-40 px-28">
        <h1 className="text-[2.6rem] font-bold uppercase tracking-widest leading-12">
          Create and share your photo Stories.
        </h1>
        <p className="text-[0.95rem] mt-3.5 leading-6">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>

        <Cta className="mt-8" linkTo="/" ctaColor="white">
          Get an invite
        </Cta>
      </div>
      <img
        className="w-[750px]"
        src="./home/desktop/create-and-share.jpg"
        alt="hero-image"
      />
    </section>
  );
}

export default HeroSection;
