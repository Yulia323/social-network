import UsersService from './users-service.js'

class UserController {

    async getAll(req, res) {
        try {
            const posts = await UsersService.getUsers();
            return res.json(posts);
        } catch (e) {
            res.status(500).json('Не могу получить посты')
        }
    }

    async getUserProfile(req, res) {
        try {
            const userProfile = await UsersService.getUserProfile(req);
            return res.json(userProfile);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getUsersProfile(req, res) {
        try {
            const getUserProfiles = await UsersService.getUsersProfile();
            return res.json(getUserProfiles);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()
