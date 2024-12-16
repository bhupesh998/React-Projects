import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {

   const params =useParams()
  return (
    <div>
      <h1>Product detail Page</h1>
      <p>{params.productId}</p>
      {/* On back link we go to home as product detail is a children of root component and in this case relative property is set to route by default, if we set it to path react will take a look at 
      the currently active path and simply remove one segment from the path, if you are using absolute path then this will not matter*/}
      <p><Link to=".." relative='path'>Back</Link></p> 
    </div>
  )
}

export default ProductDetail
