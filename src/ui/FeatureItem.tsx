type FeatureItemProps = {
  featureImage: string;
  title: string;
  text: string;
};

function FeatureItem({ featureImage, title, text }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        className="size-[72px] object-contain"
        src={featureImage}
        alt={title}
      />
      <h2 className="mt-12 text-lg font-bold text-black">{title}</h2>
      <p className="mt-4 max-w-[22rem] text-[15px] font-normal leading-6 text-black/60">
        {text}
      </p>
    </div>
  );
}

export default FeatureItem;
