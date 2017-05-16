require('dotenv').config();
const DashButton = require("dash-button");
let button = new DashButton(process.env.PHY_ADDR);

console.log("I'm listening'")
let i = 0;

// ボタンを押すと表示される部分
button.addListener(() => {
  console.log("["+(i++)+"] It works.");
});