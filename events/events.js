const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`event emitted: data received...`);
});

customEmitter.on("response", () => {
  console.log("another event emitted here...");
});

customEmitter.on("response", () => {
  console.log("one more event emitted here...");
});

customEmitter.on("process", () => {
  console.log(
    `data successfully processed in ${new Date().getMilliseconds()} seconds`
  );
});

customEmitter.emit("response");
console.log("==================");
customEmitter.emit("process");
