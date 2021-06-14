import { model, Schema, Document } from 'mongoose';

export interface Recruiter {
  name: string,
  id: string,
  registration: Date,
  credentials?: {
    id: string,
    username: string
  }
}

export const RecruiterSchema = new Schema<Recruiter & Document>({
  name: { type: String, required: true },
  id: { type: String, required: true },
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

export const RecruiterDBModel = model<Recruiter & Document>('Recruiter', RecruiterSchema);
