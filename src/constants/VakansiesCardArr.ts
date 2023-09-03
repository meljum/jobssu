interface VakansiesCardArrProps {
  [x: string]: string;
  currency: string;
  id: string;
  img: string;
  zagalovok: string;
  staj_raboty: string;
  grafik_raboty: string;
  location: string;
  time: string;
  price_from: string;
  price_before: string;
}

const VakansiesCardArr: VakansiesCardArrProps[] = [
  {
    id: "1",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
    zagalovok: "Стажер / Специалист по маркетингу",
    staj_raboty: "1 год",
    grafik_raboty: "5/2",
    specialization: "Подходит для студентов",
    location: "Талас",
    time: "26.07.2023",
    price_from: "2500",
    price_before: "3000",
    currency: "доллар",
  },
  {
    id: "2",
    img: "https://pbs.twimg.com/profile_images/1524278656230735873/ajZ8VnCw_400x400.jpg",
    zagalovok: "Стажер / Специалист по продажам",
    staj_raboty: "5 год",
    grafik_raboty: "5/2",
    specialization: "Подходит для студентов",
    location: "Талас",
    time: "26.07.2023",
    price_from: "20000",
    price_before: "25000",
    currency: "сом",
  },
  {
    id: "3",
    img: "https://www.almaty-marathon.kz/userdata/partners/partners_719/image.png?1682312782",
    zagalovok: "Работник / Специалист по продажам",
    staj_raboty: "4 год",
    grafik_raboty: "полный день",
    specialization: "Подходит для студентов",
    location: "Бишкек",
    time: "26.07.2023",
    price_from: "30000",
    price_before: "55000",
    currency: "сом",
  },
  {
    id: "4",
    img: "https://halal.kg/wp-content/uploads/2019/07/Nitro.png",
    zagalovok: "Работник / Маркетолог",
    staj_raboty: "1 год",
    grafik_raboty: "полный день",
    specialization: "Подходит для пенсионеров",
    location: "Талас",
    time: "26.08.2023",
    price_from: "40000",
    price_before: "60000",
    currency: "сом",
  },
  {
    id: "5",
    img: "https://ihlas.kg/static/images/logo-black.png",
    zagalovok: "Менеджер по продажам, менеджер по работе с клиентами",
    staj_raboty: "1 год",
    grafik_raboty: "полный день",
    specialization: "Подходит для пенсионеров",
    location: "Талас",
    time: "26.08.2023",
    price_from: "1000",
    price_before: "2000",
    currency: "доллар",
  }
 ];
export { VakansiesCardArr };
export type { VakansiesCardArrProps };
