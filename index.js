
import express from 'express'
import axios from 'axios'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname)))

const port = 3000;

const config = {
 
  headers: 
  {
    key:"69bec42602954187bf8125713240301",
  },
}

console.log("inde.js working");
app.get("/",(req,res)=>{
res.sendFile(join(__dirname, '/index.html'));
});
app.post("/post",async(req,res)=>{
try
{
const place=req.body.location;
console.log(place);
const result=await axios.get(`http://api.weatherapi.com/v1/current.json?key=${config.headers.key}&q=${place}`);
console.log(result);
res.json(result.data);

}
catch(error)
{
  console.error(error.response || error)
  res.status(500).send('Internal Server Error')
}

});


app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});


  









