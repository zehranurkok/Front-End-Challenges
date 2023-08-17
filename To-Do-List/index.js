import express, { request } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()-1];
let year = d.getFullYear();

let taskList = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => { 
    res.render("app.ejs", { thisday: day, thismonth: month, thisyear: year});
    taskList = [];
})

app.post("/submit", (req, res) => {
    let text = req.body["addtask"];
    if (text !== "") {
        taskList.push(text);
        console.log(taskList.length);
        res.render("app.ejs", { tasklist: taskList, task: text, thisday: day, thismonth: month, thisyear: year});
    }
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})

