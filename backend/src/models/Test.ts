import { model, Schema, Document } from 'mongoose';

export interface Question {
  id: string,
  name: string,
  body: string,
  variables?: Array<string>,
  avaliableAnswers?: Array<string>,
  validate?: Array<any>
}

const QuestionSchema = new Schema<Question & Document>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  body: { type: String, required: true },
  variables: [String],
  avaliableAnswers: [String],
  validate: [],
});

export interface Topic {
  name: string,
  questions?: Array<Question>
}

const TopicSchema = new Schema<Topic & Document>({
  name: String,
  questions: [QuestionSchema]
});

export interface Test {
  id: string,
  type: string,
  body?: Array<Topic>
}

export const TestSchema = new Schema<Test & Document>({
  id: { type: String, required: true },
  type: { type: String, required: true },
  body: [TopicSchema]
}, {
  "toJSON": {
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    }
  }
});

export const TestDBModel = model<Test & Document>('Users', TestSchema);
