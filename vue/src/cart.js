import { reactive } from "vue";
import { items } from "./items.js";

export const cart = reactive({

  items,
  fruits: [],

  ADD(name) {
    let fruit = items.find((item) => item.name === name);
    this.fruits.push(fruit);
    console.log(this.fruits);
  },
});