import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    function navigateHandler(){
        navigate('/products')
    }


    return (
        <div>
            HOME PAGE
            {/* <p>Go to <a href='/products'>Products page</a></p> */}
            {/* the above approach will send the request to server and cause our app to reload whole data from server and then change the page  */}
            {/*     
            under the hook link component does render and anchor element, basically it listens to clicks on that element , prevents browser from sending http request to server, based on route definitions load the approperiate content
            */}
            <p>Go to <Link to='/products'>Products page</Link></p>
            <p>
                <button onClick={navigateHandler}>Navigate to Products</button>
            </p>

        </div>
    )
}

export default Home
