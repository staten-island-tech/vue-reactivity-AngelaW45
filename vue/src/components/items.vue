<script setup>
// import { items } from "@/main";
</script>

console.log(items)
<template>
  <div class="parent">
    <div class="card" v-for="item in items">
      <h3 class="name">{{ item.Name }}</h3>
      <h3 class="text">{{ item.text }}</h3>
      <button class="btn">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
          text: "Fun fact: There are over 600 varieties of oranges, and Oranges are the largest citrus fruit in the world.",
        },
        {
          Name: "Mango",
          text: "Fun fact: Mangos were first grown in India over 5,000 years ago, and it is the national fruit of three countries.",
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
          text: "Fun fact: Grapes Are Actually Berries, this is because a berrys defination is a fruit that is derived from a single ovary of an individual flower.",
        },
        {
          Name: "Blueberries",
          text: "Fun fact: Blueberries were called “star fruits” by North American people (because of the five-pointed star shape formed at the end of the berry.)",
        },
        {
          Name: "Lemons",
          text: "Fun fact: One lemon tree can produce up to 600 pounds (about 300kgs) of lemons a year.",
        },
      ],
    };
  },
};
</script>

<style>
.body {
  margin: auto;
}
.parent {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 75rem;
  margin: auto;
}

.card {
  color: black;
  background-color: blueviolet;
  width: 20rem;
  height: 15rem;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 2rem;
  text-align: center;
}

.name {
  font-size: 2.3rem;
}

.text {
  font-size: 1rem;
}

.btn {
  font-size: 1rem;
  padding: 0.4rem;
  margin-top: 0.7rem;
  background-color: rgb(162, 0, 255);
  border-radius: 2rem;
}
</style>
