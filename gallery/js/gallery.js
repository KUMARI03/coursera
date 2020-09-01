function upDate(pic){
   document.getElementById('image').style.backgroundImage="url("+pic.src+")";
   document.getElementById('image').innerHTML=pic.alt;
    }

    function unDo(){
        document.getElementById('image').style.backgroundImage="url(image)";
        document.getElementById('image').innerHTML="Hover over an image below to display here.";
    }