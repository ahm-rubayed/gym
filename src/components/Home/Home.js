import { useEffect, useState } from "react";
import Break from "../Break/Break";
import GymItem from "../Card/GymItem";
import Exercise from "../Exercise/Exercise";
import Sidebar from "../Sidebar/Sidebar";
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
            <Sidebar></Sidebar>
            <Break></Break>
            <Exercise></Exercise>
        </div>
    </div>
  );
};

export default Home;
