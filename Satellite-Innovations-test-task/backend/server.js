const ObjectId = require('mongodb').ObjectId

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const VacancyModel = require('./models/VacancyModel');
const VacancyResponseModel = require('./models/VacancyResponseModel');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/local")
    .then(async () => {
        console.log("Connected to MongoDB");
        await initializeStudents();
    }).catch(error => {
        console.error("MongoDB connection error:", error);
    });

const db = mongoose.connection;

const initializeStudents = async () => {
    try {
        
        const count = await VacancyModel.estimatedDocumentCount();
        console.log(`Count: ${count}`)
        if (count === 0) {
            const initialVacancies = [
                {
                    title: "Frontend Developer",
                    description: "We are looking for a skilled frontend developer with experience in React and JavaScript.",
                    logo: "https://example.com/logos/frontend.png"
                },
                {
                    title: "Backend Developer",
                    description: "Join our team as a backend developer, specializing in Node.js and Express.",
                    logo: "https://example.com/logos/backend.png"
                },
            ];
            await VacancyModel.insertMany(initialVacancies);
        }
    } catch (error) {
        console.error('Error while initialising', error);
    }
};

app.get('/getVacancies', async (req, res) => {
    try {
        const vacancies = await VacancyModel.find();
        const responses = await VacancyResponseModel.estimatedDocumentCount();
        res.status(200).send({vacancies, responses});
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while loading vacancies");
    }
});

app.listen(3002, () => {
    console.log('Server-tutor-app is running!');
});