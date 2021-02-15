const pizzaFactory = (name, url, description, quantity, price) => {
    let getName = name;
    let getUrl = url;
    let getDescription = description;
    let getQuantity = quantity;
    let getPrice = price;
    return {name, url, description, quantity, price};
  };
const menuPage = (function() {
    const pizzaMenu = {
    0: pizzaFactory('Digiorno Bacon & Cheese Stuffed', 'images/Digiornao-bacon-stuffed.jpeg', 'Traditional american pizza with some extra American style! What is better than Bacon, Cheese STUFFED. 2 1/2 FT of Cheese Stuffed. Did I mention Stuffed?', '', '$8.99'),
    1: pizzaFactory('Bellatoria Garlic Chicken Alfredo', 'images/Bellatoria-alfredo.jpg', 'Bellatoria Ultra Thin Crust Garlic Chicken Alfredo Pizza. Crispy pizza topped with mozzarella, asiago cheese, creamy garlic alfredo sauce, white meat chicken & Italian spices.', '', '$9.99'),
    2: pizzaFactory('Red Baron Four Cheese', 'images/RedBaron-four-cheese.jpg', 'Our four-cheese pizza is a unique blend of real, premium cheeses atop our perfect, classic golden-brown crust that’s not too thick and not too thin. Because great cheese demands nothing less than the perfect satisfying crunch of our classic crust.', '', '$9.99'),
    3: pizzaFactory('Tony\s Supreme', 'images/Tonys-supreme.jpg', 'Pizzeria Style Supreme Pizza features the meat and veggies you love in every bite. Enjoy sausage, pepperoni, red and green peppers and more when you choose this great variety.', '', '$7.99'),
    4: pizzaFactory('Freschetta Pepperoni Glutten Free', 'images/Freschetta-gluten-free.jpg', 'You won’t notice it\s gluten free unless you look at the box. We will show you the box if you ask.', '', '$7.99'),
    5: pizzaFactory('Totino\s Pizza Rolls', 'images/Totinos-pizza-rolls.jpg', 'a dish of Italian origin. Open pie made of thin bread dough spread with a spiced mixture of e.g. tomato sauce and cheese', '20ct', '$5.99'),
    6: pizzaFactory('Totino\s Party Pizza', 'images/Totinos-party-pizza.png', 'A unique crust that is flakier and crispier than baked crusts. Frozen pizza contains peporoni bits, cheese & totino\s special sauce.', '','$6.99'),
    7: pizzaFactory('HotPockets Ham & Cheddar', 'images/Hotpocket-ham-and-cheddar.jpeg', 'Savory hickory ham. A hearty snack made with loads of premium meat and cheese that\s ready in minutes.', '2ct', '$5.99'),
};
    const menuTab = () => {
        const main = document.querySelector('main');
        main.className = 'menu';
        let box = document.createElement('ul');
        main.appendChild(box).className += 'menuBox';

        for (let i = 0; i < 8; i++) {
            box = document.querySelector('.menuBox');
            box.appendChild(document.createElement('li'));
            let selectLi = box.lastChild;
            selectLi.appendChild(document.createElement('p')).textContent = pizzaMenu[i].name;
            selectLi.appendChild(document.createElement('img')).src = pizzaMenu[i].url;
            selectLi.appendChild(document.createElement('p')).textContent = pizzaMenu[i].price;
            selectLi.appendChild(document.createElement('p')).textContent = pizzaMenu[i].quantity;
            selectLi.appendChild(document.createElement('p')).textContent = pizzaMenu[i].description;
        };
    };

    return {
        menuTab: menuTab,
    };
})();

export { menuPage };