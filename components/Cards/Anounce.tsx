"use client"
import { LocateFixedIcon, LocateIcon, PhoneCall } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { SelectContent ,Select, SelectItem} from "../ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";

export type AnnounceType = {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
};
export default function Announce({ title, description }: AnnounceType) {
  const words = title.split(" ");
  const lastWord = words.pop(); 
  const restOfTitle = words.join(" "); 
  const router = useRouter();

  const handleProviderSelect = (value: string) => {
     router.push(value);
  };

  return (
    <div className="bg-secondaryBackground flex items-center justify-center py-10 ">
      <div className="flex justify-center w-[27rem] text-center flex-col space-y-4">
        <h3 className="text-5xl text-white leading-relaxed">
          <span>{restOfTitle} </span>
          <span className="text-red-500">{lastWord}</span>
        </h3>
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
