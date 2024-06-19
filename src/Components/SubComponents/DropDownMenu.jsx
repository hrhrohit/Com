import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ isOpen, activeSubMenu, handleSubMenu, setIsMenuOpen }) => {
    const mainMenu = (
        <ul>
            <li className="menu-item" onClick={() => navigate('/Com/')}>Home</li>
            <li className="menu-item" onClick={() => handleSubMenu('services')}>
                Services
            </li>
            <li className="menu-item">About Us</li>
            <a href="#contact-us-section">
                <li className="menu-item contact-us">Contact Us</li>
            </a>
        </ul>
    );

    const servicesMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.2866L2 9.97452L12 1.66242" stroke="#ff4d4d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
            </li>
            <li className="menu-item" onClick={() => handleSubMenu('technical-support')}>
                Technical Support
            </li>
            <li className="menu-item" onClick={() => handleSubMenu('billing-support')}>
                Billing Support
            </li>
            <li className="menu-item" onClick={() => handleSubMenu('managed-platform')}>
                Managed Platform
            </li>
            <li className="menu-item" onClick={() => handleSubMenu('other-services')}>
                Other Services
            </li>
        </ul>
    );

    const technicalSupportMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.2866L2 9.97452L12 1.66242" stroke="#ff4d4d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
            </li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/voip-lifecycle');
            }}>VOIP Lifecycle Management Services</li>
            <li className='menu-item' onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/voip-provisioning');
            }}>Detailed Provisioning servives</li>
            <li className='menu-item' onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/sip-troubleshooting');
            }}>Advanced SIP-Related Troubleshooting</li>
             <li className='menu-item' onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/custom-dial-plan');
            }}>Custom Dial Plan and custom dail translation</li>
        </ul>
    );

    const billingSupportMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.2866L2 9.97452L12 1.66242" stroke="#ff4d4d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
            </li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/billing-support');
            }}>Rev.io Billing Platform Expertise</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/dedicated-team');
            }}>Dedicated team</li>
        </ul>
    );

    const managedPlatformMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.2866L2 9.97452L12 1.66242" stroke="#ff4d4d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
            </li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/sky-switch');
            }}>Sky Switch</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/netsapiens');
            }}>Netsapiens</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/hodusoft');
            }}>Hodusoft</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/bicom');
            }}>Bicom</li>
        </ul>
    );

    const otherServicesMenu = (
        <ul>
            <li className="menu-item back-button" onClick={() => handleSubMenu(null)}>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.2866L2 9.97452L12 1.66242" stroke="#ff4d4d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
            </li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/other-service-support');
            }}>Support via Tickets, Chat, Phone</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/efficient-transition');
            }}>Efficient Transition to SkySwitch</li>
            <li className="menu-item" onClick={() => {
                setIsMenuOpen(false)
                navigate('/Com/service-details/community-communication');
            }}>Community Communication</li>
        </ul>
    );


    const navigate = useNavigate();


    return (
        <div className={`dropdown-menu top-[59px] ${isOpen ? 'open' : ''}`}>
            {activeSubMenu === 'services' ? servicesMenu : activeSubMenu === 'technical-support' ? technicalSupportMenu : activeSubMenu === 'billing-support' ? billingSupportMenu : activeSubMenu === 'managed-platform' ? managedPlatformMenu : activeSubMenu === 'other-services' ? otherServicesMenu : mainMenu}
        </div>
    );
};

export default DropdownMenu;