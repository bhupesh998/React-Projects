import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiAction } from './store/ui-slice';
import Notification from './components/UI/Notification';


let isIntial = true
function App() {

  const isCartVisible = useSelector((state)=>state.ui.cartIsVisible)
  const notify = useSelector((state)=>state.ui.notification)
  const cart = useSelector((state)=> state.cart)
  const dispatch= useDispatch()

// once teh cart is updated on frontend with help of reducer and then only it gets stored in the backend
// throught this useEffect as when cart changes this component will be notiified and 
// issue with use Effect is when our cart is empty at start of app this will send the initial empty data to backend as well 
  useEffect(()=>{

    async function sendCartData(){
     
     

      
        }

    if(isIntial){
      isIntial = false // this is used so that first time when app start no request goes to backend
      return;
    }

    sendCartData().catch((error)=>{
      dispatch(uiAction.setNotification({status: 'error', title:"Error..", message: "Sent Cart Data Failed"}))
    })
    


  }, [cart])

  return (
    <>
  { notify &&  <Notification status={notify.status} title={notify.title} message={notify.message}/>}
      <Layout>
      { isCartVisible && <Cart /> }
      <Products />
    </Layout>
    </>
  
  );
}

export default App;
