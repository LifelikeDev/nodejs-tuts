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

// asynchronous file reading
readFile("../nodejs-tuts/intro/content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  const result = res;

  // asynchronous file writing
  writeFile(
    "../nodejs-tuts/intro/content/res.txt",
    `The result of the write operation is: \n \n${result}`,
    (err, res) => {
      err ? console.log(err) : console.log(res);
    }
  );
});
