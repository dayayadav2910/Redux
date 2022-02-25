import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'


function Shop() {
    const dispatch = useDispatch();
    const {withdrawmoney,depositemoney} = bindActionCreators(actionCreators,dispatch);
    
  return (
    <div className='container'>
    <button className="btn btn-primary my-3 mx-3" onClick={()=>{withdrawmoney(100)}}>-</button>
    Add item to the cart
    <button className="btn btn-primary my-3 mx-3" onClick={()=>{depositemoney(100)}}>+</button>
    </div>
  )
}
export default Shop