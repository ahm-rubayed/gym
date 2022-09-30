import React from 'react';
import './Card.css'

const GymItem = (props) => {
  const {name} = props.itemss;
    console.log(props.itemss.name)
    return (
  <div classNameName="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title text-warning">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    );
};

export default GymItem;