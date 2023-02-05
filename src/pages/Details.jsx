import React, { useEffect, useState } from 'react'
import { Card, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { addToCart } from '../state/slices/ShopSlice';

const Details = () => {

    const {itemId}=useParams();
    const dispatch=useDispatch();

    const allItems=useSelector(state=>state.shop.allItems);
    const item=allItems.find(i=>i.id==itemId);
    
    const [mainImg, setMainImg]=useState(item.image);

    const discountedPrice=(((item.price*item.discount)/100)+item.price).toFixed(2);

    // Modal
    const [showModal, setShowModal]=useState(false)


    useEffect(()=>{
      window.scrollTo(0,0)
    })
  return (
    
    <>
    <Row className='my-2'>
      <div className="col-sm-12 col-md-4">
        <div className="detailImg">
            <div 
            onClick={()=>setShowModal(true)}
            className="mainImg">
                <img src={mainImg}  />
            </div>
            <div className="altImg">
                {item.alternates.map((img, index)=>(
                    <div className="image" key={index} >
                        <img src={img}  onClick={()=>setMainImg(img)}/>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="textarea p-4">
            <h4>{item.title}</h4>
            <br />
            <p><b>Item details:</b> {item.detail}</p>
            <p><b>Price:</b> {item.discount>0 && (<span className='oldPrice'>{discountedPrice}</span>)} {item.price}</p>
            <p><b>Shipping: </b>{item.price>50?"Free":"19.99 AZN"}</p>
        </div>
        <div className="buttons p-4">
            <Link to='/'>
            <div className="btn btn-outline-dark">
                Continue Shopping
            </div>
            
            </Link>
            <div 
            onClick={()=>dispatch(addToCart(item))}
            className="btn mx-2 btn-dark">
                Add To Cart
            </div>
        </div>
      </div>
    </Row>
    {/* Modal */}
    <Modal className='imgModal modal-lg' show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton />

        <Modal.Body>
          <Card >
            <Card.Img src={mainImg}/>
          </Card>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Details


