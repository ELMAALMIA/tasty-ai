// File: src/services/api.js
//const API_BASE_URL = 'http://localhost:8080/api';
const API_BASE_URL = 'https://tasty-ai-9affc94ff0d5.herokuapp.com/api';
export const recipeApi = {
  generateRecipe: async (ingredients) => {
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients })
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate recipe');
      }
      
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
};