import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoList from "./components/CryptoList";
import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // Fetch coins
  const fetchCoins = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 30000); // Auto-refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
  coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>💰 Crypto Tracker</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#facc15" : "#1e293b",
            color: darkMode ? "#1e293b" : "#facc15",
            fontWeight: "bold",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-search"
      />

      <CryptoList coins={filteredCoins} />
    </div>
  );
}

export default App;
