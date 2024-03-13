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
    background.style.opacity = "1";
    image.style.transition = "opacity 2s"; image.style.opacity = "0"; image.addEventListener("transitionend", function() { links.style.display = "link a"; }, { once: true }); }
