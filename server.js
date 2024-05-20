const express = require('express');
const env = require('dotenv');
const path = require('path');
const cors = require('cors');
const fileRouter = require('./routes/fileRoutes');

env.config(); //configuring hostname and port form .env file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 9000;

const app = express(); //Creating Express app

app.use(cors());
app.use('/media', express.static(path.resolve(__dirname, '../../backup/media')));
app.use('/api/upload', fileRouter);

//starting server
app.listen(port, (req, res) => {
    console.log(`server listening on port http://${hostname}:${port}`);
});