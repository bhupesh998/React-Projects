import { createSlice }  from "@reduxjs/toolkit"
import { uiAction } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        items: [],
        totalQuantity : 0,
        totalAmount: 0
    },
    reducers: {
       addItemToCart(state, action){
        const item = action.payload
        console.log("item is", item);
        
        const existingItems = state.items.find((itemObj)=>itemObj.id===item.id)
        state.totalQuantity++;

        if(!existingItems) {
            state.items.push({id : item.id, price : item.price, quantity: 1, totalPrice: item.price, name : item.title})
            console.log("state items",{ id : item.id, price : item.price, quantity: 1, totalPrice: item.price, name : item.title});
            
        } 
        else {
            existingItems.quantity =   existingItems.quantity+1
            existingItems.totalPrice = existingItems.totalPrice + item.price
        }

        
       },
       removeItemToCart(state, action){
        const id = action.payload
        const existingItems = state.items.find((itemObj)=>itemObj.id===id)
        state.totalQuantity--;
        if(existingItems.quantity === 1){
            state.items = state.items.filter((item)=> item.id !==id)
        }else{
            existingItems.quantity--;
            existingItems.totalPrice = existingItems.totalPrice- existingItems.price
        }

       }
    }
})


// action creator created by us ,
const sendCartData = (cart)=>{

    return async (dispatch)=>{
        dispatch(uiAction.setNotification({status: 'pending', title:"Sending..", message: "Sending Cart Data"}))
   
        const response = await fetch('backendUrl',{
                method: "PUT",
                body: JSON.stringify(cart)
              })
        
              if(!response.ok){
                throw new Error("Sending Cart Data Failed")
              }

              dispatch(uiAction.setNotification({status: 'success', title:"sent..", message: "Sent Cart Data"}))
  
   
    }
}

export const cartAction = cartSlice.actions

export default cartSlice