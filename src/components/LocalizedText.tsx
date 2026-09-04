'use client';

import { useLanguage } from './LanguageProvider';

export default function LocalizedText({ id, en }: { id: string; en: string }) {
  const { language } = useLanguage();
  return <>{language === 'id' ? id : en}</>;
}
