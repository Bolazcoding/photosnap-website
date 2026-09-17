import Cta from "./Cta";

function BetaImage() {
  const bgImage =
    window.innerWidth >= 900
      ? "./shared/desktop/bg-beta.jpg"
      : window.innerWidth >= 500
        ? "./shared/tablet/bg-beta.jpg"
        : "./shared/mobile/bg-beta.jpg";
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative flex items-center justify-between bg-cover px-[9.5rem] py-[3.8rem] text-white"
    >
      <h2 className="text-[2.5rem] font-bold uppercase leading-[3.2rem] tracking-[0.4167rem]">
        We’re in beta. <br />
        Get your invite <br /> today!
      </h2>

      <Cta linkTo="/" ctaColor="white">
        Get an invite
      </Cta>

      <div className="bg-lin-grad absolute left-0 h-[28rem] w-[0.6rem]"></div>
    </section>
  );
}

export default BetaImage;
