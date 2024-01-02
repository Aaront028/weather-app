

import express from "express";
import bodyParser from "body-parser";
const app = express();

const port = 4000;

const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city/landon',
  headers: {
    'X-RapidAPI-Key': '4fe27b8b6emsh162277692ee04e7p13be95jsnafdf3e7b04b6',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}