import Main from "@/components/main/Main";
import Section from "@/components/Section/Section";
import Header from "../src/components/header/Header";
import Link from "next/link"
import Review from "./review/Review"
import Vakansii from "@/components/vakansii/Vakansii";
import { MainTitle } from "@/constants/Main";
import Footer from "../src/components/footer/footer";


export default function Home() {
  return (
    <>
      <Header />
      <Review />
      <Section/>
      <Vakansii/>
      <Main array={MainTitle} />
      <Footer />
    </>
  );
}
