// Alright, let’s make `map()` **super simple** 👇

// ---

// ## 🔹 What is `map()` in JavaScript?

// `map()` is used to **change every item in an array** and create a **new array**.

// 👉 Simple line:
// **“Take array → change each value → get a new array”**

// ---

// ## 🔹 Easy Example

// ```javascript
// const numbers = [1, 2, 3];

// const result = numbers.map((num) => {
//   return num + 1;
// });

// console.log(result); // [2, 3, 4]
// ```

// ### 🧠 What happened?

// * 1 → 2
// * 2 → 3
// * 3 → 4

// So new array = `[2, 3, 4]`

// ---

// ## 🔹 Real Life Example (Important 🔥)

// ```javascript
// const prices = [100, 200, 300];

// const discounted = prices.map((price) => {
//   return price - 50;
// });

// console.log(discounted); // [50, 150, 250]
// ```

// 👉 Think like:

// * You have product prices
// * You apply discount to each
// * You get new prices

// ---

// ## 🔹 Short Syntax (Modern Way)

// ```javascript
// const numbers = [1, 2, 3];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6]
// ```

// ---

// ## 🔹 Important Points (Remember This)

// * ✅ `map()` always returns a **new array**
// * ❌ It does NOT change original array
// * 🔁 It runs loop automatically on each item
// * ⚡ Used when you want to **transform data**

// ---

// ## 🔹 Simple Comparison

// | Method      | Use                   |
// | ----------- | --------------------- |
// | `map()`     | Change values         |
// | `forEach()` | Just loop (no return) |

// ---

// ## 🔹 One Line Summary

// 👉 **map = change every item + return new array**

// ---

// If you want, next I can show:

// * `map()` in your **To-Do App**
// * OR difference between `map`, `filter`, `reduce` (very important for interviews)
