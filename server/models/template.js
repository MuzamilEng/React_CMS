const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  mainTitle: String,
  templates: [
    {
      TemplateName: String,
      attributes: JSON, // Store dynamic attributes here
    },
  ],
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
