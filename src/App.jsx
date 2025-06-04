import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container, PageHeader, Section } from "@/components/ui/layout";
import Footer from "./components/Footer";

const backgroundStyle = {
  backgroundImage: "url('/background-ecovibe.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};

const currencyRates = {
  COP: 1,
  USD: 0.0002419,
  EUR: 0.000213,
};

const currencySymbols = {
  COP: "$",
  USD: "US$",
  EUR: "€",
};

const Navbar = ({ cartItems, currency, setCurrency }) => (
  <header>
    <div className="bg-light border-bottom">
      <div className="container d-flex justify-content-end py-2">
        <select 
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="form-select form-select-sm w-auto"
        >
          <option value="COP">COP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container">
        <Link to="/" className="navbar-brand text-white fw-bold">EcoVibe</Link>
        <div className="navbar-nav ms-auto gap-4">
          <Link to="/" className="nav-link text-white">Inicio</Link>
          <Link to="/tienda" className="nav-link text-white">Tienda</Link>
          <Link to="/marcas" className="nav-link text-white">Marcas</Link>
          <Link to="/blog" className="nav-link text-white">Blog</Link>
          <Link to="/carrito" className="nav-link text-white d-flex align-items-center">
            Carrito 
            <span className="badge bg-light text-success ms-2 rounded-pill">
              {cartItems.reduce((total, item) => total + item.cantidad, 0)}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

const productos = [
  { 
    id: 1, 
    nombre: "Camiseta Orgánica", 
    precio: 25000, 
    marca: "Veralume",
    imagen: "/products/images/organic-tshirt.jpg",
    descripcion: "100% algodón orgánico certificado"
  },
  { 
    id: 2, 
    nombre: "Jeans Anchos", 
    precio: 40000, 
    marca: "Linao",
    imagen: "/products/images/wide-jeans.jpg",
    descripcion: "Denim reciclado de alta calidad"
  },
  { 
    id: 3, 
    nombre: "Camiseta de algodón orgánico", 
    precio: 22000, 
    marca: "Ékoa",
    imagen: "/products/images/cotton-tshirt.jpg",
    descripcion: "Teñido natural con índigo"
  },
  { 
    id: 4, 
    nombre: "Pantalón de lino natural", 
    precio: 38000, 
    marca: "Auralé",
    imagen: "/products/images/linen-pants.jpg",
    descripcion: "Lino cultivado sosteniblemente"
  },
  { 
    id: 5, 
    nombre: "Vestido de Tencel", 
    precio: 45000, 
    marca: "Veralume",
    imagen: "/products/images/tencel-dress.jpg",
    descripcion: "Fibra ecológica de eucalipto"
  },
  { 
    id: 6, 
    nombre: "Camisa de cáñamo", 
    precio: 35000, 
    marca: "Linao",
    imagen: "/products/images/hemp-shirt.jpg",
    descripcion: "Cáñamo orgánico transpirable"
  },
  { 
    id: 7, 
    nombre: "Pantaloneta de bambú", 
    precio: 28000, 
    marca: "Ékoa",
    imagen: "/products/images/bamboo-shorts.jpg",
    descripcion: "Fibra de bambú antibacterial"
  },
  { 
    id: 8, 
    nombre: "Sudadera de algodón", 
    precio: 50000, 
    marca: "Auralé",
    imagen: "/products/images/cotton-sweater.jpg",
    descripcion: "Algodón orgánico premium"
  },
  { 
    id: 9, 
    nombre: "Shorts de ramio", 
    precio: 30000, 
    marca: "Veralume",
    imagen: "/products/images/ramie-shorts.jpg",
    descripcion: "Fibra natural resistente"
  },
  { 
    id: 10, 
    nombre: "Pijama de modal ecológico", 
    precio: 33000, 
    marca: "Linao",
    imagen: "/products/images/eco-pajamas.jpg",
    descripcion: "Modal suave y sostenible"
  },
  { 
    id: 11, 
    nombre: "Leggings de Seacell", 
    precio: 42000, 
    marca: "Ékoa",
    imagen: "/products/images/seacell-leggings.jpg",
    descripcion: "Fibra marina regenerativa"
  },
  { 
    id: 12, 
    nombre: "Falda de cupro", 
    precio: 36000, 
    marca: "Auralé",
    imagen: "/products/images/cupro-skirt.jpg",
    descripcion: "Fibra reciclada de algodón"
  },
  { 
    id: 13, 
    nombre: "Chaqueta de lana orgánica", 
    precio: 65000, 
    marca: "Veralume",
    imagen: "/products/images/wool-jacket.jpg",
    descripcion: "Lana de ovejas en libertad"
  },
  { 
    id: 14, 
    nombre: "Camiza tipo esqueleto de bambú", 
    precio: 18000, 
    marca: "Linao",
    imagen: "/products/images/bamboo-tank.jpg",
    descripcion: "Bambú natural y fresco"
  },
  { 
    id: 15, 
    nombre: "Blusa de soya", 
    precio: 32000, 
    marca: "Ékoa",
    imagen: "/products/images/soy-blouse.jpg",
    descripcion: "Fibra de soya biodegradable"
  },
  { 
    id: 16, 
    nombre: "Bufanda de lino", 
    precio: 20000, 
    marca: "Auralé",
    imagen: "/products/images/linen-scarf.jpg",
    descripcion: "Lino orgánico premium"
  },
  { 
    id: 17, 
    nombre: "Zapatos de cuero vegetal", 
    precio: 70000, 
    marca: "Veralume",
    imagen: "/products/images/vegan-shoes.jpg",
    descripcion: "Cuero de piña y hongos"
  }
];

const ProductGrid = ({ productos, currency, addToCart }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: '1rem'
  }}>
    {productos.map((producto) => (
      <div key={producto.id} className="card border-0 shadow-sm h-100">
        <img 
          src={producto.imagen} 
          className="card-img-top" 
          alt={producto.nombre}
          style={{ height: '280px', objectFit: 'cover' }}
        />
        <div className="card-body p-3 d-flex flex-column">
          <h5 className="card-title mb-1">{producto.nombre}</h5>
          <p className="card-subtitle text-muted mb-2">{producto.marca}</p>
          {producto.descripcion && (
            <p className="card-text small text-muted mb-3">{producto.descripcion}</p>
          )}
          <p className="card-text text-success fw-bold mb-3">
            {currencySymbols[currency]}{(producto.precio * currencyRates[currency]).toFixed(2)}
          </p>
          <button 
            onClick={() => addToCart(producto)}
            className="btn btn-success mt-auto w-100"
          >
            <i className="bi bi-cart-plus me-2"></i>
            Agregar
          </button>
        </div>
      </div>
    ))}
  </div>
);

