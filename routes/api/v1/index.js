const express = require('express');
const categoryController = require("../../../src/controllers/categoryController");

let router = express.Router();

router.get("/category/all", categoryController.listCategories);
router.post("/category/add", categoryController.addCategory);

module.exports = router;