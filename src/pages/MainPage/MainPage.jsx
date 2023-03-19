import React from 'react';
import "./MainPage.css";
import ParticlesBackground from '../../components/MainPageComponents/ParticlesBackground';
import Navbar from '../../components/MainPageComponents/Navbar';
import MenuButton from '../../components/MainPageComponents/MenuButton';


function MainPage() {
  return (
    <div className="main-page" style={{ height: '100%', overflow: "hidden" }} >
      <ParticlesBackground />
      <Navbar />
      <MenuButton />
    </div>
  );
}

export default MainPage;
