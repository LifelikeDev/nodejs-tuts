const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`event emitted: data received...`);
});

customEmitter.emit("response");
