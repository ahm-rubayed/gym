import React from 'react';
import './Card.css'

const GymItem = (props) => {
  const {picture, name, about, age, time} = props.item;
    return (
  <div classNameName="col position-relative">
    <div className="card h-100">
      <img src={picture} className="card-img-top" alt="..."/>
      <div className="card-body py-5">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{about}</p>
        <p className="card-text">For age: {age}</p>
        <p className="card-text ">Time required: {time}s</p>
        <button className='position-absolute fixed-bottom border-0 py-2 mt-2 card-btn text-white'>Add to list</button>
      </div>
    </div>
  </div>
    );
};

export default GymItem;