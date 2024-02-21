const mongoose = require('mongoose') // Importando la libreria

// Creando el modelo de Casas
const HouseSchema = new mongoose.Schema({
    address: {
        type: String, 
        required: true,

    },
    city: {
        type: String, 
        required: true
        /*
        validate: {
            validator: function(name) {
              // Expresión regular para validar el formato del correo electrónico              
              return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(name);
            },
            message: props => `${props.value} no es un nombre válido!`
          }*/
    },
    state: {
        type: String, 
        required: true,
    },
    size: {
        type: number, 
        required: true
        /*
        validate: {
            validator: function(email) {
              // Expresión regular para validar el formato del correo electrónico              
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: props => `${props.value} no es un correo electrónico válido!`
          }*/
    },
    type: {
        type: String, 
        required: true
    },
    price: {
      type: String
    },
    code: {
        type: String,
        required:true,
        unique:true
      }
})

module.exports = mongoose.model('house', HouseSchema) 