const React = require('react');

class Search extends React.Component {
    render() {
        return(
            <a class="search-item" href="/app/items/MLA672160044">
              <div class="search-item__picture">
                <img src="http://mla-s1-p.mlstatic.com/736895-MLA25705832447_062017-I.jpg" alt="Celular Libre Apple Iphone 6 Gris 32gb">
              </div>
              <div class="search-item__description">
                <span class="search-item__price">$ 14999</span>
                <i class="search-item__freeshipment"></i>
                <p class="search-item__title">Celular Libre Apple Iphone 6 Gris 32gb</p>
              </div>
              <div class="search-item__location">Capital Federal</div>
            </a>
        );
    }
}