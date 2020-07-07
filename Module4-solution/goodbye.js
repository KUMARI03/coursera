(function(window)
{ 

var speakword="Good Bye";  
var byespeaker={
speak:function(name)
{
console.log(speakword+" "+name);

}
};
window.byespeaker=byespeaker;
})(window);
