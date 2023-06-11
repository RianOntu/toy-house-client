import React, { useEffect } from 'react';
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal6 from '../../assets/gal6.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal7 from '../../assets/gal7.jpg'
import gal8 from '../../assets/gal8.jpg'
import gal9 from '../../assets/gal9.jpg'
import gal10 from '../../assets/gal10.jpg'
import './Gallery.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({  offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
      }, [])
    return (
        <div className='mt-5 container'>
            <h1 className='text-center'>Toy Gallery</h1>
             <div className="grid mt-5 mb-5" data-aos="fade-right">
              <img src={gal1} alt="" />
              <img src={gal2} alt="" />
              <img src={gal3} alt="" />
              <img src={gal4} alt="" />
              <img src={gal5} alt="" />
              <img src={gal6} alt="" />
              <img src={gal7} alt="" />
              <img src={gal8} alt="" />
              <img src={gal9} alt="" />
              <img src={gal10} alt="" />

             </div>
        </div>
    );
};

export default Gallery;