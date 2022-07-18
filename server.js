const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let boards = [ {
}];

app.get("/boards",function(req,res) {
    res.json(boards);
})

app.post("/boards", function(req,res) {
    const data = req.body;
    data.id = boards.length;
    data.stage = 1;
    console.log("data received from postman is ", data);
    boards.push({
        id : data.id,
        title : req.body.title,
        stage : data.stage
    });
    res.status(201);
    res.end("New Board Added!")
})

// app.put("/boards/:newid", function(req,res) {
//     const newstage = req.body.stage;
//     const givenid = req.params.newid;

// if(givenid){
//     data.stage = newstage;
//     res.send(data.stage);
//     res.status(200);
// }
// });


app.listen(3002, function() {
    console.log("Port 3002 is started");
})