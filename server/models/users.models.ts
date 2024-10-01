import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  aboutMe: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  birthdate: Date,
});

export const User = mongoose.model('User', UserSchema);
