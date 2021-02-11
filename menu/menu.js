const menu = [ 
    {
        id: 1,
        title: 'Buttermilk pancakes',
        category: 'Breakfast',
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
    },
    {
        id:4,
        title: 'Cheeseburger',
        category: 'Lunch',
        price: 8,
        img: 'images/cheeseburger.jpeg',
        desc: 'Cheeseburgers are so delicious to enjoy by the night, all alone or with friends'
    },
    {
        id:5,
        title: 'Beer Milkshake',
        category: 'Shake',
        price: 6,
        img: 'images/beershake.jpg',
        desc: 'One of the best things invented by mankind'
    },
    {
        id:6,
        title: 'Cookie Milkshake',
        category: 'Shake',
        price: 6,
        img: 'images/cookieshake.jpg',
        desc: 'One of the best things invented by mankind either'
    }
]

const sectionCenter = document.querySelector(".section-center");
const btnGroup = document.querySelector(".btn-group");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".navbar-toggler");

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();

    /*const categories = menu.map(function (item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        } 
        return values;
    })*/
});



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="menu-item w-50 p-4">
                <img class="shadow photo mx-auto" style="border: 4px solid rgb(156, 115, 0); width: 200px; height: 200px;"  src="${item.img}" alt="${item.title}">
                <div class="item-info">
                    <header class="mt-3">
                        <h4 class="title">${item.title}</h4>
                        <h5 class="price">$${item.price}</h4>  
                    </header>
                    <em class="desc">
                        ${item.desc}
                    </em>
                </div>
                </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            if(!values.includes(item.category)) {
                values.push(item.category)
            }
            return values;
        },
        ["All"]   
    );
    const categoryBtns = categories
    .map(function(category){
        return `<button type="button" class="btn filter-btn rounded m-2" data-id="${category}">${category}</button>`
    })
    .join("");

    btnGroup.innerHTML = categoryBtns;
    const filterBtns = btnGroup.querySelectorAll(".filter-btn");
    console.group(filterBtns);

    filterBtns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "All") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

openBtn.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('d-none');
});

closeBtn.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('d-none');
});
    


    



