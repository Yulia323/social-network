import User from '../../../models/user.js';
import Profile from '../../../models/profile.js';
import jwt from 'jsonwebtoken';
import {secret} from '../../../config.js';

class UserService {
    async getUsers() {
        const users = await User.find();
        return users;
    }

    async getUserProfile(req) {
        const token = req.headers.authorization.split(' ')[1];
        const decodedData = jwt.verify(token, secret)
        const id = decodedData.id;

        const userProfile = await Profile.findById(id);
        return userProfile;
    }

    async getUsersProfile() {
        const profile = await Profile.find();
        return profile;
    }
}

export default new UserService()
