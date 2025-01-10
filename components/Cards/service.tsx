import Image, { StaticImageData } from "next/image";

export type ServiceType = {
  images: StaticImageData;
  name: string;
  description: string;
};

export default function Services({ images, name, description }: ServiceType) {
  return (
    <div className="flex justify-center text-center container mx-auto">
      <div>
        <div className="flex justify-center">
          <Image
            src={images}
            alt="images"
            width={100}
            height={100}
            className="rounded-2xl"
          />
        </div>
        <h1 className="text-2xl font-bold ">{name}</h1>
        <p> {description}</p>
      </div>
    </div>
  );
}
