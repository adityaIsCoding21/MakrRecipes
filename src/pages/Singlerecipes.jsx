import React, { useContext, useEffect } from 'react';
import { recipeContext } from '../context/Recipe';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Singlerecipes = () => {
  const [data, setdata] = useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find((item) => item.id === params.id);
  const { register, handleSubmit, reset } = useForm();

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
    <div className="flex flex-col md:flex-row w-full min-h-screen gap-8 md:gap-16 text-white p-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold">{recipe.name}</h1>
        <p className="mt-2"><strong>Description:</strong> {recipe.description}</p>
        <img
          src={recipe.url}
          alt={recipe.name}
          className="w-full h-48 object-cover rounded mt-2"
        />
        <p className="mt-2"><strong>Ingredients:</strong> {recipe.ingredient}</p>
        <p className="mt-2"><strong>Instructions:</strong> {recipe.instruction}</p>
        <p className="mt-2"><strong>Category:</strong> {recipe.category}</p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Update Recipe</h2>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            type="text"
            placeholder="Recipe Name"
            className="p-2 border rounded bg-transparent"
            {...register("name")}
          />

          <textarea
            placeholder="Recipe Description"
            className="p-2 border rounded resize-none min-h-[80px] sm:min-h-[100px] bg-transparent"
            {...register("description")}
          />

          <textarea
            placeholder="Recipe Ingredients"
            className="p-2 border rounded resize-none min-h-[80px] sm:min-h-[100px] bg-transparent"
            {...register("ingredient")}
          />

          <textarea
            placeholder="Recipe Instructions"
            className="p-2 border rounded resize-none min-h-[100px] sm:min-h-[120px] bg-transparent"
            {...register("instruction")}
          />

          <input
            type="url"
            placeholder="Recipe Image URL"
            className="p-2 border rounded bg-transparent"
            {...register("url")}
          />

          <select
            className="p-2 border rounded bg-gray-700"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Update Recipe
          </button>

          <button
            type="button"
            onClick={delhandler}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singlerecipes;
