import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { legacy_createStore as createStore} from 'redux'

const initialState = {counter:0, showCounter : true}

//every method in reducer will automatically receive the state, this method will be called for you by redux and they will receive the current state
// the methods defined will automatically be called depending on which action was triggered so we don't need to write if checks and in the methods we are allowed to mutate the state
// with redux toolkit , we cannot manipulate the existing state because it uses another package internally called immer which will detect code like this and will automatically clone the existing state and create a new state object and keep
// all the state we are not editing override the state which we are editing in a immutable way
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {

        // to dispatch action for this methods createSlice automatically creates a unique identifier for our reducer methods
        // counterSlice.action.increment() - it returnsn an action object for us and so on for other methods
        // therefore this method are called action creator and they will create action objects for us where this object already have a type property with a unique identifier per action



        increment(state){
            state.counter++;
        },
        decrement(state){
state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
           state.showCounter= !state.showCounter
        }

    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {isAuthenticated: false},
    reducers: {

        login(state){
            state.isAuthenticated = true
        },

        logout(state){
            state.isAuthenticated = false
        }
    }
})


//const store = createStore(counterSlice.reducer)
// in big apps we have multiple reducers and we can only pass one slice to create store 
const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
        auth : authSlice.reducer
    } // in case of multiple reducer we can give it a objects with any keys and value will be reducer function 
}) // it also creates a store and makes merging reducers easy thereafter

export default store;
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions


