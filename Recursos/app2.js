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

$(document).ready(function() {
    $('#antecedentes').select2({
        placeholder: "Seleccione uno o más antecedentes heredofamiliares"
    });
    $('#quien').select2({
        placeholder: "Seleccione un familiar"
    });
    $('#antecedentesPersonales').select2({
        placeholder: "Seleccione uno o más antecedentes personales patológicos"
    });
    intensidadDolor
    $('#intensidadDolor').select2({
        placeholder: "Seleccione la intensidad del dolor"
    });
    $('#dondeDuele').select2({
        placeholder: "Seleccione el lugar de la molestia"
    });
    $('#cervicales').select2({
        placeholder: "Seleccione las opciones cervicales"
    });
    $('#dorsales').select2({
        placeholder: "Seleccione las opciones dorsales"
    });
    $('#lumbares').select2({
        placeholder: "Seleccione las opciones lumbares"
    });
    $('#reflejos').select2({
        placeholder: "Seleccione los reflejos"
    });
    $('#fuerzaMuscular').select2({
        placeholder: "Seleccione la fuerza muscular"
    });
    $('#comprensionCervical').select2({
        placeholder: "Seleccione la Prueba de Comprensión Cervical"
    });

    $('#depresionHombro').select2({
        placeholder: "Seleccione la Prueba de Depresión de Hombro"
    });

    $('#valsalva').select2({
        placeholder: "Seleccione la Prueba de Valsalva"
    });

    $('#examenGeorge').select2({
        placeholder: "Seleccione la Prueba de Examen de George"
    });
    $('#posicionAdams').select2({
        placeholder: "Seleccione la Prueba"
    });
    $('#slr').select2({
        placeholder: "Seleccione la Prueba SLR"
    });

    $('#kemps').select2({
        placeholder: "Seleccione la Prueba Kemp's"
    });

    $('#nachlas').select2({
        placeholder: "Seleccione la Prueba Nachlas"
    });

    $('#traccionFemoral').select2({
        placeholder: "Seleccione la Prueba Tracción Femoral"
    });
});


