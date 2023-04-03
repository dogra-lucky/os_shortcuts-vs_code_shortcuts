const express = require('express');
const app = express();
require('./db');
require('dotenv').config();
// require('./readCsv')
const cors = require('cors');

// parse json objects
app.use(express.json())
app.use(cors({origin: 'https://api.opensea.io'}));
// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true}))

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.status(200).json({message:'dummy records server api working fine...'});
});

app.listen(port, () => {
    console.log(`Dummy Records Server is listening on port ${port}`);
});