/* eslint-disable no-unused-vars */
export enum EProjectsCategory {
    architecture = 'architecture',
    bathrooms = 'bathrooms',
    kitchens = 'kitchens',
    livingrooms = 'livingrooms',
    bedrooms = 'bedrooms',
}

export type TNavLink = {
    id: number,
    url: string,
    name: string
}