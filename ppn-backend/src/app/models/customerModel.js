import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import AutoIncrementFactory from 'mongoose-sequence'; 
const AutoIncrement = AutoIncrementFactory(mongoose);
const customerSchema = new mongoose.Schema(
  { 
    _id: {type: Number},
    name: { type: String, required: true},
    email: { type: String},
    phoneNumber: { type: String, required: true},
    service:{type: String},
    registrationDate: {type: Date, default: Date.now()},
    message: { type: String}
  },
  {
    _id: false,
    timestamps: true,
  }
);

customerSchema.plugin(AutoIncrement);
customerSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});
const Customer = mongoose.model('customer', customerSchema);
export default Customer;
