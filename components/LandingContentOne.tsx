"use client";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/lml_logo.png";
import svg from "@/public/takein.svg";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { Locate, PhoneCall } from "lucide-react";
import quick from "@/public/add.png";
import quality from "@/public/app-development.png";
import fast from "@/public/clock.png";
import Services from "./Cards/service";
import { fadeIn, slideIn, scaleUp, slideup } from "../utils/animation";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ScrollAnimation from "./animation/scrollbased";

function LandingContentOne() {
  const router = useRouter();
const animations = [fadeIn, scaleUp, slideup];
  const data = [
    {
      name: "Quick Diagnostic",
      images: quick,
      description:
        "Need a service? Save time and find out what's wrong with your device.",
    },
    {
      name: "Premium Quality Parts",
      images: quality,
      description:
        "For the best quality services, we use premium quality and replacement parts.",
    },
    {
      name: "Fast Turnaround",
      images: fast,
      description:
        "Our techs are here to deliver high-quality and service so you don’t have to wait long.",
    },
  ];

  const handleProviderSelect = (value: string) => {
    // Navigate to the selected route
    router.push(value);
  };

  return (
    <div className="container mx-auto gap-10 mt-16 sm:px-5">
      <div className="">
        {/* <Image
        src={svg}
        width={120}
        height={120}
        alt="logo_lml_fix"
        className="rounded-2xl border hover:scale-110 hover:delay-150 hover:duration-150 transition-all mt-10 cursor-pointer"
      /> */}
        <div className="text-center">
          <h1 className="text-3xl ">Our service </h1>
          <p>Professional repair services for all your devices</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
          {data.map((data, index) => (
            <ScrollAnimation animation={animations[index % animations.length]} key={data.name}>
              <Card className="p-7  bg-[#f2f2f2] hover:shadow-lg hover:border transition-all duration-400 ease-in-out">
                <Services
                  name={data.name}
                  images={data.images}
                  description={data.description}
                />
              </Card>
            </ScrollAnimation>
          ))}
        </div>
        <div className="">
          <div className=" space-t-6">
            <div className="  mb-3">
              <Select onValueChange={handleProviderSelect}>
                <SelectTrigger className="w-[40%] group relative">
                  <span className="absolute inset-0 rounded-lg border-2 border-transparent group-focus-within:border-[length:2px] group-focus-within:animate-glow" />

                  <SelectValue
                    placeholder="Select a Provider"
                    className="text-center text-black text-lg font-semibold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="/seattle">
                    <span className="text-base font-semibold">Seattle</span>
                  </SelectItem>
                  <SelectItem value="/westseattle">
                    <span className="text-base font-semibold">
                      West Seattle
                    </span>
                  </SelectItem>
                  <SelectItem value="/northseattle">
                    <span className="text-base font-semibold">
                      North Seattle
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-1 my-10 w-full">
            <ScrollAnimation animation={fadeIn}>
              <Card className="p-7 bg-[#f2f2f2]">
                <Link href="/westseattle">
                  <div className="">
                    <h1 className="text-2xl font-bold pb-4">West Seattle</h1>
                    <div className="flex space-x-3">
                      <Locate className="text-blue-500" />
                      <p>123 Pike Street, Seattle, WA 98101</p>
                    </div>
                    <div className="flex py-2 space-x-3">
                      <PhoneCall size={16} className="text-blue-500 " />
                      <p>(206) 555-0123</p>
                    </div>
                    <div className=" h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus"
                        className="w-full h-full border-0 rounded-md"
                        aria-hidden="false"
                        title="Shop Location"
                      ></iframe>
                    </div>
                    <div>
                      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                      <p className="text-[#FFD700] text-2xl">★★★★★</p>
                      <p>4.8/5 based on 150 reviews</p>
                    </div>
                  </div>
                </Link>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation={scaleUp}>
              <Card className="p-7 bg-[#f2f2f2]">
                <Link href="/westseattle">
                  <div className="">
                    <h1 className="text-2xl font-bold pb-4">Seattle</h1>
                    <div className="flex space-x-3">
                      <Locate className="text-blue-500" />
                      <p>123 Pike Street, Seattle, WA 98101</p>
                    </div>
                    <div className="flex py-2 space-x-3">
                      <PhoneCall size={16} className="text-blue-500 " />
                      <p>(206) 555-0123</p>
                    </div>
                    <div className=" h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus"
                        className="w-full h-full border-0 rounded-md"
                        aria-hidden="false"
                        title="Shop Location"
                      ></iframe>
                    </div>
                    <div>
                      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                      <p className="text-[#FFD700] text-2xl">★★★★★</p>
                      <p>4.8/5 based on 150 reviews</p>
                    </div>
                  </div>
                </Link>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation={slideIn}>
              <Card className="p-7 bg-[#f2f2f2]">
                <Link href="/westseattle">
                  <div className="">
                    <h1 className="text-2xl font-bold pb-4">North Seattle</h1>
                    <div className="flex space-x-3">
                      <Locate className="text-blue-500" />
                      <p>123 Pike Street, Seattle, WA 98101</p>
                    </div>
                    <div className="flex py-2 space-x-3">
                      <PhoneCall size={16} className="text-blue-500 " />
                      <p>(206) 555-0123</p>
                    </div>
                    <div className=" h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus"
                        className="w-full h-full border-0 rounded-md"
                        aria-hidden="false"
                        title="Shop Location"
                      ></iframe>
                    </div>
                    <div>
                      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                      <p className="text-[#FFD700] text-2xl">★★★★★</p>
                      <p>4.8/5 based on 150 reviews</p>
                    </div>
                  </div>
                </Link>
              </Card>
            </ScrollAnimation>
          </div>

          {/* services */}
        </div>
      </div>
    </div>
  );
}

export default LandingContentOne;
