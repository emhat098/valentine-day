import mongoose, { ObjectId } from "mongoose";

export interface Data {
  _id?: ObjectId;
  name: string;
  value: any;
}

const DataSchema = new mongoose.Schema<Data>(
  {
    name: { type: String, required: true },
    value: { type: mongoose.Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.models?.Data || mongoose.model("Data", DataSchema);

export default Data;
