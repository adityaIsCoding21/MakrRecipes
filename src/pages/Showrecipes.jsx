import { useContext } from 'react';
import { recipeContext } from '../context/Recipe';
import RecipesCard from '../components/RecipesCard';

const ShowRecipes = () => {
  const [data, setData] = useContext(recipeContext);

  const recipeList = data.map((recipe) => (
    <RecipesCard key={recipe.id} id={recipe.id} recipe={recipe} />
  ));

  return (
    <div className='p-4 '>
      <h1 className='text-2xl text-white mb-4'>Saved Recipes</h1>
      <div className='flex flex-wrap justify-center gap-4 '>
        {data.length > 0 ? recipeList : (
          <p className='text-white text-lg'>No recipes found.</p>
        )}
      </div>  
    </div>
  );
};

export default ShowRecipes;
