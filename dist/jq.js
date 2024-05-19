/***********************************************************************************
* Librería jQ v 0.1 (first release)
*
* El objetivo de esta librería es facilitar algunas tareas en Javascript mediante 
* selectores y funciones de utilidad. Pretende ser un símil de jQuery muy pequeño 
* solo con lo que se necesite para facilitar el trabajo y ocupando lo menos posible, 
* por eso el nombre jQ.
*
* Autor: César Patiño
* Mayo 2024
*
************************************************************************************/ 

/**
 * Función $ para seleccionar elementos del DOM y añadir métodos personalizados.
 * @param {string} selector - Selector CSS (puede ser un ID, una clase, 
 * o un selector CSS válido).
 * @returns {Element|Element[]} - Un solo elemento si se selecciona por ID, o un 
 * array de elementos si se selecciona por clase o cualquier otro selector.
 */
function $(selector) {
  let elements;

  // Si el selector empieza con '#', seleccionar por ID
  if (selector.startsWith('#')) {
      elements = [document.getElementById(selector.slice(1))];
  // Si el selector empieza con '.', seleccionar por clase
  } else if (selector.startsWith('.')) {
      elements = Array.from(document.getElementsByClassName(selector.slice(1)));
  // De lo contrario, usar querySelectorAll para cualquier otro selector CSS válido
  } else {
      elements = Array.from(document.querySelectorAll(selector));
  }

  // Filtrar elementos nulos
  elements = elements.filter(element => element !== null);

  // Devuelve null si no hay elementos
  if (elements.length === 0) return null;

  // Añadir métodos personalizados a cada elemento
  elements.forEach(element => {
      /**
       * Método para obtener o establecer el HTML interno del elemento.
       * @param {string} [html] - Si se proporciona, establece el HTML interno. 
       * Si no, devuelve el HTML interno.
       * @returns {string|undefined} - Devuelve el HTML interno si no se 
       * proporciona parámetro, undefined si se establece el HTML.
       */
      element.html = function(html) {
          if (html === undefined) {
              return this.innerHTML;
          } else {
              this.innerHTML = html;
          }
      };

      /**
       * Método para aplicar estilos CSS al elemento.
       * @param {Object} styleObj - Objeto donde las claves son propiedades CSS y los valores son los valores de esas propiedades.
       */
      element.css = function(styleObj) {
          for (const property in styleObj) {
              if (styleObj.hasOwnProperty(property)) {
                  this.style[property] = styleObj[property];
              }
          }
      };

      /**
       * Método para añadir una clase al elemento.
       * @param {string} className - Nombre de la clase a añadir.
       */
      element.addClass = function(className) {
          this.classList.add(className);
      };

      /**
       * Método para remover una clase del elemento.
       * @param {string} className - Nombre de la clase a remover.
       */
      element.removeClass = function(className) {
          this.classList.remove(className);
      };

      /**
       * Método para alternar una clase del elemento.
       * @param {string} className - Nombre de la clase a alternar.
       */
      element.toggleClass = function(className) {
          this.classList.toggle(className);
      };

      /**
       * Función para comprobar si un elemento es un array.
       * @param {any} element - El elemento a comprobar.
       * @returns {boolean} - Verdadero si el elemento es un array, falso en caso contrario.
       */
      element.esArray = function(element) {
        return Array.isArray(element);
      };

    });

    // Métodos para filtrar selecciones: 

    /**
     * Método para devolver el primer elemento o null si no hay elementos, 
     * o el mismo elemento si no es un array.
     * @returns {Element|null} - El primer elemento si es un array, null si no hay elementos.
     **/
    function first() {
        if (Array.isArray(elements)) {
            return elements.length > 0 ? elements[0] : null;
        }
        return elements !== undefined && elements !== null ? elements : null;
    }

    /**
     * Método para devolver el último elemento o null si no hay elementos,
     * o el mismo elemento si no es una colección.
     * @returns {Element|null} - El último elemento si es un array, null si no hay elementos.
     */
    function last() {
        if (Array.isArray(elements)) {
            return elements.length > 0 ? elements[elements.length - 1] : null;
        }
        return elements !== undefined && elements !== null ? elements : null;
    }

    // Métodos para controlar momento de ejecución:

    /**
     * Método para ejecutar una función cuando la página se haya cargado.
     * @param {Function} callback - La función a ejecutar cuando la página se haya cargado.
    **/
    function ready(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            // Si el documento ya está listo, ejecutar el callback inmediatamente
            callback(elements);
        } else {
            // Si el documento no está listo, agregar un event listener
            document.addEventListener('DOMContentLoaded', () => callback(elements));
        }
    }

    // Métodos para aplicar estilos sobre toda la colección:

    /**
     * Método para aplicar estilos CSS al elemento.
     * @param {Object} styleObj - Objeto donde las claves son propiedades CSS y los valores son los valores de esas propiedades.
    **/
    function css(styleObj) {
        if (Array.isArray(this)) {
            // Si 'this' es un array de elementos, aplicar el estilo a todos los elementos
            this.forEach(element => {
                for (const property in styleObj) {
                    if (styleObj.hasOwnProperty(property)) {
                        element.style[property] = styleObj[property];
                    }
                }
            });
        } else {
            // Si 'this' es un solo elemento, aplicar el estilo al elemento actual
            for (const property in styleObj) {
                if (styleObj.hasOwnProperty(property)) {
                    this.style[property] = styleObj[property];
                }
            }
        }
    };

    // Añadir el método first a la función retornada
    const result = elements.length === 1 ? elements[0] : elements;
    
    // Métodos en los elementos de selección que se retornan:
    
    // Filtros de colección:
    result.first = first;
    result.last = last;
    
    // Momento de ejecución:
    result.ready = ready;
    
    // Estilos
    result.css = css;

    // Propiedades
    result.length = elements.length;

    // Objeto con selección y métodos:
    return result;
}