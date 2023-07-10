import  { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';
import {List} from '../../components/Products/List'
import './style.css';

export const Home = () => {
  const [collapse, setCollapse] = useState(false);
  const [currentPage, setCurrentPage] = useState<React.ReactNode>();

  const handleMenuClick = (page: React.ReactNode) => {
    setCurrentPage(page);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="container">
      <Navbar onCollapse={handleCollapse} />
      <Sidebar collapsed={collapse} />
      <Main>
        {currentPage === 'products' && <List />}
        
      </Main>
    </div>
  );
};


