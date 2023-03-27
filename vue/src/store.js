// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;

    this.fruits.push("HELLOO");

    /* AddCart.push("Hello");
      document.getElementById("Btn").innerHTML = AddCart; */

    /* alert(`${this.cart}`);
    if (event) {
      alert(event.target.Cart);
    } */
  },
});
