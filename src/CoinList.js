import React, { useState, useEffect } from "react";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    try {
      // bullx.io API'den yeni listelenen coinleri çek
      const response = await fetch('https://api.bullx.io/v1/new-listings');
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      setError('Coin listesi yüklenirken bir hata oluştu');
      setLoading(false);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      <h2>New Listing Meme Coins</h2>
      <div style={styles.coinGrid}>
        {coins.map((coin) => (
          <div key={coin.id} style={styles.coinCard}>
            <img src={coin.logo} alt={coin.name} style={styles.logo} />
            <h3>{coin.name}</h3>
            <p>Sembol: {coin.symbol}</p>
            <p>Fiyat: ${coin.price}</p>
            <p>24s Değişim: {coin.priceChange24h}%</p>
            <button style={styles.button}>
              Trade on Bullx.io
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  coinGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  coinCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#61dafb',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

export default CoinList;
