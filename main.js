
const form=$("#formid");
const loc=$("#location");
form.submit(async function(event){
try
{
    event.preventDefault();
    const location = loc.val();
    const response=await axios.post("/post",{location:location});
    console.log(response.data);
    
    $("#result").html(`
    <p>Temperature: ${response.data.current.temp_c}</p>
    <p>Humidity: ${response.data.current.humidity}</p>
    <p>${response.data.current.condition.text}</p>
    <img src="${response.data.current.condition.icon}"/>
    `)
    
    
}    

catch(error)
{
    console.error('error:',error);
}

});



