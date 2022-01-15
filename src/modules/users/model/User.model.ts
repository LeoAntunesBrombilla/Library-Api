import mongoose, { Schema } from 'mongoose';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

const User = mongoose.model<ICreateUserDTO>('User', UserSchema);

export default User;
