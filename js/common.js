
/* Navigation Open/Close Function */

var state = "closed";
	var menu = document.getElementById("menu");
	function Menu(){
	if(state == "closed"){
		menu.style.left = "0";
		state = "opened";
	}else{
		menu.style.left = "-200px";
		state = "closed";
	}
}