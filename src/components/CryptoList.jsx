import React from "react";

const CryptoList = ({ coins, usdToInr }) => {
  return (
    <div>
      <div className="crypto-header">
        <span style={{marginRight: "189px"}}>Name</span>
        <span>Price (USD)</span>
        <span>Price (INR)</span>
        <span>Change %</span>
        <span>Change ₹</span>
      </div>

      {coins.map((coin) => (
        <div key={coin.id} className="crypto-card">
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>

          <p>${coin.current_price.toFixed(2)}</p>
          <p>₹{(coin.current_price * usdToInr).toFixed(2)}</p>
          <p className={coin.price_change_percentage_24h > 0 ? "positive" : "negative"}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className={coin.price_change_percentage_24h > 0 ? "positive" : "negative"}>
            ₹{((coin.current_price * usdToInr) * coin.price_change_percentage_24h / 100).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
