var btnMessage = document.getElementById('btnMessage');


btnMessage.addEventListener('click', function(){
    if (document.getElementById('message').style.display == "block") {
        document.getElementById('message').style.display = "none";
        btnMessage.innerText = "Show";
        btnMessage.className = "btn btn-outline-success float-end";
        
    } else {
        document.getElementById('message').style.display = "block"
        btnMessage.innerText = "Close"
        btnMessage.className = "btn btn-outline-danger float-end";
    }
    
});