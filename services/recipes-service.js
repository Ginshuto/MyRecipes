import axios from 'axios';

class RecipeService {
    getRecipe(meal){
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    }
}

export default RecipeService;