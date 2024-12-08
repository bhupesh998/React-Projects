import { createContext } from "react";

export const CartContext = createContext({
    items : [], //its a default value , we still need to provide the value inside Context.Provider tag
    addItemToCart: ()=>{},
    updateItemQuantity: ()=>{},
}) //it will return a object that contains a react component i.e why name is in upperCase

 