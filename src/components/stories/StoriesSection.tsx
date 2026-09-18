import ItemStories from "../../ui/ItemStories";

const items = [
  {
    desktopImage: "/stories/desktop/mountains.jpg",
    mobileImage: "/stories/mobile/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
    date: "April 16th 2020",
  },
  {
    desktopImage: "/stories/desktop/cityscapes.jpg",
    mobileImage: "/stories/mobile/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020",
  },
  {
    desktopImage: "/stories/desktop/18-days-voyage.jpg",
    mobileImage: "/stories/mobile/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020",
  },
  {
    desktopImage: "/stories/desktop/architecturals.jpg",
    mobileImage: "/stories/mobile/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020",
  },
  {
    desktopImage: "/stories/desktop/world-tour.jpg",
    mobileImage: "/stories/mobile/world-tour.jpg",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020",
  },
  {
    desktopImage: "/stories/desktop/unforeseen-corners.jpg",
    mobileImage: "/stories/mobile/unforeseen-corners.jpg",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020",
  },
  {
    desktopImage: "/stories/desktop/king-on-africa.jpg",
    mobileImage: "/stories/mobile/king-on-africa.jpg",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    date: "March 29th 2020",
  },
  {
    desktopImage: "/stories/desktop/trip-to-nowhere.jpg",
    mobileImage: "/stories/mobile/trip-to-nowhere.jpg",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020",
  },
  {
    desktopImage: "/stories/desktop/rage-of-the-sea.jpg",
    mobileImage: "/stories/mobile/rage-of-the-sea.jpg",
    title: "Rage of the Sea",
    author: "Mohammed Abdul",
    date: "March 19th 2020",
  },
  {
    desktopImage: "/stories/desktop/running-free.jpg",
    mobileImage: "/stories/mobile/running-free.jpg",
    title: "Running Free",
    author: "Michelle",
    date: "March 16th 2020",
  },
  {
    desktopImage: "/stories/desktop/behind-the-waves.jpg",
    mobileImage: "/stories/mobile/behind-the-waves.jpg",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020",
  },
  {
    desktopImage: "/stories/desktop/calm-waters.jpg",
    mobileImage: "/stories/mobile/calm-waters.jpg",
    title: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020",
  },
  {
    desktopImage: "/stories/desktop/milky-way.jpg",
    mobileImage: "/stories/mobile/milky-way.jpg",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020",
  },
  {
    desktopImage: "/stories/desktop/dark-forest.jpg",
    mobileImage: "/stories/mobile/dark-forest.jpg",
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    date: "March 4th 2020",
  },
  {
    desktopImage: "/stories/desktop/somwarpet.jpg",
    mobileImage: "/stories/mobile/somwarpet.jpg",
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    date: "March 1st 2020",
  },
  {
    desktopImage: "/stories/desktop/land-of-dreams.jpg",
    mobileImage: "/stories/mobile/land-of-dreams.jpg",
    title: "Land of Dreams",
    author: "William Malcolm",
    date: "February 25th 2020",
  },
];

function StoriesSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <ItemStories
          key={item.title}
          desktopImage={item.desktopImage}
          mobileImage={item.mobileImage}
          title={item.title}
          author={item.author}
          date={item.date}
        />
      ))}
    </section>
  );
}

export default StoriesSection;
