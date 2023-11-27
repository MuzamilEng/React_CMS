const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  TemplateName: String,
  attributes: mongoose.Schema.Types.Mixed, // Store dynamic attributes here
});

 const Template = mongoose.model('Template', templateSchema);

module.exports = Template;