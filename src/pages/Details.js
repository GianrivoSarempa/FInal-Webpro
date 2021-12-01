import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MonsterDetails from "../components/MonsterDetails";

const Details = () => {    
    const { monsterId } = useParams();
    const [monster, setMonster] = useState({});
    
    useEffect(() => {
        fetch(`https://mhw-db.com/monsters/${monsterId}`)
        .then(response => response.json())
        .then(data => setMonster(data));
        }, 
        //eslint-disable-next-line
    []);

    return(
        <>
            <Navigation />
            <MonsterDetails monster={monster} />
            <Footer />
        </>
    );
}

export default Details;