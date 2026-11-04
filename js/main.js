// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Mostrar mensaje de bienvenida con Toast (Requisito técnico)
  // Verificamos si estamos en el index para que no salga en todas las páginas
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    M.toast({
      html: '¡Bienvenido a League of Games!', 
      classes: 'rounded', 
      displayLength: 3000
    });
  }

  // 2. Inicializar Collapsible (Para la página de objetivos)
  var elemsCollapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elemsCollapsible);

  // 3. Inicializar validación del formulario de contacto
  const formContacto = document.getElementById('formulario-contacto');
  if (formContacto) {
    formContacto.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita recargar la página

      let nombre = document.getElementById('nombre').value.trim();
      let correo = document.getElementById('correo').value.trim();
      let mensaje = document.getElementById('mensaje').value.trim();

      if (nombre === '' || correo === '' || mensaje === '') {
        M.toast({html: 'Por favor, completa todos los campos.', classes: 'red rounded'});
      } else if (!correo.includes('@')) {
        M.toast({html: 'Por favor, ingresa un correo válido.', classes: 'red rounded'});
      } else {
        M.toast({html: '¡Mensaje enviado con éxito, ' + nombre + '!', classes: 'green rounded'});
        formContacto.reset();
      }
    });
  }
});