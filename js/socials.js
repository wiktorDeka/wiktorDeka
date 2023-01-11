const insta = document.querySelector("#instagram");
const fb = document.querySelector("#facebook");
const pin = document.querySelector("#pinterest");

insta.addEventListener("click", function(){
    location.href = "https://www.instagram.com";
});
fb.addEventListener("click", function(){
    location.href = "https://www.facebook.com";
});
pin.addEventListener("click", function(){
    location.href = "https://www.pinterest.com";
});