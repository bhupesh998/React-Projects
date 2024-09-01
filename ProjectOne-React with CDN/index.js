const root = ReactDOM.createRoot(document.getElementById("root"))
const child = React.createElement('h4',{}, "REACT IS TRENDING-CHILD" )
const child2 = React.createElement('h4',{}, "REACT IS TRENDING-CHILD TWO" )

const div = React.createElement('div', {className:'text'}, [child, child2])
console.log(div);

root.render(div)
