import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard() {
  return (
    <>
    <Link to={'/restview'} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-large-burger-with-cheese-image_2553198.jpg" 
      height={"300px"}/>
      <Card.Body>
        <Card.Title>ESPRESSO</Card.Title>
        <Card.Text>
          Neighbourhood : Kakkanad
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
    </>
  )
}

export default RestCard
   