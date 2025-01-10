"use client"
import React from "react";
import bg from "@/public/broken-iphone.png";
import quick from "@/public/add.png";
import quality from "@/public/app-development.png";
import fast from "@/public/clock.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
  ArrowRight,
  Building2,
  MapPinCheckIcon,
  PhoneCall,
  Send,
  Signpost,
} from "lucide-react";

import Link from "next/link";
import { Card } from "../ui/card";
import ScrollAnimation from "../animation/scrollbased";
import { fadeIn, slidedown, slideup } from "@/utils/animation";

export type LocationLandingProps = {
  location: string;
  address: string;
  near: string;
  building: string;
  floor: string;
  number: string;
  steps: string[];
  position: string;
  direction: string;
};

export default function LocationLanding({
  data,
}: {
  data: LocationLandingProps;
}) {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-fixed relative text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="min-h-[90vh]  gap-2.5 flex flex-col justify-center items-center px-5 sm:px-14 bg-black/55">
        <p className="text-4xl sm:text-5xl font-bold px-10 text-center">
          Issues With Your <span className="text-red-600">Devices?</span>
        </p>
        <p className="text-2xl font-semibold">We Got You Covered!</p>
        <p className="font-bold text-sm">{data.address}</p>
        <div className="gap-3 text-black flex flex-wrap items-center justify-center">
          <Link href={`tel: ${data.number}`}>
            <PrimaryButton
              title="Call Us"
              icon={<PhoneCall size={23} aria-label="Call Us" color="#fff" />}
              textColor="text-white"
            />
          </Link>
          <Link href={`sms: ${data.number}`}>
            <PrimaryButton
              title="Text Us"
              icon={<Send aria-label="Text Us" color="#fff" />}
              textColor="text-white"
            />
          </Link>
          <Link href={data.direction} target="blank">
            <PrimaryButton
              title="Get Direction"
              icon={<Signpost aria-label="Get Directions" color="#fff" />}
              textColor="text-white"
            />
          </Link>
        </div>
      </div>

      <div className="rounded-md w-full p-5 bg-white">
        <div className="bg-white gap-5 text-black container mx-auto py-10 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col gap-5">
              <ScrollAnimation animation={fadeIn}>
                <Card>
                  <div className="p-6 ">
                    <h1 className="text-2xl font-bold">{data.location}</h1>
                    <div className="flex gap-3 pt-3">
                      <PhoneCall color="#ff3b3b" />
                      <div>
                        <h1>Phone Number</h1>
                        <p className="text-[#737b86]">{data.number}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPinCheckIcon color="#ff3b3b" />
                      <div>
                        <h1>Address</h1>
                        <p className="text-[#737b86]">{data.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Building2 color="#ff3b3b" />
                      <div>
                        <h1>Building Details</h1>
                        <p className="text-[#737b86]">{data.building} </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>

              {/* find us */}
              <ScrollAnimation animation={slidedown}>
                <Card>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">How to find us</h1>
                    <div className="flex flex-col gap-3 pt-4">
                      {data.steps.map((step, index) => (
                        <div key={index} className="flex gap-3">
                          <ArrowRight size={18} color="#ff3b3b" />
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation={slideup}>
              <Card>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Our Location</h1>
                  <div className="mt-5">
                    <iframe
                      className="w-full h-96 border-0 rounded-xl"
                      src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus"
                      title="Shop Location"
                    ></iframe>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
