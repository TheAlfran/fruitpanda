import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../Global/productList";
import { API_URL } from "../Global/baseURL";
const apiUrl = `${API_URL}`;

export function useProductData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${apiUrl}?populate=image`
      );
      console.log("NARA DAERII", response.data.data);
      setIsLoading(false);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
      return [];
    }
  };

  useEffect(() => {
    if (!isLoading) {
      fetchProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
        });
    }
  }, []);

  return { products, isLoading };
}

