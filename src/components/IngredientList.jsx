// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return <ul>
        {props.availableIngredients.map((ing,i)=>
            <li key={i} style={{color:ing.color}} > {ing.name}</li>
        )
        
        
        }

    </ul>;
  };
  
  export default IngredientList;
  