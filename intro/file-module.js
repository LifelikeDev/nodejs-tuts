const { readFile, writeFile } = require("fs");

// const firstContent = readFileSync(
//   "../nodejs-tuts/intro/content/first.txt",
//   "utf-8"
// );
// const secondContent = readFileSync(
//   "../nodejs-tuts/intro/content/second.txt",
//   "utf-8"
// );

// console.log({ firstContent, secondContent });

// writeFile("./content/result.txt", "Result content here");

readFile("../nodejs-tuts/intro/content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
});
