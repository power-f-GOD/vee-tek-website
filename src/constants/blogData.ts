/**
 * Welcome to Blog Control Center 😎
 * Alright to avoid stories, use the following format to add posts.
 * 
 * {
    title: "Pipes and Fittings",
    author: "Immaculata Abba",
    date: "February 2, 2020",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reprehenderit beatae accusamus totam molestias perspiciatis officiis, ipsum 
        laudantium, consectetur ipsam ipsa maiores vero aspernatur qui quas est saepe, 
        soluta eos dolores.`,
    link: "https://medium.com/",
    image: "",
  },
 * Add new posts on top of the the list.
 * Eg:
 * [
 *  {
 *      ... your new postss.
 *  }
 *  .
 *  .
 *  .
 * {
 *      ... some old post.    
 * }
 * ]
 * 
 * Have any questions? reach out to nuel.mailbox@gmail.com or sundaypower9@gmail.com
 * 
 */

const data: {
  title: string;
  author: any;
  date: string;
  paragraph: string;
  link: string;
  image: string;
}[] = [
  // Your newest post comes before this
  {
    title: 'Welcome to the Vee-Tek Blog',
    author: 'Vee-Tek Group',
    date: 'July 31, 2020',
    paragraph: `Vee-Tek Nigeria Limited was registered in 1991 
    as an indigenous electrical engineering company primarily engaged 
    in the design, construction and manufacturing of medium-voltage switch gears and 
    general electrical engineering services, particularly heavy power 
    installations such as transmission lines and injection substations`,
    link: 'https://link.medium.com/Ijioo8h0y8',
    image: 'welcome_to_veetek.jpeg'
  }
];

export default data;
