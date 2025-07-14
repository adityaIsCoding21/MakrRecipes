import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About'; 
import CreatRecipe from '../Pages/CreatRecipe';
import Showrecipes from '../pages/Showrecipes';
import Singlerecipes from '../pages/Singlerecipes';


const MainRoute = () => {
  return (
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/creat" element={<CreatRecipe />} />
        <Route path="/show" element={<Showrecipes />} />
        <Route path="/recipe/details/:id" element={<Singlerecipes />} />
        
    </Routes>
  )
}

export default MainRoute