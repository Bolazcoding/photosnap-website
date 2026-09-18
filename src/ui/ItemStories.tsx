import { MoveRight } from "lucide-react";

type ItemStoriesProps = {
  desktopImage: string;
  mobileImage?: string;
  title: string;
  author: string;
  date?: string;
};

function ItemStories({
  desktopImage,
  mobileImage,
  title,
  author,
  date,
}: ItemStoriesProps) {
  return (
    <article className="group relative flex h-[375px] flex-col justify-end overflow-hidden px-6 pb-8 sm:h-[500px] sm:px-10">
      <picture className="absolute inset-0">
        {mobileImage && (
          <source media="(max-width: 639px)" srcSet={mobileImage} />
        )}
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={desktopImage}
          alt=""
        />
      </picture>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <p className="text-white text-sm font-medium opacity-60">{date}</p>
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm font-medium opacity-60">by {author}</p>
      </div>

      <div className="relative z-10 mt-5 border-b border-white/60" />

      <div className="relative z-10 mt-5 flex items-center justify-between">
        <p className="text-sm text-white/95 font-bold uppercase tracking-widest">
          Read story
        </p>
        <MoveRight color="white" size={34} />
      </div>
    </article>
  );
}

export default ItemStories;
