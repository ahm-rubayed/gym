import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

  return (
    <div>
        {
            items.map(item => <Card></Card>)
        }
    </div>
  );
};

export default Home;
