const mongoose = require('mongoose');
const userSchema = require('../schema/user.schema');
const userModel = mongoose.model('User', userSchema);

const userAPI = {
    findAllUsers: async () => {
        try {
            const users = await userModel.find();
            let result = users === null 
                            ? "There are no users"
                            : users
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    findUser: async (userData) => {
        try {
            const username = userData.username;
            const user = await userModel.findOne({
                username:username,
            });
            let result = user === null 
                            ? "That user does not exist"
                            : user.username
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    createUser: async(userData)=>{
        try {
            const {username,password} = userData
            const users = await userModel.findOne({
                username:username,
            },{"username.$":1});
            if (users !== null) {
                return "That user already exists"
            }
            
            await userModel.create({username:username,password})
            return true
        } catch (error) {
            throw error
        }
    },

    updateUser: async (userData) => {
        try {
            const username = userData.username;
            console.log(userData);
            const user = await userModel.findOneAndUpdate({
                username:username
            }, userData);
            let result = user === null 
                            ? "That user does not exist"
                            : user.username
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    deleteUser: async(userData)=>{
        try {
            const {username} = userData
            await userModel.findOneAndDelete({username:username})
            return true
        } catch (error) {
           throw error
        }
        
    }
}

module.exports = userAPI;