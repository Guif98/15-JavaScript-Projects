var people = ['Abraão', 'Anderson', 'Cássio', 'Jonas', 'Lucas', 'Cantu', 'Luciana', 'Belíssimo', 'Marcelo', 'Rafael', 'Vitor', 'Lorezo'];
var shuffled = people.sort(() => 0.5 - Math.random());

document.write("Lista de pessoas: <br/>" + shuffled + "<br/><br/>");

/*people.forEach(function(pair) {
    var shuffled = people.sort(() => 0.5 - Math.random());
        if (!shuffled.length < 2) {
        var selected = shuffled.slice(0, 2);
    }
});
*/


var mainSection = document.querySelector('.main-section');
console.log(mainSection)

window.addEventListener("DOMContentLoaded", function() {
    displayPeople();
});

function createPairs(arr, size) {
    var pairArray = [];
    for(var i = 0; i < arr.length ; i = i+2 )
    {
        pairArray.push(arr.slice(i, i + 2)); 
        
    }

    console.log(pairArray)
}


console.log(createPairs(shuffled, 2))


function createDays(arr) {
    var days = [];
    var date = new Date();
    for (let i = 0; i < arr.length; i++) {
        days.push(date.setDate(date.getDate() + 7));
   }
   console.log(days)

   days.forEach(function(item){
       var d = new Date(item);
       var options = {
           day: 'numeric', month: 'numeric', year: 'numeric',
       };

        document.write("<br/>" + d.toLocaleDateString('pt-br', options) + "<br/>")
   })
}

console.log(createDays(shuffled))