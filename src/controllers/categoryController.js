const category = require('../models/categories');

function listCategories(req, res) {
    category.listCategories((err, result) => {
        if (err) {
           console.log(err);
           return res.status(500).send({
                msg: "Error in fetching the categories",
                success: false
           });
        } else {
            return res.status(200).send({
                msg: "Successfully fetch the categories",
                success: true,
                categories: result
            });
        }
    });
}

function addCategory(req, res) {
    let data = req.body;
    if(data.name) {
        category.addCategory(data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                     msg: "Something went wrong, can't add category",
                     success: false
                });
             } else {
                 return res.status(200).send({
                     msg: "Successfully added the categories",
                     success: true,
                 });
             }
        });
    } else {
        return res.status(400).send({
            msg: "Incorrect parameter sent for request",
            success: false
        })
    }
}

module.exports = {listCategories, addCategory};