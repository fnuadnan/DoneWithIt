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
