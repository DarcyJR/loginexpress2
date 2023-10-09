//const express = require('express');
const fs = require('fs');
const PDFParser = require('pdf2json');

var pdfCaminho = "C:/Users/DarcyJr/Downloads/COMP. RICARDO PEIXOTO NF 12.pdf"
var txtCaminho = "C:/Users/DarcyJr/Downloads/txt.txt"

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError))
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("C:/Users/DarcyJr/Downloads/txt.txt", pdfParser.getRawTextContent().replaceAll(/(\r\n|\n|\r)/gm, ";"), () => { console.log() })
})

pdfParser.loadPDF(pdfCaminho)
















/*const app = express();

app.get('/', (req, res) => {
    res.send('Servidor');
})

app.listen(3000, () => {
    //console.log('Servidor Iniciado')
    //console.log('http://localhost:3000')
})*/



