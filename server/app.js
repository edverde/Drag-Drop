const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.post("/upload", (req,res) => {
    console.log(req.files.file);
    res.send(`Aechivo ${req.files.file.name} subido correctamente al servidor`);
    //fileUpload.mv()
});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});