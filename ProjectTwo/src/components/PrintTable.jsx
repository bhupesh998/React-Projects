import React, { useMemo } from 'react'


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

const PrintTable = (props) => {
    let {num}= props
    // if num is not passed then this will i.e. generate table will also remember the first render instance and table will not be updated on counter1 increase
    const table = useMemo(()=>generateTable(num),[num])
  return (
    <>
    <div>PrintTable</div>
    {table}
    </>
  )
}

export default PrintTable