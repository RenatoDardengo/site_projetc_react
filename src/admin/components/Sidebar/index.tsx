import React from 'react';
import { Menu } from '../Menu';
import './style.css';

type SidebarProps = {
    collapsed: boolean;
};

export const Sidebar = ({ collapsed }: SidebarProps) => {
    return (
        <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
            <Menu collapsed={collapsed} />
        </div>
    );
};