const Home = ({ addToCart, currency }) => (
  <div className="min-h-screen">
    <div className="position-relative text-dark py-5" style={{
      minHeight: '80vh'
    }}>
      <div className="container position-relative py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 py-5">
            <h1 className="display-4 fw-bold mb-4 text-success">Bienvenidos a EcoVibe</h1>
            <p className="lead mb-4 text-dark">
              Descubre nuestra colección de moda sostenible, donde cada prenda cuenta una historia de responsabilidad ambiental y estilo consciente.
            </p>
            <p className="mb-5 text-dark">
              Conectamos a consumidores conscientes con marcas comprometidas con el medio ambiente. 
              Nuestros productos son fabricados éticamente, usando materiales reciclados, orgánicos y biodegradables.
            </p>
            <Link to="/tienda" className="btn btn-success btn-lg px-4 py-2">
              Explorar Colección
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="container py-5">
      <h2 className="h3 mb-4">Productos Destacados</h2>
      <ProductGrid 
        productos={productos.slice(0, 4)} 
        currency={currency} 
        addToCart={addToCart}
      />
    </div>
  </div>
);

const Tienda = ({ addToCart, currency }) => (
  <div className="container py-4">
    <ProductGrid 
      productos={productos} 
      currency={currency} 
      addToCart={addToCart}
    />
  </div>
);

