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
    // Name of the user
    name: {
      required: true,
      type: String,
    },
  },
  { collection: collectionName },
);

module.exports = mongoose.model(collectionName, usersSchema);
