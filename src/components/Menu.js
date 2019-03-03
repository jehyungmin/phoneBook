import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        
        <div className="main-menu">
                <div className="menu"><NavLink exact to="/" activeClassName="menu-active"> 리스트 </NavLink></div>
                <div className="menu"><NavLink exact to="/phonebook" activeClassName="menu-active"> 입력 </NavLink></div>
        </div>
    );
};

export default Menu;