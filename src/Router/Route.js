import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import Blog from "../pages/Blog/Blog";
import ContactMe from "../pages/ContactMe/ContactMe";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/',
               element: <Home></Home> 
            },
            {
                path:'/contact-me',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/about-me',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;