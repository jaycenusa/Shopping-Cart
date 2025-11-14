import { useState, useCallback } from 'react';
import Page from './pages/Page.jsx';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = useCallback((item, quantity) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      // If it exists, update the quantity
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;

      } 
      // If it doesn't exist, add the new item with quantity
      else if(quantity > 0) {
        return [...prevCart, { ...item, quantity }];
      }

      // If there is no change to the cart, return previous state
      else {
        return prevCart;
      }
    });
  }, []);

  const adjustQuantity = useCallback((item, newQuantity) => {
    const existingCalculation = (item.quantity || 1) + newQuantity;
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: existingCalculation }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0) // Remove items with quantity 0 or less
    );
  }, []);
  
  return (
    <>
      <Page cart={cart} updateCart={handleAddToCart} adjustQuantity={adjustQuantity}/>
    </>
  )
}

export default App
