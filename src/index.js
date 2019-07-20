const express = require('express');
const app = express();
const morgan = require('morgan');
var port = process.env.port || 3000;

app.get('/', (req, res) => res.send('Hola mundo!!'));
app.listen(port, () => console.log('Servidor corriendo en puerto ' + port));
