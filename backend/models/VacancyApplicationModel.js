const mongoose = require('mongoose');
const VacancyApplicationSchema = new mongoose.Schema({
    userEmail: String,
    vacancyId: mongoose.Schema.Types.ObjectId
}, { versionKey: false });

const VacancyApplicationModel = mongoose.model(
    process.env.MONGO_COLLECTION_APPLICATIONS_FOR_VACANCIES,
    VacancyApplicationSchema
);
module.exports = VacancyApplicationModel;