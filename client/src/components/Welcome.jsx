import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader, Navbar } from ".";
import Hero from "./Hero";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white text-sm font-semibold text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();

    

  };

  return (
    <>
    
    <div className="relative" ref={comp}>
        {/* // style={{ height: '61vh' }} */}
        <div
          id="intro-slider"
          className="h-screen p-10 bg-white text-[#0E2954]  absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
          {/* style={{ height: '61vh' }} */}

          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl transform scale-200" id="title-1">
              Transferring
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-2">
              crypto
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-3">
              made
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-4">
              easy.
            </h1>
          </div>
        </div>
      </div>

      <Navbar />

      <Hero/>

    <div className="flex w-full justify-center items-center mt-10">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col  mr-40">
          <h1 className="text-3xl sm:text-5xl text-white  py-1">
          Transfer cryptocurrency  <br /> globally
          </h1>
          <p className="text-left mt-8 text-white font-semibold md:w-9/12 w-11/12 text-base ">
          "Discover the world of cryptocurrency. Easily buy and sell cryptocurrencies on Kryptolink."
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white  text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className=" text-white grid sm:grid-cols-3 grid-cols-2 w-full mt-20">
            <div className={`rounded-tl-2xl text-black font-semibold ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={`text-white font-semibold ${companyCommonStyles}`}>
              Security
              </div>
            <div className={`sm:rounded-tr-2xl text-white font-semibold ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl text-white font-semibold ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`text-black font-semibold ${companyCommonStyles}`}>
              Low Fees
              </div>
            <div className={`rounded-br-2xl text-black font-semibold ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism -ml-20">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 text-white w-full flex flex-col justify-start items-center blue-glassmorphism mt-20">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-white my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white font-bold w-full mt-2 border-[1px] p-2 border-[#ffffff] hover:bg-[#111111] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col w-full">
          <div className="divider divider-primary ml-20 mr-20  mt-10"></div> 
      </div>

    </>
  );
};

export default Welcome;
