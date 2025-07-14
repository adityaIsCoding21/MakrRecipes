import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipeContext } from '../context/Recipe';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatRecipe = () => {

const navigate=  useNavigate()
 const [data, setdata] = useContext(recipeContext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const sumitHandler =(recipes)=>{

    recipes.id = nanoid();

    const copyData = [...data];

    copyData.push(recipes);

    setdata(copyData);        

    localStorage.setItem("dataa",JSON.stringify(copyData));

    navigate("/show");

    toast.success("Recipe Created Successfully" )

    

    reset();


    
  }
  
  return (
    <div className='flex flex-col justify-center items-center h-150 gap-4  '>
<h1 className="text-2xl sm:text-3xl font-serif font-semibold text-white italic tracking-tight leading-snug">
  Create Your Recipes Here
</h1>






      <div className='bg-gray-900 p-4 rounded-lg shadow-lg text-amber-50  '>
        <form className='flex flex-col gap-4 w-80 text-white ' onSubmit={handleSubmit(sumitHandler)}>
          <input type='text' placeholder='Recipe Name' className='p-2 border rounded' {...register("name")} />

{/* Recipe Description */}
<textarea
  placeholder="Recipe Description"
  className="p-2 border rounded resize-none w-full min-h-[80px] sm:min-h-[100px] bg-white text-black"
  {...register("description")}
/>

{/* Recipe Ingredients */}
<textarea
  placeholder="Recipe Ingredients"
  className="p-2 border rounded resize-none w-full min-h-[80px] sm:min-h-[100px] bg-white text-black"
  {...register("ingredient")}
/>

{/* Recipe Instructions */}
<textarea
  placeholder="Recipe Instructions"
  className="p-2 border rounded resize-none w-full min-h-[80px] sm:min-h-[120px] bg-white text-black"
  {...register("instruction")}
/>


          <input type='url' placeholder='Recipe Image URL' className='p-2 border rounded'  {...register("url")}/>

          <select className='p-2 border rounded  bg-gray-900' {...register("category")}>
            <option value='breakfast'>Breakfast</option>  
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>

          <button type='submit' className='bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
            Submit Recipe
          </button>
        </form>
      </div>

    </div>
  );
};

export default CreatRecipe;
