const Product = require("../models/product.js");

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },
      {
        $group: {
          _id: "$category",
          averagePrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get product stats" });
  }
};
const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalrevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          // like select in sql
          _id: 0,
          totalrevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({ success: true, data: result });
  } catch (E) {
    console.log(E);
    res.status(500).json({ error: "Failed to get product analysis" });
  }
};
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Nataraj",
        category: "Stationery",
        price: 120,
        inStock: true,
        tags: ["paper", "study", "office"],
      },
      {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        inStock: true,
        tags: ["mouse", "wireless", "computer", "accessories"],
      },
      {
        name: "Nataraj",
        category: "Stationery",
        price: 1200,
        inStock: true,
        tags: ["paper", "study", "office"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);

    res.status(202).json({
      success: true,
      message: "Sample products inserted successfully",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to insert sample products" });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
