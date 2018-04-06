import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  contactId: Number,
  firstname: String,
  lastname: String,
  phone: String,
  address: String,
  email: String,
});

const model = mongoose.model('contact', contactSchema);

export default model;
