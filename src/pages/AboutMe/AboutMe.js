import React from 'react';
import { Link } from 'react-router-dom';
import samaul from '../../assets/samaul.png'
const AboutMe = () => {
    return (
        // <div className='grid grid-cols-2'>
        //     <div>
        //     <p className='text-justify mx-5'>
        //     I have skills in designing and developing websites using MERN Stack. I have completed a complete web development course from Programming Hero.There I complete 12 assignments with almost full marks and worked on more than 30 projects.During the course of programming hero. I am proficient in JavaScript, React,Next JS, Node JS, Express  JS, GitHub, Firebase, Vercel, MongoDB etc. I have also done some projects using JavaScript, React JS, MongoDB, Node JS, Express andused other's React Library Package that called on MERN Stack based project.
        //     </p>
        //     </div>
        //     <div>
        //         <img src={samaul} alt="" />
        //     </div>
        // </div>


  <div className='mx-5' data-aos="fade-up"
  data-aos-duration="1500">
        <p className='text-justify text-lg'>
        I am a motivated and creative individual who is always looking for new ways to improve my skills. I am passionate about web development and enjoy working on projects that challenge me to think outside the box. 
        </p> <br />

        <p className='text-justify text-lg'>I have skills in designing and developing websites using MERN Stack. I have completed a complete web development course from Programming Hero.There I complete 12 assignments with almost full marks and worked on more than 30 projects. During the course of programming hero. I am proficient in JavaScript, React,Next JS, Node JS, Express  JS, GitHub, Firebase, Vercel, MongoDB etc. I have also done some projects using JavaScript, React JS, MongoDB, Node JS, Express and used other's React Library Package that called on MERN Stack based project.
        </p>
        <button className="btn btn-accent mt-8 font-bold"><a href="https://drive.google.com/file/d/1yuBndVxpZs39JxkaT1KZYHJlyBsArHYJ/view?usp=sharing" target='_blank'>Get Resume</a></button>
  </div>  

    );
};

export default AboutMe;