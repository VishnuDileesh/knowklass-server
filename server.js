const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

let channelsList = [];

app.get("/", (req, res) => {
  res.send("KnowKlass");
});

app.get("/channelsList", (req, res) => {
  res.json(channelsList);
});

app.get("/channelsList/:channelName", (req, res) => {
  console.log(req.params.channelName);
  let channelName = req.params.channelName;

  let channel = channelsList.find((i) => i.channelName == channelName);

  res.json({ hostId: channel.channelHost });
});

app.post("/channelsList", (req, res) => {
  let channelName = req.body.channelName;
  let channelHost = req.body.channelHost;

  let channelInfo = {
    channelName: channelName,
    channelHost: channelHost,
  };

  channelsList.push(channelInfo);

  res.send("Done");
});

app.listen(3000, () => {
  console.log("Server started...");
});
