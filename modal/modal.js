var openModal = document.getElementById('open-modal');
var  myModal = document.getElementById('myModal');
var closeModal = document.getElementById('close-modal');
var main = document.getElementById('main');

openModal.addEventListener('click', function(){
    myModal.style.display = 'block';
    myModal.style.opacity = "1";
    myModal.style.position = "absolute";
    myModal.style.left = '25%';
    myModal.style.top = '20%';
    myModal.style.width = '700px';
    myModal.style.height = '200px';
    main.style.opacity = "0.5";
    document.getElementsByTagName('body').item('body').style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    main.tabIndex = "0";
    myModal.tabIndex= "1";
});

closeModal.addEventListener('click', function() {
    myModal.style.display = 'none';
    main.style.opacity = "1";
    myModal.style.opacity = "0.5";

})