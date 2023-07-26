import React from "react";
import './Driver.css'

const Driver = () => {
  return (
    <div
    className="container-fluid p-0 mb-5"
    style={{ maxWidth: "88vw", overflow: "hidden"}}
  >
    <div
      className="position-relative"
      style={{
        paddingTop: "38.46154%", // Aspect ratio 144/120 = 1.2 (120/144 * 100)
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/dbd1/1165/34e9a9ad52b99e4faf2379f8a95616d4?Expires=1691366400&Signature=G6LKFI8KLFRQQ5Qe46UGSuJdGyk7X1QsNX7AO4QY-hzCwYROY66wJDhhNbR2TIMZ~~~YHAifxc6OK6P6p2qrjj-a~icjE0hjUhFYNBkqx5XTk5t26m5a-C5h2Zucpxp1bP6hUiJgKprx0ef9GpQyab6yAmAc~OA9MBRefIS8doUhFfA1ZXZGOZTumLff-3uBpxeyLFhsiFEIYm0IY8MR4NdNNacFZUJfkdAcoTPWkyXY6PQsdmCHqlYCWmZj51AWdhQNguqlNPYUnSFulEa46lspUPpcVpMoL9KYmpCgPsSmr7uhLulE9rHEzEJWNqrY-m5hzUP0MIY~tF9OwODMvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight:'500px'
      }}
    >
      <div className="w-100 h-100 d-flex flex-column text-left text-white driver-text-container">
        <div className="driver-text-container-h2">
            <h2 >Become A Driver </h2>
            <h2 >Your Time. Your Goals. You're The Boss.</h2>
        </div>
        <div className="sub-email-container">
        <p>Subscribe And Join Us</p>
        <div className="d-flex flex-column flex-sm-row driver-email-input">
          <input
            type="email"
            placeholder="EMAIL"
            className="form-control driver-input"   
            style={{ maxWidth: "100%", height:'100%' }}
          />
          <button className="btn btn-primary">Next</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Driver;
