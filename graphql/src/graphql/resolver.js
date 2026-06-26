const products = require("../data/product");
const resolver = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((item) => item.id === id),
  },
  Mutation: {
    createProduct: (_, { name, category, price, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        name,
        category,
        price,
        inStock,
      };
      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id === id);
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
    updateProduct: (_, ...updates) => {
      const index = products.findIndex((product) => product.id === id);
      if (index === -1) return null;
      const updatedProduct = {
        ...products[index],
        ...updates,
      };
      products[index] = updatedProduct;
      return updatedProduct;
    },
  },
};
module.exports = resolver;
