const Product = require("../models/Product");
const resolver = {
  Query: {
    products: async () => await Product.find({}),
    product: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    createProduct: async (_, args) => {
      const newProduct = new Product(args);
      return await newProduct.save();
    },

    deleteProduct: async (_, { id }) => {
      const result = await Product.findByIdAndDelete(id);
      return !!result;
    },
    updateProduct: async (_, { id, ...updates }) => {
      return await Product.findByIdAndUpdate(id, updates, { new: true });
    },
  },
};
module.exports = resolver;
