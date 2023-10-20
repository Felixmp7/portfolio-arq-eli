import { EmailTemplate } from '@/components/EmailTemplate';
import { TSendEmailForm } from '@/types/index';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST({ email, name, phone, company, message }: TSendEmailForm) {
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
        return NextResponse.json(data);
    } catch (error) {
        throw new Error('Error sending email');
    }
}
