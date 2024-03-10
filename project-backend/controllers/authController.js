const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

const clientId = "457f51ae622322106435";
const clientSecret = "87825bce12b594891b6faec4f9b92f9a9b34669b";

exports.getAccessToken = async (req, res) => {
    req.query.code;

    const params = "?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        res.json(data);
    });
};
