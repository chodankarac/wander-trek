import {
  Terrain,
  Person,
  HealthAndSafety,
  SvgIconComponent,
  Event,
} from "@mui/icons-material";

type trekWithUs = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  description: string;
};

export const trekWithUs: trekWithUs[] = [
  {
    id: 1,
    icon: Terrain,
    title: "Varied Terrain and Scenic Routes",
    description:
      "We are offering a wide variety of trekking routes, ranging from easy, scenic paths to challenging alpine terrains. You will experience breathtaking landscapes, forests, waterfalls, and iconic landmarks along the way.",
  },
  {
    id: 2,
    icon: Person,
    title: "Experienced Guides",
    description:
      "We are providing highly experienced and certified trekking guides with extensive local knowledge to ensure your trek is safe, informative, and enjoyable. Our guides share insights into the culture, nature, and wildlife of the region.",
  },
  {
    id: 3,
    icon: HealthAndSafety,
    title: "Safety and First Aid Preparedness",
    description:
      "We are ensuring your safety on every trek with our well-trained staff who are equipped with first aid knowledge and emergency gear. Our team conducts thorough safety briefings and has contingency plans in place for all treks.",
  },
  {
    id: 4,
    icon: Event,
    title: "Trek for All Seasons",
    description:
      "We are offering year-round trekking experiences, with routes and itineraries tailored to the unique conditions of each season. Whether its summer, winter, or the monsoon, we have treks suited to every time of year.",
  },
];

export const staffData = [
  {
    id: 1,
    src: "/assets/images/avtar/baldBoy.jpg",
    alt: "staff1",
    name: "Yash Chopra",
    designation: "Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa architecto neque officia, animi consequuntur, voluptas iste earum esse reiciendis laudantium quia. At quasi impedit quibusdam nostrum nesciunt deleniti consequatur?",
  },
  {
    id: 2,
    src: "/assets/images/avtar/guy.jpg",
    alt: "staff2",
    name: "Ashish Chaudhary",
    designation: "Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa architecto neque officia, animi consequuntur, voluptas iste earum esse reiciendis laudantium quia. At quasi impedit quibusdam nostrum nesciunt deleniti consequatur?",
  },
  {
    id: 3,
    src: "/assets/images/avtar/lensGirl.jpg",
    alt: "staff3",
    name: "Sujay Pawar",
    designation: "Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa architecto neque officia, animi consequuntur, voluptas iste earum esse reiciendis laudantium quia. At quasi impedit quibusdam nostrum nesciunt deleniti consequatur?",
  },
  {
    id: 4,
    src: "/assets/images/avtar/man.jpg",
    alt: "staff4",
    name: "Amit Rana",
    designation: "Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa architecto neque officia, animi consequuntur, voluptas iste earum esse reiciendis laudantium quia. At quasi impedit quibusdam nostrum nesciunt deleniti consequatur?",
  },
  {
    id: 5,
    src: "/assets/images/avtar/modernGirl.jpg",
    alt: "staff5",
    name: "Rahul Patil",
    designation: "Instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa architecto neque officia, animi consequuntur, voluptas iste earum esse reiciendis laudantium quia. At quasi impedit quibusdam nostrum nesciunt deleniti consequatur?",
  },
];
