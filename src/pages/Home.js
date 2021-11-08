import React from 'react';
import Header from "../components/Header";
import Cryptos from "../components/Cryptos";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <section className="container mx-auto">
                <h1 className="text-6xl">Home</h1>
                <Cryptos />
            </section>
        </div>
    );
};

export default Home;