import { JSDOM } from 'jsdom';
import jQuery from 'jquery';
const { window } = new JSDOM('');
const $ = jQuery(window);
import { greet, message} from "./main.js";
const greet_scaler = greet("Scaler");
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const port = 3000;
window.jQuery = window.$ = $; 
const config = {
 
  headers: {
    'X-RapidAPI-Key': '4fe27b8b6emsh162277692ee04e7p13be95jsnafdf3e7b04b6',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(dir));

app.get("/",(req,res)=>{
res.sendFile(dir+"/index.html");
});
app.post("/post",async(req,res)=>{
try
{
const place=req.body.location;
console.log(place);
const result=await axios.get(`https://open-weather13.p.rapidapi.com/city/${place}`,config);
console.log(result);
res.send(JSON.stringify(result.data,null,2).replace(/(?:\r\n|\r|\n)/g, '<br>'));

}
catch(error)
{
  //console.error(error);
}
});


// $("#data").click(function(){
// $("h1").text(result);
// });


console.log(greet_scaler); // Hello, Scaler
console.log(message);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


  









