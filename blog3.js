document.getElementById("prev_3").addEventListener("click", function() {
    window.location.href = "blog2.html"
});
document.getElementById("home").addEventListener("click", function() {
    window.location.href = "main.html"
});
document.getElementById("next_3").addEventListener("click", function() {
    alert("There are no more articles ahead, go to HOME instead?")
    window.location.href = "main.html"
});