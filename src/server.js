/**
 * Lógica principal del servidor HTTP
 * Maneja las rutas definidas en el ejercicio
 */
const http = require('http');

const routes = {
  '/': 'Bienvenid@s! Gracias por tu visita.',
  '/nosotros': 'Bienvenid@s a saber + de nosotros :)',
  '/cursos': 'Te interesan nuestros cursos. Vení a conocer la oferta!',
  '/contacto': 'Si querés contactarnos, hacelo a este Email: :)',
};

/**
 * Crea y retorna un servidor HTTP configurado con las rutas del ejercicio
 * @returns {http.Server}
 */
function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const message = routes[req.url];

    if (message) {
      res.writeHead(200);
      res.end(message);
    } else {
      res.writeHead(404);
      res.end('No se ha encontrado la ruta ingresada.');
    }
  });
}

module.exports = createServer;
