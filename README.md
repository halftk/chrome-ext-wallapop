# Wallapop CSS Customizer

Una extensión de Chrome que añade CSS personalizado a la web de Wallapop con características activables.

## Características

- **Ocultar reservados**: Oculta los artículos que están marcados como reservados.
- Más características pueden ser añadidas fácilmente.

## Instalación

1. Descarga o clona este repositorio
2. Abre Chrome y navega a `chrome://extensions/`
3. Activa el "Modo desarrollador" en la esquina superior derecha
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta de esta extensión
5. ¡Listo! La extensión debería aparecer en tu barra de herramientas

## Uso

1. Navega a Wallapop.com
2. Haz clic en el icono de la extensión en la barra de herramientas
3. Activa o desactiva las características según tus preferencias

## Personalización

Para añadir más características:

1. Edita `popup.html` para añadir nuevos interruptores
2. Actualiza `popup.js` para manejar los nuevos interruptores
3. Añade nuevas reglas CSS en `content.js` en el objeto `cssRules`
