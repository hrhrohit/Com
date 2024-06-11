import React, { useState } from 'react';
import DropdownMenu from '../SubComponents/DropDownMenu';
import "./Styles/navMob.css"

const NavbarMob = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        setIsAnimating(true);
        setIsMenuOpen(!isMenuOpen);
    }

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    }

    return (
        <>
            <div className='w-full flex justify-center gap-48 pt-[22px]'>
                <img src="newImg/Frame 1.png" alt="COM STREAM" />
                <svg
                    onClick={toggleMenu}
                    onAnimationEnd={handleAnimationEnd}
                    className={isAnimating ? 'animate-svg' : ''}
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.38889 0C1.02053 0 0.667263 0.158036 0.406796 0.43934C0.146329 0.720645 0 1.10218 0 1.5C0 1.89782 0.146329 2.27936 0.406796 2.56066C0.667263 2.84196 1.02053 3 1.38889 3H23.6111C23.9795 3 24.3327 2.84196 24.5932 2.56066C24.8537 2.27936 25 1.89782 25 1.5C25 1.10218 24.8537 0.720645 24.5932 0.43934C24.3327 0.158036 23.9795 0 23.6111 0H1.38889ZM0 10.5C0 10.1022 0.146329 9.72064 0.406796 9.43934C0.667263 9.15804 1.02053 9 1.38889 9H23.6111C23.9795 9 24.3327 9.15804 24.5932 9.43934C24.8537 9.72064 25 10.1022 25 10.5C25 10.8978 24.8537 11.2794 24.5932 11.5607C24.3327 11.842 23.9795 12 23.6111 12H1.38889C1.02053 12 0.667263 11.842 0.406796 11.5607C0.146329 11.2794 0 10.8978 0 10.5ZM0 19.5C0 19.1022 0.146329 18.7206 0.406796 18.4393C0.667263 18.158 1.02053 18 1.38889 18H23.6111C23.9795 18 24.3327 18.158 24.5932 18.4393C24.8537 18.7206 25 19.1022 25 19.5C25 19.8978 24.8537 20.2794 24.5932 20.5607C24.3327 20.842 23.9795 21 23.6111 21H1.38889C1.02053 21 0.667263 20.842 0.406796 20.5607C0.146329 20.2794 0 19.8978 0 19.5Z" fill="#121212" />
                </svg>
            </div>
            <DropdownMenu isOpen={isMenuOpen} />
        </>
    );
}

export default NavbarMob;
