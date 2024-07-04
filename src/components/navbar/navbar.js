import './navbar.css';
import React, { useState } from 'react';
import ImagesMenu from '../imagesMenu/imagesMenu';
import ConfirmPreferences from '../confirmPreferences/confirmPreferences';

const NavBar = ({ handleConfirmPreferences }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isImagesMenuVisible, setImagesMenuVisible] = useState(false);
    const [selectedImageNavbar, setSelectedImageNavbar] = useState(null);
    
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setSelectedImageNavbar(null);
    };

    const toggleImagesMenu = () => {
        setImagesMenuVisible(!isImagesMenuVisible);
    };

    const handleImageOptionClick = (option) => {
        setSelectedImageNavbar(option);
        setImagesMenuVisible(false);
    };

    const handleConfirmButtonClick = () => {
        console.log('Desde Confirm Preferences', selectedImageNavbar);
        handleConfirmPreferences(selectedImageNavbar);
    };

    return (
        <div className="navbar">
            <div className="first-menu">

                <div className='instructions'>
                    <p className='text-instructions'>Instrucciones: Presiona el botón #Images, <br className='br-for-mobile'/> selecciona el número, 
                    confirma y llena el formato</p>
                </div>

                <div className="menu-selectors">

                <button className="images-selector" onClick={toggleImagesMenu}>
                    # Images
                    {isImagesMenuVisible && <ImagesMenu handleImageOptionSelected={handleImageOptionClick} />}
                </button>

                <ConfirmPreferences images={selectedImageNavbar} onClick={handleConfirmButtonClick} />
                </div>
            </div>

        </div>
    );
};

export default NavBar;
