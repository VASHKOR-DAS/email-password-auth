import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Login from './components/Login/Login';

// import { getAuth } from "firebase/auth";
// import app from './firebase/firebase.init';
// const auth = getAuth(app);

// React Bootstrap Component
import RegisterReactBootstrap from './components/RegisterReactBootstrap/RegisterReactBootstrap';

// Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])


function App() {
  /*
    const handleRegister = (event) => {
      // Register button a click korle page refresh/onno page a jay seta jno na jay
      event.preventDefault()
  
      //email catch on click register
      console.log(event.target.email.value);
    }
  
    // every keypress catch data onChange handler
    const handleEmailOnChange = (event) => {
      console.log(event.target.value);
    }
  
    // catch data when focus change
    const handlePasswordOnBlur = (event) => {
      console.log(event.target.value);
    }
  */

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;