// uso de expreciones regulares
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{10,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,30}$/, // 8 a 30 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{8}$/, // 8 numeros.
  dpi: /^\d{13}$/ // 13numeros.
}

// seleccion del formulario 
const formulario = document.querySelectorAll('.formulario input');
const btnCancelar = document.querySelector('#btn-cancelar');



const validarCampo = (exprecion, input, inputName) => {
  if (exprecion.test(input.value)) {
    document.getElementById(`${inputName}`).classList.remove('formulario__error');
    document.getElementById(`${inputName}`).classList.add('formulario__activo');
  } else {
    document.getElementById(`${inputName}`).classList.add('formulario__error');
    // vibrar();
  }
}

const validarformulario = (e) => {
  switch (e.target.name) {
    case "dpi":
      // console.log("Validacion DPI");
      validarCampo(expresiones.dpi, e.target, e.target.id);
      break;
    case "nombre":
      // console.log("Validacion nombre");
      validarCampo(expresiones.nombre, e.target, e.target.id);
      break;
    case "tel":
      // console.log("Validacion tel");
      validarCampo(expresiones.telefono, e.target, e.target.id);
      break;
    case "email":
      // console.log("Validacion email");
      validarCampo(expresiones.correo, e.target, e.target.id);
      break;
    case "usuario":
      // console.log("Validacion usuario");
      validarCampo(expresiones.usuario, e.target, e.target.id);
      break;
    case "password":
      // console.log("Validacion passoword");
      validarCampo(expresiones.password, e.target, e.target.id);
      break;
    case "password2":
      // console.log("Validacion passoword2");
      validarCampo(expresiones.password, e.target, e.target.id);
      break;

    default:
      break;
  }
}

function vibrar(e) {
  window.navigator.vibrate(100);
}

document.addEventListener('DOMContentLoaded', () => {
  formulario.forEach(input => {
    // console.log(input);
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
  });
  btnCancelar.addEventListener('click', vibrar);
})
