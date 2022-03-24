import post from '../../../models/post.js';

class PostService {
    async create(content) {
        const createdPost = await post.create({...content, author: 'Spongebob', data: new Date()});
        return createdPost;
    }

    async getAll() {
        const posts = await post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const getPost = await post.findById(id);
        return getPost;
    }

    async update(newPost) {
        if (!newPost._id) {
            throw new Error('id не указан')
        }
        const updatePost = await post.findByIdAndUpdate(newPost._id, newPost, {new: true});
        return updatePost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const deletedPost = await post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default new PostService()
