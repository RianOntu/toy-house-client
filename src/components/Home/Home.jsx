import React from 'react';
import Banner from '../Banner/Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Toy House | Home</title>
      </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;