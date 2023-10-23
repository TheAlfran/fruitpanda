import React, { createContext, useContext, useState } from "react";
import { Product } from "../../hooks/Global/productList";

type ProductContextType = {
  selectedProducts: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productUid: string) => void;
  incrementProductCustomValue: (productUid: string) => void;
  decrementProductCustomValue: (productUid: string) => void;
  clearCart: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
  
}) => {

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProductToCart = (product: Product) => {
    if (!product.id) {
      console.error('Cannot add product without id to cart');
      return;
    }
    
  
    const uid = `${product.id}-${Date.now()}`;
  
    setSelectedProducts(prevProducts => [
      ...prevProducts,
      {
        ...product,
        uid, 
      },
    ]);
  };

  const removeProductFromCart = (productUid: string) => {
    console.log("Removed", productUid)
    let found = false;
    setSelectedProducts((selectedProducts) =>
      selectedProducts.filter((product) => {
        if (!found && product.uid === productUid) {
          found = true;
          return false;
        }
        return true;
      })
    );
  };

  const incrementProductCustomValue = (productUid: string) => {
    setSelectedProducts((selectedProducts) =>
      selectedProducts.map((product) => {
        if (product.uid === productUid) {
          return {
            ...product,
            attributes: {
              ...product.attributes,
              customValue: (product.attributes.customValue || 0) + 1,
            },
          };
        }
        return product;
      })
    );
  };
  
  const decrementProductCustomValue = (productUid: string) => {
    console.log("Decremented", productUid)
    setSelectedProducts((selectedProducts) =>
      selectedProducts.map((product) => {
        if (product.uid === productUid) {
          const customValue = (product.attributes.customValue || 0) - 1;
          if (customValue >= 0) {
            return {
              ...product,
              attributes: {
                ...product.attributes,
                customValue,
              },
            };
          }
        }
        return product;
      })
    );
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProductToCart, removeProductFromCart, clearCart, incrementProductCustomValue,
      decrementProductCustomValue}}>
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