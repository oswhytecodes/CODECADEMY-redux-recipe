import allRecipesData from '../../data.js'

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            // it goes through all the recipes, the one (id) that is clicked on gets sent to Favorites but returns the other recipes whose id werent clicked  in all recipes
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}
