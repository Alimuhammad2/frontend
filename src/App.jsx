import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Doctor from './components/getDoctor/Doctor';
import AddDoctor from './components/addDoctor/addDoctor';
import UpdateDoctor from './components/updateDoctor/updateDoctor'

function App() {
 
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Doctor/>,
    },
    {
      path:"/adddoctor",
      element:<AddDoctor/>,
    },
    {
      path:"/updatedoctor/:id",
      element:<UpdateDoctor/>,
    }
  ])

  return (
      <div className='App'>
        <RouterProvider router={route}></RouterProvider>
      </div>
  )
}

export default App
