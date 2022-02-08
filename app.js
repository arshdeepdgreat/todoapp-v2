//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistdb");

const itemSchema = {
    name: String
};

const Item = mongoose.model("item", itemSchema);

const Item1 = new Item({
    name: "Welcome to your Todo List"
})


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
    const day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/",function(req,res){
    const item = req.body.newItem;
    if(req.body.list==="Work"){
        if(item != "")workItems.push(item);
        res.redirect("/work");
    }
    else{
      if(item != "")items.push(item);
        res.redirect("/"); 
    }
});

app.get("/work",function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});



app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});