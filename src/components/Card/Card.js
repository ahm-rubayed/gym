import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
        <div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div classNameName="col">
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;