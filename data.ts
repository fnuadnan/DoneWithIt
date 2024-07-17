import colors from "./config/colors";
import { IconName, Message } from "./entities";

// messages data
export const Messages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("./assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("./assets/mosh.jpg"),
  },
];

// menu items data
export const menuItems: {
  title: string;
  icon: { name: IconName; backgroundColor: string };
}[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

// listings data
export const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("./assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("./assets/couch.jpg"),
  },
];

// categories data
export const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
