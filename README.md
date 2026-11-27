# Portafolio personal

Catálogo de proyectos de Juan David Moreno, creado con HTML, JavaScript y Tailwind CSS 4. La página principal reúne los proyectos publicados y permite filtrarlos por categoría.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `index.html` en el navegador o con un servidor local como Live Server. El comando `dev` actualiza `src/output.css` al guardar cambios. Para generar la hoja final una sola vez, ejecuta `npm run build`.

La paleta y las fuentes se configuran en `src/input.css`. Las fuentes DM Sans y Space Grotesk se cargan desde Google Fonts, con alternativas sans-serif si no están disponibles.

## Añadir un proyecto

En `index.html`, copia uno de los elementos `<article>` de `#lista-proyectos` y actualiza su enlace, imagen, título, descripción y categoría. El atributo `data-category` controla el filtro: usa `personal` o `web`, o agrega una categoría nueva junto con su botón `data-filter`. Actualiza también el número mostrado en el botón «Todos».
