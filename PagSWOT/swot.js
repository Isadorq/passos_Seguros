// document.getElementById("sidebarToggle").addEventListener("click", function() {
//     document.getElementById("sidebar").classList.add("open");
//     document.getElementById("closeIcon").style.display = "block";
// });

// document.getElementById("closeIcon").addEventListener("click", function() {
//     document.getElementById("sidebar").classList.remove("open");
//     this.style.display = "none";
// });

// Abre/fecha ao clicar no ícone do menu
document.getElementById("sidebarToggle").addEventListener("click", function(e) {
    e.stopPropagation(); // Impede que o clique "vaze"
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
});

// Fecha ao clicar na sidebar (exceto nos links)
document.getElementById("sidebar").addEventListener("click", function(e) {
    if (e.target === this || e.target.tagName === 'LI') {
        this.classList.remove("open");
    }
});

// Fecha ao clicar em qualquer lugar fora
document.body.addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    }
});