import React from 'react';
import { Link } from 'react-router-dom';  // Tambah kalau butuh link di team

function Team() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Tim Bookstore Kami</h1>
      <p className="text-center lead mb-4">Kami tim yang passionate tentang buku. Dipimpin oleh Muhammad Yogi Saputra!</p>
      
      <div className="row">
        {/* Card 1: Alice */}
        <div className="col-md-3 mb-4">  {/* Ubah ke col-md-3 untuk 4 cards */}
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=1" className="card-img-top" alt="Alice" />
            <div className="card-body">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">CEO. Penggemar buku self-help.</p>
            </div>
          </div>
        </div>

        {/* Card 2: Bob */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=2" className="card-img-top" alt="Bob" />
            <div className="card-body">
              <h5 className="card-title">Bob Smith</h5>
              <p className="card-text">Backend Developer. Kelola stok buku.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Carol */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=3" className="card-img-top" alt="Carol" />
            <div className="card-body">
              <h5 className="card-title">Carol Lee</h5>
              <p className="card-text">Kurator Buku. Rekomendasi favorit.</p>
            </div>
          </div>
        </div>

        {/* Card 4: (Muhammad Yogi Saputra) */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow border-primary">  {/* Border biru untuk highlight */}
            <img src="https://picsum.photos/300/200?random=4" className="card-img-top" alt="Muhammad Yogi Saputra" />
            <div className="card-body">
              <h5 className="card-title">Muhammad Yogi Saputra</h5>
              <p className="card-text">Frontend Developer. Pembuat website ini menggunakan React + Vite. Pecinta buku Atomic Habits!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
