(function(window)
{ 
var speakword="hello";
var hellospeaker=
{ speak:function(name){
document.write(speakword+" "+name);
document.write("<br>");
}
};
window.hellospeaker=hellospeaker;
})(window);