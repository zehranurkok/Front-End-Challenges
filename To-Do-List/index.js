import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("app.ejs");
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})