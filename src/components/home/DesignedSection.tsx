import Cta from "../../ui/Cta";

function DesignedSection() {
  return (
    <section className="flex flex-col text-black md:min-h-[560px] md:flex-row">
      <div className="order-2 flex w-full flex-col justify-center bg-white px-6 py-16 sm:px-10 md:order-1 md:w-[42%] md:px-12 lg:px-28">
        <h1 className="text-[2rem] font-bold uppercase leading-tight tracking-widest md:text-[2.5rem]">
          Designed for everyone.
        </h1>
        <p className="mt-4 text-[0.95rem] leading-6 text-black/60">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>

        <Cta className="mt-8" linkTo="/stories" ctaColor="black">
          View the stories
        </Cta>
      </div>
      <picture className="order-1 block w-full md:order-2 md:w-[58%]">
        <source media="(max-width: 767px)" srcSet="/home/mobile/designed-for-everyone.jpg" />
        <source media="(max-width: 1023px)" srcSet="/home/tablet/designed-for-everyone.jpg" />
        <img
          className="h-auto w-full object-cover md:h-full"
          src="/home/desktop/designed-for-everyone.jpg"
          alt="A person holding a camera"
        />
      </picture>
    </section>
  );
}

export default DesignedSection;
