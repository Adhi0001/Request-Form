
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var corsOptions = {
    origin:"http://localhost:3000"
};

app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/cvws-new', {
    
});

const myworkRoutes = require('./routes/workassignment.routes');
app.use('/api',myworkRoutes );

const PORT = process.env.PORT || 5786;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
