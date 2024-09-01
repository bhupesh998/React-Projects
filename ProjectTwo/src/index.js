// https://www.educative.io/answers/how-to-create-a-react-application-with-webpack

import React from "react"
import ReactDOM from "react-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
const child = React.createElement('h4',{}, "REACT IS TRENDING-CHILD" )
const child2 = React.createElement('h4',{}, "REACT IS TRENDING-CHILD TWO" )

const div = React.createElement('div', {className:'text'}, [child, child2])
//const div=<div className="text">Hello DIV</div>
console.log(div);

root.render(div)
