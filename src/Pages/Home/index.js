import React from 'react';
import './styles.scss'
import PlaceImage from '../../assets/table.jpg'
import FoodImage from '../../assets/food.jpg'
import EventsImage from '../../assets/events.jpg'

function Topmain() {
  return (
    <div className='container'>
      <div className='content-top'>
        <h2>A bistro with the Parisian flavor of the heart of Milan</h2>
      </div>
      <div className='content-main'>
        <div className='place'>
          <img src={PlaceImage} alt='table' />
          <div>
            <h1>Restaurant</h1>
            <p>Born forty years ago in the heart of Brera at the behest of Raimondo Bianchi, Bel Caffè has evolved over the years,
              leaving its original atmosphere intact: a bistro with a vintage aura and a Parisian flavor.
            </p>
            <button>Press</button>
          </div>
        </div>
        <div className='place'>
          <div>
            <h1>TRADITION</h1>
            <p>An Italian cuisine that has its roots in traditions, reinterpreting them with a contemporary sensibility.
              The menus change every two months to ensure the seasonality of the products and to offer always new dishes. Different proposals
              for lunch and for the evening that already evoke sensations and flavors on paper.
            </p>
            <button>Menu & Wine list</button>
          </div>
          <img src={FoodImage} alt='table' />
        </div>
        <div className='place'>
          <img src={EventsImage} alt='table' />
          <div>
            <h1>EVENTS & BANQUETING</h1>
            <p>Bel Caffè it is also an unprecedented location where private and corporate events can be held in a cozy and convivial atmosphere, adaptable to different needs.
            </p>
            <button>Press</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Topmain;