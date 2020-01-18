const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect("mongodb://localhost:27017/Week10",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
