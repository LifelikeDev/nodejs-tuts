const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (year, status) => {
  console.log(`event emitted: the year ${year} is already a ${status}...`);
});

// customEmitter.on("response", () => {
//   console.log("another event emitted here...");
// });

// customEmitter.on("response", () => {
//   console.log("one more event emitted here...");
// });

customEmitter.on("process", () => {
  console.log(
    `data successfully processed in ${new Date().getMilliseconds()} seconds`
  );
});

customEmitter.emit("response", "2022", "success");
console.log("==================");
customEmitter.emit("process");
