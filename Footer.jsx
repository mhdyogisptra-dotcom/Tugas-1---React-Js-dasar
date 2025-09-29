import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">  {/* Latar gelap, teks putih */}
      <div className="container">
        <div className="row">
          {/* Kolom Info Toko */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Bookstore</h5>
            <p>Toko buku online favoritmu. Temukan inspirasi dari ribuan judul buku berkualitas.</p>
            <p>
              <i className="fa-solid fa-map-marker-alt me-2"></i> Jl. Bacaan No. 123, Jakarta<br />
              <i className="fa-solid fa-phone me-2"></i> 081-234-5678<br />
              <i className="fa-solid fa-envelope me-2"></i> info@bookstore.com
            </p>
          </div>

          {/* Kolom Link Cepat */}
          <div className="col-md-4 mb-3">
            <h5>Link Cepat</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/team" className="text-light text-decoration-none">Team</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Kolom Sosial & Identitas */}
          <div className="col-md-4 mb-3">
            <h5>Ikuti Kami</h5>
            <div className="mb-3">
              <a href="#" className="text-light me-3"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="#" className="text-light me-3"><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href="#" className="text-light"><i className="fa-brands fa-twitter fa-lg"></i></a>
            </div>
            <p className="small">
              Developed by <strong>Muhammad Yogi Saputra</strong><br />
              Frontend Developer & Book Enthusiast<br />
              © 2023 Bookstore. All rights reserved.
            </p>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr className="my-4" />
        <div className="text-center small">
          <p>&copy; 2025 Bookstore by Muhammad Yogi Saputra. Dibuat dengan ❤️ untuk pecinta buku.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
