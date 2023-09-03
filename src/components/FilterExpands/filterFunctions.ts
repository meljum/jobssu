import { VakansiesCardArrProps } from "../../constants/VakansiesCardArr";
import { filterOptions } from "../../constants/filterOptionsData";
import { filterOptionsData } from "../../constants/filterOptionsData";

export const handleFilterByPriceRange = (
  minPrice: number | undefined,
  maxPrice: number | undefined,
  currency: string | undefined,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  const filteredData: VakansiesCardArrProps[] = data.filter((card) => {
    const cardPrice = parseInt(card.price_before.replace(/\s+/g, ""));
    const cardCurrency = card.currency;

    if (currency === "доллар") {
      return cardCurrency.includes("доллар");
    } else {
      if (minPrice !== undefined && maxPrice !== undefined) {
        return (
          cardPrice >= minPrice &&
          cardPrice <= maxPrice &&
          cardCurrency === currency
        );
      } else if (minPrice !== undefined) {
        return cardPrice >= minPrice && cardCurrency === currency;
      } else if (maxPrice !== undefined) {
        return cardPrice <= maxPrice && cardCurrency === currency;
      }
    }

    return false;
  });

  return filteredData;
};

export const handleFilterByLocation = (
  cityName: string,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  console.log(cityName, "gorod");

  return data.filter((item) => item.location === cityName);
};

export const handleFilterBySchedule = (
  schedule: string,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  console.log("Selected schedule:", schedule);
  return data.filter((item) => item.grafik_raboty === schedule);
};

export const handleFilterBySpecialization = (
  zagalovok: string,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  return data.filter((item) => item.zagalovok === zagalovok);
};

export const handleFilterByExperienceRange = (experienceText: string, data: []) => {
  let minExperience = 0;
  let maxExperience = Infinity;

  switch (experienceText) {
    case "От 1 до 3 лет":
      minExperience = 1;
      maxExperience = 3;
      break;
    case "Без опыта":
      minExperience = 0;
      maxExperience = 0;
      break;
    case "От 3 до 7 лет":
      minExperience = 3;
      maxExperience = 7;
      break;
    case "Более 7 лет":
      minExperience = 7;
      maxExperience = Infinity;
      break;
    default:
      return data;
  }
  const filteredData = data.filter((card: { staj_raboty: string; }) => {
    const cardExperience = parseInt(card.staj_raboty.split(" ")[0], 10);
    return cardExperience >= minExperience && cardExperience <= maxExperience;
  });

  return filteredData;
};

export const handleFilterByTime = (
  selectedTime: string | null,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  if (!selectedTime) {
    return data;
  }

  const now = new Date();
  console.log("Selected Time:", selectedTime);
  console.log("Current Time (now):", now);
  const filteredData: VakansiesCardArrProps[] = data.filter((card) => {
    if (card.time) {
      console.log("Card Time:", card.time);
      const cardDateParts = card.time.match(/(\d{2})\.(\d{2})\.(\d{4})/);

      if (cardDateParts) {
        const cardDate = new Date(
          Number(cardDateParts[3]),
          Number(cardDateParts[2]) - 1,
          Number(cardDateParts[1])
        );

        const timeDiffInMs = now.getTime() - cardDate.getTime();

        switch (selectedTime) {
          case "Все":
            return true;
          case "24 часа":
            return timeDiffInMs <= 24 * 60 * 60 * 1000;
          case "3 дня":
            return timeDiffInMs <= 3 * 24 * 60 * 60 * 1000;
          case "Неделя":
            return timeDiffInMs <= 7 * 24 * 60 * 60 * 1000;
          case "1 месяц":
            return timeDiffInMs <= 30 * 24 * 60 * 60 * 1000;
          default:
            return true;
        }
      }
    }

    return false;
  });

  return filteredData;
};

export const handleFilterBySpecial = (
  selectedSpecialization: string,
  data: VakansiesCardArrProps[]
): VakansiesCardArrProps[] => {
  const filteredData = data.filter((card) =>
    card.specialization === selectedSpecialization
  );
  return filteredData;
};


export const sortByPriceAsc = (data: any) =>
  [...data].sort(
    (a, b) =>
      parseFloat(a.price_from.replace(/\s+/g, "")) -
      parseFloat(b.price_from.replace(/\s+/g, ""))
  );

export const sortByPriceDesc = (data: any) =>
  [...data].sort(
    (a, b) =>
      parseFloat(b.price_from.replace(/\s+/g, "")) -
      parseFloat(a.price_from.replace(/\s+/g, ""))
  );
