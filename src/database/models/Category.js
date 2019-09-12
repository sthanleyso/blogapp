const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

module.exports = model('Category', CategorySchema);
