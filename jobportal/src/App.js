import './App.css';
import {routes} from './routing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { JOB_RECRUITER } from './utils/constants';
import { useSelector } from 'react-redux';
function App() {
  const alldata= (localStorage.getItem('mydata'));
  const type= (localStorage.getItem('istype'));
  if(alldata){
    const  data = JSON.parse(alldata);
    const isRecruiter=data.type;

    var hasRecruiter=isRecruiter===JOB_RECRUITER?true:false;
  }
  if(type){
    const  data =  (type);
    console.log(data);
    const isRecruiter=data;

    var hasRecruiter=isRecruiter===JOB_RECRUITER?true:false;
  }
console.log(hasRecruiter);
  return (

 <>
     <RouterProvider router={createBrowserRouter (routes(hasRecruiter) )}>
    </RouterProvider> 
    
 </>

  );
}

export default App;
