import { useEffect, useState } from "react";
import Break from "../Break/Break";
import GymItem from "../GymItem/GymItem";
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
    <div className="row ps-5 my-4">
        <div className="col-12 col-xl-9 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                 items.map(item => <GymItem item ={item}></GymItem>)
            }
        </div>
        
        <div className="col-12 col-xl-3 home-sidebar rounded px-5 mt-5">
            <Sidebar></Sidebar>
            <Break></Break>
            <Exercise></Exercise>
        </div>
    </div>
  );
};

export default Home;
