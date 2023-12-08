const Template = require('../models/template');

exports.createTemplate = async (req, res) => {
  const { mainTitle, templates } = req.body;
  console.log(req.body, 'req.body');

  try {
    // Find or create a document with the specified mainTitle
    let templateDoc = await Template.findOne({ mainTitle });

    if (!templateDoc) {
      templateDoc = new Template({ mainTitle, templates: [] });
    }

    // Add the new templates to the templates array
    templateDoc.templates.push(...templates)

    // Save the updated document
    const savedTemplate = await templateDoc.save();
    console.log(savedTemplate, 'savedTemplate');

    res.status(201).json({
      success: true,
      savedTemplate,
      payloadData: req.body,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving template' });
  }
};


// exports.createTemplate = async (req, res) => {
//   const { name, fields } = req.body; // Assuming your payload has 'name' and 'fields'

//   try {
//     const newTemplate = new Template({
//       TemplateName: name, // Map 'name' to 'TemplateName'
//       attributes: { fields }, // Map 'fields' to 'attributes'
//     });

//     console.log(newTemplate, 'newTemplate --------------------1');
//     console.log(req.body, 'req.body --------------------2');
//     console.log(newTemplate.toObject(), 'newTemplate ----------------------3');

//     const saveTemplate = await newTemplate.save();

//     res.status(201).json({
//       success: true,
//       saveTemplate,
//       payloadData: req.body,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error saving template' });
//   }
// };

  
  
// Get all components
exports.getAllTemplates = (req, res) => {
  console.log('request bodey');
    Template.find({}, (err, templates) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching templates' });
    }
    res.status(200).json(templates);
    console.log(templates, 'templates');
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
