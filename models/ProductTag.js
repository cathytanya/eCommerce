const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // the column ID
    id: {
      // Integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      initialAutoIncrement: true
    },
    // the column product_id
    product_id: {
      // Integer
      type: DataTypes.INTEGER,
      // References the `Product` model's `id`
      references:{
        model: 'product',
        key: 'id'
        }
    },
    // the column tag_id
    tag_id: {
      // Integer
      type: DataTypes.INTEGER,
      // References the `Tag` model's `id`
      references:{
        model: 'tag',
        key: 'id'
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
