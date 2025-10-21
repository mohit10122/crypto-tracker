import React from "react";

const CryptoList = ({ coins }) => {
  return (
    <div>
      {coins.map((coin) => (
        <div key={coin.id} className="crypto-card">
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
          <p>${coin.current_price}</p>
          <p className={coin.price_change_percentage_24h > 0 ? "positive" : "negative"}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
