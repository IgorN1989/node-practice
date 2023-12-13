const fs = require("fs/promises");

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const readFile = async () => {
//   //   const buffer = await fs.readFile("./files/file.txt");
//   //   console.log(buffer);
//   //   const text = buffer.toString();
//   //   console.log(text);

//   const text = await fs.readFile("./files/file.txt", "utf-8");
//   console.log(text);
// };

// readFile();

// const addText = async () => {
//   const result = await fs.appendFile("./files/file.txt", ", World");
// };

// addText();

const replaceText = async () => {
  const result = await fs.writeFile("./files/file.txt", "TEST");
};

replaceText();
