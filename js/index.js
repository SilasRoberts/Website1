< !DOCTYPE html > < html lang = "en" > < head > < meta charset = "UTF-8" > < meta name = "viewport"
content = "width=device-width, initial-scale=1.0" > < title > Wake Up Website < /title> <link rel="stylesheet" href="styles.css"> </head > < body > < div class = "container" > < img id = "image"
src = "image.jpg"
alt = "Wake Up Image" > < button id = "wakeUpButton"
onclick = "wakeUp()" > Wake Up < /button> <div id="links"> <a href="#">Link 1</a > < a href = "#" > Link 2 < /a> <a href="#">Link 3</a > < /div> </div > < script src = "script.js" > < /script> </body > < /html>


html, body {
    margin: 0;padding: 0;height: 100 % ;
}.container {
    position: relative;height: 100 % ;
}
#image {
    width: 100 % ;height: 100 % ;object - fit: cover;
}
#wakeUpButton {
    position: absolute;top: 50 % ;left: 50 % ;transform: translate(-50 % , -50 % );padding: 10 px 20 px;background - color: grey;color: white;border: none;border - radius: 5 px;font - size: 16 px;
}
#links {
    display: none;
}
#links a {
    display: block;margin - bottom: 10 px;font - size: 18 px;
}

function wakeUp() {
    var button = document.getElementById("wakeUpButton");
    var image = document.getElementById("image");
    var links = document.getElementById("links");
    button.disabled = true;
    button.style.opacity = "0";
    image.style.transition = "opacity 2s"; image.style.opacity = "0"; setTimeout(function() { links.style.display = "block"; }, 2000);
    }
