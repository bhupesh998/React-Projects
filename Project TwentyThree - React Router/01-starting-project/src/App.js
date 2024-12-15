import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./components/Root"
import Error from "./components/Error";

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
    path: "/", 
    element: <Root />, 
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> }
    ]
  }
  // we can also add multiple root layout and their children based on the application we have 


])





function App() {
  return <RouterProvider router={router} />
}

export default App;
