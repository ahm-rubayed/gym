import { useEffect, useState } from "react";
import GymItem from "../Card/GymItem";

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

  return (
    <div className="home row g-4 ps-5">
    <h4 className="mt-5">Select Todays exercise</h4>

        <div className="col-8 gym-info row row-cols-1 row-cols-md-3 g-4 mt-4">
            {
                 items.map(item => <GymItem item ={item}></GymItem>)
            }
        </div>
        <div className="gym-details col">
            <p>lorem10alskdffff;</p>
        </div>
    </div>
  );
};

export default Home;
