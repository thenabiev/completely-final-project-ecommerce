import React, { useEffect, useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';


import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFavorites, filterCategory } from '../state/slices/ShopSlice';

// Icons
import {HiOutlineShoppingCart, HiOutlineHeart, HiChevronDoubleRight} from 'react-icons/hi'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';

const Shop = () => {

const dispatch=useDispatch();
const navigate=useNavigate();

let filterTerm=useSelector(state=>state.shop.filterTerm);
let searchTerm=useSelector(state=>state.shop.searchTerm)




const [itemDirectory, setItemDirectory]=useState('')
useEffect(()=>{
    if(itemDirectory!==''){
        navigate(`/details/${itemDirectory}`)
    }
},[itemDirectory])
const shopItems=useSelector(state=>state.shop.allItems);


let filteredArray;



if(filterTerm!==''){
    filteredArray=shopItems;
    filteredArray=shopItems.filter(item=>item.category===filterTerm);
    
} 


if(filterTerm==="discount"){
    filteredArray=shopItems.filter(item=>item.discount>0)
}



if(searchTerm!=="" && filterTerm===''){
    filteredArray=shopItems
    filteredArray=shopItems.filter(item=> item.detail.toLowerCase().includes(searchTerm.toLowerCase()) || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
}

if(filterTerm==='' && searchTerm===''){
    filteredArray=shopItems
}
if(filterTerm==='all'){
    filteredArray=shopItems
}
useEffect(()=>{
    window.scrollTo(0,0)
  });



  return (
    shopItems.length>0?(    
        <>


            <Slider />            
            {
                 filteredArray.length===shopItems.length && <h2 className='text-center sectionHeader my-4'>Popular Products</h2>
            }

            {
                filteredArray.length!==shopItems.length && <p>Results : <b>{filteredArray.length}</b></p>
            }

            {
                filteredArray.length===0 &&(
                    <>
                        <h2 className='text-center'>No Products Found</h2>
                        <h4 className='pointer' 
                        onClick={()=>dispatch(filterCategory("all"))}
                        >
                            Continue Shopping <HiChevronDoubleRight className='chevron-right'/>
                        </h4>
                    </>
                        )
            }

            <Row xs={1} md={2} lg={4} className='g-2 my-3'>

      {
        filteredArray.map(item=>(
            <Col key={item.id}>
                <Card 
                className='itemCard'>
                    <div className="imgBox">
                        <HiOutlineHeart 
                        onClick={()=>dispatch(addToFavorites(item))}
                        className='favoriteIcon' size='1.7rem'/>
                        
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
                                <div 
                                onClick={()=>dispatch(addToCart(item))}
                                className="btn btn-dark px-4">
                                    <HiOutlineShoppingCart size='1.3rem' />
                                </div>
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        ))
      }
        </Row>

        <Row className='my-2' xs={1} md={2}>
            <Col className='rounded my-1'>
                <img className='rounded w-100 h-100' src={banner1} alt="" />
            </Col>
            <Col className='rounded my-1'>
                <img className='rounded w-100 h-100' src={banner2} alt="" />
            </Col>
        </Row>
        <h2 className='text-center sectionHeader my-4'>Men's Fashion</h2>
        <Row xs={1} md={2} lg={4} className='g-2 my-3'>

        {
            shopItems.filter(item=>item.gender==="man" && item.category==="clothing")
            .map(item=>(
                <Col key={item.id}>
                <Card 
                className='itemCard'>
                    <div className="imgBox">
                        <HiOutlineHeart 
                        onClick={()=>dispatch(addToFavorites(item))}
                        className='favoriteIcon' size='1.7rem'/>
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
                                <div 
                                onClick={()=>dispatch(addToCart(item))}
                                className="btn btn-dark px-4">
                                    <HiOutlineShoppingCart size='1.3rem' />
                                </div>
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))
        }

        </Row>

        <h2 className='text-center sectionHeader my-4'>Women's Fashion</h2>
        <Row xs={1} md={2} lg={4} className='g-2 my-3'>

        {
            shopItems.filter(item=>item.gender==="woman" && item.category==="clothing")
            .map(item=>(
                <Col key={item.id}>
                <Card 
                className='itemCard'>
                    <div className="imgBox">
                        <HiOutlineHeart 
                        onClick={()=>dispatch(addToFavorites(item))}
                        className='favoriteIcon' size='1.7rem'/>
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
                                <div 
                                onClick={()=>dispatch(addToCart(item))}
                                className="btn btn-dark px-4">
                                    <HiOutlineShoppingCart size='1.3rem' />
                                </div>
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))
        }

        </Row>


        <Row className='my-2' xs={1} md={1}>
            <Col className='rounded my-1'>
                <img className='rounded w-100 h-100' src={banner1} alt="" />
            </Col>
            
        </Row>

        </>
        
    ):(
        <Loading />
    )
  )
}

export default Shop
