import { useState, useEffect } from "react";
import { Product } from "../Global/productList";

export function useProductFilter(products: Product[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((product) =>
        product.attributes.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchQuery, products]);

  return { searchQuery, setSearchQuery, filteredProducts };
}
export { Product };

