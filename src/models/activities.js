import mongoose from 'mongoose';
import collections from '../collections';

const collectionName = collections['naboo']['activities'];

const activitiesSchema = new mongoose.Schema(
  {
    // Id of the activity
    id: {
      required: true,
      type: String,
      unique: true,
    },
    // Id of the user who created the activity
    userId: {
      required: true,
      type: String,
    },
    // Type of activity
    type: {
      required: true,
      type: String,
      enum: ['hiking', 'yoga', 'surf', 'bike', 'climbing', 'trail'],
      default: 'hiking',
    },
    // Id of city of the activity. Linked with city collections
    cityId: {
      required: true,
      type: String,
    },
    // Price in euros of activity
    price: {
      required: true,
      type: Number,
    },
  },
  { collection: collectionName },
);

module.exports = mongoose.model(collectionName, activitiesSchema);
