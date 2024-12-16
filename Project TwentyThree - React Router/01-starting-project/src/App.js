import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./components/Root"
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";

/*
// create route definition and provide to create browser router
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
)

const router = createBrowserRouter(routeDefinitions)
*/


// new way create router with createbrowser router and provide  router to routerprovider 
const router = createBrowserRouter([
  {
    // created root layout because we need our navigation bar on all  pages and solution would be to use navbar component in each other component that would be repititive code
    // instead we might have used it in app but in navbar we have links that will onky work if they are inside  RouterProvider
    // so we created a Root Component 

    // the route we have given is absolute path i.e / and children have /, /products and etc but we change the parent route to /root or something then we get an error 
    // because know the parent route is /root and child routes are starting with /, it should start with /root if using absolute route 
    // if we want to use relative route the for child we don't need to start from /
    path: "/root", 
    element: <Root />, 
    errorElement: <Error />,
    children: [
      // index true will default it will turn it into index route which simply means its default route, if parent routes path is active
      { index: true, element: <Home /> }, // when don't using /, this indicates this path are appended after the wrapper or parent route
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> }
    ]
  }
  // we can also add multiple root layout and their children based on the application we have 


])





function App() {
  return <RouterProvider router={router} />
}

export default App;
