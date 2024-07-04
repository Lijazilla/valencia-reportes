import React, { useState } from 'react';
import NavBar from './components/navbar/navbar';
import CreatePDFVertical1 from './components/pdfCreator/PDFVertical1/CreatePDFVertical1';
import CreatePDFVertical2 from './components/pdfCreator/PDFVertical2/CreatePDFVertical2';
import CreatePDFVertical3 from './components/pdfCreator/PDFVertical3/CreatePDFVertical3';

const App = () => {
    const [confirmPreferencesClicked, setConfirmPreferencesClicked] = useState(false);
    const [numImages, setNumImages] = useState(null);
    const [formatSelected, setFormatSelected] = useState(null);
    
    const handleConfirmPreferences = (numImages) => {
        if (numImages) {
        setNumImages(numImages);
    
        if (numImages) {
            if (numImages === 1) {
            setFormatSelected(`vertical${numImages}`);
            setConfirmPreferencesClicked(true);
            } else if (numImages === 2 || numImages === 3) {
            setFormatSelected(`vertical${numImages}`);
            setConfirmPreferencesClicked(true);
            } else {
            // Mostrar el mensaje de alerta si no cumple con las condiciones anteriores
            alert('Opción de formato no válida.');
            }
        }
        } else {
        alert('Por favor, selecciona la cantidad de imágenes.');
        }
    };

    return (
        <div>
            <NavBar handleConfirmPreferences={handleConfirmPreferences} />

            {/* Renderizar el componente adecuado según el estado de confirmPreferencesClicked y formatSelected */}
            {confirmPreferencesClicked && formatSelected === 'vertical2' && <CreatePDFVertical2 />}
            {confirmPreferencesClicked && formatSelected === 'vertical3' && <CreatePDFVertical3 />}
            {confirmPreferencesClicked && formatSelected !== 'vertical2' && 
            formatSelected !== 'vertical3' && formatSelected !== 'vertical4' && formatSelected !== 'vertical5' && formatSelected !== 'vertical6'
            && (
                <>
                {(
                    <CreatePDFVertical1 numImages={numImages} />
                )}
                </>
            )}
        </div>
    );
};

export default App;

