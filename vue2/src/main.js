import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

/* const items = [
  {
    Name: "Watermelon",
    text: "Fun fact: The first recorded watermelon harvest occurred nearly 5,000 years ago in Egypt.",
  },
  {
    Name: "Apple",
    text: "Fun fact: Apple was the first publicly traded company to cross the $1, $2, and $3 trillion market cap milestones.",
  },
  {
    Name: "Orange",
    text: "Fun fact: There are over 600 varieties of oranges.",
  },
  {
    Name: "Mango",
    text: "Fun fact: Mangos were first grown in India over 5,000 years ago.",
  },
  {
    Name: "Dragon Fruit",
    text: "Fun fact: The dragon fruit was once thought to be the last thing that comes out of a fire-breathing dragon's mouth.",
  },
  {
    Name: "Bannana",
    text: "Fun fact: A bannana is classified as a berry, where the original wild banana contained many large, hard seeds and much pulp.",
  },
  {
    Name: "Strawberries",
    text: "Fun fact: Strawberries are the only fruit with seeds on the outside, and since the seeds are on the outside, strawberries aren't true berries.",
  },
  {
    Name: "Grapes",
    text: "Fun fact: Grapes Are Actually Berries.",
  },
  {
    Name: "Blueberries",
    text: "Fun fact: Blueberries were called “star fruits” by North American people (because of the five-pointed star shape formed at the end of the berry.)",
  },
  {
    Name: "Lemons",
    text: "Fun fact: One lemon tree can produce up to 600 pounds (about 300kgs) of lemons a year.",
  },
];

export { items };
 */
