import React from 'react';
import banner1 from '../../../assets/banners/banner1.png'
import banner2 from '../../../assets/banners/banner2.jpg'
import banner3 from '../../../assets/banners/banner3.jpg'

const Projects = () => {
    return (
        <div className='pt-16 mx-5'>
            <h2 className='text-3xl font-bold text-cyan-600 mb-6'>SEE MY SOME PROJECTS</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           <div className='border rounded' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div>
            <img className='h-48 w-full'  src={banner1} alt="" />
            </div>
            <div className='p-3'>
                <h3 className='font-bold text-xl'>Mobile Gadget</h3>
                <p>When log in you can see Dashboard for Admin, Seller, and Buyer.</p>
                <p>Client site data insert, find data in MongoDB, update and delete.</p>
                <p>Products Data load from the server site and display in the client site.</p>
                <button className='btn btn-accent my-3 w-full'>See More</button>
            </div>
           </div> 
           <div className='border rounded' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div>
            <img className='h-48 w-full' src={banner2} alt="" />
            </div>
            <div className='p-3'>
                <h3 className='font-bold text-xl'>Fresh Food</h3>
                <p>Firebase Sign in, Firebase Signup, and google authentication system.</p>
                <p>Navbar with (Home, My Services) Footer, and Responsive for all devices.</p>
                <p>You can add a review and add a service when signing In.</p>
                <button className='btn btn-accent my-3 w-full'>See More</button>
            </div>
           </div> 
           <div className='border rounded' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div>
            <img className='h-48 w-full' src={banner3} alt="" />
            </div>
            <div className='p-3'>
                <h3 className='font-bold text-xl'>BD Tech</h3>
                <p>Technology all Courses fake data API create in server site. </p>
                <p>Display all category course data on the client site in Home page.</p>
                <p>Firebase Sign in, Firebase Signup, google, and GitHub authentication. </p>
                <button className='btn btn-accent my-3 w-full'>See More</button>
            </div>
           </div> 
        </div>
        </div>
    );
};

export default Projects;