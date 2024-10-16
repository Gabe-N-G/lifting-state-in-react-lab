// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return <ul>
    {props.stack.map((ing,i)=>
        <li id={i} key={i} style={{backgroundColor:ing.color}} onClick={props.removeFromBurger}> {ing.name}</li>
    )}
</ul>;  };
  
  export default BurgerStack;
  