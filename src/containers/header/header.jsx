import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import location from '../../assets/location.png';
import rings from '../../assets/rings.png';

const header = () => {
  return (
      <div className="wedding__header section__padding" id="home">
        <div className="wedding__header-content">
        <h1 className="gradient__text">Celebrating our wedding, here you can RSVP, share photos you took of the day and your best wishes</h1>
        <p>To celebrate our wedding we have built this site to allow our guests to share their memorable moments, send us messages abpout the day and ask any questions</p>
     
        <div className="wedding__header-content__input">
          <input type="email" placeholder="Your E-mail Address" />
          <button type="button"> Get Started </button>
        </div>

        <div className="wedding__header-content__people">
          <img src={people} alt="people"/>
          <p> n people resqiested accessin the last 24 hours</p>
        </div>
     </div>
     <div className="wedding__header-content__rings">
      <img src={rings} alt="rings"/>
    </div>
   </div>
  )
}

export default header;
