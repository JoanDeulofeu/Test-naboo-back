import mongoose from 'mongoose';
import collections from '../collections';

const collectionName = collections['test']['users'];

const usersSchema = new mongoose.Schema(
  {
    // Id of the user
    id: {
      required: true,
      type: String,
      unique: true,
    },
    // FirstName of the user
    firstName: {
      required: true,
      type: String,
    },
    // LastName of the user
    lastName: {
      required: true,
      type: String,
    },
    // Email of the user
    email: {
      required: true,
      type: String,
    },
  },
  { collection: collectionName },
);

export default mongoose.model(collectionName, usersSchema);
