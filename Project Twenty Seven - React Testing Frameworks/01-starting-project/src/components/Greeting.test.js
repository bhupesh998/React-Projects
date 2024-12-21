// Arrange - Setup test data, condition and environment
// Act     - Run logic that should be tested ( eg. execute function)
// Assert  - Compare excecution result with expected results

import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"
// screen - it gives us access to virtual screen where our testing component is rendered


describe('Greeting Test Suite', ()=>{
    test('Greeting Component', () => { 
        render(<Greeting/>)
        // get function with screen throws an error is element is not found, query function won't do that
        // find function will return a promise
        
       const helloWorldElement =  screen.getByText('Hello World', { exact: true})
       expect(helloWorldElement).toBeInTheDocument()
     })


     test('Greeting Component ChangeText State True ', () => { 
        render(<Greeting/>)
        
       const helloWorldElement =  screen.getByText("It's Good to See u", { exact: true})
       expect(helloWorldElement).toBeInTheDocument()
     })

     test('Greeting Component ChangeText State False ', () => { 
        render(<Greeting/>)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        
       const helloWorldElement =  screen.getByText("Changed", { exact: true})
       expect(helloWorldElement).toBeInTheDocument()
     })

     test('Greeting Component ChangeText State False and Good to see you not in page ', () => { 
        render(<Greeting/>)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        
        const helloWorldElement =  screen.queryByText("It's Good to See u", { exact: false})
       expect(helloWorldElement).toBeNull()
       expect(helloWorldElement).not.toBeInTheDocument()
     })
})
