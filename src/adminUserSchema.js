// mongodb.js
const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});
  
// Create a model based on the schema
const AdminDataModel = mongoose.models.adminUser? mongoose.models.adminUser: mongoose.model('adminUser', adminUserSchema);
// Export the model
module.exports = AdminDataModel;
