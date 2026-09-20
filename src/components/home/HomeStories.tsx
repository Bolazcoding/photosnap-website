import ItemStories from "../../ui/ItemStories";
import { motion } from "framer-motion";

const items = [
  {
    desktopImage: "/stories/desktop/mountains.jpg",
    mobileImage: "/stories/mobile/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
  },
  {
    desktopImage: "/stories/desktop/cityscapes.jpg",
    mobileImage: "/stories/mobile/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
  },
  {
    desktopImage: "/stories/desktop/18-days-voyage.jpg",
    mobileImage: "/stories/mobile/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
  },
  {
    desktopImage: "/stories/desktop/architecturals.jpg",
    mobileImage: "/stories/mobile/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
  },
];

function HomeStories() {
  return (
    <motion.section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          className="h-full"
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <ItemStories
            desktopImage={item.desktopImage}
            mobileImage={item.mobileImage}
            title={item.title}
            author={item.author}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default HomeStories;
