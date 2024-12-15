

import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import  { Component } from 'react'

// its a class based componet that use component did catch lifecycle method
// when we use this method in any componet then its makes it an Error Boundary
export class ErrorBoundary extends Component {

  constructor(){
    super()
    this.state={hasError: false}
  }

// this method will be triggered when one of child componet throws an error
// in this we get an error object automatically passsed in by react
componentDidCatch(error){
  console.log("Error Boundary", error);
  
  this.setState({ hasError: toBeRequired})
}
  render() {
    if(this.state.hasError){
      return <h1>Something went Wrong!!!!!</h1>
    }else{
       // here it is used because we want to wrap errorboundary component around components that should be protected by it
    return this.props.children
    }
   
  }
}

export default ErrorBoundary
