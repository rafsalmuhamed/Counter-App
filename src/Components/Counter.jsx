import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from '../counterSlice'


function Counter() {
  const [amount,setAmount]=useState(0)
  const dispatch = useDispatch()
  const count=useSelector(state=>state.counterReducer.count)

  const handleIncrementByAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(amount))
    }else{
      alert("enter a valid amount")
    }
  }
  return (
    <div style={{background:'#014752'}} className='shadow rounded p-5 text-center'>
        <h1 style={{fontSize:'80px',background:'#014752'}}>{count}</h1>
        <div style={{width:'500px',background:'#014752'}} className="d-flex justify-content-between mt-5">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>-</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger' >Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success' >+</button>
        </div>
        <div style={{background:'#014752'}} className="d-flex justify-content-center mt-5">
            <input onChange={e=>setAmount(e.target.value)} type="text" className="text form-control " placeholder='Enter the count to be incremented.'/>
            <button onClick={handleIncrementByAmount} className='btn btn-primary ms-4'>SET COUNT</button>
        </div>
    </div>
  )
}

export default Counter