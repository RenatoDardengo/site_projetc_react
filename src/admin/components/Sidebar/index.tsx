import React from 'react';
import { Menu } from '../Menu';
import './style.css';

type SidebarProps = {
    collapsed: boolean;
    renderComponent: (component: React.ReactNode) => void;
};

export const Sidebar = ({ collapsed, renderComponent }: SidebarProps) => {
    return (
        <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
            <Menu collapsed={collapsed} renderComponent={renderComponent} />
        </div>
    );
};

