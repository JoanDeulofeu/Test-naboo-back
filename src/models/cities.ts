import mongoose from 'mongoose';
import collections from '../collections';

const collectionName = collections['test']['cities'];

const citiesSchema = new mongoose.Schema(
  {
    // Id of the city
    id: {
      required: true,
      type: String,
      unique: true,
    },
    // Name of the city
    name: {
      required: true,
      type: String,
    },
  },
  { collection: collectionName },
);

export default mongoose.model(collectionName, citiesSchema);
