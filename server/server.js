const express = require("express");
const app = express();

app.get("https://nodejs-backend-server.netlify.app/", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
})

app.listen(5000, () => { console.log("Server started on port 5000.") });