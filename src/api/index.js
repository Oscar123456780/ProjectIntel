const express = require("express");

// const emojis = require("./emojis");
// const shoppingitems = require("./shoppingitems");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// router.use("/emojis", emojis);
// router.use("/shoppinglist", shoppingitems);

module.exports = router;
