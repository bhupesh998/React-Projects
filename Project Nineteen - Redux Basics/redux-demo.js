
const redux = require('redux')

// its a stanadard JS function and will be called by redux library, it will then always receive two inputs
// old or existing state and action that was dispatched, then this function must return some output, it must always return a new state object
// reducer function should be a pure function , same input should produce same output
const counterReducer = (state= {counter:0}, action)=>{
    if(action.type == 'increment'){
        return {
            counter : state.counter +1
        }
    }
    
    if(action.type == 'decrement'){
        return {
            counter : state.counter -1
        }
    }
    
    return state
}

// this store needs to manage data and data it manages is in the end determined by the reducer function 
// because its the reducer function that will manage the new state snapshots, the reducer has to go of spitting out a new state snapshot
// whenever a action reaches it 

const store = redux.createStore(counterReducer)


const counterSubscriber = ()=>{
   const latestState =  store.getState()
   console.log(latestState);
   
}

// subsribe method expect a function which then redux will execute for us whenever the data in the store is changed 
store.subscribe(counterSubscriber)

//dispatch method accepts a action , action is a jS object with type property which acts as an identifier
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'decrement'
})