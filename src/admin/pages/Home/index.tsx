import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';
import './style.css';

export const Home = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="container">
      <Navbar onCollapse={handleCollapse} />
      <Sidebar collapsed={collapse} />
      <Main />
    </div>
  );
};


