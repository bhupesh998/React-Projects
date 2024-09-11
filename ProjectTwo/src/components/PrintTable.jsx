import React, { useMemo, memo } from 'react'


const generateTable=(num)=>{
    const arr=[]
    let startTime = performance.now();
  while (performance.now() - startTime < 900) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
    for(let i=1;i<=10;i++){
        arr.push(<div>{num*i}</div>)
    }
    return arr
}

//Memo Performs a Shallow comparison
// When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously. This means that React compares every prop in your component with its previous value using the Object.is
// That is why when we use object or array our component was getting rerendered even thought value in them is not changed as Object.is comparison for them will yeild false
// So we Should avoid passing object and array as props and if you want to pass that you can use , useMemo
const PrintTable =memo( (props) => {
    let {num, obj, val, arr}= props
     const table = generateTable(num)
  return (
    <>
    <div>PrintTable</div>
    {table}

    <br></br>
    Channel : {obj?.channel}
    <br></br>
    Value os : { val}
    <br></br>
    Array is : {arr?.map((item)=> <span>{item}</span>)}
    </>
  )
})

export default PrintTable