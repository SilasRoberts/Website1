document.getElementById("wakeUpButton").addEventListener("click", function() {
    wakeUp();
});

function wakeUp() {
    var button = document.getElementById("wakeUpButton");
    var image = document.getElementById("image");
    var links = document.getElementById("links");
    button.disabled = true;
    button.style.opacity = "0";
    image.style.transition = "opacity 2s";
    image.style.opacity = "0";
    image.style.backgroundColor = "black";
    setTimeout(function() { links.style.display = "block"; }, 2000); }
