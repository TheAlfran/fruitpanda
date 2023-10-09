import React, { createContext, useContext, useState } from 'react';
import { Product } from '../Main/MainPage';

type ProductContextType = {
  selectedProducts: Product[];
  addProductToCart: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProductToCart = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProductToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
