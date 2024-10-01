import mongoose from 'mongoose';

const AdminConfigSchema = new mongoose.Schema({
  page2: [String],
  page3: [String],
});

export const AdminConfig = mongoose.model(
  'AdminConfig',
  AdminConfigSchema
);
