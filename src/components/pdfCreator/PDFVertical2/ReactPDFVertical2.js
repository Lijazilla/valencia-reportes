
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font, pdf } from '@react-pdf/renderer';
import { parseISO, format } from 'date-fns';
import { Image as PDFImage } from '@react-pdf/renderer';

const fecha = '2023-07-22'; // Ejemplo de una fecha en formato ISO (AAAA-MM-DD)
const fechaValida = parseISO(fecha);
const fechaFormateada = format(fechaValida, 'dd/MM/yyyy');

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: '3mm',
    },  
    content:{
        padding: '3mm'
    },
    container: {
        marginTop: '0mm',
        width: '204mm',
        height:'291mm',
        borderWidth: '.3mm', // Tamaño del borde (3mm en este caso)
        borderStyle: 'solid', // Estilo del borde (sólido, discontinuo, etc.)
        borderColor: 'black', // Color del borde (puedes cambiarlo a tu preferencia)
    },
    logo: {
        position: 'absolute',
        top: '5mm',
        left: '5mm',
        width: '35mm',
        height: '35mm',
        objectFit: 'cover',
        maxWidth: '35mm',
        maxHeight: '35mm'
    },
    date: {
        position: 'absolute',
        top: '5mm',
        right: '10mm',
        fontSize: 11
    },
    title: {
        position: 'absolute',
        marginTop: '55mm',
        left: '10mm',
        width: '150mm',
        fontSize: 11,
        fontWeight: 'bold',
    },
    text: {
        position: 'absolute',
        marginTop: '70mm',
        lineHeight: 1.5,
        width: '193mm',
        height: '35mm',
        left: '7mm',
        fontSize: 11,
    },
    image: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: '110mm',
        marginLeft: '6mm',
        width: '95mm',
        height: '100mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
        border: '1pt solid black',
    },
    image2: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: '110mm',
        marginLeft: '108mm',
        width: '95mm',
        height: '100mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        border: '1pt solid black',
        objectFit: 'cover'
    },
    description: {
        position: 'absolute',
        marginTop: '212mm',
        marginLeft: '12mm',
        width: '85mm',
        height: 'auto',
        fontSize: 11,
        textAlign: 'center'
    },
    description2: {
        position: 'absolute',
        marginTop: '212mm',
        marginLeft: '114mm',
        width: '85mm',
        height: 'auto',
        fontSize: 11,
        textAlign: 'center'
    },
    contact: {
        position: 'absolute',
        bottom: '6mm',
        width: '175mm',
        height: '5mm',
        marginLeft: '5mm',
        fontSize: 11,
    },
    pageNumber: {
        position: 'absolute',
        bottom: '5mm',
        right: '5mm',
        fontSize: 11
    },
    watermark: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
    },
});

const ReactPDFVertical2 = ({ data }) => {
    const formattedDate = data.fecha ? format(parseISO(data.fecha), 'dd MMMM yyyy') : '';

    return (
        <Document>
        <Page size="A4" style={styles.page}>
        {data.waterMark && (
                    <View style={styles.watermark}>
                        <Image src={data.waterMark} />
                    </View>
                )}
            <View style={styles.container}>
            {data.logo &&
                (<View style={styles.logo}>
                    <Image src={data.logo}/>
                </View>)}
            <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{data.titulo}</Text>
            <Text style={styles.text}>{data.texto}</Text>
            {data.imagen1 && (
            <View style={styles.image}>
                <PDFImage src={data.imagen1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            {data.imagen2 && (
            <View style={styles.image2}>
                <PDFImage src={data.imagen2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            <View style={styles.description}>
            <Text>{data.descripcion1}</Text>
            </View>
            <View style={styles.description2}>
            <Text>{data.descripcion2}</Text>
            </View>
            <Text style={styles.contact}>{data.contacto}</Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
        </Document>
    );
    };

    const toBlob = async (data) => {
    const pdfBlob = await pdf(<ReactPDFVertical2 data={data} />).toBlob();
    return pdfBlob;
};

export { ReactPDFVertical2, toBlob };
