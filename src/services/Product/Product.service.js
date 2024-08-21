// services/campaign.service.js

const { Op } = require("sequelize");
const db = require("../../models");
const Product = db.Product;

const ProductService = {

  getProductById: async function(productId) {
    try {
      return await Product.findOne({
        where: {
          id: productId
        }
      });

    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
};

module.exports = ProductService;