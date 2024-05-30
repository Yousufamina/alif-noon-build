// mongodb.js
const mongoose = require('mongoose');

const subscribeUserSchema = new mongoose.Schema({
        email: String
    },
    {
        timestamps: true,
    });
  
// Create a model based on the schema
const SubscribeDataModel = mongoose.models.subscribeUser? mongoose.models.subscribeUser: mongoose.model('subscribeUser', subscribeUserSchema);
// Export the model
module.exports = SubscribeDataModel;
