var nav = document.getElementById("menuList");

function menu(){
    if (nav.style.top === "-100%") {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100%";
    }
}