// const date = new Date();
// console.log(`Today is ${date.getFullYear()}`);

// const nodemon = require("nodemon");
// console.log(nodemon);

// const users = require("./commonJS/users");
// console.log(users);

// const { admins } = require("./commonJS/users");
// console.log(admins);

// const { getCurrentMonth } = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now is ${currentMonth} month`);

// const currentMonth = require("./commonJS/date").getCurrentMonth();
// console.log(`Now is ${currentMonth} month`);

import users from "./ES6/users.js";
console.log(users);

import { getCurrentMonth } from "./ES6/date/index.js";
const currentMonth = getCurrentMonth();
console.log(`Now is ${currentMonth} month`);
