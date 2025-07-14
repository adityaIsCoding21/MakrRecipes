import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ required for styles
import Nav from './components/Nav';
import MainRoute from './Routes/MainRoute';

const App = () => {
  return (
    <div className='bg-gray-700 min-h-screen text-white'>
      <Nav />
      <MainRoute />
    </div>
  );
};

export default App;
