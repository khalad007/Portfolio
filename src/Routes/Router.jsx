import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Projects from "../Pages/Home/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        //   errorElement: < 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <AboutMe></AboutMe>
            },
            {
                path: 'project',
                element: <Projects></Projects>
            }
        ]
    },
]);