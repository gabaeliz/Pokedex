require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 5000,
    DB: {
      PORT: process.env.DB_PORT || 5432,
      HOST: process.env.DB_HOST || '127.0.0.1',
      USER: process.env.DB_USER,
      NAME: process.env.DB_NAME,
      PASSWORD: process.env.DB_PASSWORD,
      dialect: 'postgres',
      ENV: "development",
      seederStorageTableName: "sequelize_data",
},
};