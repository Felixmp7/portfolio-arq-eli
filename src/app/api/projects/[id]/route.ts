import { TProjectDetails } from '@/types/index';
import { prisma } from 'prisma/client';

export async function GET(id: number) {
    try {
        const project: TProjectDetails | null = await prisma.project.findUnique({ where: { id }});
        return project;
    } catch (error) {
        return [];
    }
}
