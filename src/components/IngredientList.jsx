// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return <ul>
        {props.availableIngredients.map((ing,i)=>
            <li key={i} id={i} style={{backgroundColor:ing.color}} onClick={props.addToBurger}> {ing.name}</li>
        )}
    </ul>;
  };
  
  export default IngredientList;
  