// Create a new component
const Component = require('../models/component');

exports.createComponent = (req, res) => {
  const { componentName, attributes } = req.body;
  const newComponent = new Component({ componentName, attributes });
  newComponent.save((err, component) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving component' });
    }
    res.json(component);
  });
};

// Get all components
exports.getAllComponents = (req, res) => {
  Component.find({}, (err, components) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching components' });
    }
    res.json(components);
  });
};

// Get a specific component by ID
exports.getComponentById = (req, res) => {
  const { id } = req.params;
  Component.findById(id, (err, component) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching component' });
    }
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json(component);
  });
};

// Update a specific component by ID
exports.updateComponentById = (req, res) => {
  const { id } = req.params;
  const { componentName, attributes } = req.body;

  Component.findByIdAndUpdate(
    id,
    { componentName, attributes },
    { new: true },
    (err, component) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating component' });
      }
      if (!component) {
        return res.status(404).json({ error: 'Component not found' });
      }
      res.json(component);
    }
  );
};

// Delete a specific component by ID
exports.deleteComponentById = (req, res) => {
  const { id } = req.params;
  Component.findByIdAndDelete(id, (err, component) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting component' });
    }
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json({ message: 'Component deleted successfully' });
  });
};
