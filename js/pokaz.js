function pokaz() {
    var x = document.getElementById("haslo");
    var y = document.getElementById("pokaz");

    y.addEventListener("click", ()=>{
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
  }