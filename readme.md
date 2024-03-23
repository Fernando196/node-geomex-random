# Generador de Datos Falsos de México

Este proyecto es un generador de datos falsos de México que crea un archivo JSON con datos ficticios, incluyendo coordenadas geográficas (latitud y longitud), nombres, etc., para cualquier propósito que requiera datos ficticios pero realistas sobre ubicaciones geográficas en México.

# Descripción

El generador de datos falsos de México utiliza un polígono creado manualmente por el usuario para validar que las coordenadas generadas estén dentro de México. Utiliza la biblioteca faker.js para generar nombres y números de teléfono ficticios, y la biblioteca turf.js para generar coordenadas geográficas (latitud y longitud) aleatorias dentro del polígono especificado. Los datos generados se almacenan en un archivo JSON para facilitar su uso y procesamiento.

## Características
* Generación de coordenadas geográficas aleatorias dentro de México, validadas por un polígono creado manualmente.
* Generación de nombres ficticios en español para ubicaciones.
* Generación de números de teléfono ficticios con prefijo mexicano.
* Los datos generados se almacenan en un archivo JSON para su fácil acceso y procesamiento.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Fernando196/node-geomex-random.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd node-geomex-random
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

# Configuraciones
1.- Crea en la raiz el forder data, es en donde se creara el archivo json con la informacion fake.
2.- Modifica la variable cantidaDatos a tu gusto por el numero de datos que ocupes aletarorios.
 ```bash
 	const cantidadDatos = 100; // Cantidad de datos a crear.
   ```
## Contribuciones

Siéntete libre de contribuir con nuevas características, mejoras o correcciones de errores. Abre un issue o envía un pull request para colaborar.