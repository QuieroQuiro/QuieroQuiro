function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

function setToday() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    document.getElementById('fecha').value = formattedDate;
}

window.addEventListener('load', async () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let fecha = document.getElementById('fecha').value;
        let numeroConsulta = document.getElementById('numeroConsulta').value;
        let signos = document.getElementById('signos').value;
        let tratamiento = document.getElementById('tratamiento').value;
        let recomendaciones = document.getElementById('recomendaciones').value;
        let diagnostico = document.getElementById('diagnostico').value;

        generatePDF(nombre, fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico);
    });
});

async function generatePDF(nombre, fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico) {
    const image = await loadImage("evo.jpg"); // Cambia "evo.jpg" por la URL de tu imagen

    const img = new Image();
    img.onload = function() {
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Crear un nuevo documento PDF
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [imgWidth, imgHeight]
        });

        // Añadir la imagen al PDF
        pdf.addImage(image, 'JPEG', 0, 0, imgWidth, imgHeight);

        // Establecer el tamaño de la fuente
        pdf.setFontSize(60);

        // Añadir los datos al PDF
        pdf.text(`${nombre}`, 1790, 197);
        pdf.setFontSize(70);
        pdf.text(`${fecha}`, 110, 539);
        pdf.text(`${numeroConsulta}`, 630, 539);
        pdf.setFontSize(55);
        pdf.text(`${signos}`, 1264, 513, { maxWidth: 1260 });
        pdf.text(`${tratamiento}`, 123, 787, { maxWidth: 1030 });
        pdf.text(`${recomendaciones}`, 1218, 787, { maxWidth: 1280 });
        pdf.setFontSize(45);
        pdf.text(`${diagnostico}`, 209, 1015, { maxWidth: 915 });

        // Generar el nombre del archivo
        const filename = `${nombre}_${fecha}_Evo.pdf`;

        // Guardar el PDF con el nombre generado
        pdf.save(filename);
    };
    img.src = image;
}
