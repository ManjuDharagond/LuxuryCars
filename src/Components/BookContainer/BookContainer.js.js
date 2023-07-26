import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./BookContainer.css";
import "react-datepicker/dist/react-datepicker.css";

const BookContainer = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      className="container-fluid book-container"
    >
      <div className="row">
        <div className="col">
          <h1>Book your dream car now!</h1>
          <p>
            Rent a car online now from one of our worldwide locations. With over
            20 years’ experience in luxury car and customer services, all we
            need is your ID and you can book any car.
          </p>
          <div className="d-flex flex-wrap align-items-center input-buttons">
            <div className="col-sm-3 col-md-3 col-3 mb-3 input-button">
              <div className="input-group">
                <div className="input-group-prepend input-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_399)">
                        <path
                          d="M15.4755 2.5C20.3343 2.5 24.2867 6.425 24.2867 11.25C24.2867 17.8125 15.4755 27.5 15.4755 27.5C15.4755 27.5 6.66437 17.8125 6.66437 11.25C6.66437 6.425 10.6168 2.5 15.4755 2.5ZM13.5497 17.5L21.7692 9.2625L20.007 7.5L13.5497 13.975L10.9441 11.3625L9.18184 13.125L13.5497 17.5Z"
                          fill="#21408E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_399">
                          <rect
                            width="30.2097"
                            height="30"
                            fill="white"
                            transform="translate(0.370667)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                  type="text"
                  className="form-control input-text" style={{borderRadius:'1.625rem', background:'#FFF9F9' , maxHeight:'3.75rem' , maxWidth:'19rem'}}
                />
                </div>
                
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-3 mb-3 input-button">
              <div className="input-group">
                <div className="input-group-prepend input-svg">              
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <path
                        d="M15.8252 2.5C20.6839 2.5 24.6364 6.425 24.6364 11.25C24.6364 17.8125 15.8252 27.5 15.8252 27.5C15.8252 27.5 7.01398 17.8125 7.01398 11.25C7.01398 6.425 10.9664 2.5 15.8252 2.5ZM13.8993 17.5L22.1189 9.2625L20.3566 7.5L13.8993 13.975L11.2937 11.3625L9.53147 13.125L13.8993 17.5Z"
                        fill="#21408E"
                      />
                    </svg>
                    <input
                  type="text"
                  className="form-control input-text" style={{borderRadius:'1.625rem', background:'#FFF9F9' , maxHeight:'3.75rem' , maxWidth:'19rem'}}
                />
                </div>
                
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-3 mb-3 input-button">
              <div className="input-group">
                <div className="input-group-prepend input-svg-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_402)">
                        <path
                          d="M9.91611 11H7.90212V13H9.91611V11ZM13.9441 11H11.9301V13H13.9441V11ZM17.9721 11H15.9581V13H17.9721V11ZM19.986 4H18.9791V2H16.9651V4H8.90911V2H6.89513V4H5.88813C4.77037 4 3.88422 4.9 3.88422 6L3.87415 20C3.87415 21.1 4.77037 22 5.88813 22H19.986C21.0937 22 22 21.1 22 20V6C22 4.9 21.0937 4 19.986 4ZM19.986 20H5.88813V9H19.986V20Z"
                          fill="#F1BC00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_402">
                          <rect
                            width="24.1678"
                            height="24"
                            fill="white"
                            transform="translate(0.853149)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="form-control input-text date-picker" 
                />
                </div>
                
              </div>
            </div>
            <div className="col-sm-2 col-md-2 col-2 mb-3 input-button book-button-div">
              <button className="btn book-button">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
