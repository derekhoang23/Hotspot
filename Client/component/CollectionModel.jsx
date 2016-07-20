import React from 'react';

const CollectionModel = (props) => {
  return (
    <div className='restaurant'>
      <div className='restaurantName'>
        {props.restaurant.restaurantName}
      </div>
      <div className='rating'>
        {props.restaurant.rating}
      </div>
      <div className='type'>
        {props.restaurant.type}
      </div>
      <img src={props.restaurant.image}/>
    </div>
  );
};

export default CollectionModel;
