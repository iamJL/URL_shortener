const express = require('express');
const mongooose = require('mongoose');
const app = express();

const connectDB = require('./config/db');
//Connecting to DB
connectDB();
//app.use(express.json());
app.use(express.json({extended: false}));

app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));