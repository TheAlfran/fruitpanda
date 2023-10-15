export type Product = {
    id: number;
    attributes: {
      name: string;
      quantity: number;
      price: number;
      category: string;
      description: string;
      customValue?: number;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };