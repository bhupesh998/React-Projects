import { legacy_createStore as createStore} from 'redux'

const counterReducer = (state={counter:0, showCounter : true}, action)=>{
    // in the increment and decrement i don't need showCounter but we must return all state values 
    // when returning a new state because it will overwrite the existing state 
    if(action.type === 'increment'){
        // we can also do state.counter++ and return it , even though it works you should not be using it because you should never mutate the existing state
        // instead overwrite it by returning a brand new state object
        return {
            counter : state.counter + 1,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'increase'){
        return {
            counter : state.counter + action.amount,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'decrement'){
        return {
            counter : state.counter -1,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            counter : state.counter ,
            showCounter : !state.showCounter
        }
    }

    return state
}

const store = createStore(counterReducer)


export default store;