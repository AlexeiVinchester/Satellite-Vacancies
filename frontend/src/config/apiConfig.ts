export const baseDomain = import.meta.env.VITE_BASE_URL || import.meta.env.VITE_LOCAL_URL;

export const apiEndpoints = {
    getVacancies: "/getVacancies",
    applyVacancy: "/applyVacancy"
};