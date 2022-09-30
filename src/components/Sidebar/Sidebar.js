import React from "react";
import man from "./man.jpg";

const Sidebar = () => {
  return (
    <div>
      <div className="personal-info d-flex align-items-center py-4">
        <img src={man} className="w-25 h-25 rounded-circle" alt="" />
        <div className="personal-address ms-3 ">
          <h5>Rubayed Ahmed</h5>
          <p>Sylhet, Bangladesh</p>
        </div>
      </div>

      <ul className="d-flex gap-4 bg-white p-2 rounded text-center justify-content-center">
        <li>
          <p>75KG </p>
          <small>Weight</small>
        </li>
        <li>
          <p>5.1 </p>
          <small>Height</small>
        </li>
        <li>
          <p>18yrs </p>
          <small>Age</small>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
