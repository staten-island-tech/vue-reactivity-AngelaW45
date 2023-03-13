<template>
  <div id="card">
    <h1>{{ student }}</h1>
  </div>
</template>

<script>
// import { computed } from "@vue/reactivity";

export default {
  Data() {
    return {
      student: "Jason",
      /*  items: [
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
            text: "Fun fact: Strawberries are the only fruit with seeds on the outside. A berry has its seeds on the inside. Since the seeds are on the outside, strawberries aren't true berries.",
          },
          {
            Name: "Grapes",
            text: "Fun fact: Grapes Are Actually Berries.",
          },
          {
            Name: "Blueberries",
            text: "Fun fact: Blueberries were called “star fruits” by North American indigenous peoples because of the five-pointed star shape that is formed at the blossom end of the berry.",
          },
          {
            Name: "Lemons",
            text: "Fun fact: One lemon tree can produce up to 600 pounds (about 300kgs) of lemons a year.",
          },
          {
            Name: "Peaches",
            text: "Fun fact: Peaches are also called stone fruits because they have a shell of hard wood around their seed, called a stone or a pit.",
          },
          {
            Name: "Pinnapple",
            text: "Fun fact: Only one pineapple is produced by a single plant in a single season.",
          },
          {
            Name: "Cherries",
            text: "Fun fact: The cherry tree develops beautiful white flowers during the spring.",
          },
          {
            Name: "Cantaloupe",
            text: "Fun fact: The fruit known as cantaloupe in the U.S. actual name is “reticulated muskmelon”.",
          },
          {
            Name: "Raspberries",
            text: "Fun fact: Red raspberries are the most widely known, but Gold raspberries are the sweetest.",
          },
        ], */
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  background-color: blueviolet;
}
</style>
