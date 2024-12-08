

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CardContextProvider  from './store/shopping-cart-context.jsx';


function App() {
 

  return (
    
    
      <CardContextProvider>
         {/* In react 19 you can use <CartContext> directly to wrap but before 19 version you need to use , CartContext.Provider it works in old and new versions */}
        <Header/>
        <Shop  >
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product}  />
            </li>
          ))}
        </Shop>
      </CardContextProvider>
    
  );
}

export default App;
