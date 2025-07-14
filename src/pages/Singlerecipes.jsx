import React, { useContext, useEffect } from 'react';
import { recipeContext } from '../context/Recipe';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Singlerecipes = () => {
  const [data, setdata] = useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();

  // Get the recipe before checking existence
  const recipe = data.find((item) => item.id === params.id);

  // Always call useForm at the top level (not conditionally!)
  const { register, handleSubmit, reset } = useForm();

  // Populate form values only when recipe is available
  useEffect(() => {
    if (recipe) {
      reset({
        name: recipe.name,
        description: recipe.description,
        ingredient: recipe.ingredient,
        instruction: recipe.instruction,
        url: recipe.url,
        category: recipe.category
      });
    }
  }, [recipe, reset]);

  // Show loading message if recipe is not found
  if (!recipe) {
    return <div className="text-white p-4">Loading...</div>;
  }

  const delhandler = () => {
    const filteredData = data.filter((item) => item.id !== params.id);
    setdata(filteredData);
    localStorage.setItem("dataa", JSON.stringify(filteredData));
    toast.error("Recipe Deleted Successfully");
    navigate("/show");
  };

  const submitHandler = (updatedRecipe) => {
    const copyData = [...data];
    const index = data.findIndex((item) => item.id === params.id);
    copyData[index] = { ...copyData[index], ...updatedRecipe };

    setdata(copyData);
    localStorage.setItem("dataa", JSON.stringify(copyData));
    toast.success("Recipe Updated Successfully");
  };

  return (
    <div className='flex w-full h-screen gap-20 text-white'>
      <div className="Left h-full w-1/2 p-4">
        <h1 className='text-2xl font-bold'>{recipe.name}</h1>
        <p className='mt-2'><strong>Description:</strong> {recipe.description}</p>
        <img src={recipe.url} alt={recipe.name} className='w-full h-48 object-cover rounded mt-2' />
        <p className='mt-2'><strong>Ingredients:</strong> {recipe.ingredient}</p>
        <p className='mt-2'><strong>Instructions:</strong> {recipe.instruction}</p>
        <p className='mt-2'><strong>Category:</strong> {recipe.category}</p>
      </div>

      <div className="Right h-full w-1/2 p-4">
        <h2 className='text-xl font-semibold'>Update Recipes</h2>
        <form className='flex flex-col gap-4 w-80 text-white' onSubmit={handleSubmit(submitHandler)}>
          <input type='text' placeholder='Recipe Name' className='p-2 border rounded' {...register("name")} />
     {/* Recipe Description */}
<textarea
  placeholder="Recipe Description"
  className="p-2 border rounded resize-none w-full min-h-[80px] sm:min-h-[100px]  text-white "
  {...register("description")}
/>

{/* Recipe Ingredients */}
<textarea
  placeholder="Recipe Ingredients"
  className="p-2 border rounded resize-none w-full min-h-[80px] sm:min-h-[100px] text-white "
  {...register("ingredient")}
/>

{/* Recipe Instructions */}
<textarea
  placeholder="Recipe Instructions"
  className="p-2 border rounded resize-none w-full min-h-[100px] sm:min-h-[120px] text-white "
  {...register("instruction")}
/>

          <input type='url' placeholder='Recipe Image URL' className='p-2 border rounded' {...register("url")} />
          <select className='p-2 border rounded bg-gray-600' {...register("category")}>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>

          <button type='submit' className='bg-green-500 text-white py-2 rounded hover:bg-green-600'>
            Update Recipe
          </button>

          <button type='button' onClick={delhandler} className='bg-red-500 text-white py-2 rounded hover:bg-red-600'>
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singlerecipes;
