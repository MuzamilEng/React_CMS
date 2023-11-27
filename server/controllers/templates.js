// Create a new component
const Template = require('../models/template');

exports.createTemplate = async (req, res) => {
    const { TemplateName, attributes } = req.body;
  
    try {
      const newTemplate = new Template();
      newTemplate.TemplateName = TemplateName;
      newTemplate.attributes = attributes;
  
      console.log(newTemplate, 'newTemplate');
  
      const saveTemplate = await newTemplate.save();
  
      res.status(201).json({
        success: true,
        saveTemplate,
        payloadData: req.body,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving template' });
    }
  };
  
  
// Get all components
exports.getAllTemplates = (req, res) => {
    Template.find({}, (err, templates) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching templates' });
    }
    res.json(templates);
  });
};

// Get a specific component by ID
exports.getTemplateById = (req, res) => {
  const { id } = req.params;
  Template.findById(id, (err, template) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching template' });
    }
    if (!template) {
      return res.status(404).json({ error: 'template not found' });
    }
    res.json(template);
  });
};

// Update a specific component by ID
exports.updateTemplateById = (req, res) => {
  const { id } = req.params;
  const { templateName, attributes } = req.body;

  Template.findByIdAndUpdate(
    id,
    { templateName, attributes },
    { new: true },
    (err, template) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating template' });
      }
      if (!template) {
        return res.status(404).json({ error: 'template not found' });
      }
      res.json(template);
    }
  );
};

// Delete a specific component by ID
exports.deleteTemplateById = (req, res) => {
  const { id } = req.params;
  Template.findByIdAndDelete(id, (err, template) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting template' });
    }
    if (!template) {
      return res.status(404).json({ error: 'template not found' });
    }
    res.json({ message: 'template deleted successfully' });
  });
};
