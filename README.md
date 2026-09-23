# Arcane: Crónicas de Piltover y Zaun

Sitio web estático dedicado a la serie **Arcane**. El proyecto presenta el universo de Piltover y Zaun, sus temporadas, episodios y personajes principales mediante una navegación dividida en páginas independientes.

> Proyecto realizado con HTML, CSS y JavaScript vanilla. No utiliza frameworks ni necesita un servidor backend.

## Páginas

### Inicio - `index.html`

Es la portada del sitio. Incluye:

- Presentación general de la serie.
- Contexto de Piltover y Zaun.
- Datos generales: temporadas, episodios, años de emisión y reconocimiento.
- Información sobre los creadores, la animación y los premios.
- Enlaces directos a episodios y personajes.

### Episodios - `Epi.html`

Reúne los 18 episodios de Arcane, divididos en dos temporadas.

- Filtro interactivo entre la temporada 1 y la temporada 2.
- Línea de tiempo con título y descripción de cada episodio.
- Trailer de YouTube asociado a cada temporada.
- El video, el título de temporada y la descripción se actualizan con JavaScript al cambiar el filtro.

### Personajes - `pj.html`

Presenta personajes de Piltover y Zaun en tarjetas individuales.

- Vi, Jinx, Heimerdinger, Caitlyn, Jayce, Viktor, Silco, Ekko, Mel y Sevika.
- Indicación de la ciudad o grupo al que pertenece cada personaje.
- Imagen opcional para cada tarjeta.
- Fallback visual con la inicial del personaje cuando no existe la imagen indicada.

### Contacto - `cnt.html`

Página para enviar comentarios y sugerencias.

- Formulario con nombre, correo y mensaje.
- Mensaje de confirmación en pantalla al enviarlo.
- Sección de preguntas frecuentes.
- Aclaración de que el sitio no es oficial de Netflix ni Riot Games.

## Estructura del proyecto

```text
TPprog3/
├── index.html       # Portada y presentación del universo
├── Epi.html         # Episodios, filtro y trailers
├── pj.html          # Personajes
├── cnt.html         # Contacto y preguntas frecuentes
├── style.css        # Estilos compartidos y diseño responsive
├── script.js        # Filtro de temporadas y formulario
└── src/             # Imágenes y recursos multimedia
```

## Tecnologías

- **HTML5** para la estructura y el contenido.
- **CSS3** para el diseño responsive, la tipografía, los paneles asimétricos y la identidad visual.
- **JavaScript vanilla** para el filtro de temporadas, el cambio de trailers y la confirmación del formulario.
- **Google Fonts** para las familias tipográficas Cinzel y Manrope.
- **YouTube Embed** para mostrar los trailers de cada temporada.

## Cómo ejecutarlo

1. Descargá o cloná el proyecto.
2. Abrí la carpeta `TPprog3` en Visual Studio Code.
3. Abrí `index.html` directamente en el navegador.
4. También podés usar una extensión como **Live Server** para recargar automáticamente los cambios.

No es necesario instalar dependencias ni ejecutar comandos de compilación.

## Recursos de imágenes

Las imágenes utilizadas por la página de personajes se buscan dentro de `src/`. Si un archivo no existe, la tarjeta muestra automáticamente la inicial del personaje.

Los nombres esperados actualmente son:

```text
src/vi.webp
src/jinx.jfif
src/heimerdinger.jpg
src/claudia.png
src/jayce.webp
src/viktor.webp
src/silco.webp
src/ekko.jpeg
src/mel.jfif
src/sevika.webp
```

Para agregar una imagen, colocala en `src/` con el nombre y la extensión correspondiente. Si querés cambiar una imagen, conservá el nombre esperado o actualizá el atributo `src` de la tarjeta en `pj.html`.

## Personalización

- Modificá el contenido de cada página desde su archivo HTML.
- Cambiá colores, tipografías y distribución desde `style.css`.
- Actualizá los trailers y sus descripciones en el objeto `trailers` de `script.js`.
- El formulario de contacto actualmente funciona como demostración local: muestra una confirmación, pero no envía datos a un servidor.

## Créditos y nota legal

Arcane es una serie de Netflix creada por Christian Linke y Alex Yee, producida junto con Riot Games y Fortiche Animation. League of Legends y sus personajes pertenecen a Riot Games.

Este proyecto es una página informativa hecha por fans y no representa oficialmente a Netflix, Riot Games ni Fortiche Animation.
