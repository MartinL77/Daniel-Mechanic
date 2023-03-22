import React from "react";
import Image from "next/image";

export const Car: React.FC = () => {
    return (
        <>
            <Image
                src="/images/daniel-golf.png"
                height={500}
                width={500}
                alt="bleach"
            />
        </>
    )
};