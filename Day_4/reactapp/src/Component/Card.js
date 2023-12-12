import React from 'react';

function Card() {
  return (
    <div className="card">
      <svg
        version="1.1"
        id="cookieSvg"
        x="0px"
        y="0px"
        viewBox="0 0 122.88 122.25"
        xmlSpace="preserve">

      </svg>
      <p className="cookieHeading">We use cookies.</p>
      <p className="cookieDescription">
        This website uses cookies to ensure you get the best experience on our
        site.
      </p>

      <div className="buttonContainer">
        <button className="acceptButton">Allow</button>
        <button className="declineButton">Decline</button>
      </div>
    </div>
  );
}

export default Card;
