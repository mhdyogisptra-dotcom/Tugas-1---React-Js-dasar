import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Hubungi Kami</h1>
      <p className="text-center lead mb-4">Kirim pesan untuk rekomendasi buku!</p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input type="text" className="form-control" id="name" placeholder="Nama kamu" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Pesanmu..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim</button>
          </form>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-md-12">
          <p><i className="fa-solid fa-map-marker-alt text-primary"></i> Jl. Buku No. 123, Jakarta</p>
          <p><i className="fa-solid fa-phone text-primary"></i> 081-234-5678</p>
          <p><i className="fa-solid fa-envelope text-primary"></i> info@bookstore.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
