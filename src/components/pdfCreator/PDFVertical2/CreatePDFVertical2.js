import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './Vertical-two.css';
import { pdf } from '@react-pdf/renderer';
import { ReactPDFVertical2, toBlob } from './ReactPDFVertical2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';

const CreatePDFVertical2 = () => {
    const [pdfGenerated, setPdfGenerated] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        waterMark: null,
        logo: null,
        fecha: '',
        titulo: '',
        texto: '',
        imagen1: null,
        imagen2: null,
        descripcion1: '',
        descripcion2: '',
        contacto: '',
    });

    const stylePreview = StyleSheet.create({
        previewPage: {
            width: '100%',
            height: '100%',
            top: '0%',
            position: 'absolute',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: '3mm',
            zindex: '4'
        }});

    const handleWatermarkImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prevData) => ({
            ...prevData,
            waterMark: url,
            }));
        }
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prevData) => ({
            ...prevData,
            logo: url,
            }));
        }
    };

    const handleImage1Change = (e) => {
        const file = e.target.files[0];
        if (file){
            const url = URL.createObjectURL(file);
                setFormData((prevData) => ({
                ...prevData,
                imagen1: url,
                }));
        };
    };

    const handleImage2Change = (e) => {
        const file = e.target.files[0];
        if (file){
            const url = URL.createObjectURL(file);
                setFormData((prevData) => ({
                ...prevData,
                imagen2: url,
                }));
        };
    };

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setFormData((prevData) => ({
            ...prevData,
            [name]: url,
        }));
        } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        }
    };

    const handleResetForm = () => {
        const userConfirmed = window.confirm('¿Estás seguro de que deseas restablecer el formulario? Se perderán los cambios no guardados.');
        setFormData({
        waterMark: null,
        texto: '',
        logo: null,
        fecha: '',
        titulo: '',
        imagen1: null,
        imagen2: null,
        descripcion1: '',
        descripcion2: '',
        contacto: '',
        });
        setPdfGenerated(false);
        window.location.reload();
    };

    const handleDownload = async () => {
        try {
        // Crear el contenido del PDF utilizando la biblioteca @react-pdf/renderer
        const pdfBlob = await toBlob(formData);

        // Guardar el PDF como archivo descargable utilizando la biblioteca file-saver
        saveAs(pdfBlob, 'nombre-del-archivo.pdf');
        } catch (error) {
        console.log('Error al generar PDF: ', error);
        }
    };

    return (
        <section className="container-one">
        <div className='erase-download-buttons'>
            <button className="reset-button-one" onClick={handleResetForm}>Reset</button>
            <button className="preview-button-for-vertical-two" onClick={() => setShowPreview(!showPreview)}>
                {showPreview ? 'Cerrar Previa' : 'Vista Previa'}
            </button>
            <button className="download-button-one" onClick={handleDownload}>Descargar PDF</button>
        </div>
        
        <div className="upper-container-one">
        
            <div className="logo-input-one">
                <div className='container-logo-one'>
                    <input type="file" id="logo-upload" accept="image/*" onChange={handleLogoChange} style={{ display: 'none' }} />
                    <label htmlFor="logo-upload" className="custom-file-upload-one">
                        {formData.logo ? (
                                    <span>
                                        <FontAwesomeIcon icon={faCheck} className='done-icon' /> {' '}
                                        <span className="image-title">
                                            Logo cargado Correctamente
                                        </span>
                                    </span>
                                ) : (
                                    <span>
                                        + Cargar Logo (opcional)
                                    </span>
                                )}
                    </label>
                    {formData.logo && <button id="cancel-logo-one" className='cancel-button-for-vertical-one' onClick={() => setFormData((prevData) => ({ ...prevData, logo: null }))}>X</button>}</div>
                </div>

                <div className="date-input-one">
                <input type="date" id="date-input" placeholder="Fecha" name="fecha" value={formData.fecha} onChange={handleInputChange} />
                </div>
                {formData.fecha && <button id="cancel-date-one" className='cancel-button-for-vertical-one' onClick={() => handleInputChange({ target: { name: 'fecha', value: '' } })}>X</button>}
            </div>
            <div className="title-input-one">
                <input type="text" maxLength={81} className='fill-title-one' placeholder="Agrega un titulo" name="titulo" value={formData.titulo} onChange={handleInputChange} />
                {formData.titulo && <button id="cancel-title-one" className='cancel-button-for-vertical-one' onClick={() => handleInputChange({ target: { name: 'titulo', value: '' } })}>X</button>}
            </div>
            <div className="text-input-one">
                <textarea
                    placeholder="Agrega un texto no mayor a 6 líneas"
                    name="texto"
                    className='principal-text-one'
                    value={formData.texto}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={577}
                />
                    {formData.texto && <button id="cancel-text-one" className='cancel-button-for-vertical-one' onClick={() => handleInputChange()}>X</button>}
            </div>
            <div className="container-image-for-vertical-two">
                {formData.imagen1 && <button id="cancel-image-one" className='cancel-button-for-vertical-one' onClick={() => setFormData((prevData) => ({ ...prevData, imagen1: null }))}>X</button>}
                <input type="file" id="image-upload-1" accept="image/*" onChange={handleImage1Change} style={{ display: 'none' }} />
                <label htmlFor="image-upload-1" className="image-for-vertical-two">
                    {formData.imagen1 ? (
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} className='done-icon' /> {' '}
                                            <span className="image-title">
                                                Imagen 1 cargada Correctamente
                                            </span>
                                        </span>
                                    ) : (
                                        <span>
                                            + Cargar imagen 1 (opcional)
                                        </span>
                                    )}
                </label>
                {formData.imagen2 && <button id="cancel-image-two" className='cancel-button-for-vertical-one' onClick={() => setFormData((prevData) => ({ ...prevData, imagen2: null }))}>X</button>}
                <input type="file" id="image-upload-2" accept="image/*" onChange={handleImage2Change} style={{ display: 'none' }} />
                <label htmlFor="image-upload-2" className="image-for-vertical-two"> 
                {formData.imagen2 ? (
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} className='done-icon' /> {' '}
                                            <span className="image-title">
                                                Imagen 2 cargada Correctamente
                                            </span>
                                        </span>
                                    ) : (
                                        <span>
                                            + Cargar imagen 2 (opcional)
                                        </span>
                                    )}
                </label>
            </div>

            <div className="description-div-for-vertical-two">
            <input type="text" maxLength={65} placeholder="Descrip imagen (opcional)" className='description-text-one' name="descripcion1" value={formData.descripcion1} onChange={handleInputChange} />
            {formData.descripcion1 && <button id="cancel-description-1-one" className='cancel-button-for-vertical-one' onClick={() => handleInputChange({ target: { name: 'descripcion1', value: '' } })}>X</button>}
            <input type="text" maxLength={65} placeholder="Descrip imagen (opcional)" className='description-text-two' name="descripcion2" value={formData.descripcion2} onChange={handleInputChange} />
            {formData.descripcion2 && <button id="cancel-description-2-one" className='cancel-button-for-vertical-one' onClick={() => handleInputChange({ target: { name: 'descripcion2', value: '' } })}>X</button>}
            </div>
            
        <div className='contact-div-for-vertical-two'>
            <input
                type="text"
                placeholder="Agrega tus datos de contacto (opcional)"
                name="contacto"
                className='contact-input-for-vertical-two'
                value={formData.contacto}
                maxLength={92}
                onChange={handleInputChange}
            />
            {formData.contacto && <button id="cancel-contact-one-vertical" className='cancel-button-for-vertical-one' onClick={() => handleInputChange({ target: { name: 'contacto', value: '' } })}>X</button>}
        </div>

        <section className='Preview-pdf'>
                {showPreview && (
                    <PDFViewer style={stylePreview.previewPage} >
                        <ReactPDFVertical2 data={formData} />
                    </PDFViewer>
                    )}
        </section>
    </section>
    );
};

export default CreatePDFVertical2;
