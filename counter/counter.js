//set initial count

let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const option =  e.currentTarget.classList;
        if (option.contains("increase")) {
            count++;
        }
        else if (option.contains("reset")) {
            count = 0;
        }
        else {
            count--;
        }

        value.textContent = count;
    });
});