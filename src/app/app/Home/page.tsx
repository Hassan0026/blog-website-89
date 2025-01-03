"use client"

import Image from "next/image";
import Heading from "../../Components/Heading";
import CardData from "../../Components/CardData";
import AuthorCard from "@/Components/AuthorCard";


const MainPage = () => {



  return (
    
    <div className=" flex  items-center  flex-col">
      <AuthorCard />
      
      <Heading headingValue="Recent Posts" />
      <CardData filter={"isRecent"}/>


      <Heading headingValue="Popular Posts" />
      <CardData filter={"isPopular"}/>

    </div>
  );
};

export default MainPage;