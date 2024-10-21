import axios from "axios";
const API_KEY = "6d1bd2ddeb4c491ba887454323f77134";
axios.defaults.baseURL = "https://api.spoonacular.com";

export const searchRecipes = async (query, page = 1, number = 12) => {
    try {
        const response = await axios.get(`/recipes/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query: query,
                number: number,

            }
        });

        if(response.data.results.length === 0) return [];

        const recipes = response.data.results.map(({ id, title, image}) => ({
            id,
            title,
            image
        }));
        return recipes; 
    } catch(error) {
        console.log('Eroare in newRecipe: ', error);
        throw error;
    }
}