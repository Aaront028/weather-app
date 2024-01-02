const showdata = require("./main.js");
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const port = 3000;
console.log("this is dir",dir);
const config = {
 
  headers: {
    'X-RapidAPI-Key': '4fe27b8b6emsh162277692ee04e7p13be95jsnafdf3e7b04b6',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(dir));

app.get("/",async(req,res)=>{
res.sendFile(dir+"/index.html");
});
app.post("/post",async(req,res)=>{
try
{
const place=req.body.location;
console.log(place);
const result=await axios.get(`https://open-weather13.p.rapidapi.com/city/${place}`,config);
console.log(result);
showdata(result);

}
catch(error)
{
  //console.error(error);
}
});

// $("#data").click(function(){
// $("h1").text(result);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});