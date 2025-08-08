function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.body.classList.add("menu-open"); // 👈 Add class
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.body.classList.remove("menu-open"); // 👈 Remove class
}
