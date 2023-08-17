import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()-1];
let year = d.getFullYear();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => { 
    res.render("app.ejs", { thisday: day, thismonth: month, thisyear: year});
})

app.get("/submit", (req, res) => {
    res.render("list.ejs")
})

app.post("/submit", (req, res) => {
    const text = req.body["addtask"];
    res.render("app.ejs", {newtext: text, thisday: day, thismonth: month, thisyear: year})
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})
