const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const Planets = require('./models/planets.model');
const { start } = require('repl');

const PORT = process.env.PORT || 8000;
const MONGO_URL = 'mongodb+srv://danielabonfimmelo:CApg5SWE52aws7Ew@cluster0.v3vnd4a.mongodb.net/nasa?retryWrites=true&w=majority'
const server = http.createServer(app);

async function startServer(){
  mongoose.connect(MONGO_URL);
  await new Planets().populateHabitablePlanets();
  server.listen(PORT);
}

mongoose.connection.once('open', () => console.log("oi mongoose"));
mongoose.connection.on('error', (e) => console.error(e));

startServer();
