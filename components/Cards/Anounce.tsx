"use client"
import { LocateFixedIcon, LocateIcon, PhoneCall } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import {motion } from "framer-motion"

export type AnnounceType = {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
};
export default function Announce({ title, description }: AnnounceType) {
  const router = useRouter();

  const handleProviderSelect = (value: string) => {
     router.push(value);
  };

  return (
    <div className="bg-secondaryBackground flex items-center justify-center py-10 ">
      <div className="flex justify-center w-[27rem] text-center flex-col space-y-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          {Array.from("Issues With Your ").map((letter, index) => (
            <motion.span
              key={index}
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          {Array.from("Devices?").map((letter, index) => (
            <motion.span
              key={`devices-${index}`}
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: (index + 16) * 0.1, 
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* <h3 className="text-5xl text-white leading-relaxed">
          <span>{restOfTitle} </span>
          <span className="text-red-500">{lastWord}</span>
        </h3> */}
        <p className="text-white text-xl ">{description}</p>

        <div className="flex text-white">
          <p>
            <LocateIcon />
          </p>
          <p>3400 Harbor Ave SW STE #301, Seattle, WA 98126</p>
        </div>
        <div className="flex gap-4 space-x-4 justify-center">
          <PrimaryButton
            title="Get Directions"
            icon={<LocateFixedIcon />}
            bgColor="bg-red-500"
            textColor="text-white"
          />
          <PrimaryButton
            title="Call Us"
            icon={<PhoneCall />}
            bgColor="bg-white"
          />
        </div>
      </div>
    </div>
  );
}
