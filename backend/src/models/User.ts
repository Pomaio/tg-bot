import { model, Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  id: String,
  registration: { type: Date, default: Date.now },
}, {
  "toJSON": {
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    }
  }
});



export const User = model('Users', UserSchema);
