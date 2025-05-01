"use client";

import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <I18nextProvider i18n={i18n}>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
            </I18nextProvider>
        </QueryClientProvider>
    )
};

export default Providers