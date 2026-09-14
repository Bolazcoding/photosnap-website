import { MoveRight } from "lucide-react";

function ItemStories({
  desktopImage,
  tabletImage,
  mobileImage,
  title,
  author,
}) {
  const bgImage = window.innerWidth >= 500 ? desktopImage : mobileImage;

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative flex flex-col justify-end h-[30rem] bg-no-repeat px-12 pb-8"
      //   whileHover={{ translateY: "-3rem" }}
    >
      <div className="z-10">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm font-medium opacity-60">by {author}</p>
      </div>

      <div className="mt-5 border-b border-white/60"></div>

      <div className="flex items-center justify-between mt-5">
        <p className="text-sm text-white/95 font-bold uppercase tracking-widest">
          Read story
        </p>
        <MoveRight color="white" size={34} />
      </div>

      <div className="absolute left-0 top-0 h-full w-full bg-black/35 bg-opacity-90"></div>
    </div>
  );
}

export default ItemStories;
