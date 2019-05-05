const {Schema, model} = require('mongoose');


// Define collection and schema for Business
const Business = new Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = model('Business', Business);