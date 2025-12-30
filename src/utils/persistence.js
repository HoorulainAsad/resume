import { projects as initialProjects, certifications as initialCerts } from '../data';

const PROJECTS_KEY = 'portfolio_projects';
const CERTS_KEY = 'portfolio_certifications';

export function getProjects() {
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
