
var card_footer = document.getElementById("card_footer");
var headback = document.getElementById("headback");
var close = document.getElementById("close");
var sidebar = document.getElementById("sidebar");  
var opensidebar = document.getElementById("opensidebar");  

sidebar.onclick = function() {
   opensidebar.style.transition="1s";
   opensidebar.style.display="block";
}

close.onclick = function() {
   opensidebar.style.transition="1s";
   opensidebar.style.display="none";
} 
console.log(card_footer.offsetHeight);
document.getElementById("container_fluid").style.height=headback.offsetHeight + card_footer.offsetHeight/2 + "px";
var sect_one = document.getElementById("first-sec");
document.getElementById("second-sec").style.height=sect_one.offsetHeight + "px";
document.getElementById("fill_booking").style.height=booking.offsetHeight + "px";

