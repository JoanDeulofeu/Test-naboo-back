import mongoose from 'mongoose';
import collections from '../collections';

const collectionName = collections['test']['activities'];

const activitiesSchema = new mongoose.Schema(
  {
    // Id of the activity
    id: {
      required: true,
      type: String,
      unique: true,
    },
    // Id of the user who created the activity. Linked with users collections
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
    // Id of city of the activity. Linked with cities collections
    cityId: {
      required: true,
      type: String,
    },
    // Price in euros of activity
    price: {
      required: true,
      type: Number,
    },
    // Description of activity (optional)
    description: {
      type: String,
    },
    // Club of activity (optional)
    club: {
      type: String,
    },
  },
  { collection: collectionName },
);

export default mongoose.model(collectionName, activitiesSchema);
