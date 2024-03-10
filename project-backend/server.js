const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', authRoutes);
app.get('/getUserData', userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
