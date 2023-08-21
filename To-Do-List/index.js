import express, { request } from "express";
import bodyParser from "body-parser";
import { localsName } from "ejs";

const app = express();
const port = 3000;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[ d.getDay() === 0 ? d.getDay()+6 : d.getDay()-1];
let year = d.getFullYear();

let taskList = [];
let newTaskList = [];
let index = 0;
let newItem ="";
let text = "";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => { 
    index = 0;
    taskList = [];
    res.render("app.ejs", {thisday: day, thismonth: month, thisyear: year});
})

app.post("/delete", (req, res) => { 
    console.log(text);
    console.log(index);
    console.log(taskList); 
    let taskIndex = taskList.indexOf(text);  
    taskList = taskList.splice(taskIndex,1);
    console.log(taskIndex);
    res.render("app.ejs", {ntasklist: newTaskList, tasklist: taskList, i: index, task: text, thisday: day, thismonth: month, thisyear: year});
})

app.post("/submit", (req, res) => {
    text = req.body["addtask"];
    if (text !== "" ) {
        // taskList[index] = text;
        taskList.push(text);
        // console.log(text);
    }
    // index++;
    res.render("app.ejs", {ntasklist: newTaskList, tasklist: taskList, i: index, task: text, thisday: day, thismonth: month, thisyear: year});
})

app.post("/delete-all", (req, res) => { 
    taskList = [];
    res.render("app.ejs", {ntasklist:newTaskList, tasklist: taskList, i: index, task: text, thisday: day, thismonth: month, thisyear: year});
})


app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})



