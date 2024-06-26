const express = require('express');
const { generarPDF } = require('./generarPDF');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/generar-pdf', async (req, res) => {
    const formData = req.body;

    try {
        await generarPDF(formData); // Generar el PDF y guardarlo en el servidor
        res.download('pdf_generado.pdf'); // Descargar el PDF generado
    } catch (error) {
        console.error('Error generando el PDF:', error);
        res.status(500).send('Error generando el PDF');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
