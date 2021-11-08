import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
    return (
        <div>
            <Header />
            <section className="container mx-auto min-h-screen">
                <h1 className="text-6xl">Erreur 404</h1>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;