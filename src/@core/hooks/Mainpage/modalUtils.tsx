import { useState } from 'react';
import { Product } from './searchProduct';

export function useProductModal() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = (productmodal: Product) => {
    setSelectedProduct(productmodal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    selectedProduct,
    isModalVisible,
    handleButtonClick,
    closeModal,
  };
}
