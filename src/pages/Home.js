import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Monsters from "../components/Monsters";

const Home = () => {
    return(
        <>
            <Navigation />
            <Header />
            <Monsters />
            <Footer />
        </>
    );
}

export default Home;