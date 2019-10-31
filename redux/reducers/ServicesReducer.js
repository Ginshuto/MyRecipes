import RecipeService from "../../services/recipes-service";

const INITIAL_STATE = {
    recipeService: new RecipeService()
}
export default (state = INITIAL_STATE, action) => {
    return state;
}