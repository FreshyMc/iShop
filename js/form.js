/* Residence Type Function */
function ResidenceType(){
	var input = document.getElementById("Flat");
	if(input.checked == false){
		document.getElementsByName("residence-entrance")[0].disabled = true;
		document.getElementsByName("residence-floor")[0].disabled = true;
		document.getElementsByName("residence-suite")[0].disabled = true;
	}else{
		document.getElementsByName("residence-entrance")[0].disabled = false;
		document.getElementsByName("residence-floor")[0].disabled = false;
		document.getElementsByName("residence-suite")[0].disabled = false;
	}
}
			
/* Get Elements */
			
var container = document.getElementById("modal-box");
var modal_box_1 = document.getElementsByClassName("modal-content-1")[0];
var modal_box_2 = document.getElementsByClassName("modal-content-2")[0];
var list = document.getElementsByClassName("order-details")[0];
var input = document.getElementsByClassName("input");
var phrases = ["Име","Фамилия","Електронна поща", "Телефонен номер", "Количество от продукта", "Място на доставката", "Адрес на получателя", "Вход", "Етаж", "Апартамент"];
var select = document.querySelector(".product-order form select");	
	
/* Form Submit Input Check Function */
			
function formSubmit(){
	for(i=0; i<input.length; i++){
		if(input[i].value == undefined || input[i].value == 0 || select.value == "default"){
			container.style.zIndex = "3";
			container.style.opacity = "1";
			modal_box_2.style.opacity = "1";
			return false;
		}else{
			DeliveryDetails();
			container.style.zIndex = "3";
			container.style.opacity = "1";
			modal_box_1.style.opacity = "1";
			return false;
		}
	}
}
			
/* Add Elements to the details list function */
			
function DeliveryDetails(){
	if(document.getElementsByName("residence-entrance")[0].disabled == true){
		for(i=0; i<7; i++){
			list.innerHTML += "<li>" + phrases[i] + ": " + input[i].value + "</li>";
		}
		list.innerHTML += "<li>Жевее в Къща</li>";
	}else{
		for(i=0; i<10; i++){
			list.innerHTML += "<li>" + phrases[i] + ": " + input[i].value + "</li>";
		}
		list.innerHTML += "<li>Жевее в Блок</li>";
	}
}
			
/* Close Modal Box Function */
			
function CloseModal(modal_num){
	container.style.opacity = "0";
	container.style.zIndex = "-1";
	if(modal_num == 1){
		modal_box_1.style.opacity = "0";
		list.innerHTML = "";
	}else{
		modal_box_2.style.opacity = "0";
	}
}