import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "@/components/ProductCard/ProductCard";
import Cart from "@/components/Cart/Cart";
import style from '../styles/Home.module.scss';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (id: number) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className={style.container}>
      <h1>E-commerce</h1>
      <div className={style.grid}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className={style.cartContainer}>
        <Cart items={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
