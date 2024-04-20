// mongodb.js

const mongoose = require('mongoose');

// Define your schema
// const propertyListSchema = new mongoose.Schema({
//     "type": "object",
//     "properties": {
//       "name": {
//         "type": "string"
//       },
//       "propertyType": {
//         "type": "array",
//         "items": {
//           "type": "string"
//         }
//       },
//       "category": {
//         "type": "string"
//       },
//       "bedrooms": {
//         "type": "string"
//       },
//       "feature&Aminities": {
//         "type": "array",
//         "items": {
//           "type": "string"
//         }
//       },
//       "cities": {
//         "type": "string"
//       },
//       "location": {
//         "type": "string"
//       },
//       "fileUpload": {
//         "type": "string"
//       },

//     },
//   }
//   );
const propertyListSchema = new mongoose.Schema({
    name: String,
    propertyType: [String],
    category: String,
    bedrooms: String,
    featureAndAminities: [String],
    cities: String,
    location: String,
    price: Number,
    fileUpload: [{
      name: String,
      preview: String,
      thumbUrl: String
  }]
  });
  

// Create a model based on the schema
const FormDataModel = mongoose.models.propertyList? mongoose.models.propertyList: mongoose.model('propertyList', propertyListSchema);
// Export the model
module.exports = FormDataModel;
