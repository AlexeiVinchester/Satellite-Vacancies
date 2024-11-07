const mongoose = require('mongoose');
const VacancyResponseSchema = new mongoose.Schema({
    userEmail: String,
    vacancyId: mongoose.Schema.Types.ObjectId
}, { versionKey: false });

const VacancyResponseModel = mongoose.model('vacancies_responses', VacancyResponseSchema);
module.exports = VacancyResponseModel;