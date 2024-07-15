import colors from "./config/colors";

export type Message = {
  id: number;
  title: string;
  description: string;
  image: object;
};

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

export type IconName = "email" | "format-list-bulleted" | "logout" | "apps";

export type IconsProps = {
  name: IconName;
  size: number;
  backgroundColor: string;
  iconColor: string;
};

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

export type textProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
};

export const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

export type Category = {
  label: string;
  value: number;
};
