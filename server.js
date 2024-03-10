const express = require("express");
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', async (req, res) => {
    req.query.code;
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
});

app.get('/getUserData', async (req, res) => {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }). then((response) => {
        return response.json();
    }). then((data) => {
        console.log(data);
        res.json(data);
    })
})

const port = 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
