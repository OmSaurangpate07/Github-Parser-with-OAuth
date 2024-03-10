const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.getUserData = async (req, res) => {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        res.json(data);
    });
};
