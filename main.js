$(document).ready(function () {
    $('#formid').submit(function (event) {
      event.preventDefault()
      const location = $('#location').val()
  
      $.ajax({
        type: 'POST',
        url: '/post',
        data: { location: location },
        success: function (response) {
          console.log(response)
          $('#result').html(`
          <p>Name: ${response.location.name}</p>
          <p>Temperature: ${response.current.temp_c}</p>
          <p>Humidity: ${response.current.humidity}</p>
          <label>${response.current.condition.text}</label>
          <img src="${response.current.condition.icon}"/>
          `)
        },
        error: function (error) {
          console.error('Error fetching data:', error)
        },
      })
    })
  })













            
// import { JSDOM } from 'jsdom';
// import axios from 'axios';
// import jQuery from 'jquery';
// const { window } = new JSDOM();
// const $ = jQuery(window);




// const form=$("#formid");
// const loc=$("#location");
// form.submit(async function(event){


// try
// {
//     const location = loc.val();
//     const response=await axios.post("/post",{location:location});
//     console.log(response.data);
//     $("#result").html(response.current.temp_c);
// }    
// catch(error)
// {
//     console.error('error:',error);
// }

// });

// // function showdata(data)
// // {
// //     const result =$("#result");
// //     result.html(data);
// //     console.log('Data displayed successfully:', data);

// // }


// console.log("check main.js");
// export function greet(name) {
//     return `Hello, ${name}`;
//   }
  
//   export const message = "How you doing?";
