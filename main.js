let btnnn=document.querySelectorAll(".btnnn");
let printt =document.getElementById("pp");
let but = document.getElementById("but");
let price = 0;
btnnn.forEach(function(item){
item.onclick = function() {
    printt.innerHTML += item.title + "...";
    printt.style.display="block";
    but.style.display="block";
    price += parseInt(item.getAttribute("pricee"));
}
})
but.onclick = function () {
    printt.innerHTML=price + " ";
}