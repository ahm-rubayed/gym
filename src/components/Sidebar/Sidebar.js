import React from "react";
import "./Sidebar.css"
import profile from "./profile.jpg";

const Sidebar = () => {
  return (
    <div>
      <div className="d-flex align-items-center py-4">
        <img src={profile} className="w-25 h-25 rounded-circle" alt="" />
        <div className="personal-address ms-3 ">
          <h5>Rubayed Ahmed</h5>
          <p>Sylhet, Bangladesh</p>
        </div>
      </div>

      <ul className="d-flex gap-4 bg-white p-2 rounded text-center justify-content-center align-items-center">
        <li>
          <p className="my-1 fw-bold fs-5">75KG </p>
          <small>Weight</small>
        </li>
        <li>
          <p className="my-1 fw-bold fs-5">5.1 </p>
          <small>Height</small>
        </li>
        <li>
          <p className="my-1 fw-bold fs-5">18yrs </p>
          <small>Age</small>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
