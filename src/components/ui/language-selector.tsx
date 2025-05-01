"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { changeLanguage } from '@/i18n';
import 'flag-icons/css/flag-icons.min.css';

const languages = [
  { code: 'en', name: 'English', countryCode: 'gb' },
  { code: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'es', name: 'Español', countryCode: 'es' },
  { code: 'ru', name: 'Русский', countryCode: 'ru' },
  { code: 'zh', name: '中文', countryCode: 'cn' },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-2 px-2">
          <span className={`fi fi-${currentLanguage.countryCode} text-lg`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center gap-2 px-3 py-2 cursor-pointer"
          >
            <span className={`fi fi-${language.countryCode} text-lg`} />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
