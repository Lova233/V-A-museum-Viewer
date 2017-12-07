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
               
               var i;
          
          for (i = 0 ; i < show.length ;i++){
              console.log(i);
              htmlToInject = htmlToInject + "<div class= 'item'>";
              
              
              
              if (show[i].fields.primary_image_id != null) {
                  htmlToInject += "<div class='align1'>"+"<a href = \"https://media.vam.ac.uk/media/thira/collection_images/"+show[i].fields.primary_image_id.substring(0,6)+"/" +show[i].fields.primary_image_id +".jpg\">"+"<img id='imgrsl' src = \"https://media.vam.ac.uk/media/thira/collection_images/"+show[i].fields.primary_image_id.substring(0,6)+"/" +show[i].fields.primary_image_id +".jpg\" img>"+"</a></div><h5>"+show[i].fields.title+"</h5><h6>"+show[i].fields.artist+"</h6><h6>"+show[i].fields.date_text+"</h6></div></div>";
                
                }else{htmlToInject += "</div>"}
          }

            
          document.getElementById("result").innerHTML = htmlToInject;
    
          });}  

      


  
