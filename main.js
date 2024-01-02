
import { JSDOM } from 'jsdom';
import axios from 'axios';
import jQuery from 'jquery';
const { window } = new JSDOM();
const $ = jQuery(window);




const form=$("#formid");
const loc=$("#location");
form.submit(async function(event){


try
{
    const location = loc.val();
    const response=await axios.post("/post",{location:location});
    console.log(response.data)
    showdata(response.data);
}
catch(error)
{
    console.error('error:',error);
}

});

function showdata(data)
{
    const result =$("#result");
    result.html(data);
    console.log('Data displayed successfully:', data);

}


console.log("check main.js");
export function greet(name) {
    return `Hello, ${name}`;
  }
  
  export const message = "How you doing?";
