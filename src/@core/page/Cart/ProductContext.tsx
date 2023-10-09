import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Product } from '../Main/MainPage';

type ProductContextType = {
    selectedProducts: Product[];
    setSelectedProduct1: React.Dispatch<React.SetStateAction<Product[]>>;
  };


const ProductContext = createContext<{
    selectedProduct: Product | null; // Adjust the type based on your Product type
    setSelectedProduct1: React.Dispatch<React.SetStateAction<Product | null>> | null;
  } | null>(null);
  
  export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct1] = useState<Product | null>(null);
  
    return (
      <ProductContext.Provider value={{ selectedProduct, setSelectedProduct1 }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
export const useProductContext = () => {
  return useContext(ProductContext);
};
