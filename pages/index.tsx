import Main from "@/components/main/Main";
import Section from "@/components/Section/Section";
import Header from "../src/components/header/Header";
import Footer from "@/components/footer/footer";
import Vakansii from "@/components/vakansii/Vakansii";
import { MainTitle } from "@/constants/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main array={MainTitle} />
      <Section />
      <Vakansii />
      <Footer />
    </>
  );
}
