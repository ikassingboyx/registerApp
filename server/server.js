const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
let users = [
  { login: '4', password: '4', id: 0, date: '20.04.2023, 22:36:13' },
  { login: '2', password: '2', id: 1, date: '20.04.2023, 22:36:22' },
  { login: '3', password: '5', id: 2, date: '20.04.2023, 22:36:28' },
  { login: '1', password: '1', id: 3, date: '20.04.2023, 22:37:22' },
  { login: '5', password: '5', id: 4, date: '20.04.2023, 22:38:09' },
  { login: '6', password: '6', id: 5, date: '20.04.2023, 22:40:22' },
  { login: '8', password: '8', id: 6, date: '20.04.2023, 22:41:00' },
  { login: '9', password: '9', id: 7, date: '20.04.2023, 22:41:17' }
]
let allUsersLogins = ["4", "2", "3", "1", "5", "6", "8", "9"]
let id = 0

app.post("/addUser", (req, res) => {
  const user = req.body.user;
  const date = new Date().toLocaleString();
  if (!allUsersLogins.includes(user.login)) {
    console.log("new login")
    allUsersLogins.push(user.login);
    user.id = id;
    user.date = date;
    console.log(user)
    users.push(user);
    id++;
    console.log(`succesfuly added: ${allUsersLogins}`);
    res.send(true);
    console.log(users)
  } else {
    console.log("login exist")
    res.send(false);
  }
})

app.post("/userToDel", (req, res) => {
  const idToDel = req.body.idToDel;
  console.log(idToDel);
  users = users.filter((user) => user.id != idToDel);
  allUsersLogins.splice(idToDel, 1, "");

  console.log(`zostało: ${allUsersLogins}`);
  res.send(users);
});

app.get("/getAllUsersData", (req, res) => {
  res.send(users)
})


app.listen(PORT, "10.0.1.3", () => {
  console.log(`Start servera na porcie ${PORT}`);
});