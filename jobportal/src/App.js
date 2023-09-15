import './App.css';
import {routes} from './routing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { JOB_RECRUITER } from './utils/constants';
import { useSelector } from 'react-redux';
function App() {
  const alldata= JSON.parse(localStorage.getItem('mydata'));
  const isRecruiter=alldata.type;

  const hasRecruiter=isRecruiter===JOB_RECRUITER?true:false;
  return (

 <>
     <RouterProvider router={createBrowserRouter (routes(hasRecruiter) )}>
    </RouterProvider> 
    
 </>

  );
}

export default App;
