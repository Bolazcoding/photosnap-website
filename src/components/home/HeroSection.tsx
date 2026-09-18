import Cta from "../../ui/Cta";

function HeroSection() {
  return (
    <section className="flex flex-col text-white md:min-h-[600px] md:flex-row">
      <div className="order-2 flex w-full flex-col justify-center bg-black px-6 py-16 sm:px-10 md:order-1 md:w-[42%] md:px-12 lg:px-28">
        <h1 className="text-[2rem] font-bold uppercase leading-tight tracking-widest md:text-[2.4rem]">
          Create and share your photo Stories.
        </h1>
        <p className="mt-4 text-[0.95rem] leading-6 text-white/60">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>

        <Cta className="mt-8" linkTo="/" ctaColor="white">
          Get an invite
        </Cta>
      </div>
      <picture className="order-1 block w-full md:order-2 md:w-[58%]">
        <source
          media="(max-width: 767px)"
          srcSet="/home/mobile/create-and-share.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/home/tablet/create-and-share.jpg"
        />
        <img
          className="h-auto w-full object-cover md:h-full"
          src="/home/desktop/create-and-share.jpg"
          alt="A person holding a camera"
        />
      </picture>
    </section>
  );
}

export default HeroSection;
