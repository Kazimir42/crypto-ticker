import React from 'react';

const CryptoMarket = (props) => {


    const numberFormater = (value) => {
        return (value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    return (
        <tr className="h-16 border-b border-gray-300">
            <td className="flex items-center h-inherit p-5 gap-2 font-bold">
                <p>{props.market.market.name}</p>
            </td>
            <td className="p-5">
                <p className="font-bold">{props.market.base + '/' + props.market.target}</p>
            </td>
            <td className="p-5">
                <p>{numberFormater(props.market.converted_last.usd)}</p>
            </td>
            <td className="p-5 text-right">

                <a
                    href={props.market.trade_url}
                    className="bg-primary text-white rounded-md p-2 hover:bg-dark-primary">
                    trade now
                </a>

            </td>
        </tr>
    );
};

export default CryptoMarket;