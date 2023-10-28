import { TProjectDetails } from "@/types/index";
import { prisma } from 'prisma/client';

export async function GET() {
    try {
        const projects: TProjectDetails[] = await prisma.project.findMany();
        return projects;
    } catch (error) {
        return [];
    }
}