const express = require('express');

const {
    getCategoryIndex,
    getAddedCategory,
    getEditCategory,
    getEditedCategory,
    getDeleteCategory,
    getDeletedCategory,
    getDuplicateCategory,
    getNoFields,
} = require('../controllers/category/get');

const {
    postAddCategory,
    postEditCategory,
    postDeleteCategory,
} = require('../controllers/category/post');

// create router
const router = express.Router();

// GET requests

// index request
router.get('/', getCategoryIndex);

// add request
router.get('/category/added', getAddedCategory);

// edit requests
router.get('/category/edit', getEditCategory);
router.get('/category/edited', getEditedCategory);

// delete requests
router.get('/category/delete', getDeleteCategory);
router.get('/category/deleted', getDeletedCategory);

// error requests
router.get('/category/duplicate', getDuplicateCategory);
router.get('/category/no-fields', getNoFields);

// POST requests
router.post('/category/add', postAddCategory);
// router.post('/category/edit/:id', postEditCategory);
router.post('/category/delete/:id', postDeleteCategory);

// export router
module.exports = router;
