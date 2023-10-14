import React, { createContext, useContext, useState } from "react";
import { Product } from "../Main/MainPage";

type ProductContextType = {
  selectedProducts: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void; // Add this line
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProductToCart = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProductFromCart = (productId: number) => {
    let found = false;
    setSelectedProducts((selectedProducts) =>
      selectedProducts.filter((product) => {
        if (!found && product.id === productId) {
          found = true;
          return false;
        }
        return true;
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProductToCart, removeProductFromCart }}
    >
      {children} 
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
