import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Navbar></Navbar> 
      <div className='flex relative'>
        <div className='w-1/4 h-fit'> <SideBar></SideBar> </div>
        <div className='w-3/4 h-fit '> 
           <Filter></Filter> 
        </div>
      </div>


  
     
    </>
    
  );
}

export default App;
