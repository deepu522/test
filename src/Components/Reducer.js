import React, {useReducer} from 'react'

const reducer = (state , action) =>{
    switch(action.type){
    case "INCREMENT": 
        return {count : state.count+1 , showText : state.showText};
    
    case "toggleShowText":
        return {count : state.count , showText : !state.showText};
    
    default : return state;
    }
};

const reducer1 = (state1, action) =>{
    switch(action.type){
   
    case "toggleShowText":
        return {count1 : state1.count1 , showText : !state1.showText};

    case "DOUBLE":
        return {count1 : state1.count1+2 , showText : state1.showText};
    
    default : return state1;
    }
};

const Reducer = () => {
const [state, dispatch] = useReducer(reducer , {count:0 , showText : true});
const [state1, dispatch1] = useReducer(reducer1 , {count1:0 , showText : true});
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() =>{
        dispatch({type : "INCREMENT"});
        dispatch({type : "toggleShowText"});
        dispatch1({type : "DOUBLE"});
        dispatch1({type : "toggleShowText"});
      }}> Click here</button>
      <h1>{state1.count1}</h1>
      
      {state.showText && <p> This is the text beign displayed</p>}
    </div>
  )
}

export default Reducer