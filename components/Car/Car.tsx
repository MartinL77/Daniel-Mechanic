import React from "react";
import Image from "next/image";

export const Car: React.FC = () => {
    return (
        <>
            <Image
                src="/images/daniel-golf.png"
                height={300}
                width={300}
                alt="bleach"
            />
        </>
    )
};