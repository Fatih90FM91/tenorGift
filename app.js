    // create the request object

    $(document).ready(function(){
    var xmlHttp = new XMLHttpRequest();

    var inputValue= "";
    

    let inputTenor =document.getElementById('input-tenor');
    let btnTenor =document.getElementById('button-tenor');

    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            
            console.log(xmlHttp.responseText);
            printData(xmlHttp.responseText);
         
        }
    }

  

function printData(arr){
    let name=JSON.parse(arr);
    let result=name.results;
    console.log(name);
    console.log(result[0].media[0].nanogif.url);
   

        let newTag=$('<div class="imgTenor"></div>')


for (let i = 0; i < result.length; i++) {
    let newUrl=$(`<img  src=${result[i].media[0].nanogif.url}>`);

    newTag.append(newUrl);
    $('#tenor-gift').append(newTag);
    
  
    
}

}
  

btnTenor.addEventListener('click',function(){
 
    var apikey = "X6PEFRJQZXLS";
    var lmt = 8;
    var search_url ;
    var search_term="cat";

    inputValue=inputTenor.value;
    console.log( inputValue);
      // test search term
    search_term = inputValue;
    console.log(  search_term);

    search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
    apikey + "&limit=" + lmt;
  
    

    xmlHttp.open('GET',search_url ,true);

    xmlHttp.send();



});







});

