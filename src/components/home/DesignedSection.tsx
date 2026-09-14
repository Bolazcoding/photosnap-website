import Cta from "../../ui/Cta";

function DesignedSection() {
  return (
    <section className="flex text-black h-150">
      <div className="bg-white py-40 px-28">
        <h1 className="text-[2.6rem] font-bold uppercase tracking-widest leading-12">
          Designed for everyone.
        </h1>
        <p className="text-[0.95rem] mt-3.5 leading-6">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>

        <Cta className="mt-8" linkTo="/" ctaColor="white">
          View the stories
        </Cta>
      </div>
      <img
        className="w-[750px]"
        src="./home/desktop/designed-for-everyone.jpg"
        alt="hero-image"
      />
    </section>
  );
}

export default DesignedSection;
