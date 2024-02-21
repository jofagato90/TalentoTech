const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const HouseSchema = require('../models/Houses');
 const Housecontroller = require('../controllers/HouseController'); //Importando el controlador
 const multer = require('multer');
 const housecontroller = new Housecontroller();// creación instancia del controlador

 