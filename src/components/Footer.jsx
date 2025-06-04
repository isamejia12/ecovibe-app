import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark text-light py-5 mt-auto">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <h5 className="mb-4 text-success">EcoVibe</h5>
          <p className="text-muted mb-4">
            Transformando la moda con consciencia ambiental. 
            Creemos en un futuro donde la moda y la sostenibilidad van de la mano.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-muted hover-text-success">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a href="#" className="text-muted hover-text-success">
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a href="#" className="text-muted hover-text-success">
              <i className="bi bi-twitter fs-5"></i>
            </a>
            <a href="#" className="text-muted hover-text-success">
              <i className="bi bi-pinterest fs-5"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-6">
          <h6 className="mb-4">Navegación</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link to="/" className="text-muted text-decoration-none hover-text-success">Inicio</Link>
            </li>
            <li className="mb-2">
              <Link to="/tienda" className="text-muted text-decoration-none hover-text-success">Tienda</Link>
            </li>
            <li className="mb-2">
              <Link to="/marcas" className="text-muted text-decoration-none hover-text-success">Marcas</Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="text-muted text-decoration-none hover-text-success">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6">
          <h6 className="mb-4">Categorías</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none hover-text-success">Ropa Mujer</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none hover-text-success">Ropa Hombre</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none hover-text-success">Accesorios</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none hover-text-success">Novedades</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6">
          <h6 className="mb-4">Newsletter</h6>
          <p className="text-muted mb-4">
            Suscríbete para recibir noticias sobre sostenibilidad y ofertas exclusivas.
          </p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Tu email"
              aria-label="Tu email"
            />
            <button className="btn btn-success" type="button">
              Suscribirse
            </button>
          </div>
          <small className="text-muted">
            Al suscribirte, aceptas nuestra política de privacidad.
          </small>
        </div>
      </div>

      <hr className="my-4 border-secondary" />

      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="text-muted mb-md-0">
            © 2024 EcoVibe. Todos los derechos reservados.
          </p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none hover-text-success">
                Términos y Condiciones
              </a>
            </li>
            <li className="list-inline-item ms-3">
              <a href="#" className="text-muted text-decoration-none hover-text-success">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 