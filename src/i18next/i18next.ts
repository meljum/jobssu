import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kg from '../../public/locales/kg.json'
import ru from '../../public/locales/ru.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kg: { translation: kg },
      ru: { translation: ru} ,
    },
    fallbackLng: 'ru',
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
