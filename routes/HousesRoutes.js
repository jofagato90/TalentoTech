const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const HouseSchema = require('../models/Houses');
 const Housecontroller = require('../controllers/HouseController'); //Importando el controlador
 const multer = require('multer');
 const housecontroller = new Housecontroller();// creación instancia del controlador

 router.get('/houses', async (req, res) => {
    //traer todas las casas
    let houses = await HouseSchema.find();
    res.json
 })

 