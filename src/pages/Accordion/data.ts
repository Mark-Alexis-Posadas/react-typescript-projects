interface Data {
  id: number;
  title: string;
  body: string;
  active: boolean;
}

export const accordionData: Data[] = [
  {
    id: 1,
    title: "What is an FAQ accordion?",
    body: "An FAQ accordion is a user interface element that allows users to expand and collapse sections of content. This is typically used to organize frequently asked questions so users can easily find the information they need.",
    active: true,
  },
  {
    id: 2,
    title: "How do I implement an FAQ accordion in HTML/CSS/JavaScript?",
    body: "To implement an FAQ accordion, you can use a combination of HTML for the structure, CSS for styling, and JavaScript for functionality. You will create a list of questions that can be clicked to reveal or hide the answers.",
    active: false,
  },
  {
    id: 3,
    title: "Can I use a library to create an FAQ accordion?",
    body: "Yes, you can use libraries like Bootstrap, jQuery UI, or other UI frameworks that offer pre-built accordion components. These libraries can simplify the process and provide additional features and customization options.",
    active: false,
  },
  {
    id: 4,
    title: "How can I make my FAQ accordion accessible?",
    body: "To make your FAQ accordion accessible, ensure that it is navigable via keyboard and screen readers. Use semantic HTML elements, ARIA roles, and properties to provide additional context to assistive technologies.",
    active: false,
  },
  {
    id: 5,
    title: "How do I style an FAQ accordion?",
    body: "You can style an FAQ accordion using CSS. Common styles include changing the background color, text color, adding borders, and animations for the expand/collapse effect. CSS transitions can be used to create smooth animations.",
    active: false,
  },
  {
    id: 6,
    title: "Can I add animations to my FAQ accordion?",
    body: "Yes, you can add animations to your FAQ accordion using CSS transitions or JavaScript. This can enhance the user experience by providing visual feedback when a section is expanded or collapsed.",
    active: false,
  },
  {
    id: 7,
    title: "How do I handle a large number of FAQs in an accordion?",
    body: "For a large number of FAQs, you can add search functionality to help users find specific questions quickly. Additionally, grouping related questions into categories can improve organization and usability.",
    active: false,
  },
  {
    id: 8,
    title: "What are some common issues with FAQ accordions?",
    body: "Common issues with FAQ accordions include poor performance with a large number of items, lack of accessibility, and insufficient styling for different devices. Ensuring responsive design and optimizing for performance are important considerations.",
    active: false,
  },
];
