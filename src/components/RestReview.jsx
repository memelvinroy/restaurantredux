import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const RestReview = ({ selectRestaurant }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className='btn btn-warning'>Reviews</button>
      <Collapse in={open}>
        <div className='my-2'>
          <hr />
          {selectRestaurant && selectRestaurant[0] ? (
            selectRestaurant[0]?.reviews.length > 0 ? (
              selectRestaurant[0]?.reviews.map((item, index) => (
                <div className='mt-5' key={index}>
                  <h6>Name: {item.name}</h6>
                  <h6>Rating: {item.rating}</h6>
                  <h6>Comments: {item.comments}</h6>
                </div>
              ))
            ) : (
              <p>No Reviews Found!</p>
            )
          ) : (
            <p>Select a restaurant to see reviews.</p>
          )}
        </div>
      </Collapse>

    </>
  )
}

export default RestReview