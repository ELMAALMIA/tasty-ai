// File: src/pages/Recipe.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRecipe } from '../redux/recipeSlice';
import { UtensilsCrossed, Loader } from 'lucide-react';

const Recipe = () => {
  const [formData, setFormData] = useState({
    ingredients: '',
    cuisine: 'any',
    difficulty: 'easy',
    servings: '2'
  });
  
  const dispatch = useDispatch();
  const { recipe, loading, error } = useSelector((state) => state.recipe || {
    recipe: null,
    loading: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(generateRecipe(formData));
    } catch (err) {
      console.error('Failed to generate recipe:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
  <label htmlFor="ingredients" className="block text-lg mb-2">
    Enter your ingredients:
  </label>
  <textarea
    id="ingredients"
    value={formData.ingredients}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
    placeholder="e.g., tomatoes, cheese, pasta"
    required
    rows={4} // You can adjust the number of rows as needed
  />
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-2">
                Cuisine Type
              </label>
              <select
                id="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="any">Any Cuisine</option>
                <option value="italian">Italian</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="mexican">Mexican</option>
                <option value="french">French</option>
              </select>
            </div>

            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                id="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Servings
              </label>
              <input
                type="number"
                id="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                max="12"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg disabled:bg-orange-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span>Generating Recipe...</span>
              </>
            ) : (
              <>
                <UtensilsCrossed size={20} />
                <span>Generate Recipe</span>
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-medium">Error generating recipe</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {recipe && recipe.status === 'success' && (
          <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 flex items-center">
                🕒 {recipe.cookingTime}
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 flex items-center">
                👥 {recipe.servings} servings
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 flex items-center">
                📊 {recipe.difficulty}
              </span>
              {recipe.cuisine !== 'any' && (
                <span className="bg-white px-4 py-2 rounded-full text-gray-700 flex items-center">
                  🌍 {recipe.cuisine} cuisine
                </span>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
              <ul className="bg-white rounded-lg p-4 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Instructions</h3>
              <ol className="bg-white rounded-lg p-4 space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="font-bold text-orange-500 mr-3">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;