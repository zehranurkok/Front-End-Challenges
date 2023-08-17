import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const d = new Date();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => { 
    const month = months[d.getMonth()];
    const day = days[d.getDay()-1];
    const year = d.getFullYear();
    res.render("app.ejs", { thisday: day, thismonth: month, thisyear: year});
})

app.post("/submit", (req, res) => {
    res.render("list.js", )
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})