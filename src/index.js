const homePage = (function() { 
    const content = document.querySelector('#content');
    let header = document.createElement('header');
    let main = document.createElement('main');
    let footer = document.createElement('footer');

    content.appendChild(header).className += 'header';
    header = document.querySelector('header');
    header.appendChild(document.createElement('ul'));
    header.appendChild(document.createElement('li')).textContent = 'Home';
    header.appendChild(document.createElement('li')).textContent = 'Menu';
    header.appendChild(document.createElement('li')).textContent = 'Contact';

    content.appendChild(main).className += 'main';
    main = document.querySelector('main');
    main.appendChild(document.createElement('img')).src = "/Resturant-Page/src/images/logo8.svg";
    main.appendChild(document.createElement('h1')).textContent = 'Store Bought Pizza';
    main.appendChild(document.createElement('h4')).textContent = 'You heard that right.';

    content.appendChild(footer).className += 'footer';
    footer = document.querySelector('footer');
    footer.appendChild(document.createElement('p')).textContent = 'Created by Tim Jackson';
    footer.appendChild(document.createElement('div')).className += 'logo';
    footer.querySelector('.logo').appendChild(document.createElement('a')).href = 'https://github.com/timjacksonm';
    footer.querySelector('.logo').querySelector('a').appendChild(document.createElement('img')).src += '/Resturant-Page/src/images/GitHub-Mark-Light-32px.png'
})();