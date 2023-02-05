import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { HiOutlineTrash } from 'react-icons/hi';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../state/slices/ShopSlice';
import EmptyCart from './EmptyCart';


const Cart = () => {

    const cartItems=useSelector(state=>state.shop.cartItems)
    const dispatch=useDispatch();

    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.amount, 0);
    const itemsInCart=cartItems.reduce((a,c)=>a+c.amount, 0);



    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    
  return (
    <div className='my-3'>
        
      {
        cartItems.length>0 ?
        
        (
            
            cartItems.map((item)=>(
            <Row key={item.id}  xs={1} className='my-2'>
                <Col className="d-flex justify-content-between col-lg-10 col-md-8 col-sm-12">
                <div>
                <div className="d-flex g-2 ">
                <div className="cartImg">
                    <img src={item.image} alt="" />
                </div>
                <div className="itemTitle ms-2 py-1">
                    <p><b>{item.title}</b></p>
                    <p>Price: <b>{item.price}</b> AZN</p>
                    <p>Total: <b>{(item.price * item.amount).toFixed(2)}</b> AZN</p>
                </div>
                </div>
                </div>
                
                <div className='d-flex align-items-center'>
                    <div className="cartAmount">
                        <button onClick={()=>dispatch(decrement(item))}>-</button>
                        {item.amount}
                        <button onClick={()=>dispatch(increment(item))}>+</button>
                    </div>
                </div>
                </Col>
                <Col className='col-lg-2  col-sm-12 d-flex align-items-center justify-content-end'>
                    <Button 
                    onClick={()=>dispatch(removeFromCart(item.id))}
                    className='btn-dark w-50'>
                        <HiOutlineTrash size='1.2rem'/>
                    </Button>
                </Col>
            </Row>
            
        ))
        
        
        ) :(
            <EmptyCart />
        )
        
      }
      {cartItems.length>0 && (
        <>
        <hr />
        <p>Items in your cart : <b>{itemsInCart}</b></p>
        <p>Total value of your cart : <b>{itemsPrice.toFixed(2)} AZN</b></p>

        </>
        
        
      )}
    </div>
  )
}

export default Cart
