//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Prayer",
			mp3:"assets/audio/Telugu/2000_Prayer.mp3",
			
		},
		{
			title:"NaaKalavaramulanni",
			mp3:"assets/audio/Telugu/2001_NaaKalavaramulanni.mp3",
		},
		{
			title:"Nee Krupa",
			mp3:"assets/audio/Telugu/2002_Nee Krupa.mp3",
		},
		{
			title:"Yesu Rakthamu",
			mp3:"assets/audio/Telugu/2003_Yesu Rakthamu.mp3",
		},
		{
			title:"Nee Lone",
			mp3:"assets/audio/Telugu/2004_Nee Lone.mp3",
		},
		{
			title:"Ragam Thalam",
			free:true,
			mp3:"assets/audio/Telugu/2005_Ragam Thalam.mp3",
		},
		{
			title:"Nijamuga Nammadhaginadeva",
			mp3:"assets/audio/Telugu/2006_Nijamuga Nammadhaginadeva.mp3",
		},
		{
			title:"Naa Doshamu",
			mp3:"assets/audio/Telugu/2007_Naa Doshamu.mp3",
		},
		{
			title:"Deva Enthaina",
			mp3:"assets/audio/Telugu/2008_Deva Enthaina.mp3",
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
function showHide17() {
    var x = document.getElementById("myDIV17");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
