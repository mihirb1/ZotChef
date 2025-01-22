import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

//makes card by using CardItem class, with passed in parameters
//2 separate UL makes a new row
function Cards() {
  return (
    
    <div className = 'cards'>
      <h1 className = "margin-bottom">Check out these Delicious Recipes!</h1>
      <div className = "cards__container">
          <div className="cards__wrapper">
            <div className = "add-margin">
              <ul className="cards__items">
                <CardItem 
                  src = "images/pancakes.jpg"
                  text = "A warm stack of cinammon-sugar pancakes topped with fresh fruit"
                  label = 'Comfort breakfast'
                  path = '/services'
                />
                <CardItem 
                  src = "images/lamb.jpg"
                  text = "Lamb chops fresh off of the grill on top of a mirad of vegetables"
                  label = 'Fine dining'
                  path = '/services'
                />
              </ul>
            </div>
            <div className = "add-margin">
              <ul className="cards__items">
                <CardItem 
                  src = "images/pho.jpg"
                  text = "Piping hot bowl of pho with eggs and mixed seafood"
                  label = 'Fragrant lunch'
                  path = '/services'
                />
                <CardItem 
                  src = "images/salmon.jpg"
                  text = "Sliced salmon sashimi with a side of wasabi"
                  label = 'Refreshing snacks'
                  path = '/products'
                />
                <CardItem 
                  src = "images/dessert.jpg"
                  text = "Freshly made berry fruit tarts with a granola base"
                  label = 'Sweet treat'
                  path = '/sign-up'
                />
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cards;