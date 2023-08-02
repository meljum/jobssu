import Main from "@/components/main/Main";
import Section from "@/components/Section/Section";
import Header from "../src/components/header/Header";
import Vakansii from "@/components/vakansii/Vakansii";
import { MainTitle } from "@/constants/Main";
import Footer from "../src/components/footer/footer";
import Filtration from "@/components/Filtration/Filtration";

export default function Home() {
  return (
    <>
      <Header />
      <Main array={MainTitle} />
      <Filtration/>
      <Section />
      <Vakansii />
      <Footer />
    </>
  );
}
