import { TService } from '@/types/index';
import { prisma } from 'prisma/client';

export async function GET() {
    try {
        const services: TService[] = await prisma.service.findMany();
        return services;
    } catch (error) {
        return [];
    }
}
