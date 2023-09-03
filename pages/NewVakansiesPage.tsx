import React, { useState } from "react";
import NewVakansies from "@/components/newVakansies/NewVakansies";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { VakansiesCardArrProps } from "@/constants/VakansiesCardArr";
const NewVakansiesPage = () => {
  const [filteredData, setFilteredData] = useState<VakansiesCardArrProps[]>([]);
  return (
    <div>
      <Header />
      <NewVakansies filteredData={filteredData} />
      <Footer />
    </div>
  );
};

export default NewVakansiesPage;
