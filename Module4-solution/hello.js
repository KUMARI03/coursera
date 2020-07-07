(function(window)
{ 
var speakword="Hello";
var hellospeaker=
{ speak:function(name){
console.log(speakword+" "+name);

}
};
window.hellospeaker=hellospeaker;
})(window);
