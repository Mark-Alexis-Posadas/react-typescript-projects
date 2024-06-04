interface Data {
  id: number;
  title: string;
  description: string;
}

export const tabText: string[] = ["home", "contact", "blog"];

export const tabContent: Data[] = [
  {
    id: 1,
    title: "Home",
    description: "Welcome to the home page!",
  },
  {
    id: 2,
    title: "Contact",
    description: "Get in touch with us through the contact page.",
  },
  {
    id: 3,
    title: "Blog",
    description: "Read our latest articles on the blog page.",
  },
];
