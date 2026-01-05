import { projects as initialProjects, certifications as initialCerts } from '../data';

const PROJECTS_KEY = 'portfolio_projects';
const CERTS_KEY = 'portfolio_certifications';
const VERSION_KEY = 'portfolio_data_version';
// Incrementing this will force everyone to see the new data.js content
const CURRENT_VERSION = '1.1';

function checkVersion() {
    const savedVersion = localStorage.getItem(VERSION_KEY);
    if (savedVersion !== CURRENT_VERSION) {
        localStorage.removeItem(PROJECTS_KEY);
        localStorage.removeItem(CERTS_KEY);
        localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
        return true;
    }
    return false;
}

export function getProjects() {
    checkVersion();
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (!stored) {
        saveProjects(initialProjects);
        return initialProjects;
    }
    return JSON.parse(stored);
}

export function saveProjects(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export function getCertifications() {
    checkVersion();
    const stored = localStorage.getItem(CERTS_KEY);
    if (!stored) {
        saveCertifications(initialCerts);
        return initialCerts;
    }
    return JSON.parse(stored);
}

export function saveCertifications(certs) {
    localStorage.setItem(CERTS_KEY, JSON.stringify(certs));
}
