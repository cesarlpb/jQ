# jQ

jQ es una librería minimalista que pretende replicar solo algunas de las funcionalidades de jQuery por razones académicas. No está pensado - por el momento - para usarse en producción.

# ¿Qué es jQ?

Es un proyecto con fines académicos para aprender cómo funciona [jQuery](https://jquery.com/).

# ¿Por qué jQ?

No reason.

Los releases de jQuery 3.7 pesan 285 kB o 88 kB en minificado. Esta librería ocupa mucho menos.

Aparte del hecho de que hacer más simples algunas acciones en Javascript. Y si quieres aprender cómo funciona jQuery, tal vez ayude.

# Cómo usar jQ

```js
// Ejemplos de uso:

// Seleccionar un elemento por ID y cambiar su contenido HTML
var elementoPorId = $('#miElementoId');
if (elementoPorId) {
    // Establecer nuevo contenido HTML
    elementoPorId.html('<p>Nuevo contenido</p>');
    // Aplicar estilos CSS
    elementoPorId.css({ color: 'red', fontSize: '20px' });
    // Añadir una clase al elemento
    elementoPorId.addClass('miClase');
}

// Seleccionar elementos por clase y modificar su contenido HTML y clases
var elementosPorClase = $('.miClase');
if (elementosPorClase) {
    elementosPorClase.forEach(elemento => {
        // Establecer contenido HTML
        elemento.html('Contenido para clase');
        // Aplicar estilos CSS
        elemento.css({ color: 'blue' });
        // Alternar una clase en los elementos
        elemento.toggleClass('otraClase');
    });
}
```
