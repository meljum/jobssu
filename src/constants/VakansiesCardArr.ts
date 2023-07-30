import foto1 from "../../public/images/VakansiesCard/foto1.svg";

interface VakansiesCardArrProps {
  id: number;
  foto: string;
  title: string;
  salary: string;
}

const VakansiesCardArr: VakansiesCardArrProps[] = [
  {
    id: 1,
    foto: foto1,
    title: "Стажер / Специалист по Потребительскому финансированию",
    salary: "От 30 000 До 76 000 сом",
  },
  {
    id: 2,
    foto: foto1,
    title: "Стажер / Специалист по Потребительскому финансированию",
    salary: "От 40 000 До 86 000 сом",
  },
  {
    id: 3,
    foto: foto1,
    title: "Стажер / Специалист по Потребительскому финансированию",
    salary: "От 50 000 До 96 000 сом",
  },
  {
    id: 4,
    foto: foto1,
    title: "Стажер / Специалист по Потребительскому финансированию",
    salary: "От 60 000 До 100 000 сом",
  },
  {
    id: 5,
    foto: foto1,
    title: "Стажер / Специалист по Потребительскому финансированию",
    salary: "От 60 000 До 100 000 сом",
  },
];
export { VakansiesCardArr };    export type { VakansiesCardArrProps };

