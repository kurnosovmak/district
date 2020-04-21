$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});
$("#top-box .container-form .btn").click(function(){
  $(".container").addClass("active");
});

document.getElementById("user").onclick = function user() { 
	document.getElementById("background").setAttribute("style", "display: block"); 
	document.getElementById("cont").setAttribute("style", "display: block"); 
}

document.getElementById("background").onclick = function close() {
	document.getElementById("background").setAttribute("style", "display: none"); 
	document.getElementById("cont").setAttribute("style", "display: none"); 
}
