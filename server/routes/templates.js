// routes/components.js

const express = require('express');
const router = express.Router();
const {createTemplate, getAllTemplates, getTemplateById, updateTemplateById, deleteTemplateById} = require('../controllers/templates');


// Create a new component
router.post('/', createTemplate);
router.get('/',  getAllTemplates)
// Get a specific component by ID
router.get('/:id', getTemplateById).put(updateTemplateById).delete(deleteTemplateById);

module.exports = router;