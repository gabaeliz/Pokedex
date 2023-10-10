const { PORT } = require("./config/config");
const { db } = require("./config/database");
const express = require("express");
const server = express();
  
    
db.sync().then(async () => {
server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
});