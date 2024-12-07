import React from "react";
import { BlurLinearDonut, DonutIcon } from "src/Utils/Icons";
import { virtuousCard } from "./Helper";
import VirtuousCard from "./VirtuousCard";

type Card = {
  title: string;
  description: string;
  cardIcon: string;
};

const VirtuousSection: React.FC = () => {
  return (
    <section className="!pt-16  !pb-16 lg:!pb-[220px] w-full relative">
      <span className="absolute max-h-[250px] max-w-[100px] xl:max-w-[160px] h-full right-0 sm:right-2 md:right-[10%] -top-5 xl:-top-10">
        <BlurLinearDonut />
      </span>
      <h2 className="text-3xl text-center md:text-4xl font-medium  max-w-[386px] md:max-w-[470px] mx-auto lg:max-w-[800px] text-white mb-8">
        A Virtuous Way to
        <span className="relative pb-1.5 lg:!pb-4 pl-3 w-fit">
          Secure{" "}
          <span className="absolute w-[80%] h-[6px] hidden lg:block left-1/2 -translate-x-1/2  bg-gradient-to-r from-[#FF7E4B] via-[#FF518C] to-[#66319B] bottom-0"></span>
        </span>
        Your Business
      </h2>
      <div className="xl:grid flex justify-center  items-center flex-wrap xl:grid-cols-3 gap-6 w-full !mt-16">
        {virtuousCard.map((card, index) => (
          <VirtuousCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default VirtuousSection;
