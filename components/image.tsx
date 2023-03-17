import React from "react";
import Image from "next/image"

export const ImageComponent: React.FC = () => (
    <Image 
        src="/images/bleach.jpg"
        height={100}
        width={100}
        alt="bleach"
    />
);