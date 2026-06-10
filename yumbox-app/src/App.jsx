import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import productImage from './assets/img.png';

const PRODUCTS_DATA = [
  { id: 1, name: <>Yumbox<br />21 сет</>, weight: '1500 гр', price: 799, image: productImage },
  { id: 2, name: <>Yumbox<br />21 сет</>, weight: '1200 гр', price: 799, image: productImage },
  { id: 3, name: <>Yumbox<br />21 сет</>, weight: '1000 гр', price: 799, image: productImage },
  { id: 4, name: <>Yumbox<br />21 сет</>, weight: '900 гр', price: 799, image: productImage },
  { id: 5, name: <>Yumbox<br />21 сет</>, weight: '1500 гр', price: 799, image: productImage },
  { id: 6, name: <>Yumbox<br />21 сет</>, weight: '1200 гр', price: 799, image: productImage },
  { id: 7, name: <>Yumbox<br />21 сет</>, weight: '1000 гр', price: 799, image: productImage },
  { id: 8, name: <>Yumbox<br />21 сет</>, weight: '900 гр', price: 799, image: productImage },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const delivery = subtotal > 0 ? 50 : 0;

const totalWithDelivery = subtotal + delivery;

const hasDiscount = totalWithDelivery >= 1000;

const finalTotal = hasDiscount
  ? Math.round(totalWithDelivery * 0.9)
  : totalWithDelivery;

  return (
    <div className="app-container">
      <Header totalItems={totalItems} finalTotal={finalTotal} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <HeroSlider />
        <ProductList products={PRODUCTS_DATA} addToCart={addToCart} cart={cart} />
      </main>
      {isCartOpen && (
        <CartSidebar
  cart={cart}
  updateQuantity={updateQuantity}
  removeFromCart={removeFromCart}
  delivery={delivery}
  finalTotal={finalTotal}
  hasDiscount={hasDiscount}
  onClose={() => setIsCartOpen(false)}
/>
      )}
    </div>
    
  );
}

export default App;