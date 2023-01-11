    const karuzelaSlider = document.querySelector(".karuzela_slider");
    const karuzelaImage = document.querySelectorAll(".karuzela_slider img");
    
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    
    let licznik = 1;
    const size = karuzelaImage[0].clientWidth;
    
    karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
    
    nextBtn.addEventListener("click",function(){
        if(licznik >= karuzelaImage.length-1) return;
        karuzelaSlider.style.transition = "transform 0.4s ease-in-out";
        licznik++;
        karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
    });
    
    prevBtn.addEventListener("click",function(){
        if(licznik <=0 ) return;
        karuzelaSlider.style.transition = "transform 0.4s ease-in-out";
        licznik--;
        karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
    });
    
    karuzelaSlider.addEventListener("transitionend",function(){
        if(karuzelaImage[licznik].id === "lastClone"){
            karuzelaSlider.style.transition = "none";
            licznik = karuzelaImage.length - 2;
            karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
        }
        if(karuzelaImage[licznik].id === "firstClone"){
            karuzelaSlider.style.transition = "none";
            licznik = karuzelaImage.length - licznik;
            karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
        }
    });

        setInterval(function(){
            if(licznik >= karuzelaImage.length){
                karuzelaSlider.style.transition = "transform 0.6s ease-in-out";
                karuzelaSlider.style.transform = "translateX(" + (size * licznik*4) + "px)";
            };
            karuzelaSlider.style.transition = "transform 0.6s ease-in-out";
            licznik++;
            karuzelaSlider.style.transform = "translateX(" + (-size * licznik) + "px)";
        }, 4000);