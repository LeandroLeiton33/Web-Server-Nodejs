// Importa el módulo 'express' y lo asigna a la constante 'express'
const express = require('express');

// Importa el módulo 'path' y lo asigna a la constante 'path'
const path = require('path');

// Define la función 'startServer' que recibe un objeto 'options' como argumento
const startServer = (options) => {
    // Desestructura el objeto 'options' para obtener 'port' y 'public_path' (con un valor por defecto de 'public')
    const { port, public_path = 'public' } = options;

    // Crea una nueva aplicación de Express
    const app = express();

    // Utiliza middleware de Express para servir archivos estáticos desde el directorio especificado en 'public_path'
    app.use(express.static(public_path));

    // Define una ruta que captura todas las solicitudes ('*')
    app.get('*', (req, res) => {
        // Construye la ruta absoluta al archivo 'index.html' en el directorio 'public_path'
        const indexPath = path.join(__dirname, `../../../${public_path}/index.html`);
        // Envía el archivo 'index.html' como respuesta
        res.sendFile(indexPath);
    });

    // Inicia el servidor en el puerto especificado y muestra un mensaje en la consola
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`);
    });
}

// Exporta la función 'startServer' para que pueda ser utilizada en otros archivos
module.exports = {
    startServer
};
