// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import CoinList from "./CoinList";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to CoinMultiply</h1>
      </header>
      <main style={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>Discover and trade the newest meme coins on bullx.io.</p>
                <Link to="/login">
                  <button style={styles.button}>Login</button>
                </Link>
              </div>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coins" element={<CoinList />} />
        </Routes>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 CoinMultiply. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '0 20px',
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px 0',
  },
  main: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#61dafb',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  },
  footer: {
    marginTop: '40px',
    fontSize: '14px',
    color: '#555',
  },
};

export default App;
// Ücretsiz hosting platformları için öneriler:

// 1. Vercel
// - Next.js'in yapımcıları tarafından geliştirilmiş
// - React uygulamaları için mükemmel destek
// - Otomatik deployment ve preview özellikleri
// - Kurulum: 
//   1. vercel.com'da hesap oluştur
//   2. GitHub reposunu bağla
//   3. "Import Project" ile deploy et

// 2. Netlify
// - Kullanımı kolay arayüz
// - Continuous deployment desteği
// - Form handling ve diğer ek özellikler
// - Kurulum:
//   1. netlify.com'da hesap aç
//   2. "New site from Git" ile başla
//   3. Build command: npm run build
//   4. Publish directory: build

// 3. GitHub Pages
// - GitHub'ın ücretsiz hosting servisi
// - package.json'a ekle:
//   "homepage": "https://kullaniciadin.github.io/coinmultiply"
//   "scripts": {
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"
//   }

// - gh-pages paketini yükle: npm install --save-dev gh-pages
// - Deploy için: npm run deploy

// 4. Firebase Hosting
// - Google'ın sunduğu ücretsiz hosting
// - Güvenilir ve hızlı CDN
// - Kurulum:
//   1. Firebase Console'da proje oluştur
//   2. npm install -g firebase-tools
//   3. firebase login
//   4. firebase init
//   5. firebase deploy

// Önerilen: Vercel veya Netlify
// - Kolay kurulum
// - Otomatik SSL
// - CI/CD pipeline
// - Ücretsiz tier yeterli
