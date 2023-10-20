'use server';

import { cookies } from 'next/headers';

export async function setEmailCookie() {
    const oneWeek = 168 * 60 * 60 * 1000;
    cookies().set('email_sent', 'true', { expires: Date.now() + oneWeek });
}

export async function getEmailCookie() {
    return cookies().get('email_sent');
}