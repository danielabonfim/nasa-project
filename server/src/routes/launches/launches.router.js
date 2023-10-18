const express = require('express');
const {getAllLaunches, createLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', createLaunch);

module.exports = launchesRouter
