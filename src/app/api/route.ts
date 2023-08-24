import { TTrendingProject } from '@/types/index';
import { prisma } from 'prisma/client';

export async function GET() {
    try {
        const trendingProjects: TTrendingProject[] = await prisma.trendingProject.findMany();
        return trendingProjects;
    } catch (error) {
        return [];
    }
}
