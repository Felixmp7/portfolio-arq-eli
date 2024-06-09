import { promises as fs } from 'fs';
import { Project, Service } from '../types';

const parseFile = (file: string) => JSON.parse(file);

const readFile = (path: string) => fs.readFile(process.cwd() + path, 'utf8');

export const getProjects = async () => {
    const file = await readFile('/src/.data/projects.json');
    return parseFile(file) as Project[];
};

export const getServices = async () => {
    const file = await readFile('/src/.data/services.json');
    return parseFile(file) as Service[];
};