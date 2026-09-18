function HeroStories() {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden md:min-h-[650px]">
      <picture className="absolute inset-0 z-0">
        <source
          media="(max-width: 767px)"
          srcSet="/stories/mobile/moon-of-appalacia.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/stories/tablet/moon-of-appalacia.jpg"
        />
        <img
          className="h-full w-full object-cover"
          src="/stories/desktop/moon-of-appalacia.jpg"
          alt="Moonlight over the Appalachian mountains"
        />
      </picture>
      <div className="absolute inset-0 z-10 bg-black/45" />

      <div className="com-container relative z-20 w-full px-6 pb-16 pt-20 sm:px-10 md:px-12 md:pb-24 md:pt-28 lg:px-0">
        <p className="text-white text-[13px] font-bold tracking-widest uppercase">
          Last month's featured story
        </p>
        <h1 className="mt-5 max-w-[15rem] text-[2rem] font-semibold uppercase leading-tight tracking-wider text-white md:text-[2.5rem]">
          Hazy full moon of Appalachia
        </h1>
        <p className="text-white text-sm font-medium mt-5">
          <span className="opacity-75 pr-2">March 2nd 2020</span>
          <span>by John Appleseed</span>
        </p>

        <p className="mt-5 max-w-[28rem] text-[1.05rem] font-medium text-white/60">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
      </div>
    </section>
  );
}

export default HeroStories;
