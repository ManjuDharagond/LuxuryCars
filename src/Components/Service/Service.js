
import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="container w-100" style={{width:'100vw'}}>
      <div className="row service-row">
        <div className="col-lg-7 col-md-7 col-sm-7 col-7 left-part">
          <div className="position-relative">
            <div className='service-img'>
            <img src="https://s3-alpha-sig.figma.com/img/b72d/ca95/e067bde2d3f8a080fa25ad6be28c3572?Expires=1690761600&Signature=OT959MSSInhkAzdcagxzwnIt14oqSd-XNlFVh7MTOgTM~Kfj1a0uM22d4khW4Rk44uA7mTXuxktho63~6YilYdJ83yjl9xXiqqIpdFgNA5z1kzpEOdZx4uzYY1cv8el8uGD7T~Kar9BMk29pM62VuhvrPJMbUk1ebVsx0S6JJJoQ9s3Tk5HTDHCfR8GTIPo4XEcrgCp-E16PKEgnupQ72xvyDsRiBs4YZGnyn8FP~hxoTj8fs47iVBSykvKml9WWxXQPl3S8hi80VBW-ZsfoMKAawZoXpwasQ4a3f6TUI7gsZri6SUfDOq02x0rKdDjrpOzoX9S7KnE8hXFCllcWDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 1" className="img-fluid merce-image" />
           
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="514" viewBox="0 0 536 514" fill="none" className='svg1' >
              <path d="M515.06 358.662C421.874 531.335 215 523 144.475 503.641C73.9508 484.282 -94.6457 422.177 14.0217 205.183C122.689 -11.8107 292.663 -85.5899 324.169 131.442C355.675 348.474 608.246 185.99 515.06 358.662Z" fill="#CBC9C2" fillOpacity="0.56" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="532" height="470" viewBox="0 0 532 470" fill="none" className='svg2'>
              <path d="M32.0479 91.4899C154.002 -49.1696 362.545 10.4862 409.269 25.3281C455.993 40.17 617.855 141.982 472.53 320.245C327.205 498.508 152.738 535.485 166.297 332.284C179.856 129.083 -89.9059 232.149 32.0479 91.4899Z" fill="#F1BC00" fillOpacity="0.56" />
            </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 right-part">
          <h2 className="text-center">Our Services</h2>
          <div className="row service-row-right">
            <div className="col-md-12 car-services">
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="80" viewBox="0 0 105 80" fill="none" style={{ maxWidth: '105px', maxHeight: '80px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.5803 0.0135406C73.1013 -0.36898 96.7733 7.34148 103.481 24.6231C110.013 41.4507 94.43 56.9508 76.7157 67.3457C58.8286 77.8421 35.5171 85.3768 17.4032 75.1348C-1.33908 64.5375 -3.52409 43.6663 4.14109 26.3105C11.1438 10.4546 29.6493 0.369056 50.5803 0.0135406Z" fill="#F1BC00" />
                </svg>
                <div className="ml-2 service-detail">
                  <h4 >Car Hire</h4>
                  <p>
                    We pride ourselves in always going the extra mile for our customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 car-services">
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="80" viewBox="0 0 105 80" fill="none" style={{ maxWidth: '105px', maxHeight: '80px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.5803 0.0135406C73.1013 -0.36898 96.7733 7.34148 103.481 24.6231C110.013 41.4507 94.43 56.9508 76.7157 67.3457C58.8286 77.8421 35.5171 85.3768 17.4032 75.1348C-1.33908 64.5375 -3.52409 43.6663 4.14109 26.3105C11.1438 10.4546 29.6493 0.369056 50.5803 0.0135406Z" fill="#F1BC00" />
                </svg>
                <div className="ml-2 service-detail">
                  <h4 >Car Sales</h4>
                  <p>We sell the best luxury cars across the world at a competitive price.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 car-services">
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="80" viewBox="0 0 105 80" fill="none" style={{ maxWidth: '105px', maxHeight: '80px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.5803 0.0135406C73.1013 -0.36898 96.7733 7.34148 103.481 24.6231C110.013 41.4507 94.43 56.9508 76.7157 67.3457C58.8286 77.8421 35.5171 85.3768 17.4032 75.1348C-1.33908 64.5375 -3.52409 43.6663 4.14109 26.3105C11.1438 10.4546 29.6493 0.369056 50.5803 0.0135406Z" fill="#F1BC00" />
                </svg>
                <div className="ml-2 service-detail">
                  <h4 >Hire a Driver</h4>
                  <p>If you want to travel and feel comfortable, our drivers are available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
