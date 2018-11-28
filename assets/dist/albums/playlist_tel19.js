//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_19",
		cssSelectorAncestor: "#jp_container_19"
	}, [
		{
			title:"Prayer",
			mp3:"assets/audio/Telugu/v19/1900.mp3",
			
		},
		{
			title:"NA gudaramu",
			mp3:"assets/audio/Telugu/v19/1901.mp3",
		},
		{
			title:"2",
			mp3:"assets/audio/Telugu/v19/1902.mp3",
		},
		{
			title:"3",
			mp3:"assets/audio/Telugu/v19/1903.mp3",
		},
		{
			title:"4",
			mp3:"assets/audio/Telugu/v19/1904.mp3",
		},
		{
			title:"5",
						free:true,
			mp3:"assets/audio/Telugu/v19/1905.mp3",
		},
		{
			title:"6",
			mp3:"assets/audio/Telugu/v19/1906.mp3",
		},
		{
			title:"7",
			mp3:"assets/audio/Telugu/v19/1907.mp3",
		},
		{
			title:"8",
			mp3:"assets/audio/Telugu/v19/1908.mp3",
		},
	], {
		swfPath: "assets/dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});
function showHide19() {
    var x = document.getElementById("myDIV19");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
