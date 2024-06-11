import React from 'react';

const DropdownMenu = ({ isOpen }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li className="menu-item">Home</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">About Us</li>
                <li className="menu-item contact-us">
                    <a href="#contact-us-section">Contact Us</a>
                </li>
            </ul>
        </div>
    );
}

export default DropdownMenu;
