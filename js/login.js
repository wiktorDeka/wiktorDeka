const logbtn = document.querySelector("#log_btn");
const regbtn = document.querySelector("#reg_btn");
const logpanel = document.querySelector(".log_panel");
const regpanel = document.querySelector(".reg_panel");

const regbtn_in = document.querySelector("#reg_btn_in");
const logbtn_in = document.querySelector("#log_btn_in");

const powrot_l = document.querySelector(".powrot_l");
const powrot_r = document.querySelector(".powrot_r");

logbtn.addEventListener("click",() => {
    logpanel.style.transition = "transform 0.4s ease-in-out";
    logpanel.style.transform = "translateY(" + 300 + "vh)";
});

regbtn.addEventListener("click",() => {
    regpanel.style.transition = "transform 0.4s ease-in-out";
    regpanel.style.transform = "translateY(" + 300 + "vh)";
});

regbtn_in.addEventListener("click",() => {
    logpanel.style.transition = "transform 0.4s ease-in-out";
    logpanel.style.transform = "translateY(" + 0 + "vh)";
    regpanel.style.transition = "transform 0.8s ease-in-out";
    regpanel.style.transform = "translateY(" + 300 + "vh)";
});

logbtn_in.addEventListener("click",() => {
    regpanel.style.transition = "transform 0.4s ease-in-out";
    regpanel.style.transform = "translateY(" + 0 + "vh)";
    logpanel.style.transition = "transform 0.8s ease-in-out";
    logpanel.style.transform = "translateY(" + 300 + "vh)";
});

powrot_l.addEventListener("click",() => {
    logpanel.style.transition = "transform 0.8s ease-in-out";
    logpanel.style.transform = "translateY(" + 0 + "vh)";
});
powrot_r.addEventListener("click",() => {
    regpanel.style.transition = "transform 0.8s ease-in-out";
    regpanel.style.transform = "translateY(" + 0 + "vh)";
});