function HeroFeature() {
  return (
    <section className="flex text-white">
      <div className="bg-black py-40 px-28">
        <h1 className="text-[2.6rem] font-bold uppercase tracking-widest leading-12">
          FEATURES
        </h1>
        <p className="text-[0.95rem] text-white/75 mt-3.5 leading-6">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photographers who wanted to share their
          stories.
        </p>

        {/* <Cta className="mt-8" linkTo="/" ctaColor="white">
          Get an invite
        </Cta> */}
      </div>
      <img
        className="w-[750px] object-cover"
        src="./features/desktop/hero.jpg"
        alt="hero-image"
      />
    </section>
  );
}

export default HeroFeature;
