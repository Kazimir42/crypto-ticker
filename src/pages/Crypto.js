import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import CryptoMarket from "../components/CryptoMarket";

const Crypto = () => {
    const [data, setData] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState("USD");
    const radios = ["USD", "EUR"];

    useEffect(() => {
        let id = window.location.pathname.split('/').pop();

        axios
            .get('https://api.coingecko.com/api/v3/coins/' + id + '/tickers?include_exchange_logo=true')
            .then((result) => {
                setData(result.data.tickers);
            });
    }, []);

    return (
        <div className="">
            <Header/>
            <section className="container mx-auto mb-20 min-h-screen">
                <div>
                    <div className="cryptos-filter p-5 flex h-20 gap-2 bg-gray-100 rounded-md shadow mb-10">
                        <ul className="flex gap-5 justify-center items-center text-xl font-bold mx-auto">
                        {radios.map((radio) => {
                            return (
                                <li key={radio}>
                                    <input
                                        className="h-4 w-4"
                                        type="radio"
                                        value={radio}
                                        id={radio}
                                        checked={radio === selectedRadio}
                                        onChange={(e) => setSelectedRadio(e.target.value)}
                                    />
                                    <label className="cursor-pointer" htmlFor={radio}> {radio}</label>
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                    <table className="cryptos-list w-full bg-gray-100 rounded-md shadow">
                        <thead>
                        <tr className='border-b border-gray-300 text-left'>
                            <th className='p-5'>Name</th>
                            <th className='p-5'>Pairs</th>
                            <th className='p-5'>Price</th>
                            <th className='p-5'>Trust</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {data
                            .filter((market) => market.target === selectedRadio)
                            .map((market) => (
                                <CryptoMarket market={market}
                                              key={market.market.identifier + ' ' + market.base + '/' + market.target}/>
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

export default Crypto;