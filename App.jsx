import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Hilangkan Link, karena sudah di Navbar
import Navbar from './components/Navbar';  // Import Navbar baru
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contacts';
import Footer from './components/Footer';  // Import Footer baru

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">  {/* Layout full height: Navbar atas, konten tengah, Footer bawah */}
      <Navbar />  {/* Navbar di atas */}

      {/* Konten utama dengan routing */}
      <main className="flex-grow-1">  {/* Biar footer selalu di bawah */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <Footer />  {/* Footer di bawah */}
    </div>
  );
}

export default App;
