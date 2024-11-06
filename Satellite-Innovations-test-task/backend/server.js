const ObjectId = require('mongodb').ObjectId

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/local")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch(error => {
        console.error("MongoDB connection error: ", error);
    });

const db = mongoose.connection;

app.listen(3002, () => {
    console.log('Server-tutor-app is running!');
});