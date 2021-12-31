// import greeting from "./greeting";
// import { morning, night, afternoon } from "./time";

const greeting = require("./greeting");
const time = require("./time");

greeting(time.morning);
greeting(time.night);
greeting(time.evening);
