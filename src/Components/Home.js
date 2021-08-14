import React from "react";
import "./stylehome.css";
var cDate = new Date();
cDate = cDate.getHours();
if (cDate < 12 && cDate > -1) var wish = "Good Morning";
else if (cDate > 11 && cDate < 18) {
  wish = "Good AfterNoon";
} else {
  wish = "Good Evening";
}

const Home = () => {
  return (
    <>
      <div className="parallex">
        <p>
          ALL INDIA BANK<p>(Bank Healthier. Live Happier)</p>
        </p>
      </div>
      <div className="Head"></div>
      <div className="Wish">
        <h1>
          Hello, <span>{wish}</span>
          <br />
          Welcome To AIB...
        </h1>
      </div>
    </>
  );
};

export default Home;
