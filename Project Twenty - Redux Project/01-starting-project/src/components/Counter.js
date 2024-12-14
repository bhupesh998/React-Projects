import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/index';


// we can use - useStore also in place of useSelector , but useSelector is more convinent to use because that allows us
// to automatically manage a part of our state managed by the store
const Counter = () => {

  // dispatch is a function we can call , to dispatch an action against our redux store 
  const dispatch = useDispatch()


  const incrementHandler = ()=>{
    dispatch(counterAction.increment())
  }

  const increaseHandler = ()=>{
    dispatch(counterAction.increase(10)) // when you pass like this reduxtoolkit will create the state object like { type: 'some unique id', payload: 10} so while handling also we need to use action.payload
  }

  const decrementHandler = ()=>{
    dispatch(counterAction.decrement())
  }

  // when you use , useSelector , react-redux will automatically setup a subsription to the redux store for this component
  // so component will be updated automatically when the data changes in the redux store 
  // in case the component is unmounted from the dom then react-redux will automatically clear the subsription also 
  const counter = useSelector((state)=>state.counter.counter)
  const showCounter = useSelector((state)=>state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
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


