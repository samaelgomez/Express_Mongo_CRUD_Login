const mongoose = require('mongoose');
const movieSchema = require('../schema/movie.schema');
const movieModel = mongoose.model('Movie', movieSchema);

const movieAPI = {
    findAllMovies: async () => {
        try {
            const movies = await movieModel.find();
            let result = movies === null 
                            ? "There are no movies"
                            : movies
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    findMovie: async (data) => {
        try {
            const title = data.title;
            const movie = await movieModel.findOne({
                title:title,
            });
            let result = movie === null
                            ? "That movie does not exist"
                            : movie
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    createMovie: async(data)=>{
        try {
            console.log(data);
            const {id, title, image, description} = data.movieData
            const movies = await movieModel.findOne({
                id:id,
            },{"id.$":1});
            if (movies !== null) {
                return "That movie already exists"
            }
            
            await movieModel.create({id:id, title, image, description})
            return true
        } catch (error) {
            throw error
        }
    },

    updateMovie: async (data) => {
        try {
            const title = data.movieData.title;
            const movie = await movieModel.findOneAndUpdate({
                title:title
            }, data.movieData);
            let result = movie === null 
                            ? "That movie does not exist"
                            : movie
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    deleteMovie: async(data)=>{
        try {
            const {title} = data.movieData
            await movieModel.findOneAndDelete({title:title})
            return true
        } catch (error) {
           throw error
        }
    },

    like: async(data)=>{
        try {
            const {title} = data.movieData
            const updateCriteria = {title:title}
            const updatedData = { $push: { liked_by:data.currentUser.username }}
            await movieModel.findOneAndUpdate(updateCriteria, updatedData)
            return true
        } catch (error) {
           throw error
        }
    },

    unlike: async(data)=>{
        try {
            const {title} = data.movieData
            const updateCriteria = {title:title}
            const updatedData = { $pull: { liked_by:data.currentUser.username }}
            await movieModel.findOneAndUpdate(updateCriteria, updatedData)
            return true
        } catch (error) {
           throw error
        }
    }
}

module.exports = movieAPI;