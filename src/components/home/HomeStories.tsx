import ItemStories from "../../ui/ItemStories";

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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <ItemStories
          key={item.title}
          desktopImage={item.desktopImage}
          mobileImage={item.mobileImage}
          title={item.title}
          author={item.author}
        />
      ))}
    </section>
  );
}

export default HomeStories;
