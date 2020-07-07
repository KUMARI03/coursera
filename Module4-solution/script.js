(function() {

var names=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
document.write("<h1>Module 4 assignment<h1>");
for(var i=0;i<names.length;i++)
{
var firstletter=(names[i].charAt(0)).toLowerCase();
if(firstletter!='j')
hellospeaker.speak(names[i]);
else
byespeaker.speak(names[i]);
}

})();