// mongodb.js

const mongoose = require('mongoose');

const propertyListSchema = new mongoose.Schema({
    name: String,
    propertyType: [String],
    category: String,
    bedrooms: String,
    featureAndAminities: [String],
    cities: String,
    location: String,
    price: Number,
    description:String,
    area:String,
    fileUpload: [{
      name: String,
      preview: String,
      thumbUrl: String
    }]
    },{
    timestamps: true,
  });
  

// Create a model based on the schema
const FormDataModel = mongoose.models.propertyList? mongoose.models.propertyList: mongoose.model('propertyList', propertyListSchema);
// Export the model
module.exports = FormDataModel;
