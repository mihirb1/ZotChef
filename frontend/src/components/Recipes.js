import React, { useEffect, useState } from 'react' 
import { useSearchParams } from 'react-router-dom';
import CardItem from './CardItem';
import './Recipes.css';


function Recipes() {

  const [searchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const ingredients = searchParams.get('ingredients');
  
  console.log(ingredients)
  
  // used for APIs, fetching data when a component loads (here, recipes using spoonacular)
  useEffect(() => {
    const getData = async() => {
        const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=0ae5711f79474b5d93a902cbf46248d5&number=5`)
        const json = await res.json()
        console.log(json)
        setRecipes(json)
    }
    getData()

  }, [])
  
  return (
 
      <div className="cards">
        <h1 className="check-out">Check out the recipes below!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* map function efficiently goes through receipts and renders CardItem based on its attributes */}
            {/* receipt, and index are parameters, what is returned is after the => */}
              
                {recipes.map(recipe => (
                  <div className = "each__card">
                    <CardItem 
                      src = {recipe.image}
                      text = {recipe.title}
                      label = {`Likes: ${recipe.likes}`}
                  />
                </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
    ) 
    // Card

  
}

export default Recipes