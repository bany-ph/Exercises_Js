// Ejercicio: Crear una To-Do List con HTML, CSS y JavaScript

// Objetivo:
// Construir una aplicación web sencilla que permita al usuario agregar tareas, marcarlas como completadas y eliminarlas de la lista.

// Requisitos:

// Crea una interfaz en HTML que contenga:
// •    Un campo de entrada de texto (input) para escribir nuevas tareas.
// •    Un botón para agregar la tarea a la lista.
// •    Una sección (ul o div) donde se mostrarán las tareas.
// Usando JavaScript:
// •    Al hacer clic en el botón, la tarea escrita en el input debe agregarse a la lista.
// •    Cada tarea debe mostrarse con:
// •    El texto de la tarea.
// •    Un botón para marcarla como “completada” (cambia su estilo, por ejemplo, tachado).
// •    Un botón para eliminarla de la lista.
// Agrega validaciones para:
// •    No permitir agregar tareas vacías.
// •    Eliminar correctamente la tarea al hacer clic en el botón correspondiente.

// Extras (opcional):
//     •    Permite presionar Enter para agregar tareas.
//     •    Guarda las tareas en localStorage para que se mantengan al recargar la página.
//     •    Muestra cuántas tareas hay pendientes.

function addTask() {
  //obtener el valor del campo de la tarea
  let taskInput = document.getElementById("taskInput").value;
  if (taskInput === "") {
    alert("porfavor, ingrese una tarea");
    return;
  }

  //crear elemento en la lista
  let taskInputLi = document.createElement("li");
  taskInputLi.textContent = taskInput + " ";

  //agregar checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function () {
    if (checkbox.checked) {
      taskInputLi.style.textDecoration = "line-through"; // Marcar como completado
      taskInputLi.style.color = "gray";
    } else {
      taskInputLi.style.textDecoration = "none"; // Desmarcar
      taskInputLi.style.color = "black";
    }
  };

  //crear boton eliminar
  let papelera = document.createElement("i"); 
   papelera.className = "fa-solid fa-trash"
  papelera.onclick = function () {
    taskInputLi.remove();
  };

  // Agregar checkbox y botón al elemento de la lista
  taskInputLi.prepend(checkbox); // Agrega el checkbox al inicio

  //agregar  el boton eliminar al elemento de la lista
  taskInputLi.appendChild(papelera);

  //agregar el elemento/tarea a la lista
  document.getElementById("taskList").appendChild(taskInputLi);

  //limpiar el contenido del imput
  document.getElementById("taskInput").value = "";
}
