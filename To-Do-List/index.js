import express, { request } from "express";
import bodyParser from "body-parser";
import { localsName } from "ejs";
import db, { Schema } from "mongoose";

const app = express();
const port = 3000;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[ d.getDay() === 0 ? d.getDay()+6 : d.getDay()-1];
let year = d.getFullYear();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

db.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemsSchema = new Schema ({
    content: String
});

const Item = db.model("Item", itemsSchema);

app.get("/", (req, res) => { 
   Item.find({}).then(item => {
        console.log(item);
        res.render("app.ejs", { thisday: day, thismonth: month, thisyear: year, tasklist: item});
    });
    console.log("------------------------------------------------------------");
})

app.post("/", (req, res) => {
    let text = req.body["addtask"];
    if (text !== "") {
        const nItem = new Item ({
            content: text
        });
        nItem.save();
        res.redirect("/");
    } else {
        res.render("app.ejs", { task: text, thisday: day, thismonth: month, thisyear: year});
    }
})

app.post("/delete-all", (req, res) => { 
    taskList = [];
    res.render("app.ejs", { thisday: day, thismonth: month, thisyear: year});
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
}) 