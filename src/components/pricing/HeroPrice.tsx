function HeroPrice() {
  return (
    <section className="flex text-white">
      <div className="bg-black py-40 px-28">
        <h1 className="text-[2.6rem] font-bold uppercase tracking-widest leading-12">
          Pricing
        </h1>
        <p className="text-[0.95rem] text-white/75 mt-3.5 leading-6">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <img
        className="w-[750px] object-cover"
        src="./pricing/desktop/hero.jpg"
        alt="hero-image"
      />
    </section>
  );
}

export default HeroPrice;
