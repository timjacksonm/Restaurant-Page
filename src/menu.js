const pizzaFactory = (name, url, description, quantity, price) => {
    let getName = name;
    let getUrl = url;
    let getDescription = description;
    let getQuantity = quantity;
    let getPrice = price;
    return {name, url, description, quantity, price};
  };
const menuPage = (function() {
    const pizzaRolls = pizzaFactory('Totino\s Pizza Rolls', '/Resturant-Page/src/images/Totinos.jpg', 'a dish of Italian origin. Open pie made of thin bread dough spread with a spiced mixture of e.g. tomato sauce and cheese', '20ct', '$5.99');

    const menuTab = () => {
        const main = document.querySelector('main')
        main.className = 'menu';
        let box = document.createElement('ul');
        main.appendChild(box).className += 'menuBox';
        box = document.querySelector('.menuBox');

        box.appendChild(document.createElement('li'))
        let box1 = box.querySelector('li');
        box1.appendChild(document.createElement('p')).textContent = pizzaRolls.name;
        box1.appendChild(document.createElement('img')).src = pizzaRolls.url;
        box1.appendChild(document.createElement('p')).textContent = pizzaRolls.price;
        box1.appendChild(document.createElement('p')).textContent = pizzaRolls.quantity;
        box1.appendChild(document.createElement('p')).textContent = pizzaRolls.description;

    }

    return {
        menuTab: menuTab,
    }
})();

export { menuPage };