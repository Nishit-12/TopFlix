import React from 'react';
import HeroSection from "@/app/components/HeroSection";

const Page = () => {
    return (
        <>
          <HeroSection title={"LET'S WATCH MOVIES TOGETHER"} desc={"Welcome To Topflix, From award-winning dramas to blockbuster action movies, we always got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today."} imageUrl={"/home.svg"}/>
        </>
    );
};

export default Page;