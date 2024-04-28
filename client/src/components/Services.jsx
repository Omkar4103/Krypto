import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <>
  <div className="flex w-full justify-center items-center gradient-bg-services py-10">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2  ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-semibold md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center py-10">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Guaranteed Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Rest assured with our guaranteed security measures, protecting your digital assets with cutting-edge encryption and advanced security protocols."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Experience seamless global transactions with real-time exchange rates, ensuring you get the most value for your crypto trades across multiple currencies."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fast transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Enjoy lightning-fast transactions, ensuring your crypto trades are executed instantly, providing you with a competitive edge in the fast-paced digital currency market."
        />
      </div>
    </div>

    
  </div>
  <div className="flex flex-col w-full" style={{backgroundColor: '#0E2954'}}>
<div className="divider divider-primary ml-20 mr-20  "></div> 
</div>
  </>


);

export default Services;
