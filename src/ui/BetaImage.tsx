import Cta from "./Cta";

function BetaImage() {
  return (
    <section
      className="relative isolate flex flex-col items-center gap-8 overflow-hidden px-6 py-16 text-center text-white sm:px-10 md:flex-row md:justify-between md:gap-12 md:px-12 md:py-20 md:text-left lg:px-28"
    >
      <picture className="absolute inset-0 -z-10">
        <source
          media="(max-width: 767px)"
          srcSet="/shared/mobile/bg-beta.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/shared/tablet/bg-beta.jpg"
        />
        <img
          className="h-full w-full object-cover"
          src="/shared/desktop/bg-beta.jpg"
          alt=""
        />
      </picture>
      <h2 className="text-[2rem] font-bold uppercase leading-tight tracking-[0.3rem] sm:text-[2.5rem] sm:leading-[3.2rem] sm:tracking-[0.4167rem]">
        We’re in beta. <br />
        Get your invite <br /> today!
      </h2>

      <Cta linkTo="/" ctaColor="white">
        Get an invite
      </Cta>

      <div className="bg-lin-grad absolute left-0 top-0 h-full w-[0.4rem] md:w-[0.6rem]"></div>
    </section>
  );
}

export default BetaImage;
