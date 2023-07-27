import Main from "@/components/main/Main";
import Section from "@/components/Section/Section";
import Header from "@/components/header/Header";
import Vakansii from "@/components/vakansii/Vakansii";
import { MainTitle } from "@/constants/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main array={MainTitle} />
      <Section />
      <Vakansii />
    </>
  );
}
