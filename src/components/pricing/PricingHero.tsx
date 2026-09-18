function PricingHero() {
  return (
    <section className="flex flex-col text-white md:max-h-[500px] md:min-h-[500px] md:flex-row">
      <div className="order-2 flex w-full flex-col justify-center bg-black px-6 py-16 sm:px-10 md:order-1 md:w-[42%] md:px-12 lg:px-28">
        <h1 className="text-[2rem] font-bold uppercase leading-tight tracking-widest md:text-[2.5rem]">
          Pricing
        </h1>
        <p className="mt-5 max-w-[30rem] text-[0.95rem] leading-6 text-white/75">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <picture className="order-1 block w-full md:order-2 md:w-[58%]">
        <source media="(max-width: 767px)" srcSet="/pricing/mobile/hero.jpg" />
        <source media="(max-width: 1023px)" srcSet="/pricing/tablet/hero.jpg" />
        <img
          className="h-auto min-h-[300px] w-full object-cover md:h-full"
          src="/pricing/desktop/hero.jpg"
          alt="Photographer taking a photo"
        />
      </picture>
    </section>
  );
}

export default PricingHero;
