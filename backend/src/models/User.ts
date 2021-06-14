import { model, Schema, Document } from 'mongoose';

export interface User {
  id: string,
  name: string,
  registration: Date,
  credentials?: {
    id: string,
    username: string
  }
}

export const UserSchema = new Schema<User & Document>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  registration: { type: Date, default: Date.now },
  credentials: {}
}, {
  "toJSON": {
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    }
  }
});

export const UserDBModel = model<User & Document>('Users', UserSchema);
