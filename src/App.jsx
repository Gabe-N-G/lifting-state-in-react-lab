// src/App.jsx
import { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];


// There should be two child components in src/App.jsx. One will be responsible for rendering elements in availableIngredients, and the other for elements in stack.

// Your application will require two functions in src/App.jsx. One called addToBurger and another called removeFromBurger. Think carefully about what arguments might need to be passed in to each function.

// Notice the properties of each object held in availableIngredients. The color property can be applied to elements with inline styling, as shown in the example below:

const App = () => {

  const [available, addAvailable] = useState(availableIngredients)
  const [stack,addStack] = useState([])

  const addToBurger = (e) => {
    let burg = availableIngredients[e.target.id]
    // console.log(burg)
    addStack([...stack, burg])
  }

  const removeFromBurger = (e) => {
    console.log(typeof e.target.id)
    console.log(stack[e.target.id])
    // addStack([...stack.slice(0,[e.target.id]), ...stack.slice([e.target.id + 1])])
    //doesn't work, why?
    addStack(stack.filter((burg, i) =>  i !== parseInt(e.target.id))) // want this to work but how?
    //next time user parseInt() or Number()
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList availableIngredients={available} addToBurger={addToBurger}/>  // add here! 
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
