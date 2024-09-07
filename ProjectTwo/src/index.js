// https://www.educative.io/answers/how-to-create-a-react-application-with-webpack

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { storeVal } from './components/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(<Provider store={storeVal}>
    <App />
  </Provider>
)

