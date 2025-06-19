/*alculadora de Promedio de Notas
Enunciado:
Crea un formulario con 5 campos numéricos (una nota por cada uno) y un botón “Calcular Promedio”. Al hacer clic:
Una función debe tomar los valores, sumarlos en un for.
Calcular el promedio y mostrarlo en el DOM.
Usar una condicional para mostrar si el estudiante aprobó (promedio ≥ 3.0) o reprobó. */

function calcularPromedio() {
  const notas = [
    document.getElementById("nota1").value,
    document.getElementById("nota2").value,
    document.getElementById("nota3").value,
    document.getElementById("nota4").value,
    document.getElementById("nota5").value,
  ];

  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    
    const valor = Number(notas[i]);

    if (isNaN(valor) || valor > 5 || valor < 0) {
      document.getElementById("resultado").textContent =
        "Por favor, ingrese solo valores numéricos entre 0.0 y 5.0";
        return
    }
    suma += valor;
  }

  const promedio = suma / notas.length;
  const resultado = document.getElementById("resultado");

  resultado.textContent = `   Su promedio es: ${promedio}`;
  if (promedio >= 3.0) {
    resultado.textContent += " - aprovado";
  } else {
    resultado.textContent += " - Reprobado";
  }
}
