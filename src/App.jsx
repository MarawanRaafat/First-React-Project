
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import Signin from './pages/login/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
