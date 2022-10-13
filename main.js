let images = document.querySelectorAll(".img-1 img");
let printt = document.querySelector(".print");
let btn = document.getElementById("but");
let bbtt = document.querySelectorAll(".gbgb");
let uu =document.getElementById("uu");
let uuu =document.getElementById("uuu");
let uuuu =document.getElementById("uuuu");
let prrice=0;
let pricaa = document.getElementsByClassName("priceeee");

function iimmgg() {
printt.style.display="block";
printt.innerHTML += uu.textContent + "...";
btn.style.display="block";
prrice += parseInt(uu.getAttribute("price"))
}

function iimmggg() {
    printt.style.display="block";
    printt.innerHTML += uuu.textContent + "...";
btn.style.display="block";
prrice += parseInt(uuu.getAttribute("price"))

    }
    
    function iimmgggg() {
        printt.style.display="block";
        printt.innerHTML += uuuu.textContent + "...";
btn.style.display="block";
prrice += parseInt(uuuu.getAttribute("price"))

        }
        

        btn.onclick = function() {
            printt.innerHTML=prrice + " ";
        }