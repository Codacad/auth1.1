const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/connection")
const authRouters = require('./routes/authRoutes')
require("dotenv").config();


dbConnection()
const app = express();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use(authRouters)

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404 Page no found...</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is runnin on port ${PORT}`)
})
