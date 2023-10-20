import { EmailTemplate } from '@/components/EmailTemplate';
import { TProjectDetails, TSendEmailForm, TService, TTrendingProject } from '@/types/index';
import { prisma } from 'prisma/client';
import { Resend } from 'resend';


export async function postSendEmail({ email, name, phone, company, message }: TSendEmailForm) {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    try {
        const data = await resend.emails.send({
            from: `${name} <${email}>`,
            to: ['devfex.19@gmail.com'],
            subject: `Contacto a través del portafolio - ${name}`,
            text: undefined as any,
            react: EmailTemplate({name,
                email,
                company,
                phone,
                message})
        });
        return data;
    } catch (error) {
        throw new Error('Error sending email');
    }
}



export async function getProjects() {
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
        const trendingProjects: TTrendingProject[] = await prisma.trendingProject.findMany();
        return trendingProjects;
    } catch (error) {
        return [];
    }
}
