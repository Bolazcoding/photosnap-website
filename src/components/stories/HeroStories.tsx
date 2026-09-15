function HeroStories() {
  return (
    <section
      style={{
        backgroundImage: `url(./stories/desktop/moon-of-appalacia.jpg)`,
      }}
      className="relative h-screen bg-repeat-round"
    >
      <div className="com-container py-24 z-10">
        <p className="text-white text-[13px] font-bold tracking-widest uppercase">
          Last month's featured story
        </p>
        <h2 className="text-white text-[2.5rem] font-semibold tracking-wider leading-12 uppercase mt-5">
          Hazy full <br /> moon of <br />
          Appalachia
        </h2>
        <p className="text-white text-sm font-medium mt-5">
          <span className="opacity-75 pr-2">March 2nd 2020</span>
          <span>by John Appleseed</span>
        </p>

        <p className="max-w-[28rem] text-white/75 text-[1.05rem] font-medium mt-5">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-black/25 bg-opacity-90"></div>
    </section>
  );
}

export default HeroStories;
