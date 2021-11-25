import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // unique tất cả các username không được giống nhau password thì có thể giống nhau
        email: { type: 'string',required: true, unique: true,},
        password: {type: 'string',required: true,},
    }, 
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);

export default User;