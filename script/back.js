


$(document).ready(function (){

 switch(Math.floor(Math.round(Math.random()* 3 + 1))){
    case 1: $('main').css("background-image","Url('assets/b1.jpg')");
             break;
    case 2: $('main').css("background-image","url('assets/b2.jpg')");
             break;
    case 3: $('main').css("background-image","url('assets/b3.jpg')");
             break;
    case 4: $('main').css("background-image","url('assets/b4.jpg')");
             break;
    default: $('main').css("background-image","Url('assets/b1.jpg')");
             break; 
}
});