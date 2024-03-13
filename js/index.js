document.getElementById("showWebsitesBtn").addEventListener("click", function() {
    document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
    document.querySelector(".websites").classList.add("fade-in"); 

    
    setTimeout(function() {
        document.querySelector(".image-container").style.display = "none";
    }, 1000); 
});
