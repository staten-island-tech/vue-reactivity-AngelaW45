<script setup>
import { store } from "../store.js";
</script>

<script>
export default {
  data() {
    return {
      store,
      count: 0,
      addToCart: [],
      items: [
        {
          id: id++,
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
          amount: "1 box",
          text: "Fun fact: Strawberries are the only fruit with seeds on the outside, and since the seeds are on the outside, strawberries aren't true berries.",
          price: 12,
        },
        {
          name: "Grapes",
          amount: "1 box",
          text: "Fun fact: Grapes Are Actually Berries, this is because a berrys defination is a fruit that is derived from a single ovary of an individual flower.",
          price: 14,
        },
        {
          name: "Blueberries",
          amount: "1 box",
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
  methods: {
    addToCart() {
      this.items.push({ text: this.addToCart });
    },
    // removeItem(item) {
    //   this.items = this.items.filter((t) => t !== item);
    // },
  },
};
</script>

<template>
  <h1 class="header">Fruit Market</h1>
  <button @click="store.increment()" class="Btn">
    Cart List: {{ store.count }}
  </button>

  <div class="list">
    <div class="Lcard" v-for="item in items">
      <h2 class="ltext">
        {{ item.name }}; Amount: {{ item.amount }}; Price: ${{ item.price }}
        <!-- <button class="btn" @click="removeItem(item)">Cancel</button> -->
      </h2>
    </div>
  </div>

  <div class="parent">
    <div class="card" v-for="item in items">
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="Text">Amount of fruit you get: {{ item.amount }}</h3>
      <h4 class="Text">Price: ${{ item.price }}</h4>
      <h5 class="text">{{ item.text }}</h5>

      <div class="cart">
        <button @click="store.increment()" class="btn">
          Add To Cart: {{ store.count }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: auto;
  text-align: center;
}

.parent {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 65vw;
  margin: auto;
}

.card {
  color: black;
  background-color: blueviolet;
  width: 25rem;
  margin-top: 3.5rem;
  padding: 1.5rem;
  border-radius: 2rem;
  text-align: center;
}

.Lcard {
  color: black;
  text-align: center;
}

.list {
  background-color: blueviolet;
  width: 35rem;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: auto;
}

.cart {
}

.name {
  font-size: 2.3rem;
  margin: auto;
}

.header {
  font-size: 6.5rem;
  margin: auto;
}

.text {
  font-size: 1.5rem;
  margin: auto;
}

.Text {
  font-size: 1.3rem;
}

.Btn {
  font-size: 2rem;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: rgb(162, 0, 255);
  border-radius: 2rem;
}

.btn {
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: 0.7rem;
  background-color: rgb(162, 0, 255);
  border-radius: 2rem;
}
</style>
