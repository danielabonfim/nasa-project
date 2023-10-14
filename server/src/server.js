const http = require('http');
const app = require('./app');
const Planets = require('./models/planets.model');
const { start } = require('repl');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer(){
  await new Planets().populateHabitablePlanets();
  server.listen(PORT);
}

startServer();
