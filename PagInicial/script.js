document.getElementById("sidebarToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("closeIcon").style.display = "block";
});

document.getElementById("closeIcon").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
    this.style.display = "none";
});