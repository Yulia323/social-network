import mongoose from 'mongoose';

const Profile = new mongoose.Schema({
    _id: {type: String, required: true},
    avatar: {type: String},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    status: {type: String},
    posts: [{type: String, required: true}],
    friends: [{type: String, required: true}],
    settings: {type: String},
    photo: [{type: String, required: true}],
})

export default mongoose.model('Profile', Profile)
