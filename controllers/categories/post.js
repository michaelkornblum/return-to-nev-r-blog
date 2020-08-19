const Category = require('../../models/Category');
const pascalize = require('../../utils/string-operations');

exports.postAddCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            name: pascalize(req.body.name),
        });
        if (category) {
            res.redirect(`/category/duplicate?name=${category.name}`);
        } else {
            await Category.insert({ name: pascalize(req.body.name) });
            res.redirect(`/category/added?name=${pascalize(req.body.name)}`);
        }
    } catch (err) {
        console.error(err);
    }
};
