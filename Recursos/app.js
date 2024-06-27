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

        let nombre = document.getElementById('nombre').value;
        let fecha = document.getElementById('fecha').value;
        let numeroConsulta = document.getElementById('numeroConsulta').value;
        let signos = document.getElementById('signos').value;
        let tratamiento = document.getElementById('tratamiento').value;
        let recomendaciones = document.getElementById('recomendaciones').value;
        let diagnostico = document.getElementById('diagnostico').value;

        generatePDF(nombre, fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico);
    })

});

async function generatePDF(nombre, fecha, numeroConsulta, signos, tratamiento, recomendaciones, diagnostico) {
    const image = await loadImage("evo.jpg"); // Puedes cambiar "evo.jpg" por la URL de tu imagen

    const pdf1 = new jsPDF({
        orientation: 'landscape', // Orientación vertical
        unit: 'px',
        format: [800, 1200] // Tamaño del PDF ajustado
    });

    pdf1.addImage(image, 'JPG', 0, 0);

    pdf1.setFontSize(45);
    pdf1.text(nombre, 1403, 173); // Posición del nombre en el PDF

    const date = new Date();
    pdf1.text(date.getUTCDate().toString(), 235, 150);
    pdf1.text((date.getUTCMonth() + 1).toString(), 275, 150);
    pdf1.text(date.getUTCFullYear().toString(), 320, 150);

    pdf1.setFontSize(45);
    pdf1.text(fecha, 100, 485);
    pdf1.text(numeroConsulta, 633, 484);
    pdf1.text(signos, 170, 210);
    pdf1.text(tratamiento, 170, 230);
    pdf1.text(recomendaciones, 170, 250);
    pdf1.text(diagnostico, 170, 270);

    pdf1.save("formulario_evolucion.pdf");
}
