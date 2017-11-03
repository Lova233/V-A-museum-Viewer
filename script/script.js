var api = "http://www.vam.ac.uk/api/json/";

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


    
function search() {  
    var text = document.getElementById("q").value;
    var q = text.split(' ').join('+'); 
      var query = api + "museumobject/search?q=" + q;
      //console.log(query);
      httpGetAsync(query, function(res) {
         var record = JSON.parse(res);
         var show =[];
          show=record.records;
          console.log(show);
          var htmlToInject= "";
               //console.log(show); 
          for (var i = 0 ; i < show.length;i++){
              htmlToInject = htmlToInject + "<div class= 'item'>"+"<div class='align'><h1>"+show[i].fields.title+"</h1><h2>"+show[i].fields.artist+"</h2><h2>"+show[i].fields.date_text+"</h2></div>";
              
              
              
              if (show[i].fields.primary_image_id != null) {
                  htmlToInject += "<div class='align1'><img id='imgrsl' src = \"https://media.vam.ac.uk/media/thira/collection_images/"+show[i].fields.primary_image_id.substring(0,6)+"/" +show[i].fields.primary_image_id +"_jpg_s.jpg\" img></div></div>";
                
                }else{htmlToInject += "</div>"}
          }

            
          document.getElementById("result").innerHTML = htmlToInject;
    
          });}  

  
