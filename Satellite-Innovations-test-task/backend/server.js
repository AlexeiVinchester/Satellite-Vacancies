require('dotenv').config()

const ObjectId = require('mongodb').ObjectId

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const VacancyModel = require('./models/VacancyModel');
const VacancyApplicationModel = require('./models/VacancyApplicationModel');
const initialVacancies = require('./InitialValues/initialVacancies');

const geoip = require('geoip-lite');
const { allowedCountry } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING)
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
        if (count === 0) {
            await VacancyModel.insertMany(initialVacancies);
        }
    } catch (error) {
        console.error('Error while initialising', error);
    }
};

app.get('/getVacancies', async (req, res) => {
    try {
        const vacancies = await VacancyModel.find();
        const amountOfApplications = await VacancyApplicationModel.estimatedDocumentCount();
        res.status(200).send({ vacancies, amountOfApplications: amountOfApplications });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Server error while loading vacancies" });
    }
});

app.post('/applyVacancy', async (req, res) => {
    try {

        const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();

        if (clientIp === '::1' || clientIp === '127.0.0.1') {
            console.log("Localhost access detected. Skipping country check.");
        } else {
            const geo = geoip.lookup(clientIp);
            console.log(`Geo: ${JSON.stringify(geo.country)}`);
            if (!geo || geo.country !== allowedCountry) {
                return res.status(403).send({ error: "Access denied: Application allowed only from Belarus" });
            }
        }

        const { userEmail, vacancyId } = req.body;
        const vacancyApplication = {
            userEmail,
            vacancyId: ObjectId.createFromHexString(vacancyId)
        };

        let result = await VacancyApplicationModel.create(vacancyApplication);
        if (result && result._id) {
            res.status(201).send({ success: true });
        } else {
            res.status(500).send({ error: "Application for vacancy wasn't created in DB" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error while applying to vacancy" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server-vacancies-app is running!');
});