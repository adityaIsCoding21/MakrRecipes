import React from 'react';
import { Link } from 'react-router-dom';

const RecipesCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/details/${recipe.id}`}>
      <div className="p-4 rounded-xl shadow-lg bg-gray-800 text-white m-4 w-full max-w-2xl hover:scale-[1.02] transition-transform duration-300 flex gap-4">
        
        {/* Image Section */}
        <img
          src={recipe.url}
          alt={recipe.name}
          className="w-48 h-48 object-cover rounded-lg"
        />

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-semibold mb-1">{recipe.name}</h2>
            <p className="text-gray-400 text-sm mb-2">
              {recipe.description.slice(0, 50)}...
              <small className="text-red-500"> more</small>
            </p>
          </div>

          <div className="text-sm space-y-1">
            <p>
              <strong>Ingredients:</strong>{' '}
              {Array.isArray(recipe.ingredient)
                ? recipe.ingredient.join(', ')
                : recipe.ingredient}
            </p>
            <p>
              <strong>Instructions:</strong>{' '}
              {Array.isArray(recipe.instruction)
                ? recipe.instruction.join(', ')
                : recipe.instruction}
            </p>
            <p>
              <strong>Category:</strong> {recipe.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipesCard;
  