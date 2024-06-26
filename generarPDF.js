const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

async function generarPDF(data) {
    const nombre = data.nombre;
    const direccion = data.direccion;
    const texto = data.texto;

    const existingPdfBytes = await fs.readFileSync('plantilla.pdf');
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(nombre, {
        x: 50,
        y: 600,
        size: 24,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(direccion, {
        x: 50,
        y: 550,
        size: 18,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(texto, {
        x: 50,
        y: 450,
        size: 12,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('pdf_generado.pdf', pdfBytes);
}

module.exports = { generarPDF };
