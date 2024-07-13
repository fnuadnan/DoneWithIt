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

export type IconName = "email" | "format-list-bulleted" | "logout";

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
