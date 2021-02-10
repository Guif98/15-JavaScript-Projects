var questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    var btn = document.querySelector('.btn-question');
    btn.addEventListener('click', function(){
        questions.forEach(function(item) {
            var message = item.lastElementChild;
           if (message.classList.contains('d-none')) {
               message.classList.remove('d-none');               
               btn.innerText = "Close";
               btn.classList.remove('btn-outline-success');
               btn.classList.toggle('btn-outline-danger')
           }
           else {
                message.classList.toggle('d-none');               
                btn.innerText = "Show";
                btn.classList.remove('btn-outline-danger');
                btn.classList.toggle('btn-outline-success')
           }
        });
    });
})

/*btnMessage.addEventListener('click', function(){
    if (document.getElementById('message').style.display == "block") {
        
        
        
    } else {
        document.getElementById('message').style.display = "block"
        btnMessage.innerText = "Close"
        btnMessage.className = "btn btn-outline-danger float-end";
    }
    
});*/