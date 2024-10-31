// Configura el tema inicial usando el tema guardado o el del sistema
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Detecta cambios en la preferencia de tema del sistema y aplica el cambio
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    setTheme(event.matches ? 'dark' : 'light');
});

// Cambia y guarda el tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Aplica el tema y lo guarda en localStorage
function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
}


// Maneja el formulario de nota
document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    
    // Obtiene los valores de los campos de entrada
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    let priority = document.getElementById('priority').value;

    // Si la prioridad está vacía, asigna "Not a priority"
    if (priority === '') {
        priority = 'Not a priority';
    }

    // Si hay título y contenido, añade la nota a la lista y reinicia el formulario
    if (title && content) {
        addNoteToList(title, content, priority);
        resetForm();
    }
});

// Añade una nueva nota a la lista
function addNoteToList(title, content, priority) {
    const noteList = document.getElementById('notes'); // Selecciona la lista de notas
    const noteItem = document.createElement('li'); // Crea un nuevo elemento <li> para la nota
    
    // Define el contenido de la nota
    noteItem.innerHTML = `
        <strong>${title}</strong>
        <p>${content}</p>
        <small>Priority: ${priority}</small>
    `;
    
    // Agrega el nuevo elemento a la lista de notas
    noteList.appendChild(noteItem);
}

// Resetea el formulario a su estado inicial
function resetForm() {
    document.getElementById('note-form').reset(); // Vacía los campos del formulario
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
