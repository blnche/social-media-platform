const express = require('express');
const app = express();
const cors = require('cors');

// const userRoutes = require('./routes/userRoutes');

require('dotenv').config({path: './config.env'});
const connectDB = require('./db/conn');

const PORT = process.env['PORT'] || 5050;

app.use(cors());
app.use(express.json());


// ROUTES
// app.use('/user', userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on port ${PORT}`);
})