import colors from "./config/colors";
import { Category, IconName, Message } from "./entities";

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

export const items: Category[] = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "email",
  },
  {
    label: "Electronics",
    value: 3,
    backgroundColor: "blue",
    icon: "lock",
  },
  {
    label: "Games",
    value: 4,
    icon: "cards",
    backgroundColor: "#26de81",
  },
  {
    label: "Books",
    value: 5,
    icon: "book",
    backgroundColor: "#2bcbba",
  },
  {
    label: "Movies & Music",
    value: 6,
    icon: "headphones",
    backgroundColor: "#45aaf2",
  },
  {
    label: "Sports",
    value: 7,
    icon: "basketball",
    backgroundColor: "#4b7bec",
  },
  {
    label: "Other",
    value: 8,
    icon: "account",
    backgroundColor: "#fc5c65",
  },
  {
    label: "Shoes",
    value: 9,
    icon: "shoe-heel",
    backgroundColor: "#fd9644",
  },
  {
    label: "Beauty",
    value: 10,
    icon: "cards",
    backgroundColor: "#fed330",
  },
];
