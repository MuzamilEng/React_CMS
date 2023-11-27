// routes/components.js

const express = require('express');
const router = express.Router();
const componentsController = require('../controllers/component');

// Create a new component
router.post('/', componentsController.createComponent).get(componentsController.getAllComponents)
// Get a specific component by ID
router.get('/:id', componentsController.getComponentById).put(componentsController.updateComponentById).delete(componentsController.deleteComponentById);

module.exports = router;
