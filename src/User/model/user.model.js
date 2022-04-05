const mongoose = require('mongoose');
const userSchema = require('../schema/user.schema');
const userModel = mongoose.model('User', userSchema);

const userAPI = {
    findUserByID: (id) => {
        return await userModel.findById(id).exec();
    }
}

modules.export = userAPI;