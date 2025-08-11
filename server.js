const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const route=require('./routes/livreroute')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/books', require('./routes/livreroute'));

app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${process.env.PORT}`);
});
