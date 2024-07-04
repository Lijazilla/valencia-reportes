import React, { useState } from 'react';
import './horizontalVerticalMenu.css';

function HorizontalVerticalMenu({ handleOrientationOptionSelected }) {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [selectedOrientation, setSelectedOrientation] = useState(null);

    const handleOrientationOptionClick = (option) => {
        handleOrientationOptionSelected(option);
        setMenuVisible(false);
        console.log('Clicked Orientation Option:', option);
    };

    return (
        <div className={`horizontal-vertical-menu ${isMenuVisible ? 'active' : ''}`}>
            <li id="horizontal" onClick={() => handleOrientationOptionClick('horizontal')}>
                Horizontal
            </li>

            <li id="vertical" onClick={() => handleOrientationOptionClick('vertical')}>
                Vertical
            </li>
        </div>
    );
}

export default HorizontalVerticalMenu;
