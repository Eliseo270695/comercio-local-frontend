
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import axios from 'axios';

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {productos.map((producto) => (
            <ProductCard key={producto._id} producto={producto} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
