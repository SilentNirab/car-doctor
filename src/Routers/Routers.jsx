import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SginUp/SignUp';
import BookServices from '../Pages/BookServics/BookServices';
import Bookings from '../Pages/Bookings/Bookings';
import PrivetRouters from './PrivetRouters';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path : "/",
                element : <Home></Home>           
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "book/:id",
                element:  <PrivetRouters><BookServices></BookServices></PrivetRouters>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "bookings",
                element: <PrivetRouters><Bookings></Bookings></PrivetRouters>
                
            }
        ]
    }
])


export default routers;