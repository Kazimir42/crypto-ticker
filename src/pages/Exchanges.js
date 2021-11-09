import React, {useEffect, useState} from 'react';
import axios from "axios";
import ExchangeItem from "../components/ExchangeItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Exchanges = () => {

    const [data, setData] = useState([]);
    const [idExchange, setIdExchange] = useState('');

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/exchanges?per_page=250')
            .then((result) => {
                setData(result.data);
            });
    }, []);


    return (
        <div className="">
            <Header/>
            <section className="container mx-auto mb-20 min-h-screen">

                <div className="exchanges">
                    <div className="exchanges-filter p-5 flex h-20 gap-2 bg-gray-100 rounded-md shadow mb-10">
                        <input type="text" placeholder="Coinbase" onChange={(e) => setIdExchange(e.target.value)}
                               className="border border-gray-500 w-3/5 rounded-md p-2"/>
                        <Link to={`/cryptos/`}
                              className='w-2/5 bg-primary text-white rounded-md hover:bg-dark-primary text-center flex justify-center items-center'>
                            Switch to Cryptos
                        </Link>                    </div>
                    <table className="cryptos-list w-full bg-gray-100 rounded-md shadow">
                        <thead>
                        <tr className='border-b border-gray-300 text-left'>
                            <th className='p-5'>Name</th>
                            <th className='p-5'>Score</th>
                            <th className='p-5'>BTC volume trade 24h</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {data
                            .filter((exchange) => exchange.name.includes(idExchange))
                            .filter((exchange, index) => index < 50)
                            .map((exchange) => (
                                <ExchangeItem exchange={exchange} key={exchange.id}/>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Exchanges;