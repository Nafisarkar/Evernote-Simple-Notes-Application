import mongoose, {
  Schema,
  type InferHydratedDocType,
  type InferSchemaType,
} from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export type Note = InferSchemaType<typeof noteSchema>;
export type NoteDocumnet = InferHydratedDocType<Note>;

export const NoteModel = mongoose.model<Note>("Note", noteSchema);
