import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Async from "./Async"

describe('Async Test Suite', ()=>{
    test.skip('Async Component - Renders Posts',async () => { 
        render(<Async/>)
        const listElement =await screen.findAllByRole('listitem') // getByRole will fail if we have mutiple items with same tag so we use getAllByRole
        // use findAllbyRole because list items will not be directly available when component renders instead they will be fetched from backend , so getAllByRole will fail
        expect(listElement).not.toHaveLength(0)
    })
// the above approach is not ideal as we are directly hitting a server that is actual , as in case of post request it will create additional data and in case of get request it will increase network traffic
// so we use mocks

test('Async Component - Renders Posts by Mock',async () => { 
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
        json: async ()=> [{id: 'p1', title: 'First Post'}]
    })
    // with the above code we are overwriting the builtin fetch function with our dummy or mock fetch function that has a json method that returns an array
    render(<Async/>)
    const listElement =await screen.findAllByRole('listitem')
    expect(listElement).not.toHaveLength(0)
})
    
})

