import React from 'react';

const ExchangeCoin = (props) => {
    return (
        <div>
            {props.coin.base + '/' + props.coin.target}
        </div>
    );
};

export default ExchangeCoin;