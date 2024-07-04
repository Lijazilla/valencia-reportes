import React, { useState } from 'react';
import './imagesMenu.css';

function ImagesMenu({ handleImageOptionSelected }) {
    const [isImagesMenuVisible, setImagesMenuVisible] = useState(false);
    const [imageSelectedOption, setImageSelectedOption] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageOptionClick = (option) => {
        setImageSelectedOption(option);
        handleImageOptionSelected(option);
        setSelectedImage(option);
        setImagesMenuVisible(false);
        console.log('Clicked Images Option:', option);
    };

    const toggleImagesMenu = () => {
        setImagesMenuVisible(!isImagesMenuVisible);
    };

    return (
        <div className={`images-list ${isImagesMenuVisible ? 'active' : ''}`} onClick={toggleImagesMenu}>
            <li id="uno" onClick={() => handleImageOptionClick(1)} className={imageSelectedOption === 1 ? 'active' : ''}>
                1
            </li>

            <li id="uno" onClick={() => handleImageOptionClick(2)} className={imageSelectedOption === 2 ? 'active' : ''}>
                2
            </li>

            <li id="uno" onClick={() => handleImageOptionClick(3)} className={imageSelectedOption === 3 ? 'active' : ''}>
                3
            </li>
        </div>
    );
}

export default ImagesMenu;
