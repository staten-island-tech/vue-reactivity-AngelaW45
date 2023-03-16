<template>
  <div class="parent">
    <div class="card" v-for="item in items">
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="Text">Amount of fruit you get: {{ item.amount }}</h3>
      <h4 class="Text">Price: ${{ item.price }}</h4>
      <h5 class="text">{{ item.text }}</h5>
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
          name: "Watermelon",
          amount: 1,
          text: "Fun fact: The first recorded watermelon harvest occurred nearly 5,000 years ago in Egypt.",
          price: 16,
        },
        {
          name: "Apple",
          amount: 3,
          text: "Fun fact: Apple was the first publicly traded company to cross the $1, $2, and $3 trillion market cap milestones.",
          price: 5,
        },
        {
          name: "Orange",
          amount: 3,
          text: "Fun fact: There are over 600 varieties of oranges, and Oranges are the largest citrus fruit in the world.",
          price: 5,
        },
        {
          name: "Mango",
          amount: 3,
          text: "Fun fact: Mangos were first grown in India over 5,000 years ago, and it is the national fruit of three countries.",
          price: 4,
        },
        {
          name: "Dragon Fruit",
          amount: 3,
          text: "Fun fact: The dragon fruit was once thought to be the last thing that comes out of a fire-breathing dragon's mouth.",
          price: 9,
        },
        {
          name: "Bannana",
          amount: 7,
          text: "Fun fact: A bannana is classified as a berry, where the original wild banana contained many large, hard seeds and much pulp.",
          price: 8,
        },
        {
          name: "Strawberries",
          amount: 25,
          text: "Fun fact: Strawberries are the only fruit with seeds on the outside, and since the seeds are on the outside, strawberries aren't true berries.",
          price: 12,
        },
        {
          name: "Grapes",
          amount: 40,
          text: "Fun fact: Grapes Are Actually Berries, this is because a berrys defination is a fruit that is derived from a single ovary of an individual flower.",
          price: 14,
        },
        {
          name: "Blueberries",
          amount: 40,
          text: "Fun fact: Blueberries were called “star fruits” by North American people (because of the five-pointed star shape formed at the end of the berry.)",
          price: 15,
        },
        {
          name: "Lemons",
          amount: 3,
          text: "Fun fact: One lemon tree can produce up to 600 pounds (about 300kgs) of lemons a year.",
          price: 6,
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

.Text {
  font-size: 1.3rem;
}

.btn {
  font-size: 1rem;
  padding: 0.4rem;
  margin-top: 0.7rem;
  background-color: rgb(162, 0, 255);
  border-radius: 2rem;
}
</style>
