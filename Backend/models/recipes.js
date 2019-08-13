const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
     card:  {
        link: String,
        title: String,
      //  img: String,
     }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;








