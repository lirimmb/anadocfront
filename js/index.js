function toggleMenu() {
    var x = document.getElementById("test");


     if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("main-id").style.width = "100%";

}