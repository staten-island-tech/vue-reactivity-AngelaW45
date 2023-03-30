// store.js
import { reactive } from "vue";
import { items } from "./items.js";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
    /* AddCart.push("Hello");
      document.getElementById("Btn").innerHTML = AddCart; */

    /* alert(`${this.cart}`);
    if (event) {
      alert(event.target.Cart);
    } */
  },

  items,

  ADD(name) {
    const product = items.find((FruitName) => FruitName.name === name);
    this.fruits.push(product);
    console.log(this.fruits);
  },
});
