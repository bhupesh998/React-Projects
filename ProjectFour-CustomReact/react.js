function customeRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    */

    for (const prop in reactElement.props) {
       if(prop == 'children' ) continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}

const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Go to Google'

}


const mainContainer = document.querySelector("#root")

//this method will index react element to the main container i.e root element
customeRender(reactElement, mainContainer)