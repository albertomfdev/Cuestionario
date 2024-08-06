		const formulario = document.getElementById('formulario');
		const inputs = document.querySelectorAll('#formulario input');
		const inputs_mascota = document.querySelectorAll('#mascota input');

		// VARIABLES PARA FORMULARIO DE 10 PREGUNTAS 
		const formulario_dos = document.getElementById('formulario_diezp');
		const textarea = document.querySelectorAll('#formulario_diezp textarea');
		const selector2 = document.querySelectorAll('#formulario_diezp select');
		const inputs2 = document.querySelectorAll('#formulario_diezp input');
		// VARIABLES PLANES 
		const button_dog = document.querySelectorAll('#planes_gato button');
		const button_cat = document.querySelectorAll('#planes_perro button');

		// VARIABLES ULTIMO FORMULARIO 
		const ultimo1 = document.getElementById('ultimo');
		const ultimo2 = document.getElementById('ultimo2');
		const ultimo3 = document.getElementById('ultimo3');
		const ultimo4 = document.getElementById('ultimo4');


		const input_ultimo1 = document.querySelectorAll('#ultimo  input');
		const input_ultimo2 = document.querySelectorAll('#ultimo2 input');
		const input_ultimo3 = document.querySelectorAll('#ultimo3 input');
		const input_ultimo4 = document.querySelectorAll('#ultimo4 input');

		const campos = {
		    nombre: false,
		    correo: false,
		    senia: false,
		    edad_anio: false,
		    edad_meses: false,
		    enfermedad: false


		}

		const campos2 = {

		    nombre_usuario: false,
		    apellido_paterno: false,
		    apellido_materno: false,
		    fecha_nacimiento: false,
		    rfc: false,
		    whatsapp: true,
		    calle: false,
		    num_exterior: false,
		    codigo_postal: false,
		    colonia: false,
		    estado: false,
		    alcaldia: false
		}
		const expresiones = {

		    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
		    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		    senia: /^([a-zA-ZÀ-ÿ\s]{1,40})(,[a-zA-ZÀ-ÿ\s]{1,40})*$/,
		    fecha: /^(?:(?:(0?[1-9]|1\d|2[0-8])[\/ \.\s\-\_](0?[1-9]|1[0-2])|(29|30)[\/ \.\s\-\_](0?[13-9]|1[0-2])|(31)[\/ \.\s\-\_](0?[13578]|1[02]))[\/ \.\s\-\_](0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|(29)[\/ \.\s\-\_](0?2)[\/ \.\s\-\_](\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
		    ///^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
		    rfc: /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/,
		    telefono: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
		    calle: /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s\.]*$/,
		    num: /^[0-9]*$/,
		    codigo_postal: /^\d{4,5}$/
		}





		const ValidarFormulario = (e) => {
		    switch (e.target.name) {
		        case "nombre_mascota":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_nombre_mascota').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_nombre_mascota').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[0].setAttribute("class", "formulario_input-error");
		                //document.getElementById('formulario_input-error').setAttribute("class", "formulario_input-activo")


		                campos.nombre = true;
		                document.getElementById('animacion').classList = '';
		                document.getElementById('animacion').classList.add('formulario_grupo-input');

		            } else {

		                document.getElementById('grupo_nombre_mascota').classList.add('formulario_grupo-incorrecto');
		                document.getElementById('grupo_nombre_mascota').classList.remove('formulario_grupo-correcto');

		                document.getElementsByTagName('p')[0].setAttribute("class", "formulario_input-activo");
		                //document.getElementById('formulario_input-activo').setAttribute("class", "formulario_input-error");


		                document.getElementById('animacion').classList.add('animacion');


		                campos.nombre = false;
		            }
		            break;

		        case "correo":

		            if (expresiones.correo.test(e.target.value)) {
		                document.getElementById('grupo_correo').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_correo').classList.add('formulario_grupo-correcto');

		                //document.querySelectorAll('#grupgrupo_correo .formulario_input-error').classList.remove('formulario_input-activo');

		                document.getElementsByTagName('p')[1].setAttribute("class", "formulario_input-error");

		                campos.correo = true;

		                document.getElementById('animacion2').classList = '';
		                document.getElementById('animacion2').classList.add('formulario_grupo-input');

		            } else {
		                document.getElementById('grupo_correo').classList.add('formulario_grupo-incorrecto');
		                document.getElementById('grupo_correo').classList.remove('formulario_grupo-correcto');
		                //document.querySelectorAll('#grupo_correo .formulario_input-error').classList.add('formulario_input-activo');

		                document.getElementsByTagName('p')[1].setAttribute("class", "formulario_input-activo");

		                document.getElementById('animacion2').classList.add('animacion');
		                campos.correo = false;
		            }
		            break;


		    }
		}



		const ValidarFormulario2 = (e) => {
		    switch (e.target.name) {
		        case "file":
		            if (document.getElementById("file").files.length != 0) {
		                document.querySelector('#file_label').innerText = 'Listo!';
		                document.getElementById('file_label').style = "color : green;";


		            }
		            break;
		        case "macho_hembra":
		            console.log("MACHO HEMBRA");
		            break;

		        case "raza":
		            console.log("Raza");
		            break;

		        case "edad_anio":
		        case "edad_meses":

		            console.log("Hola");
		            var anio = document.getElementById('edad_anio').value;
		            var mes = document.getElementById('edad_meses').value;

		            if ((anio == "0" && mes == "0") || (anio == "0" && mes == "1")) {
		                document.getElementById('edad_anio').classList.add('select_validar-incorrecto');
		                document.getElementById('edad_meses').classList.add('select_validar-incorrecto');

		                document.getElementById('edad_anio').classList.remove('select_validar-correcto');
		                document.getElementById('edad_meses').classList.remove('select_validar-correcto')

		                document.getElementById('edad_anio').classList.add('animacion');
		                document.getElementById('edad_meses').classList.add('animacion');
		                document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error-activo");
		                campos.edad_anio = false;
		                campos.edad_meses = false;
		            } else {

		                document.getElementById('edad_anio').classList = '';
		                document.getElementById('edad_anio').classList.add('formulario_input');
		                document.getElementById('edad_meses').classList = '';
		                document.getElementById('edad_meses').classList.add('formulario_input');

		                document.getElementById('edad_anio').classList.add('select_validar-correcto');
		                document.getElementById('edad_meses').classList.add('select_validar-correcto');

		                document.getElementById('edad_anio').classList.remove('select_validar-incorrecto');
		                document.getElementById('edad_meses').classList.remove('select_validar-incorrecto');

		                document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error");

		                campos.edad_anio = true;
		                campos.edad_meses = true;

		            }


		            break;

		        case "senia_particular":
		            if (expresiones.senia.test(e.target.value)) {
		                document.getElementById('senia_particular').classList.remove('textarea_validar-incorrecto');
		                document.getElementById('senia_particular').classList.add('textarea_validar-correcto');
		                document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error");

		                document.getElementById('senia_particular').classList.remove('animacion');

		                campos.senia = true;
		            } else {
		                document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		                document.getElementById('senia_particular').classList.remove('textarea_validar-correcto');
		                document.getElementById('senia_particular').classList.add('textarea_validar-incorrecto');


		                document.getElementById('senia_particular').classList.add('animacion');

		                campos.senia = false;
		            }
		            break;

		        case "ninguna":
		            if (document.getElementById('ninguna').checked) {
		                document.getElementById('enfermedad').disabled = true;
		                campos.enfermedad = true;
		                document.getElementById('enfermedad').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('enfermedad').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error");

		            } else {
		                document.getElementById('enfermedad').disabled = false;
		                campos.enfermedad = false;
		                document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error-activo");
		                document.getElementById('enfermedad').classList.remove('formulario_grupo-correcto');
		                document.getElementById('enfermedad').classList.add('formulario_grupo-incorrecto');
		            }
		            break;


		        case "enfermedad":

		            if (expresiones.senia.test(e.target.value)) {
		                document.getElementById('enfermedad_error').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('enfermedad_error').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error");
		                campos.enfermedad = true;
		            } else {
		                document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error-activo");
		                document.getElementById('enfermedad_error').classList.remove('formulario_grupo-correcto');
		                document.getElementById('enfermedad_error').classList.add('formulario_grupo-incorrecto');
		                campos.enfermedad = false;
		            }

		            if (document.getElementById('enfermedad').value == "") {
		                document.getElementById('ninguna').disabled = false;
		                campos.enfermedad = false;
		            } else {
		                document.getElementById('ninguna').disabled = true;
		                campos.enfermedad = true;
		            }
		            break;
		    }
		}




		const ValidarFormularioUltimo = (e) => {
		    switch (e.target.name) {
		        case "nombre_usuario":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_nombre_usuario').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_nombre_usuario').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[116].setAttribute("class", "formulario_input-error");
		                campos2.nombre_usuario = true;
		            } else {
		                document.getElementById('grupo_nombre_usuario').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_nombre_usuario').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[116].setAttribute("class", "formulario_input-error-activo");
		                campos2.nombre_usuario = false;
		            }
		            break;

		        case "apellido_paterno":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_apellido_paterno').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_apellido_paterno').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[117].setAttribute("class", "formulario_input-error");
		                campos2.apellido_paterno = true;
		            } else {
		                document.getElementById('grupo_apellido_paterno').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_apellido_paterno').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[117].setAttribute("class", "formulario_input-error-activo");
		                campos2.apellido_paterno = false;
		            }
		            break;

		        case "apellido_materno":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_apellido_materno').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_apellido_materno').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[118].setAttribute("class", "formulario_input-error");
		                campos2.apellido_materno = true;

		            } else {
		                document.getElementById('grupo_apellido_materno').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_apellido_materno').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[118].setAttribute("class", "formulario_input-error-activo");

		                campos2.apellido_materno = false;
		            }
		            break;

		        case "fecha_nacimiento":
		            if (expresiones.fecha.test(e.target.value)) {

		                document.getElementById('grupo_fecha_nacimiento').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_fecha_nacimiento').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[119].setAttribute("class", "formulario_input-error");

		                campos2.fecha_nacimiento = true;
		            } else {
		                document.getElementById('grupo_fecha_nacimiento').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_fecha_nacimiento').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[119].setAttribute("class", "formulario_input-error-activo");

		                campos2.fecha_nacimiento = false;
		            }
		            break;

		        case "rfc":
		            console.log("RFC");
		            if (expresiones.rfc.test(e.target.value)) {
		                if (e.target.value != "") {
		                    document.getElementById('grupo_rfc').classList.remove('formulario_grupo-incorrecto');
		                    document.getElementById('grupo_rfc').classList.add('formulario_grupo-correcto');
		                    document.getElementsByTagName('p')[120].setAttribute("class", "formulario_input-error");

		                    campos2.rfc = true;
		                } else {
		                    document.getElementById('grupo_rfc').classList.remove('formulario_grupo-correcto');
		                    document.getElementById('grupo_rfc').classList.add('formulario_grupo-incorrecto');
		                    document.getElementsByTagName('p')[120].setAttribute("class", "formulario_input-error-activo");
		                    campos2.rfc = false;

		                }


		            } else {
		                document.getElementById('grupo_rfc').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_rfc').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[120].setAttribute("class", "formulario_input-error-activo");

		                campos2.rfc = false;
		            }
		            break;

		        case "telefono":
		            if (expresiones.telefono.test(e.target.value)) {
		                document.getElementById('grupo_telefono').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_telefono').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[121].setAttribute("class", "formulario_input-error");

		            } else {
		                document.getElementById('grupo_telefono').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_telefono').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[121].setAttribute("class", "formulario_input-error-activo");
		            }
		            break;

		        case "whatsapp":
		            if (expresiones.telefono.test(e.target.value)) {
		                document.getElementById('grupo_whatsapp').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_whatsapp').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[122].setAttribute("class", "formulario_input-error");


		            } else {
		                document.getElementById('grupo_whatsapp').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_whatsapp').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[122].setAttribute("class", "formulario_input-error-activo");


		            }
		            break;

		        case "calle":
		            if (expresiones.calle.test(e.target.value)) {


		                if (e.target.value != "") {

		                    document.getElementById('grupo_calle').classList.remove('formulario_grupo-incorrecto');
		                    document.getElementById('grupo_calle').classList.add('formulario_grupo-correcto');
		                    document.getElementsByTagName('p')[123].setAttribute("class", "formulario_input-error");
		                    campos2.calle = true;
		                } else {
		                    document.getElementById('grupo_calle').classList.remove('formulario_grupo-correcto');
		                    document.getElementById('grupo_calle').classList.add('formulario_grupo-incorrecto');
		                    document.getElementsByTagName('p')[123].setAttribute("class", "formulario_input-error-activo");

		                    campos2.calle = false;
		                }

		            } else {
		                document.getElementById('grupo_calle').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_calle').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[123].setAttribute("class", "formulario_input-error-activo");

		                campos2.calle = false;
		            }
		            break;

		        case "num_exterior":
		            if (expresiones.num.test(e.target.value)) {

		                if (e.target.value != "") {


		                    document.getElementById('grupo_num_exterior').classList.remove('formulario_grupo-incorrecto');
		                    document.getElementById('grupo_num_exterior').classList.add('formulario_grupo-correcto');
		                    document.getElementsByTagName('p')[124].setAttribute("class", "formulario_input-error");

		                    campos2.num_exterior = true;
		                } else {
		                    document.getElementById('grupo_num_exterior').classList.remove('formulario_grupo-correcto');
		                    document.getElementById('grupo_num_exterior').classList.add('formulario_grupo-incorrecto');
		                    document.getElementsByTagName('p')[124].setAttribute("class", "formulario_input-error-activo");

		                    campos2.num_exterior = false;
		                }

		            } else {
		                document.getElementById('grupo_num_exterior').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_num_exterior').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[124].setAttribute("class", "formulario_input-error-activo");

		                campos2.num_exterior = false;
		            }
		            break;

		        case "num_interior":
		            if (expresiones.num.test(e.target.value)) {

		                if (e.target.value != "") {



		                    document.getElementById('grupo_num_interior').classList.remove('formulario_grupo-incorrecto');
		                    document.getElementById('grupo_num_interior').classList.add('formulario_grupo-correcto');
		                    document.getElementsByTagName('p')[125].setAttribute("class", "formulario_input-error");
		                } else {
		                    document.getElementById('grupo_num_interior').classList.remove('formulario_grupo-correcto');
		                    document.getElementById('grupo_num_interior').classList.add('formulario_grupo-incorrecto');
		                    document.getElementsByTagName('p')[125].setAttribute("class", "formulario_input-error-activo");
		                }


		            } else {
		                document.getElementById('grupo_num_interior').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_num_interior').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[125].setAttribute("class", "formulario_input-error-activo");


		            }


		            break;

		        case "codigo_postal":
		            if (expresiones.codigo_postal.test(e.target.value)) {
		                document.getElementById('grupo_codigo_postal').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_codigo_postal').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[126].setAttribute("class", "formulario_input-error");

		                campos2.codigo_postal = true;
		            } else {
		                document.getElementById('grupo_codigo_postal').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_codigo_postal').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[126].setAttribute("class", "formulario_input-error-activo");

		                campos2.codigo_postal = false;
		            }
		            break;

		        case "colonia":
		            if (expresiones.calle.test(e.target.value)) {

		                if (e.target.value != "") {

		                    document.getElementById('grupo_colonia').classList.remove('formulario_grupo-incorrecto');
		                    document.getElementById('grupo_colonia').classList.add('formulario_grupo-correcto');
		                    document.getElementsByTagName('p')[127].setAttribute("class", "formulario_input-error");

		                    campos2.colonia = true;
		                } else {
		                    document.getElementById('grupo_colonia').classList.remove('formulario_grupo-correcto');
		                    document.getElementById('grupo_colonia').classList.add('formulario_grupo-incorrecto');
		                    document.getElementsByTagName('p')[127].setAttribute("class", "formulario_input-error-activo");

		                    campos2.colonia = false;
		                }

		            } else {
		                document.getElementById('grupo_colonia').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_colonia').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[127].setAttribute("class", "formulario_input-error-activo");

		                campos2.colonia = false;
		            }
		            break;

		        case "estado":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_estado').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_estado').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[128].setAttribute("class", "formulario_input-error");

		                campos2.estado = true;

		            } else {
		                document.getElementById('grupo_estado').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_estado').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[128].setAttribute("class", "formulario_input-error-activo");

		                campos2.estado = false;
		            }
		            break;


		        case "alcaldia":
		            if (expresiones.nombre.test(e.target.value)) {
		                document.getElementById('grupo_alcaldia').classList.remove('formulario_grupo-incorrecto');
		                document.getElementById('grupo_alcaldia').classList.add('formulario_grupo-correcto');
		                document.getElementsByTagName('p')[129].setAttribute("class", "formulario_input-error");

		                campos2.alcaldia = true;

		            } else {
		                document.getElementById('grupo_alcaldia').classList.remove('formulario_grupo-correcto');
		                document.getElementById('grupo_alcaldia').classList.add('formulario_grupo-incorrecto');
		                document.getElementsByTagName('p')[129].setAttribute("class", "formulario_input-error-activo");


		                campos2.alcaldia = false;
		            }
		            break;

		    }
		}



		const limpiar = () => {
		    var div = document.getElementById('senia_particular').value;
		    if (div == "\t\t\t\t  \tEj. Manchas blancas\n\t\t\t\t  ") {
		        document.getElementById('senia_particular').value = "";
		    }


		}

		const colocar = () => {
		        var div = document.getElementById('senia_particular').value;
		        if (div == "") {
		            document.getElementById('senia_particular').value = "\t\t\t\t  \tEj. Manchas blancas\n\t\t\t\t  ";

		        }
		    }
		    // FUNCION PARA ULTIMO FORMULARIO 


		input_ultimo1.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormularioUltimo);
		    input.addEventListener('blur', ValidarFormularioUltimo);
		});

		input_ultimo2.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormularioUltimo);
		    input.addEventListener('blur', ValidarFormularioUltimo);
		});

		input_ultimo3.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormularioUltimo);
		    input.addEventListener('blur', ValidarFormularioUltimo);
		});

		input_ultimo4.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormularioUltimo);
		    input.addEventListener('blur', ValidarFormularioUltimo);
		});



		// FUNCION INPUTS FORMULARIO 1 
		inputs.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormulario);
		    input.addEventListener('blur', ValidarFormulario);
		});

		inputs_mascota.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormulario);
		    input.addEventListener('blur', ValidarFormulario);
		});

		// FUNCION INPUTS FORMULARIO 2 
		textarea.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormulario2);
		    input.addEventListener('blur', ValidarFormulario2);
		    input.addEventListener('click', limpiar);
		    input.addEventListener('blur', colocar);
		});

		selector2.forEach((sele) => {
		    sele.addEventListener('keyup', ValidarFormulario2);
		    sele.addEventListener('blur', ValidarFormulario2);
		});


		// FUNCION INPUTS FORMULARIO 3
		inputs2.forEach((input) => {
		    input.addEventListener('keyup', ValidarFormulario2);
		    input.addEventListener('blur', ValidarFormulario2);
		});


		// MUESTRA EL FORMULARIO NUMERO 2 (10 preguntas) OCULTANDO EL PRIMERO 
		const MostrarFormularios = (opcion) => {



		    switch (opcion) {

		        case 1:
		            document.getElementById('formulario_uno').classList.add('formulario_uno-activo');
		            document.getElementById('formulario_uno').classList.remove('formulario_uno');
		            if (document.getElementById('perro_gato').value == "Gato") {
		                document.getElementById('planes_gato').classList.add('planes_gato');
		                document.getElementById('planes_gato').classList.remove('planes_gato-activo');

		                //document.getElementById('portada_cat').classList.add('portada_cat');
		                //document.getElementById('portada_cat').classList.remove('portada_activa-cat');





		            } else {

		                //document.getElementById('portada').classList.add('portada');
		                //document.getElementById('portada').classList.remove('portada_activa');

		                document.getElementById('planes_perro').classList.add('planes_perro');

		                document.getElementById('planes_perro').classList.remove('planes_perro-activo');

		            }






		            break;

		        case 2:

		            document.getElementById('formulario_uno').classList.add('formulario_uno');
		            document.getElementById('formulario_uno').classList.remove('formulario_uno-activo');



		            if (document.getElementById('perro_gato').value == "Gato") {

		                //	document.getElementById('portada_cat').classList.add('portada_activa-cat');
		                //document.getElementById('portada_cat').classList.remove('portada_cat');
		                document.getElementById('planes_gato').classList.add('planes_gato-activo');
		                document.getElementById('planes_gato').classList.remove('planes_gato');


		            } else {



		                //	document.getElementById('portada').classList.add('portada_activa');
		                //	document.getElementById('portada').classList.remove('portada');
		                document.getElementById('planes_perro').classList.add('planes_perro-activo');

		                document.getElementById('planes_perro').classList.remove('planes_perro');

		            }


		            break;

		        case 3:

		            document.getElementById('formulario_dos').classList.add('formulario_dos-activo');
		            document.getElementById('formulario_dos').classList.remove('formulario_dos');


		            if (document.getElementById('perro_gato').value == "Gato") {

		                //		//document.getElementById('portada_cat').classList.add('portada_cat');
		                //document.getElementById('portada_cat').classList.remove('portada_activa-cat');
		                document.getElementById('planes_gato').classList.add('planes_gato');
		                document.getElementById('planes_gato').classList.remove('planes_gato-activo');


		            } else {

		                //document.getElementById('portada').classList.add('portada');
		                //document.getElementById('portada').classList.remove('portada_activa');
		                document.getElementById('planes_perro').classList.add('planes_perro');
		                document.getElementById('planes_perro').classList.remove('planes_perro-activo');

		            }

		            var name_view = document.getElementById('nombre_visto');
		            var name_mascota = nombre_mascota.value

		            document.getElementById('nombre_visto').innerHTML = name_mascota.toUpperCase();


		            var selecciontipo = document.getElementById('perro_gato').value;

		            if (selecciontipo == "Perro") {

		                document.getElementById('raza_perro').classList.add('raza_perro-activo');
		                document.getElementById('raza_perro').classList.remove('raza_perro');

		                document.getElementById('raza_gato').classList.add('raza_gato');
		                document.getElementById('raza_gato').classList.remove('raza_gato-activo');
		            } else {
		                document.getElementById('raza_gato').classList.add('raza_gato-activo');
		                document.getElementById('raza_gato').classList.remove('raza_gato');

		                document.getElementById('raza_perro').classList.add('raza_perro');
		                document.getElementById('raza_perro').classList.remove('raza_perro-activo');
		            }



		            break;

		        case 4:
		            document.getElementById('formulario_dos').classList.add('formulario_dos');
		            document.getElementById('formulario_dos').classList.remove('formulario_dos-activo');

		            if (document.getElementById('perro_gato').value == "Gato") {
		                document.getElementById('planes_gato').classList.add('planes_gato-activo');
		                document.getElementById('planes_gato').classList.remove('planes_gato');


		            } else {
		                document.getElementById('planes_perro').classList.add('planes_perro-activo');
		                document.getElementById('planes_perro').classList.remove('planes_perro');
		            }

		            break;

		        case 5:
		            document.getElementById('formulario_tres').classList.add('formulario_tres-activo');
		            document.getElementById('formulario_tres').classList.remove('formulario_tres');

		            document.getElementById('formulario_dos').classList.add('formulario_dos');
		            document.getElementById('formulario_dos').classList.remove('formulario_dos-activo');
		            break;
		        case 6:
		            // REGRESAR A FORMULARIO NUMERO DOS 
		            document.getElementById('formulario_dos').classList.add('formulario_dos-activo');
		            document.getElementById('formulario_dos').classList.remove('formulario_dos');

		            document.getElementById('formulario_tres').classList.add('formulario_tres');
		            document.getElementById('formulario_tres').classList.remove('formulario_tres-activo');

		            break;

		    }


		}




		// FUNCION ESCUCHA DE FORMULARIO NUMERO 1 
		formulario.addEventListener('submit', (e) => {
		    e.preventDefault();
		    console.log(campos.correo, campos.nombre);
		    if (campos.correo == true && campos.nombre == true) {
		        MostrarFormularios(2);


		        var send_NombreMascota = document.getElementById('nombre_mascota').value;
		        var send_PerroGato = document.getElementById('perro_gato');
		        var PeroGato = send_PerroGato.value;
		        var send_Correo = document.getElementById('correo').value;

		        $.ajax({
		            url: 'https://enviar-adfss.run-us-west2.goorm.io/Enviar/run.php',
		            type: 'POST',
		            data: 'Nombre_Mascota=' + send_NombreMascota + '&PeroGato=' + PeroGato + '&Correo=' + send_Correo,
		            success: function(data) {
		                console.log("aiuda por favor");
		            }
		        });

		    } else if (campos.correo == false && campos.nombre == true) {
		        document.getElementById('grupo_correo').classList.remove('formulario_grupo-correcto');
		        document.getElementById('grupo_correo').classList.add('formulario_grupo-incorrecto');
		        document.getElementById('animacion2').classList.add('animacion');
		        document.getElementsByTagName('p')[1].setAttribute("class", "formulario_input-error");
		        document.getElementsByTagName('p')[1].setAttribute("class", "formulario_input-activo");
		    } else if (campos.correo == true && campos.nombre == false) {
		        document.getElementById('grupo_nombre_mascota').classList.add('formulario_grupo-incorrecto');
		        document.getElementById('grupo_nombre_mascota').classList.remove('formulario_grupo-correcto');
		        document.getElementById('animacion').classList.add('animacion');
		        document.getElementsByTagName('p')[0].setAttribute("class", "formulario_input-error");
		        document.getElementsByTagName('p')[0].setAttribute("class", "formulario_input-activo");

		    } else {
		        document.getElementById('animacion').classList.add('animacion');
		        document.getElementById('animacion2').classList.add('animacion');

		        document.getElementById('grupo_nombre_mascota').classList.add('formulario_grupo-incorrecto');
		        document.getElementById('grupo_nombre_mascota').classList.remove('formulario_grupo-correcto');
		        document.getElementById('grupo_correo').classList.remove('formulario_grupo-correcto');
		        document.getElementById('grupo_correo').classList.add('formulario_grupo-incorrecto');
		        document.getElementsByTagName('p')[1].setAttribute("class", "formulario_input-activo");
		        document.getElementsByTagName('p')[0].setAttribute("class", "formulario_input-activo");
		    }


		});


		const regresar_planes = document.getElementById('formulario_btn-enviar-back').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(4);
		});


		const irformudos = document.getElementById('seguir_dog').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		// INICIO DE FUNCIONES QUE PARA BOTONES DE CARDS 
		const irformudos_2 = document.getElementById('seguir_dog-2').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		const irformudos_3 = document.getElementById('seguir_dog-3').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});


		const irformudos_4 = document.getElementById('seguir_dog-4').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		const irformudos_5 = document.getElementById('seguir_dog-5').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		const irformudos_6 = document.getElementById('seguir_cat-1').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		const info7 = document.getElementById('seguir_cat-2').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});

		const irformudos_8 = document.getElementById('seguir_cat-3').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(3);
		});


		const regresar2 = document.getElementById('formulario_btn-enviar-back-perro').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(1);
		});


		const regresar3 = document.getElementById('formulario_btn-enviar-back-gato').addEventListener('click', (e) => {
		    e.preventDefault();
		    MostrarFormularios(1);
		});


		// FUNCIONES DE ULTIMO FORMULARIO 
		const regresar_formulario_ultimo = document.getElementById('formulario_btn-back-final').addEventListener('click', (e) => {
		    e.preventDefault();

		    MostrarFormularios(6);
		});


		const terminar = document.getElementById('btn_seguir_final').addEventListener('click', (e) => {
		    e.preventDefault();
		    var ArrayCampos = Object.values(campos2);
		    var terminos = Object.keys(campos2);
		    var grupo = "grupo_";
		    setTimeout('document.location.reload()', 5000);
		    var cont = 1;
		    for (var i = 0; i < ArrayCampos.length - 1; i++) {
		        if (ArrayCampos[i] == false) {

		            Object.entries(campos2).forEach(([key, value]) => {
		                if (value != true) {
		                    document.getElementById(grupo + key).classList.remove('formulario_grupo-correcto');
		                    document.getElementById(grupo + key).classList.add('formulario_grupo-incorrecto');

		                    if (key = "nombre_usuario" && ArrayCampos[0] == false) {
		                        document.getElementsByTagName('p')[116].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "apellido_paterno" && ArrayCampos[1] == false) {
		                        document.getElementsByTagName('p')[117].setAttribute("class", "formulario_input-error-activo");
		                    }


		                    if (key = "apellido_materno" && ArrayCampos[2] == false) {
		                        document.getElementsByTagName('p')[118].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "fecha_nacimiento" && ArrayCampos[3] == false) {
		                        document.getElementsByTagName('p')[119].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "rfc" && ArrayCampos[4] == false) {
		                        document.getElementsByTagName('p')[120].setAttribute("class", "formulario_input-error-activo");
		                    }


		                    // if (key = "whatsapp" && ArrayCampos[5] == false) {
		                    //      document.getElementsByTagName('p')[122].setAttribute("class", "formulario_input-error-activo");
		                    //  }

		                    if (key = "calle" && ArrayCampos[6] == false) {
		                        document.getElementsByTagName('p')[123].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "num_exterior" && ArrayCampos[7] == false) {
		                        document.getElementsByTagName('p')[124].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "codigo_postal" && ArrayCampos[8] == false) {
		                        document.getElementsByTagName('p')[126].setAttribute("class", "formulario_input-error-activo");
		                    }


		                    if (key = "colonia" && ArrayCampos[9] == false) {
		                        document.getElementsByTagName('p')[127].setAttribute("class", "formulario_input-error-activo");
		                    }

		                    if (key = "estado" && ArrayCampos[10] == false) {
		                        document.getElementsByTagName('p')[128].setAttribute("class", "formulario_input-error-activo");
		                    }


		                    if (key = "alcaldia" && ArrayCampos[11] == false) {
		                        document.getElementsByTagName('p')[129].setAttribute("class", "formulario_input-error-activo");
		                    }
		                }

		            });


		        } else {

		            cont = cont + 1;
		        }


		    }


		    if (cont == ArrayCampos.length) {

		        // VARIABLES PARA SEXO MASCOTA 
		        var Macho_Hembra = document.getElementById("macho_hembra").value;


		        // VARIABLES PARA RAZA
		        var selecciontipo = document.getElementById('perro_gato').value;
		        var temporal2, temporal12;

		        var raza;
		        if (selecciontipo == "Perro") {
		            temporal2 = document.getElementById("raza_perro").value;
		            temporal12 = "";

		        } else {
		            temporal12 = document.getElementById("raza_gato").value;
		            temporal2 = "";
		        }

		        raza = temporal12 + temporal2;
		        // VARIABLES PARA EDAD 	   
		        var temporal3 = document.getElementById('edad_anio').value;
		        var anios = temporal3;
		        var temporal4 = document.getElementById('edad_meses').value;
		        var meses = temporal4;

		        // VARIABLE COLOR OJOS 
		        var temporal5 = document.getElementById('color_ojos').value;
		        var ColorOjos = temporal5;

		        // VARIABLES COLOR NARIZ 
		        var temporal6 = document.getElementById('color_nariz').value;
		        var ColorNariz = temporal6;

		        // VARIABLES SENIA PARTICULAR 
		        var Senia = document.getElementById('senia_particular').value;

		        // ENFERMEDAD
		        var enfermedad = document.getElementById('enfermedad').value;

		        // CHIP 

		        //PEDIGREE


		        /// VARIABLES NECESARIAS ///

		        //NOMBRE USUARIO 
		        var nombreusuario = document.getElementById('nombre_usuario').value;

		        // APELLIDO PATERNO 
		        var apeelidopaterno = document.getElementById('apellido_paterno').value;

		        // APELLIDO MATERNO 
		        var apellidomaterno = document.getElementById('apellido_materno').value;

		        //FECHA NACIMIENTO 
		        var fechanacimiento = document.getElementById('fecha_nacimiento').value;

		        // RFC 
		        var rfcusuario = document.getElementById('rfc').value;

		        // TELEFONO
		        var tel = document.getElementById('telefono').value;

		        // WHATSAPP
		        var whatsapp = document.getElementById('whatsapp').value;

		        // CALLE
		        var calle = document.getElementById('calle').value;

		        // NUMERO EXTERIOR 
		        var numext = document.getElementById('num_exterior').value;

		        // NUMERO INTERIOR 
		        var numint = document.getElementById('num_interior').value;

		        // CODIGO POSTAL 
		        var codigopostal = document.getElementById('codigo_postal').value;

		        // COLONIA 
		        var colonia = document.getElementById('colonia').value;

		        //ESTADO 
		        var estado = document.getElementById('estado').value;

		        // ALCALDIA 
		        var alcaldia = document.getElementById('alcaldia').value;



		        $.ajax({
		            url: 'https://enviar-adfss.run-us-west2.goorm.io/Enviar/ultimo.php',
		            type: 'POST',
		            data: 'Macho_Hembra=' + Macho_Hembra + '&raza=' + raza + '&anios=' + anios + '&meses=' + meses + '&ColorOjos=' + ColorOjos + '&ColorNariz=' + ColorNariz + '&Senia=' + Senia + '&enfermedad=' + enfermedad + '&nombreusuario=' + nombreusuario + '&apeelidopaterno=' + apeelidopaterno + '&apellidomaterno=' + apellidomaterno + '&fechanacimiento=' + fechanacimiento + '&rfcusuario=' + rfcusuario + '&tel=' + tel + '&whatsapp=' + whatsapp + '&calle=' + calle + '&numext=' + numext + '&numint=' + numint + '&codigopostal=' + codigopostal + '&colonia=' + colonia + '&estado=' + estado + '&alcaldia=' + alcaldia,
		            success: function(data) {
		                console.log(ColorNariz);
		            }
		        });



		        swal("¡Muchas gracias!", " Hemos recibido tu información. En menos de 48 hrs te llegará tu póliza y número de captura para pago a tu correo electrónico. #miauguau", "success").then(function() {

		        });



		    } else {


		    }





		});




		// END FUNCIONES DE ULTIMO FORMULARIO 


		// END DE FUNCIONES QUE PARA BOTONES DE CARDS 

		const ir_planes = document.getElementById('btn_seguir').addEventListener('click', (e) => {
		    e.preventDefault();

		    if (campos.edad_anio == true && campos.edad_meses == true && campos.enfermedad == true && campos.senia == true) {
		        MostrarFormularios(5);



		    } else if (campos.edad_anio == true && campos.edad_meses == true) {
		        if (campos.enfermedad == false && campos.senia == true) {
		            document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('enfermedad_error').classList.remove('formulario_grupo-correcto');
		            document.getElementById('enfermedad_error').classList.add('formulario_grupo-incorrecto');
		        } else if (campos.enfermedad == true && campos.senia == false) {
		            document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('senia_particular').classList.remove('textarea_validar-correcto');
		            document.getElementById('senia_particular').classList.add('textarea_validar-incorrecto');
		        } else {
		            document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('enfermedad_error').classList.remove('formulario_grupo-correcto');
		            document.getElementById('enfermedad_error').classList.add('formulario_grupo-incorrecto');
		            document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('senia_particular').classList.remove('textarea_validar-correcto');
		            document.getElementById('senia_particular').classList.add('textarea_validar-incorrecto');
		        }
		    } else if (campos.edad_anio == false && campos.edad_meses == false) {
		        if (campos.enfermedad == false && campos.senia == true) {
		            document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('enfermedad_error').classList.remove('formulario_grupo-correcto');
		            document.getElementById('enfermedad_error').classList.add('formulario_grupo-incorrecto');

		            document.getElementById('edad_anio').classList.remove('select_validar-correcto');
		            document.getElementById('edad_meses').classList.remove('select_validar-correcto')

		            document.getElementById('edad_anio').classList.add('animacion');
		            document.getElementById('edad_meses').classList.add('animacion');
		            document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error-activo");
		        } else if (campos.enfermedad == true && campos.senia == false) {
		            document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('senia_particular').classList.remove('textarea_validar-correcto');
		            document.getElementById('senia_particular').classList.add('textarea_validar-incorrecto');

		            document.getElementById('edad_anio').classList.remove('select_validar-correcto');
		            document.getElementById('edad_meses').classList.remove('select_validar-correcto')

		            document.getElementById('edad_anio').classList.add('animacion');
		            document.getElementById('edad_meses').classList.add('animacion');
		            document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error-activo");
		        } else if (campos.enfermedad == false && campos.senia == false) {

		            document.getElementsByTagName('p')[104].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('enfermedad_error').classList.remove('formulario_grupo-correcto');
		            document.getElementById('enfermedad_error').classList.add('formulario_grupo-incorrecto');
		            document.getElementsByTagName('p')[103].setAttribute("class", "formulario_input-error-activo");
		            document.getElementById('senia_particular').classList.remove('textarea_validar-correcto');
		            document.getElementById('senia_particular').classList.add('textarea_validar-incorrecto');
		            document.getElementById('edad_anio').classList.add('select_validar-incorrecto');
		            document.getElementById('edad_meses').classList.add('select_validar-incorrecto');

		            document.getElementById('edad_anio').classList.remove('select_validar-correcto');
		            document.getElementById('edad_meses').classList.remove('select_validar-correcto')

		            document.getElementById('edad_anio').classList.add('animacion');
		            document.getElementById('edad_meses').classList.add('animacion');
		            document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error-activo");
		        }

		        document.getElementById('edad_anio').classList.remove('select_validar-correcto');
		        document.getElementById('edad_meses').classList.remove('select_validar-correcto')

		        document.getElementById('edad_anio').classList.add('animacion');
		        document.getElementById('edad_meses').classList.add('animacion');
		        document.getElementsByTagName('p')[102].setAttribute("class", "formulario_input-error-activo")
		    }



		});

		/**
		 *
		 * 
		    CODIGO REFERENTE A CONTENEDOR DE SUBIDA DE IMAGEN (FILE INPUT )
		 *
		 */


		document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
		    const dropZoneElement = inputElement.closest(".drop-zone");

		    dropZoneElement.addEventListener("click", (e) => {
		        inputElement.click();
		    });

		    inputElement.addEventListener("change", (e) => {
		        if (inputElement.files.length) {
		            updateThumbnail(dropZoneElement, inputElement.files[0]);
		        }
		    });

		    dropZoneElement.addEventListener("dragover", (e) => {
		        e.preventDefault();
		        dropZoneElement.classList.add("drop-zone--over");
		    });

		    ["dragleave", "dragend"].forEach((type) => {
		        dropZoneElement.addEventListener(type, (e) => {
		            dropZoneElement.classList.remove("drop-zone--over");
		        });
		    });

		    dropZoneElement.addEventListener("drop", (e) => {
		        e.preventDefault();

		        if (e.dataTransfer.files.length) {
		            inputElement.files = e.dataTransfer.files;
		            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
		        }

		        dropZoneElement.classList.remove("drop-zone--over");
		    });
		});

		/**
		 * Updates the thumbnail on a drop zone element.
		 *
		 * @param {HTMLElement} dropZoneElement
		 * @param {File} file
		 */
		function updateThumbnail(dropZoneElement, file) {
		    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

		    // First time - remove the prompt
		    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		        dropZoneElement.querySelector(".drop-zone__prompt").remove();
		    }

		    // First time - there is no thumbnail element, so lets create it
		    if (!thumbnailElement) {
		        thumbnailElement = document.createElement("div");
		        thumbnailElement.classList.add("drop-zone__thumb");
		        dropZoneElement.appendChild(thumbnailElement);
		    }

		    thumbnailElement.dataset.label = file.name;

		    // Show thumbnail for image files
		    if (file.type.startsWith("image/")) {
		        const reader = new FileReader();

		        reader.readAsDataURL(file);
		        reader.onload = () => {
		            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		        };
		    } else {
		        thumbnailElement.style.backgroundImage = null;
		    }
		}