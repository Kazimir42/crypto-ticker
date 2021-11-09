import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import CryptoMarket from "../components/CryptoMarket";
import CryptoItem from "../components/CryptoItem";

const Crypto = () => {
    const [data, setData] = useState([]);
    const [idCoin, setIdCoin] = useState('');

    useEffect(() => {
        let id = window.location.pathname.split('/').pop();
        setIdCoin(id)

        axios
            .get('https://api.coingecko.com/api/v3/coins/'+ id +'/tickers')
            .then((result) => {
                setData(result.data.tickers);
            });
    }, []);

    return (
        <div className="">
            <Header />
            <section className="container mx-auto mb-20 min-h-screen">
                <div>
                    <table className="cryptos-list w-full bg-gray-100 rounded-md shadow">
                        <thead>
                        <tr className='border-b border-gray-300 text-left'>
                            <th className='p-5'>Name</th>
                            <th className='p-5'>Pairs</th>
                            <th className='p-5'>Price</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {data
                            .filter((market) => market.target === 'USD')
                            .map((market) => (
                                <CryptoMarket market={market} key={market.market.identifier + ' ' + market.base + '/' + market.target} />
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Crypto;