// arreglo de nuevos  opcions
let llenado = ["uno", "dos", "tres", "cuatro"];

// selecciono el select del dom (municipio)
const municipio = document.querySelector(
  ".formulario__select.formulario__select2"
);

const departamento = document.querySelector("#departamento");

// evento que verifica que el html ya esta cargado en su totalidad
document.addEventListener("DOMContentLoaded", () => {
  limpiarSelect();
  llenadoMunicipio();
  console.log(municipio.value);
  console.log(departamento.value);
  municipio.addEventListener("change", cambio);
  departamento.addEventListener("change", (evento) => {
    console.log(evento.target.value);
  });
});

function llenadoMunicipio() {
  llenado.forEach((elemento) => {
    // console.log(elemento);
    const opcion = document.createElement("option");
    opcion.value = elemento;
    opcion.textContent = elemento;
    municipio.appendChild(opcion);
  });
}

function limpiarSelect() {
  while (municipio.firstChild) {
    municipio.removeChild(municipio.firstChild);
  }
}

function cambio(evento) {
  console.log(evento.target.value);
}
