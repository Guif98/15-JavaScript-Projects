const menu = [ 
    {
        id: 1,
        title: 'Buttermilk pancakes',
        category: 'breakfast',
        price: 15.00,
        img: "images/pancake.png",
        desc: 'Pancakes are the hero of the breakfast table, and their very taste can even be described as “deeply breakfasty”: eggy, salty, just this side of sweet. A little indulgent and yet still somehow appropriate first thing in the morning, those fluffy stacks with crisped edges, dripping with maple syrup, are everything you want, exactly when you want them.'
    },
    {
        id:2,
        title: 'Fried steak with french fries',
        category: 'Lunch',
        price: 12.00,
        img: "images/friedSteak.jpg",
        desc: 'Fried Steak is the best thing ever, even more with french fries.'
    },
    {
        id:3,
        title: 'Cheesecake',
        category: 'Breakfast',
        price: 4,
        img: 'images/cheesecake.jpg',
        desc: 'Cheesecakes are the best thing to be eaten by the morning'
    }
]

const sectionCenter = document.querySelector(".section-center");
const menuBtn = document.querySelectorAll(".menu-btn");
console.log(menuBtn);


window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function (item){
        return `<article class="menu-item mb-5">
                <img class="w-50 shadow photo" style="border: 4px solid rgb(156, 115, 0); width: 50%"  src="${item.img}" alt="${item.title}">
                <div class="item-info">
                    <header class="mt-3">
                        <h4 class="title">${item.title}</h4>
                        <h4 class="price">Price: $${item.price}</h4>  
                    </header>
                    <p class="desc">
                        ${item.desc}
                    </p>
                </div>
                </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
});