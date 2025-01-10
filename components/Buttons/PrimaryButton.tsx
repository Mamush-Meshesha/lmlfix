import React, { ReactElement } from 'react';

export default function PrimaryButton({
  title,
  icon,
  bgColor,
  textColor,
}: {
  title: string;
    icon: ReactElement<any, any>;
    bgColor?: string;
    textColor?: string;
}) {
  return (
    <div>
      <button className={`p-3 px-5 justify-between flex gap-2 items-center rounded-lg font-semibold ${bgColor} ${textColor}`}>
        {icon}
        {title}
      </button>
    </div>
  );
}
