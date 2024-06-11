import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../src/cart';
import ProductCard from '../src/Card';
import { addItem, setProducts } from '../src/Redux-store/Slice/Item';

export default function App() {
  const dispatch = useDispatch();

  const myProducts = useSelector((state) => state.cart.products);


  async function getAllProducts() {
    try {
      let response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        let data = await response.json();
        dispatch(setProducts(data.products)); // Dispatch action to set products
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <Cart />
      <div className="h-fit flex flex-wrap ml-40">
        {Array.isArray(myProducts) && myProducts.length > 0 ? (
          myProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}
