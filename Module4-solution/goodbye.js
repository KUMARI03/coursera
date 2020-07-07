(function(window)
{ 

var speakword="Good Bye";  
var byespeaker={
speak:function(name)
{
document.write(speakword+" "+name);
document.write("<br>");
}
};
window.byespeaker=byespeaker;
})(window);