const Marcas = () => {
  const marcas = [
    {
      nombre: "Veralume",
      descripcion: "Moda inspirada en la naturaleza. Veralume utiliza algodón orgánico y tintes vegetales para crear piezas únicas, amigables con la piel y el planeta.",
      imagen: "/brands/images/veralume.svg",
      caracteristicas: [
        "Materiales 100% orgánicos certificados",
        "Tintes naturales y vegetales",
        "Empaque biodegradable",
        "Cero residuos textiles"
      ]
    },
    {
      nombre: "Linao",
      descripcion: "Confección artesanal colombiana con compromiso ambiental. Linao apuesta por procesos de producción sustentables y reutilización de textiles.",
      imagen: "/brands/images/linao.svg",
      caracteristicas: [
        "Producción local artesanal",
        "Upcycling de textiles",
        "Comercio justo",
        "Impacto social positivo"
      ]
    },
    {
      nombre: "Ékoa",
      descripcion: "Ékoa combina innovación con sostenibilidad, ofreciendo prendas hechas de materiales como bambú, Seacell y fibra de soya.",
      imagen: "/brands/images/ekoa.svg",
      caracteristicas: [
        "Materiales innovadores",
        "Tecnología eco-friendly",
        "Diseño minimalista",
        "Fibras biodegradables"
      ]
    },
    {
      nombre: "Auralé",
      descripcion: "Diseños elegantes con fibras nobles como el lino, el ramio y el cupro. Auralé es sinónimo de lujo consciente.",
      imagen: "/brands/images/aurale.svg",
      caracteristicas: [
        "Fibras premium sostenibles",
        "Diseño atemporal",
        "Producción ética",
        "Lujo consciente"
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success mb-3">Nuestras Marcas</h1>
        <p className="lead text-muted">
          Conoce las marcas sostenibles que están cambiando la industria de la moda
        </p>
      </div>

      <div className="row g-5">
        {marcas.map((marca, index) => (
          <div key={marca.nombre} className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-shadow transition">
              <div className="row g-0 h-100">
                <div className="col-lg-6">
                  <img
                    src={marca.imagen}
                    className="w-100 h-100 object-fit-cover"
                    alt={marca.nombre}
                    style={{ minHeight: '300px' }}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h3 className="h4 mb-0">{marca.nombre}</h3>
                      <div className="ms-auto">
                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                          Eco-friendly
                        </span>
                      </div>
                    </div>
                    <p className="card-text mb-4">{marca.descripcion}</p>
                    <div className="mb-4">
                      <h4 className="h6 mb-3">Características:</h4>
                      <ul className="list-unstyled">
                        {marca.caracteristicas.map((caracteristica, i) => (
                          <li key={i} className="mb-2 d-flex align-items-center">
                            <i className="bi bi-check2-circle text-success me-2"></i>
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn btn-outline-success w-100">
                      Ver Colección
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="h3 mb-4">¿Por qué elegir nuestras marcas?</h2>
            <p className="lead mb-5">
              Todas nuestras marcas comparten un compromiso con la sostenibilidad,
              la ética en la producción y la calidad premium en cada prenda.
            </p>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="p-4 bg-success-subtle rounded-4">
                  <i className="bi bi-tree text-success fs-3 mb-3"></i>
                  <h5 className="mb-2">Sostenibilidad</h5>
                  <p className="text-muted small mb-0">
                    Materiales eco-friendly y procesos responsables
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="p-4 bg-success-subtle rounded-4">
                  <i className="bi bi-heart text-success fs-3 mb-3"></i>
                  <h5 className="mb-2">Ética</h5>
                  <p className="text-muted small mb-0">
                    Producción justa y condiciones laborales dignas
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="p-4 bg-success-subtle rounded-4">
                  <i className="bi bi-award text-success fs-3 mb-3"></i>
                  <h5 className="mb-2">Calidad</h5>
                  <p className="text-muted small mb-0">
                    Materiales premium y acabados superiores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Guía de Materiales Sostenibles",
    excerpt: "Descubre los materiales más innovadores y ecológicos en la industria de la moda actual.",
    category: "Materiales",
    image: "/blog/images/sustainable-materials.jpg",
    date: "2024-03-15",
    content: "Los materiales sostenibles están revolucionando la industria de la moda. Desde telas hechas de botellas recicladas hasta cuero de piña, las innovaciones son infinitas."
  },
  {
    id: 2,
    title: "Cómo Cuidar tu Ropa Ecológica",
    excerpt: "Tips y consejos para mantener tus prendas sostenibles en perfecto estado por más tiempo.",
    category: "Cuidados",
    image: "/blog/images/eco-clothing-care.jpg",
    date: "2024-03-10",
    content: "El cuidado adecuado de tu ropa sostenible no solo prolonga su vida útil, sino que también reduce su impacto ambiental."
  },
  {
    id: 3,
    title: "El Impacto de la Moda Rápida",
    excerpt: "Análisis profundo sobre cómo la fast fashion afecta nuestro planeta y qué podemos hacer al respecto.",
    category: "Sostenibilidad",
    image: "/blog/images/fast-fashion-impact.jpg",
    date: "2024-03-05",
    content: "La moda rápida tiene consecuencias devastadoras para nuestro planeta. Es hora de hacer un cambio hacia prácticas más sostenibles."
  },
  {
    id: 4,
    title: "Tendencias en Moda Sostenible 2024",
    excerpt: "Las últimas tendencias en moda eco-friendly que están revolucionando la industria.",
    category: "Tendencias",
    image: "/blog/images/eco-trends.jpg",
    date: "2024-03-01",
    content: "Descubre cómo la moda sostenible está definiendo las tendencias de este año, combinando estilo con responsabilidad ambiental."
  }
];

const blogCategories = [
  { name: "Materiales", count: 8 },
  { name: "Cuidados", count: 5 },
  { name: "Sostenibilidad", count: 12 },
  { name: "Tendencias", count: 6 },
  { name: "Consejos", count: 4 },
  { name: "Noticias", count: 7 }
];

const Blog = () => (
  <div className="container py-5">
    {/* Hero Section */}
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-success mb-3">Blog EcoVibe</h1>
      <p className="lead text-dark mb-0">
        Inspiración y conocimiento para un estilo de vida sostenible
      </p>
    </div>

    {/* Featured Post */}
    <div className="card mb-5 border-0 shadow-sm overflow-hidden">
      <div className="row g-0">
        <div className="col-md-6">
          <img 
            src="/blog/images/main-featured.jpg" 
            alt="Featured post" 
            className="img-fluid h-100 object-fit-cover"
            style={{ minHeight: '400px' }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body p-4 p-lg-5">
            <div className="text-success mb-2">Artículo Destacado</div>
            <h2 className="card-title h3 mb-3">La Revolución de la Moda Sostenible</h2>
            <p className="card-text mb-4">
              Explora cómo la industria de la moda está transformándose hacia prácticas más sostenibles y cómo los consumidores están liderando este cambio. Descubre las innovaciones más recientes en materiales ecológicos y las marcas que están marcando la diferencia.
            </p>
            <button className="btn btn-success">Leer más</button>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Main Content */}
      <div className="col-lg-8">
        <h2 className="h4 mb-4">Artículos Recientes</h2>
        <div className="row g-4">
          {blogPosts.map(post => (
            <div key={post.id} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <img 
                  src={post.image} 
                  className="card-img-top" 
                  alt={post.title}
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                      {post.category}
                    </span>
                    <small className="text-muted">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </small>
                  </div>
                  <h3 className="h5 card-title mb-2">{post.title}</h3>
                  <p className="card-text text-muted">{post.excerpt}</p>
                  <button className="btn btn-link text-success p-0 text-decoration-none">
                    Leer más <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-lg-4">
        <div className="position-sticky" style={{ top: '2rem' }}>
          {/* Search */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h5 mb-3">Buscar</h3>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Buscar artículos..."
                />
                <button className="btn btn-success">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h5 mb-3">Categorías</h3>
              <div className="list-group list-group-flush">
                {blogCategories.map(category => (
                  <a 
                    key={category.name}
                    href="#" 
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0"
                  >
                    {category.name}
                    <span className="badge bg-success-subtle text-success rounded-pill">
                      {category.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">Newsletter</h3>
              <p className="text-muted mb-4">Suscríbete para recibir las últimas novedades en moda sostenible.</p>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Tu email"
                />
              </div>
              <button className="btn btn-success w-100">Suscribirse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Carrito = ({ cartItems, removeFromCart, addQuantity, subtractQuantity, currency }) => (
  <div className="container py-5">
    <h2 className="h3 mb-4">Carrito de Compras</h2>
    {cartItems.length === 0 ? (
      <div className="text-center py-5">
        <div className="mb-4">
          <i className="bi bi-cart3 text-muted" style={{ fontSize: '3rem' }}></i>
        </div>
        <h3 className="h5 mb-3">Tu carrito está vacío</h3>
        <p className="text-muted mb-4">¡Descubre nuestros productos sostenibles!</p>
        <Link to="/tienda" className="btn btn-success px-4">
          Ir a la Tienda
        </Link>
      </div>
    ) : (
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-borderless align-middle mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="ps-4">Producto</th>
                      <th className="text-center">Cantidad</th>
                      <th className="text-end">Precio</th>
                      <th className="text-end pe-4">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4">
                          <div>
                            <h6 className="mb-1">{item.nombre}</h6>
                            <small className="text-muted">{item.marca}</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <button 
                              onClick={() => subtractQuantity(item.id)}
                              className="btn btn-outline-secondary btn-sm px-2"
                            >
                              -
                            </button>
                            <span className="mx-2 fw-medium">{item.cantidad}</span>
                            <button 
                              onClick={() => addQuantity(item.id)}
                              className="btn btn-outline-secondary btn-sm px-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-end">
                          {currencySymbols[currency]}{(item.precio * currencyRates[currency]).toFixed(2)}
                        </td>
                        <td className="text-end fw-medium pe-4">
                          {currencySymbols[currency]}{(item.precio * currencyRates[currency] * item.cantidad).toFixed(2)}
                        </td>
                        <td className="text-center pe-4">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="btn btn-link text-danger p-0"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Resumen del pedido</h5>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-medium">
                  {currencySymbols[currency]}
                  {cartItems
                    .reduce((total, item) => total + item.precio * item.cantidad * currencyRates[currency], 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted">Envío</span>
                <span className="text-success">Gratis</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-medium">Total</span>
                <span className="fw-bold h5 mb-0">
                  {currencySymbols[currency]}
                  {cartItems
                    .reduce((total, item) => total + item.precio * item.cantidad * currencyRates[currency], 0)
                    .toFixed(2)}
                </span>
              </div>
              <button className="btn btn-success w-100 py-2">
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currency, setCurrency] = useState("COP");

  const addToCart = (producto) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const subtractQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ).filter((item) => item.cantidad > 0)
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar cartItems={cartItems} currency={currency} setCurrency={setCurrency} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} currency={currency} />} />
            <Route path="/tienda" element={<Tienda addToCart={addToCart} currency={currency} />} />
            <Route path="/marcas" element={<Marcas />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/carrito"
              element={
                <Carrito
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  addQuantity={addQuantity}
                  subtractQuantity={subtractQuantity}
                  currency={currency}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
