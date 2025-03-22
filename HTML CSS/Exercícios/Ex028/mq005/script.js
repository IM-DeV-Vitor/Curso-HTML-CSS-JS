function click_menu(){
    var menu = document.getElementById("items")
    if (menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}

function mudarTamanho() {
    var menu = document.getElementById("items")
    if (window.innerWidth <= 768) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}