const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  mainTitle: String,
  templates: [
    {
      name: String,
      fields: [Object], // Store dynamic attributes here
    },
  ],
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