window.addEventListener('load', async () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let fecha = document.getElementById('fecha').value;

        let nombre = document.getElementById('nombre').value;
        let apellidoPaterno = document.getElementById('apellidoPaterno').value;
        let apellidoMaterno = document.getElementById('apellidoMaterno').value; // Nuevo campo para el apellido materno
        let entero = Array.from(document.getElementById('entero').selectedOptions).map(option => option.value).join(', '); // Nuevo campo para "¿Cómo se enteró de nosotros?"
        
        let fechaNacimiento = document.getElementById('fechaNacimiento').value;
        let edad = document.getElementById('edad').value;
        let sexo = document.getElementById('sexo').value;
        let ocupacion = document.getElementById('ocupacion').value;

        let telefonoCelular = document.getElementById('telefonoCelular').value;
        let telefonoCasa = document.getElementById('telefonoCasa').value;
        let telefonoOficina = document.getElementById('telefonoOficina').value;
        let correoElectronico = document.getElementById('correoElectronico').value;

        let domicilio = document.getElementById('domicilio').value;
        let calle = document.getElementById('calle').value;
        let numero = document.getElementById('numero').value;
        let colonia = document.getElementById('colonia').value;
        let delegacion = document.getElementById('delegacion').value;

        
        // Recolección de antecedentes heredofamiliares
        let antecedentes = $('#antecedentes').val(); // Usar Select2 para obtener los valores seleccionados
        let quien = $('#quien').val();

        // Recolección de antecedentes personales patológicos
        let antecedentesPersonales = $('#antecedentesPersonales').val();

        let menarca = document.getElementById('menarca').value;
        let ritmo = document.getElementById('ritmo').value;
        let fum = document.getElementById('fum').value;
        let gestas = document.getElementById('gestas').value;
        let paras = document.getElementById('paras').value;
        let cesarias = document.getElementById('cesarias').value;
        let abortos = document.getElementById('abortos').value;
        let papanicolau = document.getElementById('papanicolau').value;
        let edadHijos = document.getElementById('edadHijos').value;

        let antecedentesTraumatologicos = document.getElementById('antecedentesTraumatologicos').value;
        
        let motivoConsulta = document.getElementById('motivoConsulta').value;
        let dondeDuele = $('#dondeDuele').val(); // Obtener ubicaciones donde duele
        let intensidadDolor = document.getElementById('intensidadDolor').value;

        let factoresDolor = document.getElementById('factoresDolor').value;
        let interrogatorioSistemas = document.getElementById('interrogatorioSistemas').value;
        let exploracionFisica = document.getElementById('exploracionFisica').value;

        let peso = document.getElementById('peso').value;
        let talla = document.getElementById('talla').value;
        let frecuenciaCardiaca = document.getElementById('frecuenciaCardiaca').value;
        let frecuenciaRespiratoria = document.getElementById('frecuenciaRespiratoria').value;
        let presionArterial = document.getElementById('presionArterial').value;
        let temperatura = document.getElementById('temperatura').value;

        let cervicales = $('#cervicales').val();
        let dorsales = $('#dorsales').val();
        let lumbares = $('#lumbares').val();
        let reflejos = $('#reflejos').val();
        let fuerzaMuscular = $('#fuerzaMuscular').val();

        let comprensionCervical = $('#comprensionCervical').val();
        let depresionHombro = $('#depresionHombro').val();
        let valsalva = $('#valsalva').val();
        let examenGeorge = $('#examenGeorge').val();

        let posicionAdams = $('#posicionAdams').val();
        let slr = $('#slr').val();
        let kemps = $('#kemps').val();
        let nachlas = $('#nachlas').val();
        let traccionFemoral = $('#traccionFemoral').val();

        let revisionRadiografica = $('#revisionRadiografica').val();
        let diagnosticof = $('#diagnosticof').val();
        let pronostico = $('#pronostico').val();
        let faseSintomatologica = $('#faseSintomatologica').val();
        let faseCorrectiva = $('#faseCorrectiva').val();


        generatePDF(
            fecha, nombre, apellidoPaterno, apellidoMaterno, entero, 
            fechaNacimiento, edad, sexo, ocupacion, telefonoCelular, 
            telefonoCasa, telefonoOficina, correoElectronico, domicilio, 
            calle, numero, colonia, delegacion, antecedentes, quien, 
            antecedentesPersonales, menarca, ritmo, fum, gestas, paras, 
            cesarias, abortos, papanicolau, edadHijos, 
            antecedentesTraumatologicos, motivoConsulta, dondeDuele, 
            intensidadDolor, factoresDolor, interrogatorioSistemas, 
            exploracionFisica, peso, talla, frecuenciaCardiaca, 
            frecuenciaRespiratoria, presionArterial, temperatura, 
            cervicales, dorsales, lumbares, reflejos, fuerzaMuscular, 
            comprensionCervical, depresionHombro, valsalva, examenGeorge, 
            posicionAdams, slr, kemps, nachlas, traccionFemoral, 
            revisionRadiografica, diagnosticof, pronostico, 
            faseSintomatologica, faseCorrectiva
        );
    });
});

