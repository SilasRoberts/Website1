document.getElementById("wakeUpButton").addEventListener("click", function() {
    wakeUp();
});

function wakeUp() {
    var button = document.getElementById("wakeUpButton");
    var image = document.getElementById("image");
    var links = document.getElementById("links");
    var background = document.querySelector(".background");
    button.disabled = true;
    button.style.opacity = "0";
    image.style.transition = "opacity 2s";
    background.style.opacity = "1";
    image.style.opacity = "0"; setTimeout(function() { links.style.display = "block"; }, 2000);
}
