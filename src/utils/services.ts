import { prisma } from "prisma/client";
import { TProjectDetails, TService, TTrendingProject } from "src/types";

export async function getProjectDetails() {
    try {
        const projects: TProjectDetails[] = await prisma.project.findMany();
        return projects;
    } catch (error) {
        return [];
    }
}

export async function getServices() {
    try {
        const services: TService[] = await prisma.service.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return services;
    } catch (error) {
        return [];
    }
}

export async function getTrendingProjects() {
    try {
        const trendingProjects = await prisma.project.findMany({
            where: {
                trending: {
                    not: null
                }
            }
        });
        return trendingProjects as TTrendingProject[];
    } catch (error) {
        return [];
    }
}