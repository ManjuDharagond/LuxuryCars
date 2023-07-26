

import React from 'react';
import "./Banner.css";
import Navbar from '../Navbar/Navbar';

const Banner = () => {
  return (
    <div>
      <Navbar/>
      <div className="banner">
  
      <img  src="https://s3-alpha-sig.figma.com/img/78e0/0004/7fd4f62cf3e00b6b333ab8a884d35fed?Expires=1690156800&Signature=XoQ~7MhYXWCBKH4QGDSVjCEKJIJnD~P9hQ1KTAricULTgecoAB6ZQGM~iOQSzkfs1kJ-em6E9Gd-A-2wCIew2-UCZjtXbC0duW2w885RELx3GNe7wndRQmpml~zW1yTmvzECLnSE4qono1xnUs7K-4LMNInUv~txV63qmYKa-2SyW~eXpgI7MirJthGGWSScgURBQWOAMN9eR2XLrRPblTvtqI753bb~v7BCsmvxXhe85N6Iz~aeCygPvbKrkTrjRWEZl0ZH~D0coQVANrSValKwj1PNNjPPkEJYUGrtGAwFGPaZAl2Qzf4ibMfyH0zAIQMqbIXLqoBSKJ4MnkIuwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Banner Image" className="banner-image img-fluid urus-desktop" />


      <img src="https://s3-alpha-sig.figma.com/img/18bd/8614/31093a247817d85ddccb343b8b8c6068?Expires=1690761600&Signature=lIGcqj6gIJlvCN3seuO4nydq0Yw-WXkxxbVlz4HcQb5YRUiNE8S6KW7HDeRWvLHzGHH0b1SdjAPeZQLQ5ILm5AHRFVnxaid6MvJMtazizlXc2UIkPYHayRy0bSWO046xCvsZkQiMYxUCDi8ufvsSXIIeTe9xy9k0KCYXHvDeGTX6aQ~Oj7t-qkLNlPLdNwOBe4uop1L2BLxtva-Ytg1Jf9xjVkJRxufiMR2fIrlmpGVPeDl9Udfi7hxY9bxq8jdl-ZOsN8EKRHU-4cTxtxDTDYlmv7MPrL9JlIGwji2S~FW4LJu9EEAXmchcjADUyjjxAo8gSI35-2yStqoWJ76uJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Banner Image" className="banner-image img-fluid urus-mobile"/>



      <div className="banner-content">

      <div className="container-banner-item" />
      <div className="safer-faster">Safer ,faster and comfortable</div>

       
        <div className="get-in-touch-container">
          <p className="get-in-touch">Get in touch with our</p>
          <p className="get-in-touch">luxury cars</p>
        </div>
        <div className="bottom-rent">
          <div>
          <svg width="100%" viewBox="0 0 158 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 17C0 7.61116 7.61116 0 17 0H141C150.389 0 158 7.61116 158 17V24C158 33.3888 150.389 41 141 41H17C7.61116 41 0 33.3888 0 24V17Z" fill="#21408E"/>
        </svg>
          </div>
          <div className="rent-now">Rent Now</div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Banner;
