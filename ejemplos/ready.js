// Script para cargar cuando el DOM esté disponible

// Cambiar el body de color en el momento de carga de la página:
$('body').ready(function(elements) {
  console.log("Esto sucede en el momento de carga de la página.")
  elements.forEach(element => {
      element.css({ backgroundColor: 'lightblue' });
      element.css({ textAlign: 'center' });
  });
});

$('img').ready(e => e[0].css(
  { 
    display: 'inline-block', 
    border: '2px solid blue' 
  }
));
