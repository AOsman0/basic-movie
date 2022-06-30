const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for books
class Movie extends Model {}

Movie.init();

module.exports = Movie;
