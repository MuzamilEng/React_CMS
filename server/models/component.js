const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  componentName: String,
  attributes: mongoose.Schema.Types.Mixed, // Store dynamic attributes here
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;