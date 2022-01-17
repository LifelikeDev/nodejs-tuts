// import greeting from "./greeting";
// import { morning, night, afternoon } from "./time";

const greeting = require("./greeting");
const { morning, night, evening } = require("./time");

greeting(morning);
greeting(night);
greeting(evening);
greeting("Dawn");

console.log();
console.log();

const os = require("os");

// get user information
console.log(os.userInfo());

console.log();
// get system uptime
console.log(`the system uptime currently is ${os.uptime()} seconds`);
console.log();

const currentOS = {
  name: os.type(),
  release: os.release(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
};

console.log(currentOS);
