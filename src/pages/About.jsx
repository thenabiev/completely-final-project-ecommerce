import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

import Accordion from '../components/Accordion'

import aboutImg from '../assets/about.jpg'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div>
      <br />
      <h2 className='sectionHeader text-center'>About</h2>
      <br /><br/>
      <Row xs={1} md={2}>
        <Col>
          <h4>Who we are ?</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet illum et numquam officiis mollitia. Voluptatum quidem delectus perspiciatis eos saepe ipsum, illum consequatur hic eius? Quo esse modi tenetur blanditiis ab, ipsam assumenda doloremque accusamus ex sed sit qui odio repudiandae nam? Velit dolorum officiis reiciendis officia voluptates delectus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet illum et numquam officiis mollitia. Voluptatum quidem delectus perspiciatis eos saepe ipsum, illum consequatur hic eius? Quo esse modi tenetur blanditiis ab, ipsam assumenda doloremque accusamus ex sed sit qui odio repudiandae nam? Velit dolorum officiis reiciendis officia voluptates delectus.</p>

        </Col>
        <Col>
        <Card>
          <Card.Img src={aboutImg}/>
        </Card>
        </Col>
      </Row>
      <br />
      <Accordion />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet illum et numquam officiis mollitia. Voluptatum quidem delectus perspiciatis eos saepe ipsum, illum consequatur hic eius? Quo esse modi tenetur blanditiis ab, ipsam assumenda doloremque accusamus ex sed sit qui odio repudiandae nam? Velit dolorum officiis reiciendis officia voluptates delectus.</p>

    </div>
  )
}

export default About
