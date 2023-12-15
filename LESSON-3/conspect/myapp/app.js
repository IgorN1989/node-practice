const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.patch("/user/:userid", (req, res) => {
  const id = req.params.userid;
  // виконуємо необхідні дії
});

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const router = express.Router();
// визначимо домашній роутер
router.get("/", (req, res) => {
  res.send("Це головний роутер");
});
// визначимо роутер about
router.get("/about", (req, res) => {
  res.send("About");
});

module.exports = router;

const myRouter = require("./my-router");
app.use("/my-router", myRouter);
