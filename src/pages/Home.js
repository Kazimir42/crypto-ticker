import React from 'react';
import Header from "../components/Header";
import Cryptos from "../components/Cryptos";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <section className="container mx-auto mb-20 min-h-screen">
                <Cryptos />
            </section>
            <Footer />
        </div>
    );
};

export default Home;