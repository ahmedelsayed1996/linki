import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages, setRequestLocale } from 'next-intl/server';
import Header from '../_components/layout/header/Header';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    const messages = await getMessages({ locale });
    return (
        <div dir={locale === "ar" ? "rtl" : "ltr"}>
            <NextIntlClientProvider messages={messages}>
                 <Header />
                {children}
            </NextIntlClientProvider>
        </div>
    )
}