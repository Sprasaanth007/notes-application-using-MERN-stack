const express = require("express");
const dotenv = require("dotenv");
const notes = require("./DummyData/notes");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is working...");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
