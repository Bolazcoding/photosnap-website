function HeroStories() {
  return (
    <section
      style={{
        backgroundImage: `url(./stories/desktop/moon-of-appalacia.jpg)`,
      }}
      className="h-screen bg-opacity-90"
    >
      <div className="flex flex-col items-start com-container max-w-75 py-24">
        <p className="text-white text-[13px] font-bold tracking-widest uppercase">
          Last month's featured story
        </p>
        <h2 className="text-white text-4xl font-semibold tracking-wider uppercase">
          Hazy full moon of Appalachia
        </h2>
      </div>
      {/* <div className="absolute left-0 top-0 h-full w-full bg-black/25 bg-opacity-90"></div> */}
    </section>
  );
}

export default HeroStories;
