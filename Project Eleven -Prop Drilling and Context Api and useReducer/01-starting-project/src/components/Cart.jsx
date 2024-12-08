import { useContext } from "react"; //to consume the context, we can also try "use" hook
import { CartContext } from "../store/shopping-cart-context";

// useContext and use hook - the use hook can be used inside of an if block normally hooks don't work in if and other statements but this use hook works inside it
//the use hook is available in react version 19 or higher






export default function Cart( ) {
  // const cartCtx = useContext(CartContext)


  return (
    <CartContext.Consumer>
      {(cartConsumerCtx) => {

        const totalPrice = cartConsumerCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

        return (
          <div id="cart">
            {cartConsumerCtx.items.length === 0 && <p>No items in cart!</p>}
            {cartConsumerCtx.items.length > 0 && (
              <ul id="cart-items">
                {cartConsumerCtx.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => cartConsumerCtx.updateItemQuantity(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => cartConsumerCtx.updateItemQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        )
      }}

    </CartContext.Consumer>
  );
}
