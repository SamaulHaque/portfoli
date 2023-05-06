import React from 'react';
import ContactMe from '../../ContactMe/ContactMe';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;