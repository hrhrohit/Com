import React from 'react';

const DropdownMenu = ({ isOpen }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li className="menu-item">Home</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">About Us</li>
                <li className="menu-item contact-us">Contact Us</li>
            </ul>
        </div>
    );
}

export default DropdownMenu;
