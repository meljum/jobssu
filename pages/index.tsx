import Section from "@/components/Section/Section";
import Header from "../src/components/header/Header";
import Link from "next/link"
import Review from "./review/Review"

export default function Home() {
  return (
    <>
      <Header />
      <Review />
      <Section/>
    </>
  );
}
