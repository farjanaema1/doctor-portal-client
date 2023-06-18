import DashBoardLayout from "../../Layout/DashBoardLayout";
import Appointment from "../../pages/Appointment/Appointment/appoinment";
import AddDoctor from "../../pages/DashBoard/dashBoard/addDoctor";
import AllUsers from "../../pages/DashBoard/dashBoard/allusers";
import DashBoard from "../../pages/DashBoard/dashBoard/dashboard";
import ManageDoctors from "../../pages/DashBoard/dashBoard/manageDoctors";
import MyAppointment from "../../pages/DashBoard/dashBoard/myappointment/myappointment";
import Payment from "../../pages/DashBoard/dashBoard/payment";
import SignUp from "../../pages/SignUp/signUp";
import AboutUs from "../../pages/aboutus/aboutus";
import PrivateRoute from "../privateRoute/privateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/main");
const { default: Home } = require("../../pages/Home/Home/Home");
const { default: LogIn } = require("../../pages/Login/Login");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>

            },
            {
                path:'/dashboard/allusers',
                element:<AllUsers></AllUsers>

            },
            {
                path:'/dashboard/addDoctor',
                element:<AddDoctor></AddDoctor>

            },
            {
                path:'/dashboard/managedoctors',
                element:<ManageDoctors></ManageDoctors>

            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params}) => fetch(`http://localhost:5000/booking/${params.id}`)

            }
        ]
    }
])
export default router;