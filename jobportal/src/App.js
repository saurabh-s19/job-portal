import './App.css';
import {routes} from './routing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { JOB_RECRUITER } from './utils/constants';
import { useSelector } from 'react-redux';
function App() {
  
  
 


    var hasRecruiter=useSelector(state => state?.user?.hasRecruiter);

  
  return (

 <>
     <RouterProvider router={createBrowserRouter (routes(hasRecruiter) )}>
    </RouterProvider> 
    
 </>

  );
}

export default App;
