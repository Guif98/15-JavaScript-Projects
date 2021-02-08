const reviews = [{
    id: 0,
    name: "Zooboomafoo",
    job: "TV ACTOR",
    img: "/home/gui/Downloads/zooboo.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim elit at tellus dapibus finibus. Praesent fermentum neque at sapien pretium, in sagittis mi pharetra. Proin vitae dui dapibus lacus convallis lobortis eget a mi. Vestibulum vel urna purus. Nunc ut ornare urna. Aenean non magna suscipit nisi tincidunt hendrerit. Donec nec porta mauris. Aenean sit amet sem dolor. Pellentesque auctor tincidunt consequat. "
},
{
    id: 1,
    name: "Naruto",
    job: "LEAF VILLAGE NINJA",
    img: "/home/gui/Downloads/naruto.jpeg",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim elit at tellus dapibus finibus. Praesent fermentum neque at sapien pretium, in sagittis mi pharetra. Proin vitae dui dapibus lacus convallis lobortis eget a mi. Vestibulum vel urna purus. Nunc ut ornare urna. Aenean non magna suscipit nisi tincidunt hendrerit. Donec nec porta mauris. Aenean sit amet sem dolor. Pellentesque auctor tincidunt consequat. "
},
{
    id: 2,
    name: "Goku",
    job: "LUTADOR",
    img: "/home/gui/Downloads/goku.jpeg",
    text: "Oi, eu sou o Goku!"
},
{
    id: 3,
    name: "Guilherme",
    job: "PROGRAMADOR",
    img: "/home/gui/Downloads/gatao.jpeg",
    text: "ASDASDASDASDASDAS"
}];

//Select Items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item
let currentItem = 0;

/*btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const option = e.currentTarget.classList;

        if (option.contains("prev-btn")) {
            console.log(currentItem)
            currentItem--;
        }
        else if (option.contains("next-btn")){
            console.log(currentItem)
            return currentItem++;
        }
        else {
            currentItem = Math.floor(Math.random() * reviews.length);
            console.log(currentItem)
        }
    });
}); */

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})


 //load inital item
        window.addEventListener("DOMContentLoaded", function () {
            showPerson(currentItem);
    });

    function showPerson(){
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

