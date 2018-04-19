const express = require("express");
const app = express();

let scores = [{ name: "Edwin", score: 50 }, { name: "David", score: 39 }];

app.use(express.json());

var resources = {
    "/IP": "Internet Protocol",
    "/TCP": "Transmission Control Protocol"
};

const hostname = '127.0.0.1';
const port = 3000;

app.get("/scores", (req, res) => {
    scores.sort((a, b) => b.score - a.score);
    console.log(scores);
    scores.length = 3;
    res.send(scores);

});

app.post("/scores", (req, res) => {
    console.log(req.body);
    scores.push(req.body);
    res.status(201).end()
});

app.listen(3000, () => console.log(`Server running at http://${hostname}:${port}/, you magnificent son of a bitch.`))