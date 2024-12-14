import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';

// we can use - useStore also in place of useSelector , but useSelector is more convinent to use because that allows us
// to automatically manage a part of our state managed by the store
const Counter = () => {

  // dispatch is a function we can call , to dispatch an action against our redux store 
  const dispatch = useDispatch()


  const incrementHandler = ()=>{
    dispatch({
      "type": "increment"
    })
  }

  const increaseHandler = ()=>{
    dispatch({
      "type": "increase",
      "amount": 5
    })
  }

  const decrementHandler = ()=>{
    dispatch({
      "type": "decrement"
    })
  }

  // when you use , useSelector , react-redux will automatically setup a subsription to the redux store for this component
  // so component will be updated automatically when the data changes in the redux store 
  // in case the component is unmounted from the dom then react-redux will automatically clear the subsription also 
  const counter = useSelector((state)=>state.counter)
  const showCounter = useSelector((state)=>state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({
      "type": "toggle"
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter} </div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

/*

class CounterComp extends Component{


   incrementHandler(){
    this.props.increment()
  }

  decrementHandler(){
   this.props.decrement()
  }

  toggleCounterHandler(){}

  
  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>class counter {this.props.counter} </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
  
}




//export default Counter;
// we can use connect with functional component as well but using hooks with them is easy
// for class based component to access the store we use connect , its a higher order function 
// we call connect when connect is execute it will return a new function as value which we then execute again and then we pass our component to returned function as argument

// connect also takes two arguments
// 1st - its a function that maps redux state to props which will be received in that component
// 2nd - its a function that maps dispacth function  to props which will be received in that component


// while using connect also react-redux will manage the subscription 
const mapStateToProps =(state)=>{
  // it receives the redux state and returns an object where the keys will  be available as props in receiving component
  // i.e in counterComp component and then the value of those keys i.e then the logic for drilling into those redux state
return {
  counter : state.counter
}
}

const mapDispatchToProps=(dispatch)=>{
  // now the idea is to dispatch function in props so in our component we have certain props that we can execute as functions which will then executed dispatch and action to redux store

  return {
    increment: ()=>dispatch({"type": "increment"}),
    decrement: ()=>dispatch({"type": "decrement"})
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(CounterComp)

*/
