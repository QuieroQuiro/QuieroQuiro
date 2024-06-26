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

window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let fecha = document.getElementById('fecha').value;
        let numeroConsulta = document.getElementById('numeroConsulta').value;
        let signos = document.getElementById('signos').value;
        let tratamiento = document.getElementById('tratamiento').value;
        let recomendaciones = document.getElementById('recomendaciones').value;
        let diagnostico = document.getElementById('diagnostico').value;

        generatePDF(fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico);
    })

});

async function generatePDF(fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico) {
    const image = await loadImage("Historia1.jpg");
    const image2 = await loadImage("Historia2.jpg"); // Puedes cambiar "formulario.jpg" por la UR

    const pdf = new jsPDF({
        orientation: 'portrait', // Cambiado a orientación vertical
        unit: 'px',
        format: [letter] // Cambiado al tamaño que mejor se ajuste a tu contenido
    });

    pdf.addImage(image, 'JPG', 0, 0);

    pdf.setFontSize(12);
    pdf.text(fecha, 260, 125);

    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 235, 150);
    pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
    pdf.text(date.getUTCFullYear().toString(), 320, 150);

    pdf.setFontSize(10);
    pdf.text(numeroConsulta, 170, 213);
    pdf.text(signos, 170, 230);
    pdf.text(tratamiento, 170, 250);
    pdf.text(recomendaciones, 170, 270);
    pdf.text(diagnostico, 170, 290);

    pdf.save("formulario_medico.pdf");
}
