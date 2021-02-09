var questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    var btn = document.querySelector('.btn-question');
    btn.addEventListener('click', function(){
        questions.forEach(function(item) {
            if(item !== question) {
                document.querySelector('.message').classList.remove('d-none');
                btn.innerText = "Close";
                btn.className = "btn-question btn btn-outline-danger float-end";
            }

            document.querySelector('.message').classList.toggle('d-none');
        });
    })
})

/*btnMessage.addEventListener('click', function(){
    if (document.getElementById('message').style.display == "block") {
        
        
        
    } else {
        document.getElementById('message').style.display = "block"
        btnMessage.innerText = "Close"
        btnMessage.className = "btn btn-outline-danger float-end";
    }
    
});*/