const express = require('express');
const cors = require('cors');
const path = require('path');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

//middlewares
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

//serving static files
app.use(express.static(path.join(__dirname, '..', 'public')));

const path1 = path.join(__dirname, '..', 'public', 'index.html')
app.get('/', (req, res) => {
  console.log("path : ", path1)
  console.log("oi")
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.use(planetsRouter);

module.exports = app;