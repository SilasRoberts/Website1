function wakeUp() {
    var button = document.getElementById("wakeUpButton");
    var image = document.getElementById("image");
    var links = document.getElementById("links");
    button.style.display = "none";
    image.style.transition = "opacity 2s";
    image.style.opacity = "0";
    setTimeout(function() {
        links.style.display = "block";
    }, 2000); // 2 seconds }
