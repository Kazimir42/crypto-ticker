import React from 'react';
import {Link} from "react-router-dom";

const ExchangeItem = (props) => {

    const numberFormater = (value) => {
        return (value).toLocaleString('en-US', {
            style: 'decimal',
        });
    }

    return (
        <tr className="h-16 border-b border-gray-300">
            <td className="flex items-center h-inherit p-5 gap-2 font-bold">
                <img src={props.exchange.image} className="w-10" alt={props.exchange.name}/>
                <p>{props.exchange.name}</p>
            </td>
            <td className="p-5">
                <p>{props.exchange.trust_score}</p>
            </td>
            <td className="p-5">
                <p>{numberFormater(props.exchange.trade_volume_24h_btc)}</p>
            </td>
            <td className="p-5 text-right">
                <Link
                    to={`/exchanges/${props.exchange.id}`}
                    className="bg-primary text-white rounded-md p-2 hover:bg-dark-primary">
                    what coins ?
                </Link>
            </td>
        </tr>

    );
};

export default ExchangeItem;