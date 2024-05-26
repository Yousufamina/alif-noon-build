// mongodb.js

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    language: String,
    phone: Number,
    description:String,
    email:String,
    field:String,
    fileUpload: [{
      name: String,
      preview: String,
      thumbUrl: String
  }]
  });
  

// Create a model based on the schema
const EmployeeDataModel = mongoose.models.employee? mongoose.models.employee: mongoose.model('employee', employeeSchema);
// Export the model
module.exports = EmployeeDataModel;
