interface Data {
  id: number;
  title: string;
  description: string;
}

export const tabText: string[] = ["Home", "Contact", "Blog"];

export const tabContent: Data[] = [
  {
    id: 1,
    title: "Home",
    description:
      "The home page of a website is typically the first page visitors see when they navigate to the site's URL. Its primary purpose is to welcome visitors and provide an overview of what the website offers. Key elements often found on a home page include:",
  },
  {
    id: 2,
    title: "Contact",
    description:
      "The contact page is where visitors can find information on how to get in touch with the website's owner or organization. It usually includes:",
  },
  {
    id: 3,
    title: "Blog",
    description:
      "The blog page is where articles, posts, or updates are displayed in chronological order, with the most recent typically appearing first. It serves several purposes:",
  },
];
