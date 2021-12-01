import React, { useState, useEffect } from "react";
import MonsterItem from "./MonsterItem";

const Monsters = () => {
    const [monsters, setMonsters] = useState([]);
    const [text, setText] = useState('');
    
    useEffect(() => {  
        fetch('https://mhw-db.com/monsters')
        .then(response => response.json())
        .then(data => setMonsters(data));

        // eslint-disable-next-line
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://mhw-db.com/monsters?q={"name":"${text}"}`)
        .then(response => response.json())
        .then(data => setMonsters(data));
        setText('');
    }

    const handleChange = (e) => {setText(e.target.value)};

    return(
        <section className="py-5">            
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Monsters</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" onChange={handleChange} value={text}/>
                    </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { monsters.map(monster => <MonsterItem key={monster.id} monster={monster} />) }                    

     

                </div>
            </div>
        </section>
    );
}

export default Monsters;