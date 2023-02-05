import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub, FaLinkedinIn, FaHome, FaEnvelope, FaPhone} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='rounded my-1  text-center text-lg-start text-light'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <FaFacebookF />
        </a>
        <a href='' className='me-4 text-reset'>
          <FaTwitter />
        </a>
        <a href='' className='me-4 text-reset'>
          <FaGoogle />
        </a>
        <a href='' className='me-4 text-reset'>
          <FaInstagram />
        </a>
        <a href='' className='me-4 text-reset'>
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/thenabiev' target='_blank' className='me-4 text-reset'>
          <FaGithub />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Al<span className='text-warning'>Ver</span>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cumque sit ratione eveniet? Ab suscipit odit ratione ex id possimus numquam modi. Sunt.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <Link to='/about' className='text-reset'>
                About
              </Link>
            </p>
            <p>
              <Link to='/career' className='text-reset'>
                Career
              </Link>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Become a seller
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Contact
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p >
              <FaHome className='me-2'/>
              Baku, Somewhere st.13, AZ
            </p>
            <p >
              <FaEnvelope className='me-2'/>
              thenabiev@gmail.com
            </p>
            <p >
              <FaPhone className='me-2'/> +994 70 255 1021
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright: 
      <a 
      target="_blank"
      className='text-reset fw-bold ms-2' 
      href='https://github.com/thenabiev'>
         devnabiev.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer
