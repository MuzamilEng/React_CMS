// routes/components.js

const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templates');

// Create a new component
router.post('/', templateController.createTemplate).get(templateController.getAllTemplates)
// Get a specific component by ID
router.get('/:id', templateController.getTemplateById).put(templateController.updateTemplateById).delete(templateController.deleteTemplateById);

module.exports = router;
