// https://www.educative.io/answers/how-to-create-a-react-application-with-webpack

import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

const div=<div className="text">Hello DIV</div>
console.log(div);

const GreetingComponent = ()=>  <>
        {div} 
        "I am inside Component"
    </>


console.log(GreetingComponent);

root.render(<GreetingComponent/>)
//root.render(GreetingComponent())