async function generatePDF(
            fecha, nombre, apellidoPaterno, apellidoMaterno, entero, 
            fechaNacimiento, edad, sexo, ocupacion, telefonoCelular, 
            telefonoCasa, telefonoOficina, correoElectronico, domicilio, 
            calle, numero, colonia, delegacion, antecedentes, quien, 
            antecedentesPersonales, menarca, ritmo, fum, gestas, paras, 
            cesarias, abortos, papanicolau, edadHijos, 
            antecedentesTraumatologicos, motivoConsulta, dondeDuele, 
            intensidadDolor, factoresDolor, interrogatorioSistemas, 
            exploracionFisica, peso, talla, frecuenciaCardiaca, 
            frecuenciaRespiratoria, presionArterial, temperatura, 
            cervicales, dorsales, lumbares, reflejos, fuerzaMuscular, 
            comprensionCervical, depresionHombro, valsalva, examenGeorge, 
            posicionAdams, slr, kemps, nachlas, traccionFemoral, 
            revisionRadiografica, diagnosticof, pronostico, 
            faseSintomatologica, faseCorrectiva
) {
    const image = await loadImage("Historia1.jpg"); // Cambia "evo.jpg" por la URL de tu imagen
    const image2 = await loadImage("Historia2.jpg"); // Cambia "evo.jpg" por la URL de tu imagen

    const img = new Image();
    img.onload = function() {
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Crear un nuevo documento PDF
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [imgWidth, imgHeight]
        });

        // Añadir la imagen al PDF
        pdf.addImage(image, 'JPEG', 0, 0, imgWidth, imgHeight);

        // Establecer el tamaño de la fuente
        pdf.setFontSize(45);

        // Añadir los datos al PDF
        pdf.text(`${fecha}`, 1238, 183);

        pdf.setFontSize(40);
        pdf.text(`${nombre}`, 104, 321);  // Ubicación del nombre
        pdf.text(`${apellidoPaterno}`, 400, 321);  // Ubicación del apellido paterno
        pdf.text(`${apellidoMaterno}`, 718, 321);  // Ubicación del apellido materno
        pdf.text(`${entero}`, 1013, 321);

        pdf.text(`${fechaNacimiento}`, 162, 391); // Fecha de nacimiento
        pdf.text(`${edad} años`, 460 , 391); // Edad
        pdf.text(`${sexo}`, 666, 391);
        pdf.text(`${ocupacion}`, 984, 391); // Ocupación
        
        pdf.text(`${telefonoCelular}`, 104, 473); // Teléfono celular
        pdf.text(`${telefonoCasa}`, 355, 473); // Teléfono de casa
        pdf.text(`${telefonoOficina}`, 575, 473); // Teléfono de oficina
        pdf.text(`${correoElectronico}`, 930, 473);

        pdf.setFontSize(30);
        pdf.text(`${domicilio}`, 110, 541);
        pdf.text(`${calle}`, 384, 541);
        pdf.text(`${numero}`, 604, 541);
        pdf.text(`${colonia}`, 764, 541);
        pdf.text(`${delegacion}`, 1030, 541);

        pdf.setFontSize(45);
        const antecedenteCoords = {
            'Diabetes': { x: 273, y: 720 },
            'Cancer': { x: 359, y: 720 },
            'Has': { x: 424, y: 720 },
            'Cardiopatias': { x: 465, y: 720 },
            'Obesidad': { x: 572, y: 720 },
            'Desnutricion': { x: 655, y: 720 },
            'Alcoholismo': { x: 767, y: 720 },
            'Drogadiccion': { x: 874, y: 720 },
            'Malformaciones': { x: 986, y: 720 },
            'Tuberculosis': { x: 1125, y: 720 }
        };

        antecedentes.forEach((antecedente) => {
            const coords = antecedenteCoords[antecedente];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text(`__`, coords.x, coords.y);
            pdf.setTextColor(0, 0, 0); // Negro
            pdf.text(`${quien} `, 95, 757);
        });

        // Añadir antecedentes personales patológicos en coordenadas específicas
        const antecedentePersonalCoords = {
            'Diabetes': { x: 273, y: 977 },
            'Cancer': { x: 359, y: 977 },
            'Has': { x: 424, y: 977 },
            'Cardiopatias': { x: 465, y: 977 },
            'Obesidad': { x: 572, y: 977 },
            'Desnutricion': { x: 655, y: 977 },
            'Alcoholismo': { x: 767, y: 977 },
            'Drogadiccion': { x: 874, y: 977 },
            'Malformaciones': { x: 986, y: 977 },
            'Tuberculosis': { x: 1125, y: 977 }
        };

        antecedentesPersonales.forEach((antecedentePersonal, index) => {
            const coords = antecedentePersonalCoords[antecedentePersonal];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text(`__`, coords.x, coords.y);
            pdf.setTextColor(0, 0, 0); // Negro
        });

        pdf.text(`${menarca}`, 205, 1236 );
        pdf.text(`${ritmo}`, 335, 1236 );
        pdf.setFontSize(27);
        pdf.text(`${fum}`, 450, 1236 );
        pdf.setFontSize(45);
        pdf.text(`${gestas}`, 560, 1236 );
        pdf.text(`${paras}`, 670, 1236 );
        pdf.text(`${cesarias}`, 776, 1236 );
        pdf.text(`${abortos}`, 905, 1236 );
        pdf.text(`${papanicolau}`, 1035, 1236 );
        pdf.text(`${edadHijos}`, 1170, 1236 );


        pdf.setFontSize(38);

        pdf.text(`${antecedentesTraumatologicos}`, 87, 1443, { maxWidth: 1330 });
        
        pdf.text(`${motivoConsulta}`, 87, 1706, { maxWidth: 1100 });
        // Coordenadas para "¿Dónde te duele?"
        const dondeDueleCoords = {
            'Cabeza_Delante': { x: 1257, y: 1672 },
            'Cabeza_Detras': { x: 1257, y: 1690 },
            'Cabeza_Lateral_Derecha': { x: 1257, y: 1708 },
            'Cabeza_Lateral_Izquierda': { x: 1257, y: 1726 },
            'Cuello_Delante': { x: 1257, y: 1762 },
            'Cuello_Detras': { x: 1264, y: 693 },
            'Cuello_Lateral_Derecho': { x: 1271, y: 700 },
            'Cuello_Lateral_Izquierdo': { x: 1278, y: 707 },
            'Hombro_Derecho': { x: 1229, y: 1704 },
            'Hombro_Izquierdo': { x: 1284, y: 1704 },
            'Espalda_Alta': { x: 1291, y: 1712 },
            'Espalda_Media': { x: 1298, y: 1719 },
            'Espalda_Baja': { x: 1305, y: 1726 },
            'Columna_Vertebral': { x: 1312, y: 1733 },
            'Brazo_Derecho': { x: 1319, y: 1740 },
            'Brazo_Izquierdo': { x: 1326, y: 1747 },
            'Pierna_Derecha': { x: 1340, y: 1761 },
            'Pierna_Izquierda': { x: 1347, y: 1768 },
            'Pie_Derecho': { x: 1361, y: 1782 },
            'Pie_Izquierdo': { x: 1368, y: 1789 },
            // Agrega más coordenadas según sea necesario
        };

        // Agregar las marcas (X en rojo) según las ubicaciones seleccionadas
        dondeDuele.forEach((opcion) => {
            const coords = dondeDueleCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text(`X`, coords.x, coords.y);
            pdf.setTextColor(0, 0, 0); // Negro
        });
        // Coordenadas predefinidas para cada nivel de intensidad del dolor
        const intensidadCoords = {
            '1': { x: 100, y: 1922 },
            '2': { x: 210, y: 1922 },
            '3': { x: 320, y: 1922 },
            '4': { x: 430, y: 1922 },
            '5': { x: 540, y: 1922 },
            '6': { x: 650, y: 1922 },
            '7': { x: 760, y: 1922 },
            '8': { x: 870, y: 1922 },
            '9': { x: 980, y: 1922 },
            '10': { x: 1090, y: 1922 }
        };
        
        pdf.setTextColor(255, 0, 0);
        pdf.text('X', intensidadCoords[intensidadDolor].x, intensidadCoords[intensidadDolor].y);
        pdf.setTextColor(0, 0, 0);

        pdf.setFontSize(30);
        
        pdf.addPage([imgWidth, imgHeight]);

        // Añadir la segunda imagen al PDF
        pdf.addImage(image2, 'JPEG', 0, 0, imgWidth, imgHeight);

        pdf.setFontSize(40);
        pdf.text(factoresDolor, 90, 112, { maxWidth: 1318 });
        pdf.text(interrogatorioSistemas, 90, 290, { maxWidth: 1318 });
        pdf.text(exploracionFisica, 90, 504, { maxWidth: 1318 });

        pdf.text(`${peso} Kg`, 110 , 652);
        pdf.text(`${talla} m`, 312 , 652);
        pdf.text(`${frecuenciaCardiaca} lpm`, 505 , 652);
        pdf.text(`${frecuenciaRespiratoria} rpm`, 794, 652);
        pdf.text(`${presionArterial} mmHg`, 1040 , 652);
        pdf.text(`${temperatura} °C`, 1273 , 652);

        const cervicalesCoords = {
            'Flexion': { x: 272, y: 747 },
            'Extension': { x: 272, y: 790 },
            'Rotacion_Izquierda': { x: 272, y: 834 },
            'Rotacion_Derecha': { x: 272, y: 876 },
            'Flexion_Lateral_Izquierda': { x: 272, y: 920 },
            'Flexion_Lateral_Derecha': { x: 272, y: 962 }
        };
        
        const dorsalesCoords = {
            'Flexion': { x: 509, y: 747 },
            'Extension': { x: 509, y: 790 },
            'Rotacion_Izquierda': { x: 509, y: 834 },
            'Rotacion_Derecha': { x: 509, y: 876 }
        };
        
        const lumbaresCoords = {
            'Flexion': { x: 756, y: 747 },
            'Extension': { x: 756, y: 790 },
            'Rotacion_Izquierda': { x: 756, y: 834 },
            'Rotacion_Derecha': { x: 756, y: 876 }
        };
        
        const reflejosCoords = {
            'Biceps': { x: 1026, y: 747 },
            'Triceps': { x: 1026, y: 790 },
            'Braquiorradial': { x: 1026, y: 834 },
            'Patelar': { x: 1026, y: 876 },
            'Aquileo': { x: 4510260, y: 920 }
        };
        
        const fuerzaMuscularCoords = {
            'Biceps': { x: 1342, y: 747 },
            'Triceps': { x: 1342, y: 790 },
            'Deltoides': { x: 1342, y: 834 },
            'Cuadriceps': { x: 1342, y: 876 },
            'Biceps_Femoral': { x: 1342, y: 920 },
            'Pantorrillas': { x: 1342, y: 962 }
        };
        
        // Añadir las opciones seleccionadas al PDF
        
        cervicales.forEach((opcion) => {
            const coords = cervicalesCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text('X', coords.x, coords.y);
        });
        
        dorsales.forEach((opcion) => {
            const coords = dorsalesCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text('X', coords.x, coords.y);
        });
        
        lumbares.forEach((opcion) => {
            const coords = lumbaresCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text('X', coords.x, coords.y);
        });
        
        reflejos.forEach((opcion) => {
            const coords = reflejosCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text('X', coords.x, coords.y);
        });
        
        fuerzaMuscular.forEach((opcion) => {
            const coords = fuerzaMuscularCoords[opcion];
            pdf.setTextColor(255, 0, 0); // Rojo
            pdf.text('X', coords.x, coords.y);
        });

        const comprensionCervicalCoords = {
            'Comprension_Cervical_Pos': { x: 382, y: 1058 },
            'Comprension_Cervical_Neg': { x: 480, y: 1058 },
        };
    
        const depresionHombroCoords = {
            'Depresion_Hombro_Pos': { x: 382, y: 1102 },
            'Depresion_Hombro_Neg': { x: 480, y: 1102 },
        };
    
        const valsalvaCoords = {
            'Valsalva_Pos': { x: 382, y: 1145 },
            'Valsalva_Neg': { x: 480, y: 1145 },
        };
    
        const examenGeorgeCoords = {
            'Examen_George_Pos': { x: 382, y: 1189 },
            'Examen_George_Neg': { x: 480, y: 1189 },
        };
    
        // Función para dibujar la "X" en el PDF
        function drawX(pdf, coords) {
            pdf.setTextColor(255, 0, 0); // Color rojo para la "X"
            pdf.text('X', coords.x, coords.y);
        }
    
        // Verificar y dibujar para cada opción
        if (comprensionCervical) {
            const coords = comprensionCervicalCoords[comprensionCervical];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Comprensión Cervical.');
            }
        }
    
        if (depresionHombro) {
            const coords = depresionHombroCoords[depresionHombro];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Depresión de Hombro.');
            }
        }
    
        if (valsalva) {
            const coords = valsalvaCoords[valsalva];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Valsalva.');
            }
        }
    
        if (examenGeorge) {
            const coords = examenGeorgeCoords[examenGeorge];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Examen de George.');
            }
        }

        const posicionAdamsCoords = {
            'Posicion_de_Adams_Pos': { x: 810, y: 1058 },
            'Posicion_de_Adams_Neg': { x: 896, y: 1058 },
        };
    
        const slrCoords = {
            'SLR_Pos': { x: 810, y: 1102 },
            'SLR_Neg': { x: 896, y: 1102 },
        };
    
        const kempsCoords = {
            'Kemps_Pos': { x: 810, y: 1145 },
            'Kemps_Neg': { x: 896, y: 1145 },
        };
    
        const nachlasCoords = {
            'Nachlas_Pos': { x: 810, y: 1189 },
            'Nachlas_Neg': { x: 896, y: 1189 },
        };
    
        const traccionFemoralCoords = {
            'Traccion_Femoral_Pos': { x: 810, y: 1232 },
            'Traccion_Femoral_Neg': { x: 896, y: 1232 },
        };
    
        // Función para dibujar la "X" en el PDF
        function drawX(pdf, coords) {
            pdf.setTextColor(255, 0, 0); // Color rojo para la "X"
            pdf.text('X', coords.x, coords.y);
        }
    
        // Verificar y dibujar para cada opción
        if (posicionAdams) {
            const coords = posicionAdamsCoords[posicionAdams];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Posición de Adams.');
            }
        }
    
        if (slr) {
            const coords = slrCoords[slr];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en SLR (Straight Leg Raise).');
            }
        }
    
        if (kemps) {
            const coords = kempsCoords[kemps];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Kemp\'s.');
            }
        }
    
        if (nachlas) {
            const coords = nachlasCoords[nachlas];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Nachlas.');
            }
        }
    
        if (traccionFemoral) {
            const coords = traccionFemoralCoords[traccionFemoral];
            if (coords) {
                drawX(pdf, coords);
            } else {
                console.error('No se encontraron coordenadas para la opción seleccionada en Tracción Femoral.');
            }
        }

        pdf.setTextColor(0, 0, 0); // Negro

        pdf.text(`${revisionRadiografica}`, 90, 1381);
        pdf.text(`${diagnosticof}`, 90, 1579);
        pdf.text(`${pronostico}`, 90, 1777);
        pdf.text(`${faseSintomatologica}`, 160, 1937);
        pdf.text(`${faseCorrectiva}`, 655, 1937);




        

        

        // Generar el nombre del archivo
        const filename = `${nombre}_${apellidoPaterno}_${apellidoMaterno}_${fecha}_Evo.pdf`; // Incluir apellido paterno en el nombre del archivo

        // Guardar el PDF con el nombre generado
        pdf.save(filename);
    };
    img.src = image;
}
