const contactPage = (function() {
    
        function initMap() {
            // The location of Tuvalu
            const tuvalu = { lat: 7.1095, lng: 177.6493 };
            // The map, centered at Tuvalu
            const map = new google.maps.Map(document.querySelector('.mapBox'), {
              zoom: 4,
              center: tuvalu,
            });
            // The marker, positioned at Tuvalu
            const marker = new google.maps.Marker({
              position: tuvalu,
              map: map,
            });
          }
    const contactTab = () => {
        const main = document.querySelector('main');
        main.className = 'contact';

        main.appendChild(document.createElement('div')).className = 'contactBox';
        const selectBox = main.querySelector('.contactBox');

        selectBox.appendChild(document.createElement('h2')).textContent = 'About Us';
        selectBox.appendChild(document.createElement('p')).textContent = 'Founded in 2020. Escaping tourist in fear of covid-19 brought their collection of frozen store bought food to my island. What you fly in, is what you eat. Can\'t be picky around here.';
        selectBox.appendChild(document.createElement('div')).className = 'mapBox';
        selectBox.appendChild(document.createElement('p')).textContent = 'Location: Te Auala O Valaku, Vaiaku, Tuvalu';
        selectBox.appendChild(document.createElement('p')).textContent = 'Phone # 1-800-not-jail | 1-800-668-5245';
        selectBox.appendChild(document.createElement('p')).textContent = 'StoreBoughtPizzaTuvalu@gmail.com';

        // initMap(); to be implemented
    };

    return {
        contactTab: contactTab,
    }
})();

export { contactPage };