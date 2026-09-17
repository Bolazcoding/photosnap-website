function FeatureItem({ featureImage, title, text }) {
  return (
    <div className="flex flex-col items-center justify-center pt-28 text-center">
      <img
        className="h-18 w-18 object-contain"
        src={featureImage}
        alt={title}
      />
      <h2 className="text-black text-lg font-bold mt-12">{title}</h2>
      <p className="text-black text-[15px] font-normal mt-4 leading-6.5">
        {text}
      </p>
    </div>
  );
}

export default FeatureItem;
