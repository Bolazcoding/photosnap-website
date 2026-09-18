function HeroFeature() {
  return (
    <section className="flex flex-col text-white md:max-h-[400px] md:min-h-[500px] md:flex-row">
      <div className="order-2 flex w-full flex-col justify-center bg-black px-6 py-16 sm:px-10 md:order-1 md:w-[42%] md:px-12 lg:px-28">
        <h1 className="text-[2rem] font-bold uppercase leading-tight tracking-widest md:text-[2.5rem]">
          Features
        </h1>
        <p className="mt-5 max-w-[30rem] text-[0.95rem] leading-6 text-white/75">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photographers who wanted to share their
          stories.
        </p>
      </div>
      <picture className="order-1 block w-full md:order-2 md:w-[58%]">
        <source media="(max-width: 767px)" srcSet="/features/mobile/hero.jpg" />
        <source
          media="(max-width: 1023px)"
          srcSet="/features/tablet/hero.jpg"
        />
        <img
          className="h-auto min-h-[300px] w-full object-cover md:h-full"
          src="/features/desktop/hero.jpg"
          alt="Photographer taking a photo"
        />
      </picture>
    </section>
  );
}

export default HeroFeature;
