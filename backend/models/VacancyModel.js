const mongoose = require('mongoose');
const VacancySchema = new mongoose.Schema({
    title: String,
    description: String,
    logo: String
}, { versionKey: false });

const VacancyModel = mongoose.model(
    process.env.MONGO_COLLECTION_VACANCIES,
    VacancySchema
);
module.exports = VacancyModel;