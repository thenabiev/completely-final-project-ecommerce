import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { HiOutlineShoppingCart, HiOutlineTrash } from 'react-icons/hi';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromFavorites } from '../state/slices/ShopSlice';

const Favorites = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [itemDirectory, setItemDirectory]=useState('')

    useEffect(()=>{
        if(itemDirectory!==''){
            navigate(`/details/${itemDirectory}`)
        }
    },[itemDirectory])

    const favorites=useSelector(state=>state.shop.favorites);


    useEffect(()=>{
        window.scrollTo(0,0)
      })
  return (
    favorites.length>0 ? (
    <Row xs={1} md={2} lg={4} className='g-2 my-3'>

      {
        favorites.map(item=>(<Col key={item.id}>
            <Card 
            className='itemCard'>
                <div className="imgBox">
                    
                    {
                        item.discount>0 && <div className='discount' style={item.discount>=20?{backgroundColor:"crimson"}:{backgroundColor:"goldenrod"}}>- {item.discount}%</div>
                    }
                    <Card.Img  
                    onClick={()=>setItemDirectory(item.id)}

                    src={item.image}/>
                </div>
                <Card.Body >
                    <h6>{item.title}</h6>
                    <div className="d-flex justify-content-between">
                        
                            <p><b>{item.price} </b>AZN</p>
                            
                            <div className="d-flex align-center justify-content-end">
                                <div 
                                    onClick={()=>dispatch(removeFromFavorites(item.id))}
                                    className="btn btn-outline-dark px-4 me-1">
                                    <HiOutlineTrash size='1.3rem' />
                                </div>
                                <div 
                                onClick={()=>dispatch(addToCart(item))}
                                className="btn btn-dark px-4">
                                    <HiOutlineShoppingCart size='1.3rem' />
                                </div>
                                
                            </div>
                        
                    </div>
                </Card.Body>
            </Card>
        </Col>))
      }
    </Row>) :(
            <h1 className='text-center'>There are currently no products in your favorites</h1>
    )
  )
}

export default Favorites
