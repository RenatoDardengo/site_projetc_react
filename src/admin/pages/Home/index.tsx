import React, { ReactNode, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';
import './style.css';

interface HomeProps {
  children: ReactNode;
}

export const Home: React.FC<HomeProps> = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [currentComponent, setCurrentComponent] = useState<ReactNode | null>(null);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const renderComponent = (component: ReactNode) => {
    setCurrentComponent(component);
  };

  return (
    <div className="container">
      <Navbar onCollapse={handleCollapse} />
      <Sidebar collapsed={collapse} renderComponent={renderComponent} />
      <Main>{currentComponent}</Main>
    </div>
  );
};


