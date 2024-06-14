const DropdownMenu = ({ isOpen, activeSubMenu, handleSubMenu }) => {
    const mainMenu = (
        <ul>
            <li className="menu-item">Home</li>
            <li className="menu-item" onClick={() => handleSubMenu('services')}>Services</li>
            <li className="menu-item">About Us</li>
            <a href="#contact-us-section">
                <li className="menu-item contact-us ">Contact Us</li>
            </a>
        </ul>
    );

    const servicesMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <img src="newImg/backicon.svg" alt="Back" />
                Back
            </li>
            <li className="menu-item">Technical Support</li>
            <li className="menu-item">Billing Support</li>
            <li className="menu-item">Managed Platform</li>
            <li className="menu-item">Other Services</li>
        </ul>
    );

    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            {activeSubMenu === 'services' ? servicesMenu : mainMenu}
        </div>
    );
}

export default DropdownMenu;
