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