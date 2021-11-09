import React from 'react';

const ExchangeCoin = (props) => {

    const numberFormater = (value) => {
        return (value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    return (
        <tr className="h-16 border-b border-gray-300">
            <td className="flex items-center h-inherit p-5 gap-2 font-bold">
                <p>{props.coin.coin_id}</p>
            </td>
            <td className="p-5">
                <p className="font-bold">{props.coin.base + '/' + props.coin.target}</p>
            </td>
            <td className="p-5">
                <p>{numberFormater(props.coin.converted_last.usd)}</p>
            </td>
            <td className="p-5">
                <div className={"w-6 h-6 rounded-xl bg-" + props.coin.trust_score + "-500 "}></div>
            </td>
            <td className="p-5 text-right">

                <a
                    href={props.coin.trade_url} target='_blank' rel="noopener"
                    className="bg-primary text-white rounded-md p-2 hover:bg-dark-primary">
                    trade now
                </a>

            </td>
        </tr>
    )
        ;
};

export default ExchangeCoin;