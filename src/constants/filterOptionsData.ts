export type filterOptionsData = {
  [key: string]: (now: Date, cardDate: Date, selectedTime: string | null) => boolean;
} & {
  "Последние вакансии": (now: Date, cardDate: Date, selectedTime: string | null) => boolean;
};
export type OptionType = {
  text: string;
  minExperience?: string;
  maxExperience?: string;
  time?: string; 
};
export type FilterOptionType = {
  title: string;
  options: (
    | OptionType
    | { text: string; minPrice: string; maxPrice: string; currency?: string }
    | { text: string; cityName: string } 
    | { text: string; schedule: string } 
    | { text: string; zagalovok: string }
    | { text: string; minExperience: string; maxExperience: string } 
    | { text: string; specialization: string }
  )[]; 
};

export const filterOptions: FilterOptionType[]= [
  {
    title: "Последние вакансии",
    options: [
      { text: "Все", time: "Все" },
      { text: "24 часа", time: "24 часа" },
      {
        text: "3 дня",
        time: "3 дня",
      },
      {
        text: "Неделя",
        time: "Неделя",
      },
      {
        text: "1 месяц",
        time: "1 месяц",
      },
    ],
  },
  {
    title: "Зарплата",
    options: [
      { text: "до 30000сом", minPrice:"0" , maxPrice: "30000" },
      { text: "30000 - 50000сом", minPrice: "30000", maxPrice: "50000" },
      { text: "50000 - 80000сом", minPrice: "50000", maxPrice: "80000" },
      {
        text: "Выше 80000сом",
        minPrice: "80000",
        maxPrice: Infinity as unknown as string
      },
      { text: "В долларах", currency: "доллар" },
    ],
  },

  {
    title: "Города",
    options: [
      { text: "Кыргызстан", cityName: "Кыргызстан" },
      { text: "Талас", cityName: "Талас" },
      { text: "Бишкек", cityName: "Бишкек" },
      { text: "Джалал-Абад", cityName: "Джалал-Абад" },
      { text: "Нарын", cityName: "Нарын" },
      { text: "Ыссык-Куль", cityName: "Ыссык-Куль" },
      { text: "Баткен", cityName: "Баткен" },
    ],
  },
  {
    title: "График работы",
    options: [
      { text: "полный день", schedule: "полный день" },
      { text: "Сменный график", schedule: "Сменный график" },
      {
        text: "Удаленная работа",
        schedule: "Удаленная работа",
      },
      {
        text: "Гибкий график",
        schedule: "Гибкий график",
      },
      {
        text: "Вахтовый метод",
        schedule: "Вахтовый метод",
      },
    ],
  },
  {
    title: "Специализация",
    options: [
      {
        text: "Менеджер по продажам, менеджер по работе с клиентами",
        zagalovok: "Менеджер по продажам, менеджер по работе с клиентами",
      },
      {
        text: "Сменный график",
        zagalovok: "Сменный график",
      },
      {
        text: "Бухгалтер",
        zagalovok: "Бухгалтер",
      },
      {
        text: "Продавец-консультант, продавец-кассир",
        zagalovok: "Продавец-консультант, продавец-кассир",
      },
      {
        text: "Администратор",
        zagalovok: "Администратор",
      },
    ],
  },
  {
    title: "Стаж работы",
    options: [
      {
        text: "Не имеет значения",
        minExperience: "0",
        maxExperience: "Infinity",
      },
      {
        text: "От 1 до 3 лет",
        minExperience: "1",
        maxExperience: "3",
      },
      {
        text: "Без опыта",
        minExperience: "0",
        maxExperience: "0",
      },
      {
        text: "От 3 до 7 лет",
        minExperience: "3",
        maxExperience: "7",
      },
      {
        text: "Более 7 лет",
        minExperience: "7",
        maxExperience: "Infinity",
      },
    ],
  },
  {
    title: "Специальное",
    options: [
      {
        text: "Подходит для студентов",
        specialization: "Подходит для студентов",
      },
      {
        text: "Подходит для пенсионеров",
        specialization: "Подходит для пенсионеров",
      },
      {
        text: "Подходит людям с инвалидностью",
        specialization: "Подходит людям с инвалидностью",
      },
    ],
  },
];

  
