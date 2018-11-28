//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_20",
		cssSelectorAncestor: "#jp_container_20"
	}, [
		{
			title:"Prayer",
			mp3:"assets/audio/Telugu/20/2000.mp3",
			
		},
		{
			title:"NaaKalavaramulanni",
			mp3:"assets/audio/Telugu/20/2001.mp3",
		},
		{
			title:"Nee Krupa",
			mp3:"assets/audio/Telugu/20/2002.mp3",
		},
		{
			title:"Yesu Rakthamu",
			mp3:"assets/audio/Telugu/20/2003.mp3",
		},
		{
			title:"Nee Lone",
			mp3:"assets/audio/Telugu/20/2004.mp3",
		},
		{
			title:"Ragam Thalam",
						free:true,
			mp3:"assets/audio/Telugu/20/2005.mp3",
		},
		{
			title:"Nijamuga Nammadhaginadeva",
			mp3:"assets/audio/Telugu/20/2006.mp3",
		},
		{
			title:"Naa Doshamu",
			mp3:"assets/audio/Telugu/20/2007.mp3",
		},
		{
			title:"Deva Enthaina",
			mp3:"assets/audio/Telugu/20/2008.mp3",
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
function showHide20() {
    var x = document.getElementById("myDI20");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
