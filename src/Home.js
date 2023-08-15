import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        
        <div className='home__container'>
            <img className='home__image'  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt=''></img>
            <div className='home__row'> <Product id="12321341" title="the lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} /> <Product id="49538094" title= "Logitech G F710 Wireless Gamepad, 2.4 GHz Wireless with USB Nano-Receiver, Controller Dual Vibration Feedback, 4 Switch D-Pad, PC - Grey/Black" price ={20.0} rating={4} image="https://m.media-amazon.com/images/I/71cY+1dSNnL._AC_UY327_FMwebp_QL65_.jpg" /></div>
            <div className='home__row'> <Product id="4903850" title="SAMSUNG 32 Odyssey G55A QHD 165Hz 1ms FreeSync Curved Gaming Monitor with HDR 10, Futuristic Design for Any Desktop (LS32AG550ENXZA)" rating={1} image="https://m.media-amazon.com/images/I/81a+yL6ii9L._AC_SL1500_.jpg" price={400} /><Product id="23445930" image="https://m.media-amazon.com/images/I/71XqKlSdUCL._AC_SL1000_.jpg" price={60.0} rating={5} title="Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Cloud Blue
" /><Product id="3254354345" image="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_SL1500_.jpg" title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Silver
" rating={4} price={30}  /></div>
            <div className='home__row'><Product id="2312214342" title="ASUS FX506HF-ES51 TUF Gaming F15 Gaming Laptop, 15.6â€ 144Hz FHD Display, Intel Core i5-11400H Processor, GeForce RTX 2050, 8GB DDR4 RAM, 512GB PCIe SSD Gen...
" image="https://m.media-amazon.com/images/I/91aWfctUptL._AC_SL1500_.jpg" rating={4} price={250} /></div>
        </div>
        </div>
  );
}

export default Home;