import FeatureItem from "../../ui/FeatureItem";
import { motion } from "framer-motion";

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
  {
    featureImage: "./features/desktop/custom-domain.svg",
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    featureImage: "./features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    featureImage: "./features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

function Features() {
  return (
    <motion.section
      className="page-container grid grid-cols-1 items-start gap-16 bg-white px-6 py-20 sm:px-10 md:grid-cols-3 md:gap-8 md:px-0 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <FeatureItem
            featureImage={item.featureImage}
            title={item.title}
            text={item.text}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Features;
