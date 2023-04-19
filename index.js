const express = require("express");

const app = express()

if (process.env.TRUST_PROXY) {
    app.set("trust proxy", process.env.TRUST_PROXY || "127.0.0.1");
}

app.get("/", (req, res) => {
  return res.status(200).send(req.ip);
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
});





