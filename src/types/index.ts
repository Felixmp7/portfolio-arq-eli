
/* eslint-disable no-unused-vars */
export enum EProjectsCategory {
    architecture = 'architecture',
    bathrooms = 'bathrooms',
    kitchens = 'kitchens',
    livingrooms = 'livingrooms',
    bedrooms = 'bedrooms',
}

export type SendEmailForm = {
    name: string
    phone: string
    email: string
    company?: string
    message: string
}

export type NavLink = {
    id: number,
    url: string,
    name: string
}

export type Project = {
    id: number
    images: string[],
    title: string,
    location: string
    year: string,
    goal: string,
    trendingPicture?: string,
    description: string
}

export enum ETabKeyIcon {
    title = 'title',
    location = 'location',
    year = 'year',
    goal = 'goal',
}

export type Service = {
    id: number;
    title: string;
    resume: string;
    description: string;
    howWeDoIt: string[];
    whatIncludes: string[];
    src: string;
}