//ConfirmPreferences.js
import React from 'react';

const ConfirmPreferences = ({ orientation, numImages, onClick }) => {
    return (
        <div>
            <button className='confirm-preferences' onClick={onClick}>Confirmar Preferencias</button>
        </div>
    );
};

export default ConfirmPreferences;
