const mongoose = require('mongoose');
const VacancySchema = new mongoose.Schema({
    title: String,
    description: String,
    logo: String
}, { versionKey: false });

const VacancyModel = mongoose.model('vacancies', VacancySchema);
module.exports = VacancyModel;