module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define(
      'Product',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        desc: {
          type: Sequelize.STRING(255),
          allowNull: false,
          defaultValue: false,
        },
        price: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        quantity: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: 'Product',
      },
    );
    return Product;
};  