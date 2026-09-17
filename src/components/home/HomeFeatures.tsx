import FeatureItem from "../../ui/FeatureItem";

const items = [
  {
    featureImage: "./features/desktop/responsive.svg",
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    featureImage: "./features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    featureImage: "./features/desktop/embed.svg",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

function HomeFeatures() {
  return (
    <section className="page-container grid grid-cols-3 items-center gap-5 bg-white pb-28">
      {items.map((item) => (
        <FeatureItem
          key={item.title}
          featureImage={item.featureImage}
          title={item.title}
          text={item.text}
        />
      ))}
    </section>
  );
}

export default HomeFeatures;
