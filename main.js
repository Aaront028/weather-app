function showdata(result)
{
    const resultelement=$("#result")
    resultelement.innerText=JSON.stringify(data);
    console.log("check main fun");
}

console.log("check main fun");
module.export=showdata;