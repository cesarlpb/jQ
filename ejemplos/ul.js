// Ejemplos con elementos de <ul>

const ul = $('ul').first(); // selector de etiqueta <ul>

// Aplico estilos en elemento <ul>:
ul.css({ padding: '1rem', listStyleType: 'none', width: '300px' }) 

const lis = $(".li"); // selector de clase

// Aplicar estilo a cada elemento, primero y último:
lis.first().css({ backgroundColor: 'tomato' });
lis.last().css({ backgroundColor: 'beige' });

// Aplicar estilos a todos los elementos del ul:
lis.css({ margin: '1rem auto', textTransform: 'uppercase', fontFamily: 'Verdana' });