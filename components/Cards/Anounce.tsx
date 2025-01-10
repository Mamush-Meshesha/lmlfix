"use client"
import { LocateFixedIcon, LocateIcon, PhoneCall } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import {motion } from "framer-motion"
import Link from "next/link";

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

  const data = {
    location: "North Seattle",
    address:
      "10015 Lake City Way NE STE #231, Seattle, WA 98125, United States",
    near: "Near Les Schwab on Lake City Way NE",
    building: "Big red/white building",
    floor: "2nd floor",
    number: "206-745-2977",
    steps: [
      "Go to the front of the building",
      "Find the elevator behind the leasing office",
      "Enter '00231' on the callbox; we will buzz you in",
      "Go to the 2nd floor",
      "Walk straight and turn right down the hallway",
      "Located in Suite #231",
    ],
    position:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso",
    direction:
      "https://www.google.com/maps?ll=47.70166,-122.302661&z=11&t=m&hl=en&gl=SO&mapclient=embed&cid=15994105867175279902",
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
          <Link href={data.direction} target="_blank">
            <PrimaryButton
              title="Get Directions"
              icon={<LocateFixedIcon />}
              bgColor="bg-red-500"
              textColor="text-white"
            />
          </Link>
          <Link href={`tel:${data.number}`}>
            <PrimaryButton
              title="Call Us"
              icon={<PhoneCall />}
              bgColor="bg-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
