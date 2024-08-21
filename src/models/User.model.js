module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'User',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        SubscriptionID: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Disabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        Email: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        FirstName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        LastLogin: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        SubscriptionStart: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        SubscriptionEnd: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: 'User',
      },
    );
    return User;
};  