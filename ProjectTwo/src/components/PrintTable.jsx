import React, { memo } from 'react'


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

const PrintTable = memo((props) => {
    let {num}= props
    const table = generateTable(num)
  return (
    <>
    <div>PrintTable</div>
    {table}
    </>
  )
})

export default PrintTable