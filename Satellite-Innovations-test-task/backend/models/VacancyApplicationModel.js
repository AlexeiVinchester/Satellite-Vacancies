const mongoose = require('mongoose');
const VacancyApplicationSchema = new mongoose.Schema({
    userEmail: String,
    vacancyId: mongoose.Schema.Types.ObjectId
}, { versionKey: false });

const VacancyApplicationModel = mongoose.model('vacancies_applications', VacancyApplicationSchema);
module.exports = VacancyApplicationModel;