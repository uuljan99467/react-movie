import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json'; // Импортируем все переводы
import ru from './locales/ru/ru.json'; // Импортируем все переводы

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // по умолчанию русский
  fallbackLng: 'ru', // если язык не найден, используем русский
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
