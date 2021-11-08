import React from 'react';
import Header from "../components/Header";

const NotFound = () => {
    return (
        <div>
            <Header />
            <section className="container mx-auto">
                <h1 className="text-6xl">Erreur 404</h1>
            </section>
        </div>
    );
};

export default NotFound;