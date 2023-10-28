import { TTrendingProject } from '@/types/index';
import { prisma } from 'prisma/client';

export async function GET() {
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