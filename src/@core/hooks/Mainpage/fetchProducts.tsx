// useProductData.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../Global/productList";
import { API_URL } from "../Global/baseURL";
const apiUrl = `${API_URL}`;

export function useProductData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [products1, setProducts1] = useState<Product[]>([]);
 


  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}?populate=image`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };


  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        // Handle any errors here
      });
  }, []);

  const fetchProducts1 = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}?filters[id][$in][1]=1&populate=image`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchProducts1()
      .then((response) => {
        setProducts1(response);
      })
      .catch((error) => {
        // Handle any errors here
      });
  }, []);

 

  return { products, products1 };
}
