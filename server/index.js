const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ Message: "Hello World" });
});

const users = [];
const generateUserID = () => Math.random().toString(36).substring(2, 10);

// Register
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const id = generateUserID();

  // console.log({ id, username, email, password });

  const result = users.filter(
    (user) => user.email == email && user.password == password
  );
  if (result.length == 0) {
    const newUser = { id, email, username, password };
    users.push(newUser);
    return res.json({ Message: "Account Created Succesfully" });
  }
  res.json({ error_message: "User Already exists" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  let result = users.filter(
    (user) => user.email == email && user.password == password
  );
  if (result.length != 1) {
    return res.json({ error_message: "Incorrect Email & Password" });
  }
  res.json({
    Message: "Login Successfully",
    id: result[0].id,
  });
});

// Thread
app.post("/api/create/thread", async (req, res) => {
  const { threadText, userId } = req.body;
  const threadId = generateUserID();
  console.log({ threadId, threadText, userId });
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Running at http://${HOSTNAME}:${PORT}`);
});
