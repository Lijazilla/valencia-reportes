//ReactPDFVertical1.js
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font, pdf } from '@react-pdf/renderer';
import { parseISO, format } from 'date-fns';

const fecha = '2023-07-22'; // Ejemplo de una fecha en formato ISO (AAAA-MM-DD)
const fechaValida = parseISO(fecha);
const fechaFormateada = format(fechaValida, 'dd/MM/yyyy');

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '3mm',
  },
  container: {
    marginTop: '0mm',
    width: '204mm',
    height: '291mm',
    borderWidth: '.3mm',
    borderStyle: 'solid',
    borderColor: 'black',
  },
  logo: {
    position: 'absolute',
    top: '5mm',
    left: '5mm',
    width: '35mm',
    height: '35mm',
    objectFit: 'cover',
    maxWidth: '35mm',
    maxHeight: '35mm',
  },
  date: {
    position: 'absolute',
    top: '5mm',
    right: '10mm',
    fontSize: 11,
  },
  title: {
    position: 'absolute',
    marginTop: '50mm',
    left: '10mm',
    width: '150mm',
    fontSize: 11,
    fontWeight: 'bold',
  },
  text: {
    position: 'absolute',
    marginTop: '60mm',
    lineHeight: 1.5,
    width: '195mm',
    height: '35mm',
    left: '7mm',
    fontSize: 11,
  },
  image: {
    position: 'absolute',
    alignItems: 'center',
    objectFit: 'cover',
    marginTop: '110mm',
    marginLeft: '43mm',
    width: '130mm',
    height: '110mm',
  },
  description: {
    position: 'absolute',
    marginTop: '212mm',
    marginLeft: '60mm',
    width: '90mm',
    fontSize: 11,
    textAlign: 'center'
  },
  contact: {
    position: 'absolute',
    bottom: '6mm',
    width: '170mm',
    height: '5mm',
    marginLeft: '8mm',
    fontSize: 11
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

const ReactPDFVertical1 = ({ data }) => {
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
                        <Image src={data.imagen1} />
                    </View>
                )}
                <Text style={styles.description}>{data.descriptionFirst}</Text>
                <Text style={styles.contact}>{data.contacto}</Text>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
            </Page>
        </Document>
    );
    };

    const toBlob = async (data) => {
    const pdfBlob = await pdf(<ReactPDFVertical1 data={data}/>).toBlob();
    return pdfBlob;
};

export { ReactPDFVertical1, toBlob };
