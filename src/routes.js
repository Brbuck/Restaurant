import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Reservation from './Pages/Reservation'
import MenuWineList from './Pages/MenuWineList'
import GiftFrancescanaExperience from './Pages/GiftFrancescanaExperience'
import EventsBanqueting from './Pages/EventsBanqueting'
import Location from './Pages/Location'


function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/menu-wine-list' element={<MenuWineList />} />
            <Route path='/gift-a-francescana-experience' element={<GiftFrancescanaExperience />} />
            <Route path='/events-banqueting' element={<EventsBanqueting />} />
            <Route path='/location' element={<Location />} />
            <Route path="*" element={<p>Page not found 404 </p  >} />
        </Routes>
    );
}

export default Routers;