const express = require('express') //Importo la libreria
const app = express() //Inicializacion de la variable que usara la libreria
const router = express.Router(); // Enrutar los servicios web
const port = 3000; // Escuchar la ejecucion del servidor
require('dotenv').config() // Obetenmos las variables de entorno

const DB_URL = process.env.DB_URL || '';

const mongoose = require('mongoose'); // Importo la libreria mongoose
const socket = require('socket.io')//importamos la libreria Socket.io
const http = require('http').Server(app)
const io = socket(http)

mongoose.connect(DB_URL) // Creo la cadena de conexion
const userRoutes = require('./routes/UserRoutes');
app.use(express.urlencoded({ extended: true })) // Acceder a la informacion de las urls
app.use(express.json()) // Analizar informacion en formato JSON


app.use((req, res, next) => {
    res.io = io
    next()
})

//Metodo [GET, POST, PUT, PATCH, DELETE]
// Nombre del servicio [/]
router.get('/', (req, res) => {
    //Informacion a modificar
    res.send("Hello world")
})

io.on('connect', (socket) =>{
console.log("connected")

socket.on('message', (data) => {
console.log(data)
//Emitir eventos al servidor
socket.emit('message-receipt',{"message":"Mensaje recibido en el servidor"})

 })
})


//Ejecuto el servidor
app.use(router)
app.use('/uploads', express.static('uploads'));
app.use('/', userRoutes)
http.listen(port, () => {
    console.log('Listen on ' + port)
})