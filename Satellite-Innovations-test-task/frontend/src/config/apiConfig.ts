export const baseDomain = import.meta.env.VITE_BASE_URL || 'http://localhost:3002';

export const apiEndpoints = {
    getVacancies: `${baseDomain}/getVacancies`,
    applyVacancy: `${baseDomain}/applyVacancy`
}