function getRecipeById(recipe_id) {
    return Promise.resolve(`Get recipe with ID ${recipe_id}'`)
}

module.exports = { getRecipeById }