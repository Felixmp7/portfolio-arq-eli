/* eslint-disable no-unused-vars */
export enum EProjectsCategory {
    architecture = 'architecture',
    bathrooms = 'bathrooms',
    kitchens = 'kitchens',
    livingrooms = 'livingrooms',
    bedrooms = 'bedrooms',
}

export type TSendEmailForm = {
    name: string
    phone: string
    email: string
    company?: string
    message: string
}

export type TNavLink = {
    id: number,
    url: string,
    name: string
}

export type TProjectDetails = {
    id: number
    images: string[],
    title: string,
    location: string
    year: string,
    goal: string,
    description: string
}

export enum ETabKeyIcon {
    title = 'title',
    location = 'location',
    year = 'year',
    goal = 'goal',
}

export type TTrendingProject = TProjectDetails & {
    trending: string
}

export type TService = {
    id: number;
    title: string;
    resume: string;
    description: string;
    howWeDoIt: string[];
    whatIncludes: string[];
    src: string;
}