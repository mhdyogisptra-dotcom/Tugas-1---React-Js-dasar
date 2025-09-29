import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-light">  {/* Tambah bg-light untuk warna navbar */}
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2xl me-2" style={{ color: "blue" }}></i>  {/* Tambah me-2 untuk spacing */}
          <span className="fs-4 fw-bold">Bookstore</span>  {/* Tambah fw-bold untuk tebal */}
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-dark">Home</Link></li>  {/* Tambah text-dark untuk kontras */}
        <li className="nav-item"><Link to="/team" className="nav-link px-2 text-dark">Team</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-dark">Contact</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Register</button>
      </div>
    </header>
  );
}

export default Navbar;
