const express = require('express');
require('dotenv').config({path:'.env'});
const connectDB = require('./config/db');
const route=require('./routes/livreroute')


const app = express();

connectDB();
app.use(express.json());

app.use('/', require('./routes/livreroute'));

app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${process.env.PORT}`);
});
