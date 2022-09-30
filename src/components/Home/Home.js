import { useEffect, useState } from "react";
import GymItem from "../Card/GymItem";
import man from "./man.jpg"
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

  return (
    // <h4 className="mt-5">Select Todays exercise</h4>
    <div className="row row-cols-2- g-4 ps-5 my-4">
        <div className="col-9 row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4">
            {
                 items.map(item => <GymItem item ={item}></GymItem>)
            }
        </div>

        <div className="col-3 home-sidebar vh-auto rounded px-5">
            <div className="personal-info d-flex align-items-center py-4">
                    <img src={man} className='w-25 h-25 rounded-circle' alt=''/>
                <div className="personal-address ms-3 ">
                    <h5>Rubayed Ahmed</h5>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>

            <ul className="d-flex gap-5 bg-white p-2 rounded text-center justify-content-center"> 
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
    </div>
  );
};

export default Home;
